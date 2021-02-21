///***** MEAL RANDOMIZER *****///
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomChoices(choices, getweight, replace=false) {
  getweight = getweight || (a => a.weight);
  let total = choices.map(getweight).reduce((a, b) => a + b, 0);
  let threshold = Math.random() * total;
  let cumulative = 0;
  for (let i=0; i < choices.length; i++) {
    cumulative += getweight(choices[i]);
    if (threshold <= cumulative) {
      let choice = choices[i]
      if (!replace) choices.splice(i, 1);
      return choice;
    }
  }
}

function weightsSide(day, main, chosen) {
  return (d => {
    let w_day = d.weight['Total'] * d.weight['Days'][day];
    let w_main = (d.weight['Mains'][day] || {})[main] || 0;
    if (chosen) {
      if (chosen.map(c => c.group).includes(d.group)) return 0;
    }
    return w_day + w_main;
  });
}

function getSides(choices, stops, day, main) {
  let sides = [];
  for (let i=0; i < stops.length; i++) {
    let side = randomChoices(choices, weightsSide(day, main, sides));
    sides.push(side);
    if (Math.random() <= stops[i]) break;
  }
  return sides;
}

function getDessert(choices, day, main) {
  return randomChoices(choices, weightsSide(day, main));
}

function getMains(choices, day) {
  let getweight = (m => m.weight['Total'] * m.weight[day]);
  let main = randomChoices(choices, getweight);
  // TODO - skip main2s that have already been picked as mains
  if (random.main2_choices[main.name]) {
    let main2 = randomChoices(random.main2_choices[main.name], null, true);
    if (main2.name) return [main, main2];
  }
  return [main];
}

function getMarkers() {
  let marker_choices = [...random.marker_choices];
  let markers = [];
  for (let i=0; i < random.marker_stops.length; i++) {
    markers.push(randomChoices(marker_choices).name);
    if (Math.random() <= random.marker_stops[i]) break;
  }
  return markers
}

function getTape() {
  return randomChoices(random.tape_choices, null, true).name;
}

function getDays() {
  let days = randomChoices(random.days_choices, null, true).name;
  shuffleArray(days);
  return days;
}

function generateMenu(choices, day) {
  // Select dishes
  let meal = [];
  let day2 = day === "Sat" || day === "Sun" ? "Fri" : day;
  let main = getMains(choices.main, day2);
  meal.push(...main);
  let sides = getSides(choices.side, random.side_stops, day2, main[0].name);
  meal.push(...sides);
  let dessert = getDessert(choices.dessert, day2, main[0].name);
  meal.push(dessert);

  // Convert to text & return
  meal = meal.map(m => {
    let names = [m.name];
    if (random.replacements[m.name]) {
      names = random.replacements[m.name];
    } else if (random.variants[m.name]) {
      names.push(...random.variants[m.name]);
    }
    return names[Math.floor(Math.random() * names.length)];
  });
  return {day: day, meal: meal};
}

function addTapeStrip(pos, menu, type) {
  // Add tape
  let tape = document.createElement("div");
  tape.className = "tape tape-" + type;
  menu.appendChild(tape);

  // Adjust tape
  tape.style.height = meta.tape_widths[type] + "px";
  if (pos === 0 || pos === 1) {
    tape.style.top = "-" + (meta.tape_widths[type] / 2) + "px";
  } else {
    tape.style.bottom = "-" + (meta.tape_widths[type] / 2) + "px";
  }
  if (pos === 0 || pos === 3) {
    tape.style.left = "-15px";
  } else {
    tape.style.right = "-15px";
  }
  let t = Math.random() * 5,
      t1 = t,
      t2 = t;
  let r = (Math.random() * 25) + 32.5;
  if (pos === 0 || pos === 2) {
    r = r * -1;
  }
  if (pos === 1 || pos === 2) {
    t1 = t1 * -1;
  }
  if (pos === 2 || pos === 3) {
    t2 = t2 * -1;
  }
  tape.style.transform = "translate("+t1+"px,"+t2+"px)rotate("+r+"deg)";
}

function joshCase(s) {
  return s.replace(/w/g, 'W')
          .replace(/W\//g, 'w')
          .replace(/l/g, 'L')
          .replace(/u/g, 'U')
          .replace(/m/g, 'M')
          .replace(/s/g, 'S');
}

function addMenuToFridge(menu, fridge) {
  // Create menu div
  let menudiv = document.createElement("div");
  menudiv.className = "menu marker-" + menu.marker;

  // Order menus by day
  menudiv.style.order = meta.days[menu.day].order;

  // Append menu to fridge
  fridge.appendChild(menudiv);

  // Add tape to menu
  addTapeStrip(0, menudiv, menu.tape);
  addTapeStrip(1, menudiv, menu.tape);
  addTapeStrip(2, menudiv, menu.tape);
  addTapeStrip(3, menudiv, menu.tape);

  // Write date and dishes on menu
  let day = document.createElement("div");
  day.innerHTML = meta.days[menu.day].name.toUpperCase();
  day.className = "day";
  let text = document.createElement("div");
  text.innerHTML = joshCase(menu.meal.join(', '));
  text.className = "text"
  menudiv.appendChild(day);
  menudiv.appendChild(text);

  // While there's overflow, try stripping out words
  let lineHeight = parseInt(getComputedStyle(text).lineHeight);
  while ((text.clientHeight / lineHeight + 1) > (165 / lineHeight)) {
    // Remove w/, ala, alla
    for (let i=menu.meal.length-1; i >= 0; i--) {
      if (menu.meal[i].includes(' w/ ')) {
        menu.meal[i] = menu.meal[i].replace(' w/ ', ' ');
        text.innerHTML = joshCase(menu.meal.join(', '));
        break;
      }
      if (menu.meal[i].includes(' ala ')) {
        menu.meal[i] = menu.meal[i].replace(' ala ', ' ');
        text.innerHTML = joshCase(menu.meal.join(', '));
        break;
      }
      if (menu.meal[i].includes(' alla ')) {
        menu.meal[i] = menu.meal[i].replace(' alla ', ' ');
        text.innerHTML = joshCase(menu.meal.join(', '));
        break;
      }
    }
    // Get longest item
    let idx = menu.meal.length - 1;
    for (let i=menu.meal.length-1; i >= 0; i--) {
      if (menu.meal[i].length > menu.meal[idx].length) idx = i;
    }
    if (menu.meal[idx].split(' ').length > 5) {
      menu.meal[idx] = menu.meal[idx].split(' ').slice(0, -1).join(' ');
      text.innerHTML = joshCase(menu.meal.join(', '));
    } else if ((idx > 1) && (menu.meal[idx].split(' ').length > 2)) {
      menu.meal[idx] = menu.meal[idx].split(' ').slice(0, -1).join(' ');
      text.innerHTML = joshCase(menu.meal.join(', '));
    } else if (menu.meal[idx].length > 15) {
      menu.meal[idx] = menu.meal[idx].slice(0, -6);
      text.innerHTML = joshCase(menu.meal.join(', '));
    } else if (menu.meal[idx].length > 8) {
      menu.meal[idx] = menu.meal[idx].slice(0, -4);
      text.innerHTML = joshCase(menu.meal.join(', '));
    } else {
      break;
    }
  }
}

function drawMenus() {
  let fridge = document.getElementsByClassName("fridge-door")[0];

  // Clear fridge door
  while (fridge.firstChild) {
    fridge.removeChild(fridge.firstChild);
  }

  // Post new menus
  let markers = getMarkers();
  let tape = getTape();
  let menu_days = getDays();
  let choices = {
    main: [...random.main_choices],
    side: [...random.side_choices],
    dessert: [...random.dessert_choices]
  };
  for (let i=0; i < menu_days.length; i++) {
    let random_menu = generateMenu(choices, menu_days[i]);
    random_menu.marker = markers[Math.floor(Math.random() * markers.length)];
    random_menu.tape = tape;
    addMenuToFridge(random_menu, fridge);
  }
}