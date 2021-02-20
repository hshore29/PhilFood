from flask import Flask, g, redirect, render_template, request, session, jsonify
import mongo
import json

# Create and configure app
app = Flask(__name__)
app.config.from_mapping(
    SECRET_KEY='dev',
    MENU_FILE='Meals.csv'
    )

def get_percent(docs):
    total = len(''.join([d['meal'] for d in docs]))
    untag = len(''.join([d['untagged'] for d in docs]))
    return 1 - untag / total

@app.route('/')
def main():
    meals = mongo.get_meals()
    pct = get_percent(meals) * 100
    return render_template('tagger.html', meals=meals, pct=pct)

@app.route('/mapper')
def mapper():
    mapped = mongo.get_mapped_meals()
    return render_template('mapper.html', mapped=mapped)

@app.route('/dishes')
def dishes():
    dishes = mongo.get_decade_top()
    return render_template('dishes.html', dishes=dishes)

@app.route('/save_meal', methods=('POST',))
def save():
    data = request.get_json()
    _id = data['_id']
    update = data['update']
    status = mongo.update_meal(_id, update)
    return jsonify("OK")

@app.route('/update_meal', methods=('POST',))
def update():
    data = request.get_json()
    _ids = data['_ids']
    update = data['update']
    status = mongo.update_meal_name(_ids, update)
    return jsonify("OK")

@app.route('/get_meal', methods=('POST',))
def get_menu():
    data = request.get_json()
    menu = mongo.get_menu(data['semester'], int(data['index']))
    return jsonify(menu)

@app.route('/add_group', methods=('POST',))
def group():
    data = request.get_json()
    name = data['name']
    group = data['group']
    status = mongo.add_group(name, group)
    return jsonify("OK")

@app.route('/update_meal_name', methods=('POST',))
def update_name():
    data = request.get_json()
    _ids = data['_ids']
    update = data['update']
    mongo.update_meal_name(_ids, update)
    mongo.update_meal_group(update)
    return jsonify("OK")

mongo.init_app(app)
