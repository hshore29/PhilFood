import csv
import math
import json
import random
from datetime import datetime
from collections import defaultdict
from itertools import combinations

import numpy as np
from scipy.stats import t

from pymongo import MongoClient
from pymongo.errors import DuplicateKeyError

from flask import g

def get_db():
    try:
        if 'db' not in g:
            g.db = MongoClient()
        return g.db
    except RuntimeError:
        return MongoClient()

def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.close()

def get_meals():
    # Get all meals for tagger
    return list(get_db().phil_food.meals_v2.find())

def get_mapped_meals():
    # Get mapped meals for mapper
    mapped = get_db().phil_food.meals_v2.aggregate([
        {'$unwind': '$dishes'},
        {'$group': {
            '_id': {'name': '$dishes.name', 'text': '$dishes.text'},
            'count': {'$sum': 1},
            'meals': {'$push': {'_id': '$_id', 'menu': '$meal'}}
            }
         },
        {'$sort': {'_id.text': 1}},
        {'$group': {
            '_id': '$_id.name',
            'dishes': {'$push': '$$ROOT'},
            'count': {'$sum': '$count'}
            }
         },
        {'$sort': {'_id': 1}},
        {'$lookup': {
            'from': 'dishes',
            'localField': '_id',
            'foreignField': '_id',
            'as': 'grouping'
            }
         },
        {'$group': {
            '_id': '$grouping.group',
            'dish_names': {'$push': '$$ROOT'},
            'count': {'$sum': '$count'}
            }
         },
        {'$sort': {'_id': 1}},
        ])
    mapped = list(mapped)
    for m in mapped:
        m['_id'] = m['_id'][0] if m['_id'] else None
    return mapped

# Update functions for changes made in tagger & mapper
def update_meal(_id, update):
    meals = get_db().phil_food.meals_v2
    date = datetime.strptime(_id, '%Y-%m-%d %H:%M:%S')
    return meals.update_one({'_id': date}, {'$set': update})

def update_meal_name(_ids, update):
    db = get_db().phil_food
    for _id in _ids.split(','):
        date = datetime.strptime(_id, '%Y-%m-%d %H:%M:%S')
        meal = db.meals_v2.find_one({'_id': date})
        for dish in meal['dishes']:
            if update.get('old_name') and dish['name'] == update['old_name']:
                dish['name'] = update.get('new_name')
            if update.get('old_text') and dish['text'] == update['old_text']:
                dish['text'] = update.get('new_text')
        db.meals_v2.update_one({'_id': date}, {'$set': meal})
    return 1

def add_group(name, group):
    return get_db().phil_food.dishes.insert_one({'_id': name, 'group': group})

def update_meal_group(update):
    dishes = get_db().phil_food.dishes
    if update['old_name'] == update['new_name']:
        dishes.update_one(
            {'_id': update['old_name']},
            {'$set': {'group': update['new_group']}}
            )
    else:
        dishes.delete_one({'_id': update['old_name']})
        dishes.insert_one(
            {'_id': update['new_name'], 'group': update['new_group']}
            )

# Debug functions
def get_group_overlaps():
    meals = get_db().phil_food.meals_v2
    return {m['group']: m['overlaps'] for m in meals.aggregate([
	{'$unwind': '$dishes'},
	{'$match': {'dishes.course': 'Side'}},
	{'$lookup': {'from': 'dishes', 'localField': 'dishes.name', 'foreignField': '_id', 'as': 'grouping'}},
	{'$unwind': '$grouping'},
	{'$project': {'name': '$dishes.name', 'group': '$grouping.group'}},
	{'$group': {'_id': {'date': '$_id', 'group': '$group'}, 'count': {'$sum': 1}, 'names': {'$push': '$name'}}},
	{'$match': {'count': {'$gt': 1}}},
        {'$group': {'_id': {'group': '$_id.group', 'names': '$names'}, 'count': {'$sum': 1}}},
        {'$group': {'_id': '$_id.group', 'overlaps': {'$push': {'names': '$_id.names', 'count': '$count'}}}},
        {'$project': {'group': '$_id', 'overlaps': 1, '_id': 0}}
	])}

def get_exclusive_groups():
    meals = get_db().phil_food.meals_v2
    matches = list(meals.aggregate([
	{'$unwind': '$dishes'},
	{'$match': {'dishes.course': 'Side'}},
	{'$lookup': {'from': 'dishes', 'localField': 'dishes.name', 'foreignField': '_id', 'as': 'grouping'}},
	{'$unwind': '$grouping'},
	{'$group': {'_id': '$_id', 'groups': {'$addToSet': '$grouping.group'}}},
	{'$unwind': '$groups'},
	{'$sort': {'groups': 1}},
	{'$group': {'_id': '$_id', 'groups': {'$push': '$groups'}, 'group_count': {'$sum': 1}}},
	{'$match': {'group_count': {'$gt': 1}}},
	{'$group': {'_id': '$groups', 'count': {'$sum': 1}}}
	]))
    groups = sorted([m['_id'] for m in meals.aggregate([
        {'$unwind': '$dishes'},
	{'$match': {'dishes.course': 'Side'}},
	{'$lookup': {'from': 'dishes', 'localField': 'dishes.name', 'foreignField': '_id', 'as': 'grouping'}},
	{'$unwind': '$grouping'},
        {'$group': {'_id': '$grouping.group'}}
        ])])
    combos = dict()
    for g1 in groups:
        combos[g1] = dict()
        for g2 in groups:
            if g1 != g2:
                combos[g1][g2] = 0
    for c in matches:
        for m in combinations(c['_id'], 2):
            combos[m[0]][m[1]] += c['count']
            combos[m[1]][m[0]] += c['count']
    return combos

# Functions to get data for Summary lists
def get_dish_counts(decade='.'):
    meals = get_db().phil_food.meals_v2
    counts = {m['_id']: m['dishes'] for m in meals.aggregate([
        {'$match': {'semester': {'$regex': '^' + decade}}},
        {'$unwind': '$dishes'},
        {'$group': {
            '_id': {'name': '$dishes.name', 'course': '$dishes.course'},
            'count': {'$sum': 1}
            }
         },
        {'$sort': {'count': -1}},
        {'$group': {
            '_id': '$_id.course',
            'dishes': {'$push': {'name': '$_id.name', 'count': '$count'}}
            }
         }
        ])}

    counts['Friday'] = list(meals.aggregate([
        {'$match': {'$or': [{'day': 'Fri'}, {'day': 'Sat'}]}},
        {'$match': {'semester': {'$regex': '^' + decade}}},
        {'$unwind': '$dishes'},
        {'$match': {'dishes.course': 'Main'}},
        {'$group': {
            '_id': '$dishes.name',
            'count': {'$sum': 1}
            }
         },
        {'$sort': {'count': -1}},
        {'$project': {'name': '$_id', 'count': 1, '_id': 0}}
        ]))
    return counts

def format_source(srcs):
    src = []
    if 'Phil Facebook' in srcs:
        src.append("<a href='https://www.facebook.com/" + \
                   "Phil-LaRocca-102384316509620'>Phil's Facebook</a>")
        srcs.discard('Phil Facebook')
    if 'Phil Twitter' in srcs:
        src[0] += " and <a href='https://twitter.com/phil_larocca'>Twitter</a>"
        srcs.discard('Phil Twitter')
    if 'Events-L' in srcs or 'Bros-L' in srcs or 'Events-L (Ameya)' in srcs:
        src.append('email archives')
        srcs.discard('Events-L')
        srcs.discard('Bros-L')
        srcs.discard('Events-L (Ameya)')
    if 'Photo' in srcs:
        src.append('photos')
        srcs.discard('Photo')
    if 'Rush Books' in srcs:
        src.append('old rush books')
        srcs.discard('Rush Books')
    if srcs:
        src.append('other sources')
        
    if len(src) == 1:
        return 'Menus from ' + src[0] + '.'
    elif len(src) == 2:
        return 'Menus from ' + src[0] + ' and ' + src[1] + '.'
    else:
        return 'Menus from ' + ', '.join(src[:-1]) + ', and ' + src[-1] + '.'
        
def get_decade_stats(decade='.'):
    meals = get_db().phil_food.meals_v2
    stats = next(meals.aggregate([
        {'$match': {'semester': {'$regex': '^' + decade}}},
        {'$group': {
            '_id': 1, 'count': {'$sum': 1}, 'sources': {'$addToSet': '$source'}
            }},
        {'$project': {'_id': 0, 'count': 1, 'sources': 1}}
        ]))
    stats['count'] = format(stats['count'], ',d')
    stats['sources'] = format_source(set(stats['sources']))
    return stats

def get_decade_top():
    counts = [
        {'decade': 'All Time Favorites',
         'lists': get_dish_counts(),
         'stats': get_decade_stats()},
        {'decade': '2020-',
         'lists': get_dish_counts('202'),
         'stats': get_decade_stats('202')},
        {'decade': '2010-2019',
         'lists': get_dish_counts('201'),
         'stats': get_decade_stats('201')},
        {'decade': '2000-2010',
         'lists': get_dish_counts('200'),
         'stats': get_decade_stats('200')},
        {'decade': '1990-1999',
         'lists': get_dish_counts('199'),
         'stats': get_decade_stats('199')},
        ]
    return counts

# Functions to get data for Timeline
def get_dish_semester_counts(meals, start=None):
    meals = meals.find()
    counts = defaultdict(dict)
    course_counts = defaultdict(dict)
    for meal in meals:
        if start and meal['semester'] < start:
            continue
        meal_courses = {'Total'}
        is_friday = meal['day'] in ['Fri', 'Sat']
        for dish in meal['dishes']:
            meal_courses.add(dish['course'])
            # Initialize Dish
            if dish['name'] not in counts[dish['course']]:
                counts[dish['course']][dish['name']] = dict()
            if is_friday and dish['course'] == 'Main' and \
               dish['name'] not in counts['Friday']:
                counts['Friday'][dish['name']] = dict()
            # Initialize Semester
            if meal['semester'] not in counts[dish['course']][dish['name']]:
                counts[dish['course']][dish['name']][meal['semester']] = 0
            if is_friday and dish['course'] == 'Main' and \
               meal['semester'] not in counts['Friday'][dish['name']]:
                counts['Friday'][dish['name']][meal['semester']] = 0
            counts[dish['course']][dish['name']][meal['semester']] += 1
            if is_friday and dish['course'] == 'Main':
                counts['Friday'][dish['name']][meal['semester']] += 1
                meal_courses.add('Friday')
        # Initialize Course Semester
        for course in meal_courses:
            if meal['semester'] not in course_counts[course]:
                course_counts[course][meal['semester']] = 0
            course_counts[course][meal['semester']] += 1
    return (counts, course_counts)

def get_relevant_terms(meals, start=None):
    # Initialize Dicts
    total_meals = {
        'Main': 0,
        'Side': 0,
        'Dessert': 0
        }
    semester_meals = {
        'Main': defaultdict(int),
        'Side': defaultdict(int),
        'Dessert': defaultdict(int)
        }
    dish_meals = {
        'Main': defaultdict(int),
        'Side': defaultdict(int),
        'Dessert': defaultdict(int)
        }
    sem_dishes = {
        'Main': defaultdict(dict),
        'Side': defaultdict(dict),
        'Dessert': defaultdict(dict)
        }

    # Count dishes
    for meal in meals.find():
        if start and meal['semester'] < start:
            continue
        for course in set(d['course'] for d in meal['dishes']):
            total_meals[course] += 1
            semester_meals[course][meal['semester']] += 1
        for course, name in set((d['course'], d['name']) for d in meal['dishes']):
            dish_meals[course][name] += 1
            sem_dishes[course][meal['semester']][name] = sem_dishes[course][
                meal['semester']].get(name, 0) + 1

    # Generate scores
    sem_scores = {
        'Main': defaultdict(list),
        'Side': defaultdict(list),
        'Dessert': defaultdict(list)
        }
    for course, sem_dish in sem_dishes.items():
        for semester, dishes in sem_dish.items():
            dish_list = list()
            sem_tot = semester_meals[course][semester]
            for dish, count in dishes.items():
                dsh_pct = count / sem_tot
                tot_pct = dish_meals[course][dish] / total_meals[course]
                score = sem_tot * (dsh_pct - tot_pct)
                dish_list.append((dish, score))
            sem_scores[course][semester] = sorted(
                dish_list, key=lambda x: x[1], reverse=True
                )[0]

    # Transform for d3.js
    output = [{'semester': k, 'dish': v[0]} for k, v
              in sem_scores['Main'].items()]

    return sorted(output, key=lambda o: o['semester'])

# Randomizer Functions - random_menu() is reimplemented in randomizer.js
def random_menu():
    meals = get_db().phil_food.meals_v2
    dishes = get_db().phil_food.dishes

    # Get days with dinner
    day_probs = _random_get_day_probs(meals)

    # Get main probabilities
    main_probs = _random_get_day_main_probs(meals)

    # Get double main probabilities
    main2_probs = _random_get_main2_probs(meals)

    # Get sides probabilities
    side_probs = _random_get_dessert_side_probs(meals, dishes, 'Side')
    side_stops = _random_get_side_stop_pct(meals)

    # Get dessert probabilities
    dessert_probs = _random_get_dessert_side_probs(meals, dishes, 'Dessert')

    # Build Menu
    menu_dict = defaultdict(list)
    for day in _random_pick_day_list(day_probs):
        main = _random_pick_main_dish(main_probs, day)
        main_probs = [m for m in main_probs if m['name'] != main]
        menu_dict[day].append(main)

        main2 = _random_pick_main2(main2_probs, main)
        if main2:
            menu_dict[day].append(main2)
            main_probs = [m for m in main_probs if m['name'] != main2]

        sides = _random_pick_sides(side_probs, side_stops, day, main)
        side_probs = [s for s in side_probs if s['name'] not in sides]
        menu_dict[day].extend(sides)

        dessert = _random_pick_a_side(dessert_probs, day, main)
        dessert_probs = [d for d in dessert_probs if d['name'] != dessert]
        menu_dict[day].append(dessert)

    menu = list()
    for day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']:
        if day in menu_dict:
            menu.append({'day': day, 'meal': ', '.join(menu_dict[day])})

    return menu

def _random_pick_day_list(days):
    choice = random.choices(
        [d['name'] for d in days],
        weights=[d['weight'] for d in days]
        )[0]
    random.shuffle(choice)
    return choice

def _random_pick_main_dish(mains, day):
    day = 'Fri' if day in ('Sat', 'Sun') else day
    names = [m['name'] for m in mains]
    weights = [m['weight'][day] * m['weight']['Total'] for m in mains]
    choice = random.choices(names, weights=weights)[0]
    return choice

def _random_pick_main2(main2s, main):
    main2 = main2s.get(main, list())
    if main2:
        names = [m['name'] for m in main2]
        weights = [m['weight'] for m in main2]
        choice = random.choices(names, weights=weights)[0]
        return choice

def _random_pick_a_side(sides, day, main):
    day = 'Fri' if day in ('Sat', 'Sun') else day
    names = [s['name'] for s in sides]
    weights = list()
    for probs in sides:
        weight = probs['weight']['Days'][day] * probs['weight']['Total']
        if day in probs['weight']['Mains']:
            if main in probs['weight']['Mains'][day]:
                weight += probs['weight']['Mains'][day][main]
        weights.append(weight)
    choice = random.choices(names, weights=weights)[0]
    return choice

def _random_pick_sides(sides, stops, day, main):
    choices = list()
    index = 0
    while True:
        choices.append(_random_pick_a_side(sides, day, main))
        sides = [s for s in sides if s['name'] not in choices]
        if random.random() < stops[index]:
            break
        index += 1
    return choices

def _random_get_day_probs(meals):
    return list(meals.aggregate([
        {'$match': {'day': {'$ne': 'Sun'}}},
        {'$project': {
            'week': {'$isoWeek': '$_id'},
            'year': {'$isoWeekYear': '$_id'},
            'day': 1
            }},
        {'$sort': {'day': 1}},
        {'$group': {
            '_id': {'year': '$year', 'week': '$week'},
            'days': {'$push': '$day'}
            }},
        {'$group': {'_id': '$days', 'weight': {'$sum': 1}}},
        {'$project': {'name': '$_id', 'weight': 1, '_id': 0}}
        ]))

def _random_get_day_main_probs(meals):
    # Get raw day counts for main dishes
    main_day = meals.aggregate([
        {'$unwind': '$dishes'},
        {'$match': {'dishes.course': 'Main'}},
        {'$project': {
            'dishes': 1,
            'Mon': {'$cond': [{'$eq': ['$day', 'Mon']}, 1, 0]},
            'Tue': {'$cond': [{'$eq': ['$day', 'Tue']}, 1, 0]},
            'Wed': {'$cond': [{'$eq': ['$day', 'Wed']}, 1, 0]},
            'Thu': {'$cond': [{'$eq': ['$day', 'Thu']}, 1, 0]},
            'Fri': {'$cond': [{'$or': [
                {'$eq': ['$day', 'Fri']},
                {'$eq': ['$day', 'Sat']},
                {'$eq': ['$day', 'Sun']},
                ]}, 1, 0]}
            }
         },
        {'$group': {
            '_id': '$dishes.name',
            'Mon': {'$sum': '$Mon'},
            'Tue': {'$sum': '$Tue'},
            'Wed': {'$sum': '$Wed'},
            'Thu': {'$sum': '$Thu'},
            'Fri': {'$sum': '$Fri'}
            }
         },
        ])
    mains = dict()
    for main in main_day:
        mains[main.pop('_id')] = main

    # Adjust counts for day sampling bias
    total = meals.count()
    days = {d['_id']: d['count'] for d in meals.aggregate([
        {'$group': {'_id': '$day', 'count': {'$sum': 1}}}
        ])}
    days['Fri'] += days.pop('Sat')
    days['Fri'] += days.pop('Sun')
    day_factor = {k: 0.2 / (v / total) for k, v in days.items()}
    for dish, counts in mains.items():
        mains[dish] = {k: v * day_factor[k] for k, v in counts.items()}

    # Calculate Day Correlation Matrix
    mains_for_corr = dict()
    for dish, count in mains.items():
        if sum(count.values()) < 5:
            continue
        pcts = {k: v / days[k] for k, v in count.items()}
        mains_for_corr[dish] = pcts
    raw_corr = np.corrcoef(np.array([
        [m['Mon'] for m in mains_for_corr.values()],
        [m['Tue'] for m in mains_for_corr.values()],
        [m['Wed'] for m in mains_for_corr.values()],
        [m['Thu'] for m in mains_for_corr.values()],
        [m['Fri'] for m in mains_for_corr.values()]
        ]))
    day_list = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    day_corr = defaultdict(dict)
    for i, row in enumerate(raw_corr):
        for j, cell in enumerate(row):
            day_corr[day_list[i]][day_list[j]] = cell

    # Add prior to meals
    mainadj = list()
    for dish, counts in mains.items():
        # Prior based on day correlations
        prior = {d: sum([v * day_corr[d][k] for k, v in counts.items()])
                 for d in counts}
        if sum(prior.values()) > 5:
            prior = {k: v / sum(prior.values()) * 5 for k, v in prior.items()}
        # Plus uniform prior
        adjusted = {k: v + max(prior[k] + 1, 0) for k, v in counts.items()}

        # Convert to percentages and add total (unadjusted)
        total = sum(adjusted.values())
        adjusted = {k: round(v / total, 2) for k, v in adjusted.items()}
        adjusted['Total'] = round(sum(mains[dish].values()), 2)

        mainadj.append({'name': dish, 'weight': adjusted})

    return mainadj

def _random_get_main2_probs(meals):
    matches = list(meals.aggregate([
        {'$project': {
            'day': {'$cond': [{'$in': ['$day', ['Sat', 'Sun']]}, 'Fri', '$day']},
            'mains': {'$filter': {
                'input': '$dishes', 'as': 'dish',
                'cond': {'$eq': ['$$dish.course', 'Main']}
                }}
            }},
        {'$project': {'day': 1, 'mains': 1, 'size': {'$size': '$mains'}}},
        {'$match': {'size': {'$gt': 1}}},
        ]))
    totals = {i['_id']: i['c'] for i in meals.aggregate([
        {'$unwind': '$dishes'},
        {'$match': {'dishes.course': 'Main'}},
        {'$group': {'_id': '$dishes.name', 'c': {'$sum': 1}}}
        ])}
    main_matrix = dict()
    for match in matches:
        for main in match['mains']:
            if main['name'] not in main_matrix:
                main_matrix[main['name']] = defaultdict(int)
            for main2 in match['mains']:
                if main2['name'] != main['name']:
                    i = 1 / totals[main['name']]
                    main_matrix[main['name']][main2['name']] += i
    main_probs = dict()
    for main, matches in main_matrix.items():
        matches[None] = max(0, 1 - sum(matches.values()))
        main_probs[main] = [{'name': k, 'weight': round(v, 2)} for k, v in matches.items()]

    return main_probs

def _random_get_side_stop_pct(meals):
    side_counts = {m['_id']: m['c'] for m in meals.aggregate([
	{'$match': {'dishes.course': 'Side'}},
	{'$project': {
            'sides': {'$filter': {
                'input': '$dishes', 'as': 'dish',
                'cond': {'$eq': ['$$dish.course', 'Side']}
                }}
	    }},
	{'$project': {'len': {'$size': '$sides'}}},
	{'$group': {'_id': '$len', 'c': {'$sum': 1}}}
	])}
    stop_pct = list()
    for count in range(1, max(side_counts) + 1):
        stop = side_counts.get(count, 0)
        more = sum(v for k, v in side_counts.items() if k > count)
        stop_pct.append(round(stop / (stop + more), 2))
    return stop_pct

def _random_get_dessert_side_probs(meals, dishes, course):
    dish_matrix = list(meals.aggregate([
        {'$match': {'dishes.course': {'$in': ['Main', course]}}},
        {'$project': {
            'day': {'$cond': [{'$in': ['$day', ['Sat', 'Sun']]}, 'Fri', '$day']},
            'mains': {'$filter': {
                'input': '$dishes', 'as': 'dish',
                'cond': {'$eq': ['$$dish.course', 'Main']}
                }},
            'sides': {'$filter': {
                'input': '$dishes', 'as': 'dish',
                'cond': {'$eq': ['$$dish.course', course]}
                }}
            }},
        {'$unwind': '$mains'}, {'$unwind': '$sides'},
        {'$group': {
            '_id': {
                'day': '$day',
                'main': '$mains.name',
                'side': '$sides.name'
                },
            'count': {'$sum': 1}
            }},
        {'$project': {
            'day': '$_id.day', 'main': '$_id.main', 'side': '$_id.side',
            'count': 1, '_id': 0
            }}
        ]))

    # Tabulate subtotals
    total = 0
    sides = defaultdict(int)
    days = defaultdict(int)
    mains = defaultdict(int)
    side_days = defaultdict(int)
    main_days = defaultdict(int)
    for d in dish_matrix:
        total += d['count']
        sides[d['side']] += d['count']
        days[d['day']] += d['count']
        mains[d['main']] += d['count']
        side_days[(d['day'], d['side'])] += d['count']
        main_days[(d['day'], d['main'])] += d['count']

    # Check for linked meals
    day_meal_raw = list()
    for m in dish_matrix:
        # Calculate statistics
        n_this = main_days[(m['day'], m['main'])]
        n_that = days[m['day']] - m['count']
        mean_this = m['count'] / n_this
        mean_that = (side_days[(m['day'], m['side'])] - m['count']) / n_that
        std_this = math.sqrt(mean_this * (1 - mean_this) / n_this)
        std_that = math.sqrt(mean_that * (1 - mean_that) / n_that)
        se_this = std_this / math.sqrt(n_this)
        se_that = std_that / math.sqrt(n_that)
        if std_this == 0 or std_that == 0:
            continue

        se_diff = math.sqrt(se_this**2 + se_that**2)
        t_stat = (mean_this - mean_that) / se_diff
        df = n_this + n_that - 2
        alpha = 0.005
        cv = t.ppf(1.0 - alpha, df)
        p = (1 - t.cdf(abs(t_stat), df)) * 2

        # Reduce this mean to lower bound of 90% C.I.
        mean_this = mean_this - (1.64 * se_this)
        dish_delta = (mean_this - mean_that) * n_this
        if p < alpha and mean_this > mean_that and dish_delta >= 1:
            day_meal_raw.append((
                m['side'], m['day'], m['main'],
                {'pct': mean_this - mean_that,
                 'delta': dish_delta,
                 'scaled': (mean_this - mean_that) * days[m['day']]}
                ))
    day_meal_delta = dict()
    for Δ in day_meal_raw:
        if Δ[0] not in day_meal_delta:
            day_meal_delta[Δ[0]] = dict()
        if Δ[1] not in day_meal_delta[Δ[0]]:
            day_meal_delta[Δ[0]][Δ[1]] = dict()
        day_meal_delta[Δ[0]][Δ[1]][Δ[2]] = Δ[3]

    # Calculate day probabilities
    groups = {d['_id']: d['group'] for d in dishes.find()}
    day_factor = {k: 0.2 / (v / total) for k, v in days.items()}
    day_side_probs = list()
    for side, side_total in sides.items():
        probs = {'name': side, 'group': groups.get(side, side),
                 'weight': {'Days': dict()}}
        for day, day_total in days.items():
            meal_credit = sum(
                d['delta'] for d in day_meal_delta.get(
                    side, dict()).get(day, dict()).values())
            day_factor = 0.2 / (day_total / total)
            adj_total = (side_days[(day, side)] - meal_credit) * day_factor
            probs['weight']['Days'][day] = adj_total + 1
        adjtotal = sum(probs['weight']['Days'].values())
        probs['weight']['Days'] = {
            day: round(v / adjtotal, 2) for day, v
            in probs['weight']['Days'].items()
            }
        probs['weight']['Mains'] = dict()
        for day, meals in day_meal_delta.get(side, dict()).items():
            probs['weight']['Mains'][day] = {
                k: round(v['scaled'], 2) for k, v in meals.items()}
                #k: v for k, v in meals.items()}
        probs['weight']['Total'] = round(adjtotal, 2)
        day_side_probs.append(probs)

    return day_side_probs

# Function to re-generate phildata.js
def generate_data():
    meals = get_db().phil_food.meals_v2
    dishes = get_db().phil_food.dishes

    # Get shared metadata
    meta = {
        'tape_widths': {
            'masking': 10,  # 1"
            'painter': 14,  # 1.41"
            'scotch': 8,    # 0.75"
            'duct': 19,     # 1.88"
            'electrical': 8 # 0.75"
          },
          'days': {
            'Mon': {'name': "Monday", 'order': 1},
            'Tue': {'name': "Tuesday", 'order': 2},
            'Wed': {'name': "Wednesday", 'order': 3},
            'Thu': {'name': "Thursday", 'order': 4},
            'Fri': {'name': "Friday", 'order': 5},
            'Sat': {'name': "Saturday", 'order': 6},
            'Sun': {'name': "Sunday", 'order': 7}
          },
          'course_colors': {
            'Main': "rgb(194,49,30)",
            'Side': "rgb(124,157,72)",
            'Dessert': "rgb(138,78,63)",
            'Friday': "rgb(194,49,30)"
          }
        }

    # Get data for randomizer
    random = dict()
    # Non-DB data
    random['marker_stops'] = [0.66, 0.5, 0.5, 0.7, 1]
    random['marker_choices'] = [
        {'name': "black", 'weight': 0.45},
        {'name': "blue", 'weight': 0.13},
        {'name': "purple", 'weight': 0.10},
        {'name': "brilliant-blue", 'weight': 0.09},
        {'name': "red", 'weight': 0.05},
        {'name': "brown", 'weight': 0.05},
        {'name': "aqua", 'weight': 0.04},
        {'name': "green", 'weight': 0.03},
        {'name': "magenta", 'weight': 0.03},
        {'name': "lime-green", 'weight': 0.03}
        ]
    random['tape_choices'] = [
        {'name': "masking", 'weight': 200},
        {'name': "painter", 'weight': 190},
        {'name': "scotch", 'weight': 170},
        {'name': "duct", 'weight': 40},
        {'name': "electrical", 'weight': 40}
        ]
    # DB data
    random['days_choices'] = _random_get_day_probs(meals)
    random['main_choices'] = _random_get_day_main_probs(meals)
    random['main2_choices'] = _random_get_main2_probs(meals)
    random['side_stops'] = _random_get_side_stop_pct(meals)
    random['side_choices'] = _random_get_dessert_side_probs(meals, dishes, 'Side')
    random['dessert_choices'] = _random_get_dessert_side_probs(meals, dishes, 'Dessert')
    # Hand-selected DB data (maybe automate this?)
    random['variants'] = {
        "Apple Straudel": ["Apple Straudel ala Moda"],
        "Apple Tarts": ["Apple Tarts ala Moda"],
        "BBQ Pulled Pork": ["Pull Pork", "Pulled Pork BBQ"],
        "Baked Beans": ["Beans"],
        "Baked Lasagna": ["Lasagna", "Baked Lasagna Meat and Veggie"],
        "Beef Burgandy": ["Beef Burgandy over Noodles"],
        "Beef Stroganoff": ["Beef Stroganoff over Noodles"],
        "Beef Terryaky": ["Beef Terryaky over Rice"],
        "Beef Veggie Stir Fry": ["Beef Veggie Stir Fry w/ Rice"],
        "Brisket of Beef": ["Beef Brisket"],
        "Swiss Steak": ["Baked Swiss Steak"],
        "Banana Foster": ["Bananas Foster"],
        "Pizza Pepperoni Bread": ["Pepperoni Pizza Bread"],
        "Brushetta": ["Brushetta alla Caprese"],
        "Walsh Rabbit": ["Rabbit Sauce"],
        "Carrot Cake": ["Carrot Cake Frosting"],
        "Lemon Cake": ["Lemon Cake Frosting", "Lemon Cake w/ Lemon Frosting"],
        "White Cake": ["White Cake Frosting", "White Cake w/ Vanilla Frosting",
                       "White Cake w/ Blueberry Sauce"],
        "Cheese Cake": ["Cheese Cake ala Moda", "Cheese Cake Strauberry Sauce",
                        "Cheese Cake w/ Fresh Blueberries"],
        "Chicken Fettuccine Alfredo": ["Chicken Alfredo over Fettuccine"],
        "Chicken Sun Dried Tomato": [
            "Chicken Sun Dried Tomatoes over Farfalle"
            ],
        "Vodka Orange Chicken": ["Chicken Orange Vodka"],
        "Chicken ala Parmigiana": ["Chicken Parmigiana"],
        "Choccolate Brownies": ["Brownies", "Brownies ala Moda"],
        "Corned Beef and Cabbage": ["Corned Beef and Cabbage Boiled Potatoes"],
        "Sicilian Egg Plant": ["Egg Plant Sicilian Style"],
        "Egg Plant Parmigiana": ["Egg Plant ala Parmigiana"],
        "Greek Bakalava": ["Bakalava"],
        "Hot Hot Chicken Wings": ["Hot Chicken Wings", "Chicken Wings"],
        "Hot Sausage": ["Hot Italian Sausage"],
        "Cannoli ala Moda": ["Homemade Italian Cannoli"],
        "BBQ Baked Meat Loaf": ["Baked Meat Loaf"],
        "Moroccan Style Chicken": ["Moroccan Chicken over Couscous"],
        "Pizza w/ Everything": ["Home Made Pizza w/ Everything",
                                "Pizza w/ Everything Some Plain"],
        "Pork Chops": ["Canadian Pork Chops"],
        "Garlic Whipped Potatoes": ["Garlic Mashed Potatoes",
                                    "Whipped Potatoes"],
        "Sliced Potatoes": ["Oven Sliced Potatoes", "Sliced Oven Potatoes"],
        "Roast Turkey Dinner": ["Roast Turkey Dinner w/ Trimmings",
                                "Roast Turkey Dinner w/ Everything"],
        "Salmon Lasagna": ["Baked Salmon Lasagna",
                           "Salmon Lasagna w/ Benchmal Sauce"],
        "Philly Cheese Steak": ["Philly Steak Sandwiches"],
        "Cheese Ravioli": ["Baked Cheese Ravioli",
                           "Cheese Ravioli Bolognase Sauce"],
        "Swedish Meat Balls": ["Swedish Meat Balls over Egg Noodles"],
        "Tomato Soup Grilled Cheese": [
            "Tomato Soup Grilled Cheese Bacon Tomato"],
        "Carrots": ["Baked Carrots"],
        "Green Beans": ["Beans"],
        "Kale": ["Saute Kale"],
        "Spinash": ["Steam Spinash"],
        "Ziti": ["Ziti Marinara", "Ziti w/ Meat Balls"],
        "Zucchini Bars": ["Home Made Zucchini Bars w/ Cream Cheese Frosting"],
        "Cuban Sandwiches": [
            "Cuban Sandwiches Pork Ham Provolone Cheese Mustard Pickles"],
        "BBQ Hamburgers Cheeseburgers Hot Dogs": [
            "BBQ Hamurgers Cheeseburgers", "BBQ Cheeseburgers Hot Dogs"],
        "Peas Onions Mushrooms": ["Peas Mushrooms Onions", "Peas",
                                  "Peas Onions"],
        "Pasta Marinara": ["Fettuccine Marinara", "Linguini Marinara",
                           "Spaghetti Marinara"],
        "Pasta Pesto": ["Linguini Pesto", "Pesto Sauce Fettuccini"],
        "Pasta Vodka": ["Fettuccini Vodka", "Linguini Vodka"],
        "Pasta Olive Oil Garlic": ["Farfalle Olive Oil Garlic",
                                   "Linguini Olive Oil Garlic"],
        "Sun Dried Tomato Pasta": ["Farfalle Sun Dried Tomatoes",
                                   "Angel Hair w/ Sun Dried Tomatoes"],
        "Veggie Risotto": ["Risotto w/ Mushrooms"],
        "Sea Food Platter": [
            "Sea Food Platter Shrimp Haddock Tilapia Tartar Sauce"],
        "Breakfast Dinner": [
            "Breakfast Dinner Eggs Pancake Bacon Sausage",
            "Breakfast Dinner Eggs Pancake Bacon Corned Beef Hash",
            "Breakfast Dinner Pancake Eggs Bacon Sausage",
            "Breakfast Dinner Pancake Eggs Bacon Ham Hash Brown",
            "Breakfast Dinner Pancake Eggs Sausage Bacon",
            "Breakfast Dinner Bacon Pancakes Eggs Ham",
            "Breakfast Dinner French Toast Eggs Bacon Ham"
            ]
        }
    random['replacements'] = {
        "Brushetta Pasta": ["Brushetta Farfalle"],
        "Pasta Alfredo": ["Fettuccini Alfredo"],
        "Pasta Bolognaise": ["Fettuccine Bolognaise"],
        "Pasta Bolognase": ["Spaghetti ala Bolognase"],
        "Pasta Carbonara": ["Fettuccine Carbonara", "Penne ala Carbonara"],
        "Pasta w/ Herb Sauce": ["Angel Hair w/ Herb Sauce"],
        "Pasta w/ Meatballs": ["Rigatoni w/ Meat Balls",
                               "Spaghetti w/ Meat Balls"]
        }

    # Get data for timeline
    timeline = dict()
    start = '2007-B'
    timeline['key_dishes'] = get_relevant_terms(meals, start)
    (course_counts, semester_counts) = get_dish_semester_counts(meals, start)
    timeline['semester_counts'] = semester_counts
    timeline['dish_semesters'] = course_counts

    # Generate JS file
    with open('phildata.js', 'w') as out:
        out.write('/*** METADATA ***/\n')
        out.write('const meta = ' + json.dumps(meta) + ';\n\n')
        out.write('/*** RANDOMIZER PROBABILITIES ***/\n')
        out.write('const random = ' + json.dumps(random) + ';\n\n')
        out.write('/*** TIMELINE DATA ***/\n')
        out.write('const timeline = ' + json.dumps(timeline) + ';')

# Get a particular menu's text
def get_menu(semester, index):
    meals = get_db().phil_food.meals_v2
    menu = list(meals.aggregate([
        {'$match': {'semester': semester}},
        {'$sort': {'_id': 1}},
        {'$skip': index - 1},
        {'$limit': 1},
        {'$project': {'_id': 0, 'meal': 1, 'day': 1}}
        ]))
    if menu:
        return menu[0]
    else:
        return {}

# Helper function to load new menus
def load_menus(file_name, delim='\t'):
    """Load new menus from Meals.csv file."""
    db = MongoClient().phil_food
    with open(file_name, encoding='utf-8') as file:
        for row in csv.DictReader(file, delimiter=delim):
            if row['Skip'] not in ('0', '1'):
                continue
            date = datetime.strptime(row['Date'], '%Y-%m-%d')
            meal = {
                '_id': date,
                'from_image': bool(int(row['Image'])),
                'only_trend': bool(int(row['Skip'])),
                'source': row['Source'],
                'meal': row['Meal'],
                'untagged': row['Meal'],
                'date': date,
                'day': date.strftime('%a'),
                'semester': row['Semester'],
                'dishes': list()
                }
            if row['Image'] == '1':
                meal['image_name'] = row['Posted'] + ".jpg"
            try:
                db.meals_v2.insert_one(meal)
            except DuplicateKeyError:
                continue

def init_app(app):
    app.teardown_appcontext(close_db)
