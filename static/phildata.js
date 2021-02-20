/*** RANDOMIZER PROBABILITIES ***/
const random = {
  marker_stops: [0.66, 0.5, 0.5, 0.7, 1],
  marker_choices: [
    {name: "black", weight: 0.45},
    {name: "blue", weight: 0.13},
    {name: "purple", weight: 0.10},
    {name: "brilliant-blue", weight: 0.09},
    {name: "red", weight: 0.05},
    {name: "brown", weight: 0.05},
    {name: "aqua", weight: 0.04},
    {name: "green", weight: 0.03},
    {name: "magenta", weight: 0.03},
    {name: "lime-green", weight: 0.03}
  ],
  tape_choices: [
    {name: "masking", weight: 200},
    {name: "painter", weight: 190},
    {name: "scotch", weight: 170},
    {name: "duct", weight: 40},
    {name: "electrical", weight: 40}
  ],
  days_choices: [
    {weight: 1, name: ['Fri', 'Mon', 'Tue']},
    {weight: 4, name: ['Fri', 'Mon', 'Wed']},
    {weight: 1, name: ['Fri', 'Mon', 'Thu', 'Tue']},
    {weight: 2, name: ['Fri', 'Mon', 'Thu', 'Wed']},
    {weight: 6, name: ['Fri', 'Mon', 'Tue', 'Wed']},
    {weight: 1, name: ['Fri', 'Mon', 'Sat', 'Tue', 'Wed']},
    {weight: 205, name: ['Fri', 'Mon', 'Thu', 'Tue', 'Wed']},
    {weight: 14, name: ['Fri', 'Mon', 'Sat', 'Thu', 'Tue', 'Wed']},
    {weight: 1, name: ['Fri', 'Sat', 'Thu', 'Wed']},
    {weight: 1, name: ['Fri', 'Sat', 'Thu', 'Tue', 'Wed']},
    {weight: 1, name: ['Fri', 'Thu']},
    {weight: 6, name: ['Fri', 'Thu', 'Wed']},
    {weight: 1, name: ['Fri', 'Thu', 'Tue']},
    {weight: 10, name: ['Fri', 'Thu', 'Tue', 'Wed']},
    {weight: 1, name: ['Fri', 'Tue', 'Wed']},
    {weight: 2, name: ['Fri', 'Wed']},
    {weight: 2, name: ['Mon', 'Thu', 'Tue']},
    {weight: 4, name: ['Mon', 'Thu', 'Wed']},
    {weight: 13, name: ['Mon', 'Thu', 'Tue', 'Wed']},
    {weight: 7, name: ['Mon', 'Tue']},
    {weight: 4, name: ['Mon', 'Tue', 'Wed']}
  ],
  main_choices: [
    {name: "Chicken", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Strip Steak", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Roast Duck", weight: {Mon: 0.09, Tue: 0.07, Wed: 0.09, Thu: 0.13, Fri: 0.62, Total: 1.93}},
    {name: "Beef Taco's", weight: {Mon: 0.15, Tue: 0.47, Wed: 0.23, Thu: 0.09, Fri: 0.05, Total: 2.01}},
    {name: "Chicken Stir Fry", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Chicken Cacciatore", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Scallops", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Teriyaki Flank Steak", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Beef Stew", weight: {Mon: 0.33, Tue: 0.33, Wed: 0.19, Thu: 0.09, Fri: 0.06, Total: 2.03}},
    {name: "Italian Braciole", weight: {Mon: 0.08, Tue: 0.11, Wed: 0.16, Thu: 0.55, Fri: 0.11, Total: 2.06}},
    {name: "Brandied Shrimp", weight: {Mon: 0.09, Tue: 0.09, Wed: 0.13, Thu: 0.36, Fri: 0.34, Total: 1.99}},
    {name: "Chicken Teriyaki", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Rustic Chicken", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Pork Loin w/ Gravy", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Fried Shrimp", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Sea Food Marinara", weight: {Mon: 0.09, Tue: 0.07, Wed: 0.09, Thu: 0.13, Fri: 0.62, Total: 1.93}},
    {name: "Meat Loaf", weight: {Mon: 0.1, Tue: 0.17, Wed: 0.32, Thu: 0.33, Fri: 0.09, Total: 2.01}},
    {name: "Chicken Piccata", weight: {Mon: 0.53, Tue: 0.17, Wed: 0.14, Thu: 0.08, Fri: 0.07, Total: 2.04}},
    {name: "Shrimp Scambi", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Taco's on Hard Shells", weight: {Mon: 0.13, Tue: 0.42, Wed: 0.32, Thu: 0.09, Fri: 0.04, Total: 3.0}},
    {name: "Reuben on Rye Bread", weight: {Mon: 0.15, Tue: 0.47, Wed: 0.23, Thu: 0.09, Fri: 0.05, Total: 2.01}},
    {name: "Stuffed Cheese Shells", weight: {Mon: 0.13, Tue: 0.55, Wed: 0.21, Thu: 0.07, Fri: 0.03, Total: 4.03}},
    {name: "Italian Submarine Sandwich", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Chicken Balsamic", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Cat Fish", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Pasta Bolognaise", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Country Fried Steak", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Lamb Chops", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Vegan Fajitas", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Ham Scalloped Potatoes", weight: {Mon: 0.26, Tue: 0.27, Wed: 0.17, Thu: 0.24, Fri: 0.05, Total: 3.06}},
    {name: "Cuban Sandwiches", weight: {Mon: 0.12, Tue: 0.49, Wed: 0.21, Thu: 0.14, Fri: 0.05, Total: 23.12}},
    {name: "Chicken Pesto", weight: {Mon: 0.17, Tue: 0.12, Wed: 0.22, Thu: 0.43, Fri: 0.05, Total: 5.09}},
    {name: "Salmon Lasagna", weight: {Mon: 0.05, Tue: 0.01, Wed: 0.09, Thu: 0.08, Fri: 0.78, Total: 22.33}},
    {name: "Pad Thai Shrimp", weight: {Mon: 0.1, Tue: 0.17, Wed: 0.32, Thu: 0.33, Fri: 0.09, Total: 2.01}},
    {name: "Roast Leg of Venison", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Tequila Shrimp", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Shrimp and Grits", weight: {Mon: 0.08, Tue: 0.11, Wed: 0.16, Thu: 0.55, Fri: 0.11, Total: 2.06}},
    {name: "Clams Casino", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Pork Chops", weight: {Mon: 0.17, Tue: 0.29, Wed: 0.35, Thu: 0.07, Fri: 0.11, Total: 6.94}},
    {name: "Ricotta Dumplings", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Pistachio Kebab", weight: {Mon: 0.08, Tue: 0.24, Wed: 0.33, Thu: 0.2, Fri: 0.15, Total: 4.97}},
    {name: "Beef Stroganoff", weight: {Mon: 0.27, Tue: 0.31, Wed: 0.3, Thu: 0.08, Fri: 0.04, Total: 3.01}},
    {name: "Chicken Saltimbocca", weight: {Mon: 0.26, Tue: 0.27, Wed: 0.17, Thu: 0.24, Fri: 0.05, Total: 3.06}},
    {name: "Chicken Chorizo Jambalaya", weight: {Mon: 0.1, Tue: 0.17, Wed: 0.32, Thu: 0.33, Fri: 0.09, Total: 2.01}},
    {name: "Stuffed Zucchinis", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Lasagna Bechamel Sauce", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Roast Beef Dinner", weight: {Mon: 0.17, Tue: 0.16, Wed: 0.44, Thu: 0.18, Fri: 0.04, Total: 5.98}},
    {name: "Pork Souvlaki", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Quiche", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Ciabatta Steak Sandwiches", weight: {Mon: 0.37, Tue: 0.37, Wed: 0.17, Thu: 0.06, Fri: 0.03, Total: 4.05}},
    {name: "Stuffed Peppers", weight: {Mon: 0.15, Tue: 0.47, Wed: 0.23, Thu: 0.09, Fri: 0.05, Total: 2.01}},
    {name: "Veal Parmigiana", weight: {Mon: 0.33, Tue: 0.13, Wed: 0.12, Thu: 0.1, Fri: 0.32, Total: 1.98}},
    {name: "Surf and Turf", weight: {Mon: 0.09, Tue: 0.07, Wed: 0.09, Thu: 0.13, Fri: 0.62, Total: 1.93}},
    {name: "Macaroni and Cheese", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Chili Con Carne", weight: {Mon: 0.48, Tue: 0.12, Wed: 0.11, Thu: 0.26, Fri: 0.04, Total: 6.14}},
    {name: "Chicken Burgers", weight: {Mon: 0.28, Tue: 0.41, Wed: 0.2, Thu: 0.07, Fri: 0.03, Total: 3.03}},
    {name: "Farmer's Pork Chops", weight: {Mon: 0.3, Tue: 0.32, Wed: 0.31, Thu: 0.04, Fri: 0.02, Total: 15.04}},
    {name: "Beef Veggie Stir Fry", weight: {Mon: 0.18, Tue: 0.2, Wed: 0.15, Thu: 0.42, Fri: 0.05, Total: 5.12}},
    {name: "Veal Scalloppini", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Chicken Enchiladas", weight: {Mon: 0.4, Tue: 0.24, Wed: 0.22, Thu: 0.12, Fri: 0.03, Total: 10.1}},
    {name: "Shrimp alla KDR", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Sausage Subs", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Pizza Burger", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Fried Haddock", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Beef Enchiladas", weight: {Mon: 0.36, Tue: 0.28, Wed: 0.26, Thu: 0.07, Fri: 0.03, Total: 4.03}},
    {name: "Roast Turkey Dinner", weight: {Mon: 0.08, Tue: 0.06, Wed: 0.13, Thu: 0.26, Fri: 0.47, Total: 42.53}},
    {name: "Sea Food and Chicken Paella", weight: {Mon: 0.12, Tue: 0.03, Wed: 0.07, Thu: 0.36, Fri: 0.43, Total: 7.97}},
    {name: "Garlic Shrimp Pasta", weight: {Mon: 0.04, Tue: 0.05, Wed: 0.09, Thu: 0.42, Fri: 0.4, Total: 3.99}},
    {name: "Shepherd's Pie", weight: {Mon: 0.12, Tue: 0.38, Wed: 0.38, Thu: 0.09, Fri: 0.04, Total: 3.98}},
    {name: "Philly Cheese Steak", weight: {Mon: 0.13, Tue: 0.24, Wed: 0.4, Thu: 0.2, Fri: 0.03, Total: 10.0}},
    {name: "Cheese Ravioli", weight: {Mon: 0.3, Tue: 0.33, Wed: 0.26, Thu: 0.11, Fri: 0.01, Total: 42.27}},
    {name: "Breakfast Burrito", weight: {Mon: 0.78, Tue: 0.08, Wed: 0.1, Thu: 0.02, Fri: 0.01, Total: 18.3}},
    {name: "Baked Lasagna", weight: {Mon: 0.08, Tue: 0.27, Wed: 0.31, Thu: 0.21, Fri: 0.13, Total: 33.94}},
    {name: "Coconut Shrimp", weight: {Mon: 0.31, Tue: 0.14, Wed: 0.15, Thu: 0.31, Fri: 0.09, Total: 2.05}},
    {name: "Chicken Calabrese", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Falafel on Buns", weight: {Mon: 0.13, Tue: 0.3, Wed: 0.17, Thu: 0.11, Fri: 0.29, Total: 1.97}},
    {name: "Bratwurst", weight: {Mon: 0.33, Tue: 0.33, Wed: 0.19, Thu: 0.09, Fri: 0.06, Total: 2.03}},
    {name: "Marinated Skirt Steak", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "BBQ Chicken", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Pigs in Blankets", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Beef Terryaky", weight: {Mon: 0.25, Tue: 0.17, Wed: 0.27, Thu: 0.26, Fri: 0.06, Total: 3.03}},
    {name: "Chicken Sun Dried Tomato", weight: {Mon: 0.21, Tue: 0.35, Wed: 0.23, Thu: 0.12, Fri: 0.09, Total: 10.03}},
    {name: "BBQ Pulled Pork", weight: {Mon: 0.11, Tue: 0.21, Wed: 0.29, Thu: 0.36, Fri: 0.03, Total: 40.34}},
    {name: "Falafel on Pita", weight: {Mon: 0.25, Tue: 0.46, Wed: 0.2, Thu: 0.06, Fri: 0.03, Total: 4.04}},
    {name: "Pizza w/ Everything", weight: {Mon: 0.01, Tue: 0.03, Wed: 0.08, Thu: 0.84, Fri: 0.04, Total: 65.61}},
    {name: "Sea Food Platter", weight: {Mon: 0.02, Tue: 0.11, Wed: 0.05, Thu: 0.21, Fri: 0.61, Total: 15.71}},
    {name: "Roast Beef Sandwiches", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Bourbon Chicken", weight: {Mon: 0.12, Tue: 0.04, Wed: 0.04, Thu: 0.08, Fri: 0.71, Total: 32.23}},
    {name: "Chicken Curry", weight: {Mon: 0.53, Tue: 0.17, Wed: 0.14, Thu: 0.08, Fri: 0.07, Total: 2.04}},
    {name: "Cheese Manicotti", weight: {Mon: 0.35, Tue: 0.13, Wed: 0.25, Thu: 0.06, Fri: 0.21, Total: 6.95}},
    {name: "Caprese Panini", weight: {Mon: 0.25, Tue: 0.22, Wed: 0.34, Thu: 0.07, Fri: 0.12, Total: 6.95}},
    {name: "Chicken ala King", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Chicken Gordon Blue", weight: {Mon: 0.06, Tue: 0.28, Wed: 0.22, Thu: 0.06, Fri: 0.38, Total: 9.81}},
    {name: "Mexican Pizza", weight: {Mon: 0.1, Tue: 0.17, Wed: 0.32, Thu: 0.33, Fri: 0.09, Total: 2.01}},
    {name: "Swedish Meat Balls", weight: {Mon: 0.31, Tue: 0.23, Wed: 0.28, Thu: 0.13, Fri: 0.05, Total: 24.12}},
    {name: "Chicken Fried Steak", weight: {Mon: 0.12, Tue: 0.3, Wed: 0.2, Thu: 0.3, Fri: 0.08, Total: 2.04}},
    {name: "Moroccan Style Chicken", weight: {Mon: 0.15, Tue: 0.31, Wed: 0.25, Thu: 0.24, Fri: 0.04, Total: 28.19}},
    {name: "Sizzling Fajitas", weight: {Mon: 0.22, Tue: 0.5, Wed: 0.19, Thu: 0.06, Fri: 0.03, Total: 5.05}},
    {name: "Beef Burgandy", weight: {Mon: 0.15, Tue: 0.43, Wed: 0.26, Thu: 0.13, Fri: 0.03, Total: 9.05}},
    {name: "Chicken Golden Nuggets", weight: {Mon: 0.21, Tue: 0.32, Wed: 0.37, Thu: 0.09, Fri: 0.01, Total: 49.09}},
    {name: "Salisbury Steak", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Salmon alla Puttanesca", weight: {Mon: 0.0, Tue: 0.0, Wed: 0.01, Thu: 0.21, Fri: 0.78, Total: 11.7}},
    {name: "Lamb Stew", weight: {Mon: 0.09, Tue: 0.19, Wed: 0.4, Thu: 0.27, Fri: 0.05, Total: 2.99}},
    {name: "Roast Leg of Lamb", weight: {Mon: 0.08, Tue: 0.07, Wed: 0.37, Thu: 0.38, Fri: 0.11, Total: 19.05}},
    {name: "Greek Mousakas", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Beef Quesadillas", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Greek Pastisio", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Moroccan Beef over Couscous", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Beer Batter Fish Fry", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Mushroom Parmigiana", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Home Made Calzones", weight: {Mon: 0.04, Tue: 0.21, Wed: 0.22, Thu: 0.5, Fri: 0.03, Total: 15.24}},
    {name: "Lasagna Alfredo", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Calamari Fra Diavolo", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Tomato Soup Grilled Cheese", weight: {Mon: 0.71, Tue: 0.11, Wed: 0.1, Thu: 0.05, Fri: 0.04, Total: 30.43}},
    {name: "Chicken Fettuccine Carbonara", weight: {Mon: 0.14, Tue: 0.35, Wed: 0.34, Thu: 0.11, Fri: 0.06, Total: 1.99}},
    {name: "Hot Hot Chicken Wings", weight: {Mon: 0.02, Tue: 0.03, Wed: 0.09, Thu: 0.8, Fri: 0.05, Total: 65.48}},
    {name: "Roast Prime Ribs of Beef", weight: {Mon: 0.04, Tue: 0.01, Wed: 0.04, Thu: 0.1, Fri: 0.81, Total: 3.86}},
    {name: "Sloppy Joes on Buns", weight: {Mon: 0.6, Tue: 0.17, Wed: 0.12, Thu: 0.06, Fri: 0.05, Total: 3.06}},
    {name: "Pasta w/ Meatballs", weight: {Mon: 0.06, Tue: 0.38, Wed: 0.38, Thu: 0.16, Fri: 0.02, Total: 14.0}},
    {name: "Chicken ala Francese", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Chicken Fettuccine Alfredo", weight: {Mon: 0.22, Tue: 0.31, Wed: 0.2, Thu: 0.08, Fri: 0.18, Total: 17.95}},
    {name: "Chicken Pasta Primavera", weight: {Mon: 0.11, Tue: 0.29, Wed: 0.46, Thu: 0.1, Fri: 0.04, Total: 3.95}},
    {name: "Sliced Beef Barbecue", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "BBQ Hamburgers Cheeseburgers Hot Dogs", weight: {Mon: 0.39, Tue: 0.19, Wed: 0.22, Thu: 0.17, Fri: 0.03, Total: 36.33}},
    {name: "Roast Pork", weight: {Mon: 0.18, Tue: 0.42, Wed: 0.22, Thu: 0.15, Fri: 0.03, Total: 7.06}},
    {name: "Wiener Schnitzel", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Moroccan Meatloaf", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Mardi Gras Dinner", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Swiss Steak", weight: {Mon: 0.1, Tue: 0.38, Wed: 0.32, Thu: 0.17, Fri: 0.03, Total: 6.02}},
    {name: "Chicken Marsala", weight: {Mon: 0.17, Tue: 0.05, Wed: 0.12, Thu: 0.2, Fri: 0.46, Total: 10.87}},
    {name: "Corned Beef and Cabbage", weight: {Mon: 0.17, Tue: 0.31, Wed: 0.3, Thu: 0.19, Fri: 0.04, Total: 32.14}},
    {name: "Taco's on Soft Shells", weight: {Mon: 0.26, Tue: 0.3, Wed: 0.35, Thu: 0.07, Fri: 0.03, Total: 7.0}},
    {name: "Brushetta Chicken", weight: {Mon: 0.09, Tue: 0.18, Wed: 0.49, Thu: 0.1, Fri: 0.15, Total: 4.89}},
    {name: "Hot Sausage", weight: {Mon: 0.24, Tue: 0.3, Wed: 0.2, Thu: 0.21, Fri: 0.04, Total: 32.3}},
    {name: "Linguine w/ Clams", weight: {Mon: 0.21, Tue: 0.17, Wed: 0.35, Thu: 0.22, Fri: 0.05, Total: 4.01}},
    {name: "BBQ Baked Meat Loaf", weight: {Mon: 0.33, Tue: 0.21, Wed: 0.21, Thu: 0.18, Fri: 0.07, Total: 16.14}},
    {name: "Clam Chowder", weight: {Mon: 0.33, Tue: 0.13, Wed: 0.12, Thu: 0.1, Fri: 0.32, Total: 1.98}},
    {name: "Pierogis", weight: {Mon: 0.22, Tue: 0.26, Wed: 0.26, Thu: 0.21, Fri: 0.04, Total: 4.04}},
    {name: "London Broil", weight: {Mon: 0.06, Tue: 0.09, Wed: 0.23, Thu: 0.42, Fri: 0.2, Total: 22.06}},
    {name: "Tofu w/ Spicy Meat Sauce", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Cheeseburgers on Donuts", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Chicken w/ Broccoli", weight: {Mon: 0.53, Tue: 0.17, Wed: 0.14, Thu: 0.08, Fri: 0.07, Total: 2.04}},
    {name: "Shrimp Parmigiana", weight: {Mon: 0.06, Tue: 0.09, Wed: 0.15, Thu: 0.62, Fri: 0.09, Total: 3.09}},
    {name: "Shrimp Fra Diavlo", weight: {Mon: 0.09, Tue: 0.09, Wed: 0.13, Thu: 0.36, Fri: 0.34, Total: 1.99}},
    {name: "Ziti", weight: {Mon: 0.15, Tue: 0.11, Wed: 0.18, Thu: 0.23, Fri: 0.33, Total: 34.79}},
    {name: "Chicken Kiev", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Salmon", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "N.Y. Sirloin Steak", weight: {Mon: 0.0, Tue: 0.0, Wed: 0.0, Thu: 0.08, Fri: 0.92, Total: 21.28}},
    {name: "Sea Food Pasta", weight: {Mon: 0.04, Tue: 0.14, Wed: 0.09, Thu: 0.2, Fri: 0.54, Total: 5.89}},
    {name: "Chicken Fajitas", weight: {Mon: 0.12, Tue: 0.23, Wed: 0.46, Thu: 0.13, Fri: 0.06, Total: 1.96}},
    {name: "Turkey Enchiladas", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Steak ala Pizzaiola", weight: {Mon: 0.1, Tue: 0.25, Wed: 0.29, Thu: 0.32, Fri: 0.04, Total: 36.26}},
    {name: "BBQ Pork Ribs", weight: {Mon: 0.04, Tue: 0.2, Wed: 0.42, Thu: 0.32, Fri: 0.02, Total: 23.07}},
    {name: "Breakfast Dinner", weight: {Mon: 0.77, Tue: 0.16, Wed: 0.03, Thu: 0.01, Fri: 0.03, Total: 43.69}},
    {name: "Grilled Cheese", weight: {Mon: 0.48, Tue: 0.22, Wed: 0.12, Thu: 0.15, Fri: 0.03, Total: 6.11}},
    {name: "Baked Halibut", weight: {Mon: 0.12, Tue: 0.14, Wed: 0.17, Thu: 0.43, Fri: 0.14, Total: 1.03}},
    {name: "Beef Ragu", weight: {Mon: 0.15, Tue: 0.22, Wed: 0.38, Thu: 0.15, Fri: 0.11, Total: 0.98}},
    {name: "Grilled Marinated Flank Steak", weight: {Mon: 0.0, Tue: 0.0, Wed: 0.0, Thu: 0.08, Fri: 0.92, Total: 22.24}},
    {name: "Baked Marinated Chicken", weight: {Mon: 0.07, Tue: 0.29, Wed: 0.49, Thu: 0.13, Fri: 0.03, Total: 10.93}},
    {name: "Egg Plant Parmigiana", weight: {Mon: 0.31, Tue: 0.27, Wed: 0.28, Thu: 0.06, Fri: 0.07, Total: 41.06}},
    {name: "Italian Cannelloni", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Mustard Grilled Chicken", weight: {Mon: 0.33, Tue: 0.42, Wed: 0.17, Thu: 0.06, Fri: 0.03, Total: 5.06}},
    {name: "Home Made Gnocchi", weight: {Mon: 0.3, Tue: 0.42, Wed: 0.21, Thu: 0.04, Fri: 0.02, Total: 12.08}},
    {name: "Sea Food Risotto", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Vodka Orange Chicken", weight: {Mon: 0.01, Tue: 0.02, Wed: 0.13, Thu: 0.17, Fri: 0.66, Total: 14.63}},
    {name: "Brisket of Beef", weight: {Mon: 0.16, Tue: 0.09, Wed: 0.19, Thu: 0.3, Fri: 0.26, Total: 5.99}},
    {name: "Chicken Quesadillas", weight: {Mon: 0.42, Tue: 0.19, Wed: 0.26, Thu: 0.08, Fri: 0.04, Total: 3.02}},
    {name: "Pot Roast", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Southern Fried Chicken", weight: {Mon: 0.07, Tue: 0.35, Wed: 0.35, Thu: 0.19, Fri: 0.03, Total: 10.02}},
    {name: "Shrimp Creole", weight: {Mon: 0.05, Tue: 0.09, Wed: 0.22, Thu: 0.46, Fri: 0.18, Total: 5.04}},
    {name: "Chicken Florentine", weight: {Mon: 0.13, Tue: 0.12, Wed: 0.13, Thu: 0.16, Fri: 0.45, Total: 0.96}},
    {name: "Ham Casserole", weight: {Mon: 0.42, Tue: 0.18, Wed: 0.16, Thu: 0.12, Fri: 0.12, Total: 1.02}},
    {name: "Cheese Ravioli Alfredo", weight: {Mon: 0.23, Tue: 0.29, Wed: 0.36, Thu: 0.09, Fri: 0.04, Total: 3.99}},
    {name: "Shrimp Alfredo", weight: {Mon: 0.12, Tue: 0.45, Wed: 0.2, Thu: 0.2, Fri: 0.04, Total: 4.05}},
    {name: "Greek Beef Tortilla", weight: {Mon: 0.17, Tue: 0.38, Wed: 0.22, Thu: 0.13, Fri: 0.1, Total: 1.01}},
    {name: "Steamed Brats in Beer", weight: {Mon: 0.37, Tue: 0.17, Wed: 0.36, Thu: 0.07, Fri: 0.03, Total: 6.0}},
    {name: "Chicken ala Parmigiana", weight: {Mon: 0.02, Tue: 0.03, Wed: 0.04, Thu: 0.1, Fri: 0.82, Total: 70.98}},
    {name: "Baked Ham", weight: {Mon: 0.31, Tue: 0.26, Wed: 0.32, Thu: 0.07, Fri: 0.03, Total: 5.01}},
    {name: "Chicken Phylo Parcels", weight: {Mon: 0.15, Tue: 0.47, Wed: 0.23, Thu: 0.09, Fri: 0.05, Total: 2.01}}
  ],
  main2_choices: {
    "N.Y. Sirloin Steak": [
      {name: "Sea Food Pasta", weight: 0.05},
      {name: null, weight: 0.95}
    ],
    "Sea Food Pasta": [
      {name: "N.Y. Sirloin Steak", weight: 0.17},
      {name: "Vodka Orange Chicken", weight: 0.17},
      {name: "Salmon alla Puttanesca", weight: 0.17},
      {name: null, weight: 0.5}
    ],
    "Sea Food Risotto": [
      {name: "Roast Prime Ribs of Beef", weight: 0.9},
      {name: null, weight: 0.1}
    ],
    "Roast Prime Ribs of Beef": [
      {name: "Sea Food Risotto", weight: 0.25},
      {name: null, weight: 0.75}
    ],
    "Grilled Cheese": [
      {name: "BBQ Hamburgers Cheeseburgers Hot Dogs", weight: 0.17},
      {name: "Cheeseburgers on Donuts", weight: 0.17},
      {name: "Pigs in Blankets", weight: 0.17},
      {name: "BBQ Pulled Pork", weight: 0.17},
      {name: null, weight: 0.33}
    ],
    "BBQ Hamburgers Cheeseburgers Hot Dogs": [
      {name: "Grilled Cheese", weight: 0.03},
      {name: "Bratwurst", weight: 0.03},
      {name: "Hot Sausage", weight: 0.58},
      {name: "Steamed Brats in Beer", weight: 0.03},
      {name: null, weight: 0.33}
    ],
    "Vodka Orange Chicken": [
      {name: "Sea Food Pasta", weight: 0.07},
      {name: "Ziti", weight: 0.07},
      {name: "Garlic Shrimp Pasta", weight: 0.07},
      {name: null, weight: 0.8}
    ],
    "Pasta w/ Meatballs": [
      {name: "Hot Sausage", weight: 0.07},
      {name: null, weight: 0.93}
    ],
    "Hot Sausage": [
      {name: "Pasta w/ Meatballs", weight: 0.03},
      {name: "Ziti", weight: 0.16},
      {name: "Mardi Gras Dinner", weight: 0.03},
      {name: "BBQ Hamburgers Cheeseburgers Hot Dogs", weight: 0.66},
      {name: "Stuffed Cheese Shells", weight: 0.03},
      {name: null, weight: 0.09}
    ],
    "Chili Con Carne": [
      {name: "Hot Hot Chicken Wings", weight: 0.33},
      {name: "Swedish Meat Balls", weight: 0.17},
      {name: null, weight: 0.5}
    ],
    "Hot Hot Chicken Wings": [
      {name: "Chili Con Carne", weight: 0.03},
      {name: "Home Made Calzones", weight: 0.05},
      {name: "Corned Beef and Cabbage", weight: 0.02},
      {name: "Pizza w/ Everything", weight: 0.84},
      {name: "Chicken Pesto", weight: 0.02},
      {name: "Cuban Sandwiches", weight: 0.02},
      {name: null, weight: 0.03}
    ],
    "Home Made Calzones": [
      {name: "Hot Hot Chicken Wings", weight: 0.2},
      {name: null, weight: 0.8}
    ],
    "Ziti": [
      {name: "Chicken ala Parmigiana", weight: 0.26},
      {name: "Salmon alla Puttanesca", weight: 0.06},
      {name: "Hot Sausage", weight: 0.14},
      {name: "Steak ala Pizzaiola", weight: 0.11},
      {name: "Egg Plant Parmigiana", weight: 0.03},
      {name: "Beef Ragu", weight: 0.03},
      {name: "Bourbon Chicken", weight: 0.06},
      {name: "Meat Loaf", weight: 0.03},
      {name: "Vodka Orange Chicken", weight: 0.03},
      {name: "Chicken Golden Nuggets", weight: 0.03},
      {name: "Pork Chops", weight: 0.03},
      {name: "Baked Ham", weight: 0.03},
      {name: null, weight: 0.17}
    ],
    "Chicken ala Parmigiana": [
      {name: "Ziti", weight: 0.12},
      {name: "Egg Plant Parmigiana", weight: 0.01},
      {name: null, weight: 0.86}
    ],
    "Egg Plant Parmigiana": [
      {name: "Corned Beef and Cabbage", weight: 0.02},
      {name: "Chicken ala Parmigiana", weight: 0.02},
      {name: "Ziti", weight: 0.02},
      {name: null, weight: 0.93}
    ],
    "Corned Beef and Cabbage": [
      {name: "Egg Plant Parmigiana", weight: 0.03},
      {name: "Hot Hot Chicken Wings", weight: 0.03},
      {name: null, weight: 0.94}
    ],
    "Pizza w/ Everything": [
      {name: "Hot Hot Chicken Wings", weight: 0.84},
      {name: "Greek Beef Tortilla", weight: 0.02},
      {name: "Chicken Pesto", weight: 0.05},
      {name: null, weight: 0.09}
    ],
    "Salmon alla Puttanesca": [
      {name: "Ziti", weight: 0.17},
      {name: "Sea Food Pasta", weight: 0.08},
      {name: "Garlic Shrimp Pasta", weight: 0.25},
      {name: null, weight: 0.5}
    ],
    "Greek Beef Tortilla": [
      {name: "Pizza w/ Everything", weight: 0.9},
      {name: null, weight: 0.1}
    ],
    "Swedish Meat Balls": [
      {name: "Chili Con Carne", weight: 0.04},
      {name: null, weight: 0.96}
    ],
    "Shrimp Creole": [
      {name: "Bourbon Chicken", weight: 0.2},
      {name: null, weight: 0.8}
    ],
    "Bourbon Chicken": [
      {name: "Shrimp Creole", weight: 0.03},
      {name: "Ziti", weight: 0.06},
      {name: "Scallops", weight: 0.03},
      {name: null, weight: 0.88}
    ],
    "Falafel on Pita": [
      {name: "BBQ Pulled Pork", weight: 0.25},
      {name: null, weight: 0.75}
    ],
    "BBQ Pulled Pork": [
      {name: "Falafel on Pita", weight: 0.03},
      {name: "Cheeseburgers on Donuts", weight: 0.03},
      {name: "Pigs in Blankets", weight: 0.03},
      {name: "Grilled Cheese", weight: 0.03},
      {name: null, weight: 0.9}
    ],
    "London Broil": [
      {name: "Pierogis", weight: 0.05},
      {name: null, weight: 0.95}
    ],
    "Pierogis": [
      {name: "London Broil", weight: 0.25},
      {name: null, weight: 0.75}
    ],
    "Cheeseburgers on Donuts": [
      {name: "Pigs in Blankets", weight: 1.0},
      {name: "Grilled Cheese", weight: 1.0},
      {name: "BBQ Pulled Pork", weight: 1.0},
      {name: null, weight: 0}
    ],
    "Pigs in Blankets": [
      {name: "Cheeseburgers on Donuts", weight: 1.0},
      {name: "Grilled Cheese", weight: 1.0},
      {name: "BBQ Pulled Pork", weight: 1.0},
      {name: null, weight: 0}
    ],
    "Bratwurst": [
      {name: "BBQ Hamburgers Cheeseburgers Hot Dogs", weight: 0.5},
      {name: null, weight: 0.5}
    ],
    "Mardi Gras Dinner": [
      {name: "Hot Sausage", weight: 1.0},
      {name: null, weight: 0}
    ],
    "Coconut Shrimp": [
      {name: "Shrimp Parmigiana", weight: 0.5},
      {name: null, weight: 0.5}
    ],
    "Shrimp Parmigiana": [
      {name: "Coconut Shrimp", weight: 0.33},
      {name: null, weight: 0.67}
    ],
    "Steak ala Pizzaiola": [
      {name: "Ziti", weight: 0.11},
      {name: null, weight: 0.89}
    ],
    "Salmon": [
      {name: "Clam Chowder", weight: 0.9},
      {name: null, weight: 0.1}
    ],
    "Clam Chowder": [
      {name: "Salmon", weight: 0.5},
      {name: null, weight: 0.5}
    ],
    "Chicken Pesto": [
      {name: "Pizza w/ Everything", weight: 0.6},
      {name: "Hot Hot Chicken Wings", weight: 0.2},
      {name: null, weight: 0.2}
    ],
    "Cuban Sandwiches": [
      {name: "Hot Hot Chicken Wings", weight: 0.04},
      {name: null, weight: 0.96}
    ],
    "Steamed Brats in Beer": [
      {name: "BBQ Hamburgers Cheeseburgers Hot Dogs", weight: 0.17},
      {name: null, weight: 0.83}
    ],
    "Grilled Marinated Flank Steak": [
      {name: "Clams Casino", weight: 0.04},
      {name: null, weight: 0.96}
    ],
    "Clams Casino": [
      {name: "Grilled Marinated Flank Steak", weight: 1.0},
      {name: null, weight: 0}
    ],
    "Stuffed Cheese Shells": [
      {name: "Hot Sausage", weight: 0.25},
      {name: null, weight: 0.75}
    ],
    "Taco's on Hard Shells": [
      {name: "Mexican Pizza", weight: 0.33},
      {name: null, weight: 0.67}
    ],
    "Mexican Pizza": [
      {name: "Taco's on Hard Shells", weight: 0.5},
      {name: null, weight: 0.5}
    ],
    "Fried Shrimp": [
      {name: "Cheese Ravioli", weight: 0.9},
      {name: null, weight: 0.1}
    ],
    "Cheese Ravioli": [
      {name: "Fried Shrimp", weight: 0.02},
      {name: null, weight: 0.98}
    ],
    "Beef Ragu": [
      {name: "Ziti", weight: 0.9},
      {name: null, weight: 0.1}
    ],
    "Meat Loaf": [
      {name: "Ziti", weight: 0.5},
      {name: null, weight: 0.5}
    ],
    "Chicken Golden Nuggets": [
      {name: "Ziti", weight: 0.02},
      {name: null, weight: 0.98}
    ],
    "Scallops": [
      {name: "Bourbon Chicken", weight: 0.99},
      {name: null, weight: 0.01}
    ],
    "Garlic Shrimp Pasta": [
      {name: "Salmon alla Puttanesca", weight: 0.7},
      {name: "Vodka Orange Chicken", weight: 0.2},
      {name: null, weight: 0.1}
    ],
    "Pork Chops": [
      {name: "Ziti", weight: 0.14},
      {name: null, weight: 0.86}
    ],
    "Baked Ham": [
      {name: "Ziti", weight: 0.2},
      {name: null, weight: 0.8}
    ]
  },
  side_stops: [0.35, 0.88, 0.97, 1.0],
  side_choices: [
    {name: "Peas Onions Mushrooms", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.21, Mon: 0.3, Thu: 0.2, Fri: 0.05, Tue: 0.24},
      Mains: {
        Thu: {"Pizza w/ Everything": 100.81, "Hot Hot Chicken Wings": 112.87},
        Tue: {"Chicken Golden Nuggets": 14.21},
        Wed: {"Chicken Golden Nuggets": 24.76},
        Mon: {"Tomato Soup Grilled Cheese": 32.56}, Fri: {"N.Y. Sirloin Steak": 22.68}},
      Total: 100.96}},
    {name: "Broccoli", group: "Vegetables", weight: {
      Days: {Wed: 0.03, Mon: 0.04, Thu: 0.04, Fri: 0.86, Tue: 0.03},
      Mains: {
        Mon: {"Bourbon Chicken": 78.14, "Breakfast Dinner": 11.37},
        Wed: {"Egg Plant Parmigiana": 26.22},
        Fri: {"Salmon Lasagna": 160.6, "Ziti": 71.34, "Chicken ala Parmigiana": 33.08},
        Thu: {"Chicken ala Parmigiana": 84.36}},
      Total: 196.3}},
    {name: "Brushetta", group: "Bread", weight: {
      Days: {Wed: 0.23, Mon: 0.33, Thu: 0.11, Fri: 0.22, Tue: 0.11},
      Mains: {Mon: {"Bourbon Chicken": 83.17}},
      Total: 8.78}},
    {name: "Pasta", group: "Pasta", weight: {
      Days: {Wed: 0.24, Mon: 0.09, Thu: 0.21, Fri: 0.34, Tue: 0.12},
      Mains: {
        Fri: {"Bourbon Chicken": 13.26},
        Wed: {"Steak ala Pizzaiola": 48.12},
        Tue: {"Steak ala Pizzaiola": 56.41}},
      Total: 23.72}},
    {name: "Corn", group: "Vegetables", weight: {
      Days: {Wed: 0.27, Mon: 0.14, Thu: 0.28, Fri: 0.07, Tue: 0.24},
      Mains: {
        Tue: {"Corned Beef and Cabbage": 225.78, "Roast Pork": 138.13},
        Thu: {"BBQ Pork Ribs": 32.11, "BBQ Pulled Pork": 63.66, "Roast Turkey Dinner": 40.41},
        Wed: {"BBQ Pork Ribs": 106.04, "Baked Marinated Chicken": 61.0, "BBQ Pulled Pork": 30.15},
        Mon: {"Chicken Quesadillas": 108.3}},
      Total: 105.52}},
    {name: "Tomato Soup", group: "Soup", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Styr Fry Veggie", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.12, Mon: 0.17, Thu: 0.32, Fri: 0.17, Tue: 0.21},
      Mains: {Fri: {"Roast Turkey Dinner": 19.33}},
      Total: 24.58}},
    {name: "Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.14, Mon: 0.33, Thu: 0.28, Fri: 0.09, Tue: 0.15},
      Mains: {Mon: {"BBQ Hamburgers Cheeseburgers Hot Dogs": 16.96, "Hot Sausage": 33.21}},
      Total: 20.94}},
    {name: "Herb Baked Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.14, Mon: 0.29, Thu: 0.14, Fri: 0.14, Tue: 0.29},
      Mains: {}, Total: 7.13}},
    {name: "Pizza Pepperoni Bread", group: "Bread", weight: {
      Days: {Wed: 0.27, Mon: 0.08, Thu: 0.21, Fri: 0.21, Tue: 0.23},
      Mains: {
        Tue: {"Baked Lasagna": 38.49},
        Fri: {"Chicken ala Parmigiana": 7.62},
        Thu: {"Hot Sausage": 38.95, "Ziti": 50.5, "Baked Lasagna": 130.44},
        Mon: {"Cheese Ravioli": 70.53},
        Wed: {"Baked Lasagna": 67.67, "Cheese Ravioli": 33.96}},
      Total: 36.24}},
    {name: "Green Beans", group: "Vegetables", weight: {
      Days: {Wed: 0.2, Mon: 0.22, Thu: 0.23, Fri: 0.08, Tue: 0.27},
      Mains: {
        Thu: {"Ziti": 91.15, "Pizza w/ Everything": 81.09, "Hot Hot Chicken Wings": 64.47},
        Wed: {"Roast Leg of Lamb": 53.69, "Corned Beef and Cabbage": 103.84},
        Mon: {"Breakfast Dinner": 21.89},
        Fri: {"Ziti": 41.28}, Tue: {"Baked Lasagna": 35.73}},
      Total: 154.89}},
    {name: "Lyonnaise Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.22, Mon: 0.32, Thu: 0.08, Fri: 0.15, Tue: 0.24},
      Mains: {Wed: {"Pork Chops": 102.38}},
      Total: 13.05}},
    {name: "Mixed Vegetable", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.21, Mon: 0.32, Thu: 0.22, Fri: 0.06, Tue: 0.19},
      Mains: {
        Wed: {"Ziti": 114.92, "Chicken Golden Nuggets": 23.75},
        Tue: {"Chicken Fettuccine Alfredo": 82.28},
        Mon: {"Breakfast Dinner": 45.52}},
      Total: 98.45}},
    {name: "California Veggies", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.15, Mon: 0.15, Thu: 0.15, Fri: 0.41, Tue: 0.15},
      Mains: {}, Total: 6.8}},
    {name: "Pasta Vodka", group: "Pasta", weight: {
      Days: {Wed: 0.09, Mon: 0.09, Thu: 0.28, Fri: 0.44, Tue: 0.09},
      Mains: {Fri: {"Chicken ala Parmigiana": 24.14, "Vodka Orange Chicken": 30.01}},
      Total: 10.59}},
    {name: "Veggie Marinara", group: "Vegetables", weight: {
      Days: {Wed: 0.2, Mon: 0.2, Thu: 0.1, Fri: 0.1, Tue: 0.41},
      Mains: {}, Total: 10.25}},
    {name: "Home Fried Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.26, Mon: 0.41, Thu: 0.09, Fri: 0.06, Tue: 0.18},
      Mains: {
        Tue: {"Chicken Golden Nuggets": 14.76, "BBQ Pork Ribs": 77.01},
        Wed: {"BBQ Baked Meat Loaf": 146.89},
        Mon: {"Breakfast Dinner": 118.78, "BBQ Baked Meat Loaf": 48.64, "Breakfast Burrito": 56.92}},
      Total: 45.57}},
    {name: "Squash", group: "Vegetables", weight: {
      Days: {Wed: 0.15, Mon: 0.39, Thu: 0.15, Fri: 0.07, Tue: 0.23},
      Mains: {}, Total: 13.38}},
    {name: "Sweet Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.28, Mon: 0.31, Thu: 0.1, Fri: 0.1, Tue: 0.21},
      Mains: {Wed: {"Baked Ham": 126.44}},
      Total: 10.04}},
    {name: "Broccoli w/ Cheese Sauce", group: "Vegetables", weight: {
      Days: {Wed: 0.14, Mon: 0.3, Thu: 0.14, Fri: 0.27, Tue: 0.14},
      Mains: {}, Total: 6.97}},
    {name: "Carrots", group: "Vegetables", weight: {
      Days: {Wed: 0.3, Mon: 0.17, Thu: 0.27, Fri: 0.04, Tue: 0.23},
      Mains: {
        Tue: {"Chicken Sun Dried Tomato": 104.16, "Hot Sausage": 25.97},
        Thu: {"Pizza w/ Everything": 12.19},
        Mon: {"Breakfast Dinner": 29.39}},
      Total: 79.82}},
    {name: "Sliced Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.26, Mon: 0.16, Thu: 0.37, Fri: 0.04, Tue: 0.18},
      Mains: {
        Tue: {"Chicken Golden Nuggets": 18.78},
        Wed: {"Cuban Sandwiches": 59.61, "Chicken Golden Nuggets": 47.55, "Baked Marinated Chicken": 31.5},
        Thu: {"BBQ Pulled Pork": 41.75, "Chicken Golden Nuggets": 60.38}},
      Total: 26.97}},
    {name: "Caesar Salad", group: "Salad", weight: {
      Days: {Wed: 0.15, Mon: 0.34, Thu: 0.26, Fri: 0.05, Tue: 0.2},
      Mains: {
        Wed: {"London Broil": 88.13},
        Tue: {"Hot Sausage": 24.48}},
      Total: 18.76}},
    {name: "Pasta w/ Herb Sauce", group: "Pasta", weight: {
      Days: {Wed: 0.11, Mon: 0.23, Thu: 0.11, Fri: 0.31, Tue: 0.23},
      Mains: {}, Total: 8.93}},
    {name: "Swiss Chard", group: "Vegetables", weight: {
      Days: {Wed: 0.26, Mon: 0.16, Thu: 0.14, Fri: 0.1, Tue: 0.34},
      Mains: {
        Wed: {"Cheese Ravioli": 30.95},
        Fri: {"Baked Lasagna": 71.85, "Chicken ala Parmigiana": 8.63}},
      Total: 58.19}},
    {name: "Veggie Tempura", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.17, Mon: 0.26, Thu: 0.32, Fri: 0.08, Tue: 0.17},
      Mains: {}, Total: 12.15}},
    {name: "Zucchini", group: "Vegetables", weight: {
      Days: {Wed: 0.13, Mon: 0.16, Thu: 0.3, Fri: 0.12, Tue: 0.28},
      Mains: {Mon: {"BBQ Hamburgers Cheeseburgers Hot Dogs": 20.98}},
      Total: 22.74}},
    {name: "Garlic Whipped Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.19, Mon: 0.2, Thu: 0.19, Fri: 0.26, Tue: 0.16},
      Mains: {
        Wed: {"Roast Turkey Dinner": 151.93, "Roast Beef Dinner": 114.09},
        Thu: {"Roast Turkey Dinner": 130.31},
        Mon: {"Roast Turkey Dinner": 94.63},
        Tue: {"Roast Pork": 161.35},
        Fri: {"Roast Turkey Dinner": 149.73}},
      Total: 25.29}},
    {name: "Pasta Marinara", group: "Pasta", weight: {
      Days: {Wed: 0.15, Mon: 0.06, Thu: 0.27, Fri: 0.47, Tue: 0.06},
      Mains: {
        Thu: {"Chicken ala Parmigiana": 52.06},
        Wed: {"Egg Plant Parmigiana": 30.23},
        Fri: {"Chicken ala Parmigiana": 71.22}},
      Total: 17.26}},
    {name: "Cole Slaw", group: "Dips etc.", weight: {
      Days: {Wed: 0.28, Mon: 0.09, Thu: 0.23, Fri: 0.09, Tue: 0.29},
      Mains: {Thu: {"BBQ Pulled Pork": 22.49}},
      Total: 10.59}},
    {name: "Fried Pickles", group: "Fried Sides", weight: {
      Days: {Wed: 0.14, Mon: 0.44, Thu: 0.14, Fri: 0.14, Tue: 0.14},
      Mains: {}, Total: 7.13}},
    {name: "Mushrooms Onions Peppers", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.18, Mon: 0.12, Thu: 0.28, Fri: 0.27, Tue: 0.14},
      Mains: {
        Tue: {"Hot Sausage": 40.07, "BBQ Hamburgers Cheeseburgers Hot Dogs": 36.51},
        Fri: {"London Broil": 35.14, "Grilled Marinated Flank Steak": 94.58, "N.Y. Sirloin Steak": 13.63},
        Thu: {"London Broil": 88.06}},
      Total: 16.73}},
    {name: "Pasta Pesto", group: "Pasta", weight: {
      Days: {Wed: 0.15, Mon: 0.2, Thu: 0.15, Fri: 0.36, Tue: 0.14},
      Mains: {
        Mon: {"Steak ala Pizzaiola": 122.52, "Egg Plant Parmigiana": 19.35},
        Wed: {"Egg Plant Parmigiana": 28.23},
        Thu: {"Chicken ala Parmigiana": 52.06},
        Fri: {"Bourbon Chicken": 16.65, "Chicken ala Parmigiana": 27.8}},
      Total: 30.54}},
    {name: "Calliflower", group: "Vegetables", weight: {
      Days: {Wed: 0.19, Mon: 0.3, Thu: 0.31, Fri: 0.06, Tue: 0.15},
      Mains: {
        Mon: {"Tomato Soup Grilled Cheese": 22.02},
        Tue: {"Egg Plant Parmigiana": 23.69, "Cheese Ravioli": 22.53},
        Thu: {"Ziti": 45.48, "Cheese Ravioli": 76.52}},
      Total: 47.63}},
    {name: "German Sauerkraut", group: "Dips etc.", weight: {
      Days: {Wed: 0.33, Mon: 0.23, Thu: 0.11, Fri: 0.11, Tue: 0.23},
      Mains: {}, Total: 9.14}},
    {name: "Guacamole", group: "Dips etc.", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.08, Tue: 0.25},
      Mains: {}, Total: 12.31}},
    {name: "② Baked Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.14, Mon: 0.04, Thu: 0.13, Fri: 0.63, Tue: 0.07},
      Mains: {
        Thu: {"London Broil": 38.35},
        Fri: {"Bourbon Chicken": 36.6, "Grilled Marinated Flank Steak": 32.7, "N.Y. Sirloin Steak": 113.51}},
      Total: 28.43}},
    {name: "Pasta Olive Oil Garlic", group: "Pasta", weight: {
      Days: {Wed: 0.13, Mon: 0.14, Thu: 0.18, Fri: 0.37, Tue: 0.18},
      Mains: {
        Wed: {"Egg Plant Parmigiana": 48.9},
        Mon: {"Egg Plant Parmigiana": 69.88},
        Thu: {"Steak ala Pizzaiola": 28.77},
        Tue: {"Steak ala Pizzaiola": 31.56, "Egg Plant Parmigiana": 44.46}},
      Total: 19.87}},
    {name: "Putine", group: "Potatoes", weight: {
      Days: {Wed: 0.36, Mon: 0.28, Thu: 0.18, Fri: 0.09, Tue: 0.09},
      Mains: {}, Total: 11.14}},
    {name: "Brussel Sprouts", group: "Vegetables", weight: {
      Days: {Wed: 0.23, Mon: 0.24, Thu: 0.15, Fri: 0.02, Tue: 0.36},
      Mains: {
        Wed: {"Cheese Ravioli": 61.74},
        Tue: {"Cuban Sandwiches": 22.43, "Chicken Golden Nuggets": 30.0},
        Mon: {"Cheese Ravioli": 39.49, "Chicken Golden Nuggets": 39.49}},
      Total: 53.53}},
    {name: "Spinash", group: "Vegetables", weight: {
      Days: {Wed: 0.29, Mon: 0.16, Thu: 0.28, Fri: 0.02, Tue: 0.24},
      Mains: {
        Tue: {"Egg Plant Parmigiana": 19.67},
        Wed: {"London Broil": 75.04, "Pasta w/ Meatballs": 54.58}},
      Total: 52.07}},
    {name: "Pasta Carbonara", group: "Pasta", weight: {
      Days: {Wed: 0.21, Mon: 0.07, Thu: 0.14, Fri: 0.38, Tue: 0.21},
      Mains: {}, Total: 14.62}},
    {name: "F.F. Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.27, Mon: 0.26, Thu: 0.15, Fri: 0.03, Tue: 0.29},
      Mains: {
        Fri: {"Sea Food Platter": 47.19},
        Tue: {"Cuban Sandwiches": 45.1, "BBQ Hamburgers Cheeseburgers Hot Dogs": 62.46},
        Wed: {"Chicken Golden Nuggets": 28.33, "BBQ Pork Ribs": 36.2, "Philly Cheese Steak": 68.94},
        Mon: {"Hot Sausage": 58.78, "Tomato Soup Grilled Cheese": 28.51, "BBQ Hamburgers Cheeseburgers Hot Dogs": 94.42},
        Thu: {"Cuban Sandwiches": 77.53}},
      Total: 98.73}},
    {name: "Caponata", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.17, Mon: 0.23, Thu: 0.32, Fri: 0.06, Tue: 0.23},
      Mains: {Thu: {"Pizza w/ Everything": 10.33}},
      Total: 18.1}},
    {name: "Stuffed Peppers", group: "Vegetables", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Potatoes Tarts", group: "Potatoes", weight: {
      Days: {Wed: 0.21, Mon: 0.33, Thu: 0.12, Fri: 0.11, Tue: 0.23},
      Mains: {
        Mon: {"Tomato Soup Grilled Cheese": 25.04},
        Wed: {"Chicken Golden Nuggets": 25.32, "BBQ Pork Ribs": 21.85},
        Tue: {"Cuban Sandwiches": 81.04, "Falafel on Pita": 73.99}},
      Total: 32.54}},
    {name: "Macaroni and Cheese", group: "Pasta", weight: {
      Days: {Wed: 0.25, Mon: 0.2, Thu: 0.2, Fri: 0.05, Tue: 0.29},
      Mains: {
        Mon: {"Chicken Golden Nuggets": 27.11},
        Tue: {"BBQ Hamburgers Cheeseburgers Hot Dogs": 31.49},
        Thu: {"BBQ Pulled Pork": 88.04},
        Wed: {"BBQ Pork Ribs": 19.84, "BBQ Pulled Pork": 37.92}},
      Total: 35.32}},
    {name: "Caprese Salad", group: "Salad", weight: {
      Days: {Wed: 0.17, Mon: 0.09, Thu: 0.34, Fri: 0.17, Tue: 0.23},
      Mains: {Tue: {"Cheese Ravioli": 27.55}},
      Total: 11.47}},
    {name: "Baked Beans", group: "Baked Beans", weight: {
      Days: {Wed: 0.23, Mon: 0.2, Thu: 0.38, Fri: 0.04, Tue: 0.15},
      Mains: {
        Mon: {"Breakfast Burrito": 80.27},
        Wed: {"Hot Hot Chicken Wings": 94.34, "BBQ Pulled Pork": 94.1},
        Tue: {"BBQ Pulled Pork": 49.08}},
      Total: 25.77}},
    {name: "Kale", group: "Vegetables", weight: {
      Days: {Wed: 0.11, Mon: 0.3, Thu: 0.23, Fri: 0.06, Tue: 0.3},
      Mains: {}, Total: 17.46}},
    {name: "Artichokes", group: "Artichokes", weight: {
      Days: {Wed: 0.14, Mon: 0.29, Thu: 0.14, Fri: 0.14, Tue: 0.29},
      Mains: {}, Total: 7.13}},
    {name: "Macaroni Salad", group: "Potatoes Salad", weight: {
      Days: {Wed: 0.5, Mon: 0.12, Thu: 0.12, Fri: 0.12, Tue: 0.12},
      Mains: {}, Total: 8.02}},
    {name: "Oven Brown Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.33, Mon: 0.12, Thu: 0.16, Fri: 0.16, Tue: 0.24},
      Mains: {
        Wed: {"Roast Leg of Lamb": 33.38},
        Thu: {"Roast Leg of Lamb": 116.38}},
      Total: 17.54}},
    {name: "Onion Rings", group: "Fried Sides", weight: {
      Days: {Wed: 0.12, Mon: 0.26, Thu: 0.37, Fri: 0.12, Tue: 0.12},
      Mains: {}, Total: 8.03}},
    {name: "Spanish Rice", group: "Rice", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Thu: 0.28, Fri: 0.07, Tue: 0.37},
      Mains: {}, Total: 14.26}},
    {name: "Pasta Fasula", group: "Pasta", weight: {
      Days: {Wed: 0.11, Mon: 0.34, Thu: 0.11, Fri: 0.11, Tue: 0.34},
      Mains: {}, Total: 9.25}},
    {name: "Caesar Salad w/ Chicken", group: "Salad", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.33, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.98}},
    {name: "Garlic Bread", group: "Bread", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.09, Fri: 0.09, Tue: 0.32},
      Mains: {
        Tue: {"Cheese Ravioli": 22.53, "Hot Sausage": 20.46},
        Mon: {"Cheese Ravioli": 30.13}},
      Total: 21.63}},
    {name: "Risotto", group: "Pasta", weight: {
      Days: {Wed: 0.22, Mon: 0.34, Thu: 0.11, Fri: 0.11, Tue: 0.22},
      Mains: {}, Total: 9.2}},
    {name: "Potatoes Salad", group: "Potatoes Salad", weight: {
      Days: {Wed: 0.34, Mon: 0.12, Thu: 0.2, Fri: 0.16, Tue: 0.18},
      Mains: {Thu: {"BBQ Pulled Pork": 35.02}},
      Total: 17.61}},
    {name: "Roast Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.41, Mon: 0.17, Thu: 0.16, Fri: 0.08, Tue: 0.17},
      Mains: {}, Total: 12.14}},
    {name: "Asparagus", group: "Vegetables", weight: {
      Days: {Wed: 0.12, Mon: 0.19, Thu: 0.34, Fri: 0.17, Tue: 0.17},
      Mains: {
        Thu: {"Steak ala Pizzaiola": 26.76},
        Tue: {"Moroccan Style Chicken": 54.23}},
      Total: 16.32}},
    {name: "Pasta alla Puttanesca", group: "Pasta", weight: {
      Days: {Wed: 0.15, Mon: 0.15, Thu: 0.15, Fri: 0.41, Tue: 0.15},
      Mains: {}, Total: 6.8}},
    {name: "Onions", group: "Vegetables", weight: {
      Days: {Wed: 0.25, Mon: 0.38, Thu: 0.12, Fri: 0.12, Tue: 0.12},
      Mains: {}, Total: 8.14}},
    {name: "Salad", group: "Salad", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Baked Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.18, Mon: 0.06, Thu: 0.22, Fri: 0.48, Tue: 0.06},
      Mains: {
        Fri: {"N.Y. Sirloin Steak": 31.03, "Grilled Marinated Flank Steak": 69.64, "London Broil": 63.18},
        Thu: {"London Broil": 63.33}},
      Total: 16.84}},
    {name: "Rice", group: "Rice", weight: {
      Days: {Wed: 0.12, Mon: 0.18, Thu: 0.17, Fri: 0.16, Tue: 0.37},
      Mains: {}, Total: 17.21}},
    {name: "Egg Plant Marinara", group: "Egg Plant", weight: {
      Days: {Wed: 0.26, Mon: 0.08, Thu: 0.34, Fri: 0.24, Tue: 0.08},
      Mains: {}, Total: 11.77}},
    {name: "Boiled Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.33, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.98}},
    {name: "Veggie Risotto", group: "Pasta", weight: {
      Days: {Wed: 0.14, Mon: 0.37, Thu: 0.21, Fri: 0.07, Tue: 0.22},
      Mains: {}, Total: 14.36}},
    {name: "Mexican Corn", group: "Vegetables", weight: {
      Days: {Wed: 0.1, Mon: 0.2, Thu: 0.29, Fri: 0.1, Tue: 0.31},
      Mains: {}, Total: 10.15}},
    {name: "Sweet Fried Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.1, Mon: 0.1, Thu: 0.2, Fri: 0.1, Tue: 0.49},
      Mains: {Tue: {"Chicken Golden Nuggets": 18.78}},
      Total: 9.83}},
    {name: "Pasta Primavera", group: "Pasta", weight: {
      Days: {Wed: 0.21, Mon: 0.12, Thu: 0.2, Fri: 0.11, Tue: 0.36},
      Mains: {
        Thu: {"Steak ala Pizzaiola": 28.77},
        Wed: {"Steak ala Pizzaiola": 70.21}},
      Total: 17.56}},
    {name: "Pasta Alfredo", group: "Pasta", weight: {
      Days: {Wed: 0.19, Mon: 0.09, Thu: 0.19, Fri: 0.43, Tue: 0.09},
      Mains: {}, Total: 10.6}},
    {name: "Mashed Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.13, Mon: 0.13, Thu: 0.25, Fri: 0.24, Tue: 0.26},
      Mains: {}, Total: 7.94}},
    {name: "Brushetta Bread", group: "Bread", weight: {
      Days: {Wed: 0.28, Mon: 0.21, Thu: 0.2, Fri: 0.1, Tue: 0.21},
      Mains: {Wed: {"Brushetta Chicken": 62.27}},
      Total: 9.83}},
    {name: "Brown Rice", group: "Rice", weight: {
      Days: {Wed: 0.14, Mon: 0.44, Thu: 0.14, Fri: 0.14, Tue: 0.14},
      Mains: {}, Total: 7.13}},
    {name: "Lima Beans", group: "Vegetables", weight: {
      Days: {Wed: 0.26, Mon: 0.3, Thu: 0.09, Fri: 0.09, Tue: 0.27},
      Mains: {Mon: {"BBQ Hamburgers Cheeseburgers Hot Dogs": 19.97, "Hot Sausage": 36.22}},
      Total: 11.59}},
    {name: "Sun Dried Tomato Pasta", group: "Pasta", weight: {
      Days: {Wed: 0.19, Mon: 0.2, Thu: 0.12, Fri: 0.38, Tue: 0.1},
      Mains: {
        Fri: {"Vodka Orange Chicken": 28.01, "Chicken ala Parmigiana": 16.25},
        Thu: {"Steak ala Pizzaiola": 29.77}},
      Total: 20.69}},
    {name: "Pasta Salad", group: "Potatoes Salad", weight: {
      Days: {Wed: 0.4, Mon: 0.2, Thu: 0.1, Fri: 0.1, Tue: 0.2},
      Mains: {}, Total: 10.15}},
    {name: "Split Pea Soup", group: "Soup", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Minestrone", group: "Soup", weight: {
      Days: {Wed: 0.14, Mon: 0.29, Thu: 0.28, Fri: 0.14, Tue: 0.14},
      Mains: {}, Total: 7.05}},
    {name: "Broccoli Normandy", group: "Vegetables", weight: {
      Days: {Wed: 0.09, Mon: 0.09, Thu: 0.18, Fri: 0.46, Tue: 0.18},
      Mains: {Fri: {"Bourbon Chicken": 16.27}},
      Total: 11.27}},
    {name: "Escarole w/ Beans", group: "Mixed Vegetable", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Refried Beans", group: "Baked Beans", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Rice Pilaf", group: "Rice", weight: {
      Days: {Wed: 0.15, Mon: 0.15, Thu: 0.15, Fri: 0.15, Tue: 0.41},
      Mains: {Tue: {"Moroccan Style Chicken": 54.23}},
      Total: 6.78}},
    {name: "Pesto Bread", group: "Bread", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.34},
      Mains: {}, Total: 6.06}},
    {name: "Rice Soup", group: "Soup", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Ciabatta Bread", group: "Bread", weight: {
      Days: {Wed: 0.22, Mon: 0.34, Thu: 0.11, Fri: 0.11, Tue: 0.22},
      Mains: {}, Total: 9.2}},
    {name: "Chips", group: "Potatoes", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Thu: 0.43, Fri: 0.14, Tue: 0.14},
      Mains: {}, Total: 6.97}},
    {name: "French Onions Soup", group: "Soup", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Butternut Soup", group: "Soup", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Corn Bread", group: "Bread", weight: {
      Days: {Wed: 0.14, Mon: 0.29, Thu: 0.14, Fri: 0.14, Tue: 0.29},
      Mains: {}, Total: 7.13}},
    {name: "Donuts Hole", group: "Fried Sides", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Thu: 0.14, Fri: 0.14, Tue: 0.44},
      Mains: {}, Total: 7.12}},
    {name: "Tater Tots", group: "Potatoes", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Hummus", group: "Dips etc.", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.34},
      Mains: {}, Total: 6.06}},
    {name: "Sicilian Egg Plant", group: "Egg Plant", weight: {
      Days: {Wed: 0.31, Mon: 0.07, Thu: 0.26, Fri: 0.12, Tue: 0.25},
      Mains: {
        Tue: {"Baked Lasagna": 42.51},
        Wed: {"Baked Lasagna": 43.78}},
      Total: 15.37}},
    {name: "Oven Roast Tomatoes", group: "Vegetables", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.34},
      Mains: {}, Total: 6.06}},
    {name: "Pasta Bolognase", group: "Pasta", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Potato Wedges", group: "Potatoes", weight: {
      Days: {Wed: 0.14, Mon: 0.29, Thu: 0.14, Fri: 0.14, Tue: 0.29},
      Mains: {}, Total: 7.13}},
    {name: "Chicken Noodle Soup", group: "Soup", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Beef Barley Soup", group: "Soup", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.33, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.98}},
    {name: "Biscuits", group: "Bread", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.34},
      Mains: {}, Total: 6.06}},
    {name: "Green Collards", group: "Vegetables", weight: {
      Days: {Wed: 0.28, Mon: 0.29, Thu: 0.14, Fri: 0.14, Tue: 0.14},
      Mains: {}, Total: 7.08}},
    {name: "Scalloped Mushrooms", group: "Vegetables", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Coffee Espresso", group: "After Dinner Drinks", weight: {
      Days: {Wed: 0.07, Mon: 0.07, Thu: 0.07, Fri: 0.72, Tue: 0.07},
      Mains: {}, Total: 0.9}},
    {name: "Brushetta Pasta", group: "Pasta", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.32, Tue: 0.17},
      Mains: {}, Total: 5.9}},
    {name: "Chips and Salsa", group: "Dips etc.", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Thu: 0.43, Fri: 0.14, Tue: 0.14},
      Mains: {}, Total: 6.97}},
    {name: "Corn Dogs", group: "Fried Sides", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.33, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.98}},
    {name: "Risotto Milanese", group: "Pasta", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.34},
      Mains: {}, Total: 6.06}},
    {name: "Cream of Corn", group: "Vegetables", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Spinach Popovers", group: "Vegetables", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.33, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.98}},
    {name: "Pasta Caprese", group: "Pasta", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Walsh Rabbit", group: "Bread", weight: {
      Days: {Wed: 0.15, Mon: 0.15, Thu: 0.15, Fri: 0.41, Tue: 0.15},
      Mains: {}, Total: 6.8}},
    {name: "Mozzarella Sticks", group: "Fried Sides", weight: {
      Days: {Wed: 0.22, Mon: 0.11, Thu: 0.11, Fri: 0.11, Tue: 0.45},
      Mains: {}, Total: 9.19}},
    {name: "Lemoncello", group: "After Dinner Drinks", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Beans Salad", group: "Potatoes Salad", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Lentil Soup", group: "Soup", weight: {
      Days: {Wed: 0.33, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.01}},
    {name: "Pesto Potatoes", group: "Potatoes", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.17, Tue: 0.34},
      Mains: {}, Total: 6.06}},
    {name: "Pasta w/ Bourbon Sauce", group: "Pasta", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Thu: 0.17, Fri: 0.32, Tue: 0.17},
      Mains: {}, Total: 5.9}},
    {name: "Vegetable Soup", group: "Soup", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Thu: 0.16, Fri: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}}
  ],
  dessert_choices: [
    {name: "Choccolate Brownies", group: "Choccolate Brownies", weight: {
      Days: {Wed: 0.26, Mon: 0.12, Fri: 0.19, Thu: 0.28, Tue: 0.15},
      Mains: {
        Thu: {"BBQ Hamburgers Cheeseburgers Hot Dogs": 113.63, "Corned Beef and Cabbage": 75.68, "Steak ala Pizzaiola": 34.51},
        Fri: {"Chicken ala Parmigiana": 24.2},
        Wed: {"Farmer's Pork Chops": 69.47, "Egg Plant Parmigiana": 33.77},
        Tue: {"Baked Lasagna": 37.12, "Cheese Ravioli": 17.96}},
      Total: 157.3}},
    {name: "Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.12, Mon: 0.51, Fri: 0.12, Thu: 0.12, Tue: 0.12},
      Mains: {}, Total: 8.2}},
    {name: "Strauberry Short Cake", group: "Strauberry Short Cake", weight: {
      Days: {Wed: 0.11, Mon: 0.49, Fri: 0.1, Thu: 0.19, Tue: 0.11},
      Mains: {Mon: {"Egg Plant Parmigiana": 18.72}},
      Total: 19.25}},
    {name: "Hot Fudge Sunday", group: "Hot Fudge Sunday", weight: {
      Days: {Wed: 0.36, Mon: 0.06, Fri: 0.02, Thu: 0.34, Tue: 0.22},
      Mains: {
        Wed: {"Steak ala Pizzaiola": 37.95},
        Tue: {"Home Made Gnocchi": 82.17},
        Thu: {"Hot Hot Chicken Wings": 49.93, "Ziti": 48.81, "Pizza w/ Everything": 60.39}},
      Total: 233.48}},
    {name: "Vanilla Pie", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Fri: 0.42, Thu: 0.14, Tue: 0.14},
      Mains: {}, Total: 6.93}},
    {name: "Ricotta Pie ala Moda", group: "Italian Desserts", weight: {
      Days: {Wed: 0.25, Mon: 0.13, Fri: 0.37, Thu: 0.13, Tue: 0.13},
      Mains: {}, Total: 7.96}},
    {name: "Pumpkins Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.18, Mon: 0.24, Fri: 0.27, Thu: 0.17, Tue: 0.14},
      Mains: {Fri: {"Roast Turkey Dinner": 77.65}},
      Total: 22.09}},
    {name: "Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.38, Mon: 0.25, Fri: 0.12, Thu: 0.12, Tue: 0.12},
      Mains: {}, Total: 8.12}},
    {name: "Cheese Cake", group: "Cheese Cake", weight: {
      Days: {Wed: 0.02, Mon: 0.07, Fri: 0.83, Thu: 0.06, Tue: 0.02},
      Mains: {
        Fri: {"Chicken ala Parmigiana": 18.31, "Grilled Marinated Flank Steak": 13.67, "Bourbon Chicken": 24.18, "N.Y. Sirloin Steak": 13.67}
      },
      Total: 58.86}},
    {name: "Choccolate Pudding", group: "Pudding", weight: {
      Days: {Wed: 0.2, Mon: 0.14, Fri: 0.13, Thu: 0.19, Tue: 0.34},
      Mains: {Tue: {"Roast Pork": 66.59}},
      Total: 15.03}},
    {name: "Choccolate Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.2, Mon: 0.42, Fri: 0.05, Thu: 0.15, Tue: 0.19},
      Mains: {Tue: {"Farmer's Pork Chops": 94.56}},
      Total: 61.52}},
    {name: "Choccolate Chips Cookies", group: "Choccolate Chips Cookies", weight: {
      Days: {Wed: 0.24, Mon: 0.4, Fri: 0.03, Thu: 0.05, Tue: 0.28},
      Mains: {
        Tue: {"Cheese Ravioli": 17.96},
        Thu: {"BBQ Pulled Pork": 26.01},
        Mon: {"Breakfast Dinner": 85.45, "Breakfast Burrito": 25.74}},
      Total: 90.9}},
    {name: "Cherry Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.05, Mon: 0.05, Fri: 0.78, Thu: 0.05, Tue: 0.05},
      Mains: {Fri: {"Salmon alla Puttanesca": 48.89, "Bourbon Chicken": 48.05}},
      Total: 18.56}},
    {name: "White Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.14, Mon: 0.19, Fri: 0.1, Thu: 0.22, Tue: 0.35},
      Mains: {
        Mon: {"Egg Plant Parmigiana": 20.74},
        Tue: {"Chicken Golden Nuggets": 38.35}},
      Total: 37.65}},
    {name: "Blueberry Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.06, Mon: 0.06, Fri: 0.45, Thu: 0.32, Tue: 0.12},
      Mains: {Fri: {"Salmon Lasagna": 14.67}},
      Total: 17.24}},
    {name: "Fresh Fruit Salad", group: "Fresh Fruit Salad", weight: {
      Days: {Wed: 0.19, Mon: 0.37, Fri: 0.03, Thu: 0.12, Tue: 0.28},
      Mains: {
        Wed: {"Chicken Golden Nuggets": 16.42},
        Mon: {"Breakfast Dinner": 21.93}},
      Total: 30.56}},
    {name: "Yeallow Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.18, Mon: 0.33, Fri: 0.04, Thu: 0.13, Tue: 0.33},
      Mains: {
        Wed: {"BBQ Hamburgers Cheeseburgers Hot Dogs": 36.54},
        Thu: {"Swedish Meat Balls": 110.51},
        Mon: {"Breakfast Burrito": 32.9, "Home Made Gnocchi": 80.19}},
      Total: 56.04}},
    {name: "Choccolate E'Clair", group: "Italian Desserts", weight: {
      Days: {Wed: 0.16, Mon: 0.29, Fri: 0.04, Thu: 0.21, Tue: 0.29},
      Mains: {}, Total: 25.39}},
    {name: "Zucchini Bars", group: "Zucchini Bars", weight: {
      Days: {Wed: 0.3, Mon: 0.19, Fri: 0.14, Thu: 0.05, Tue: 0.31},
      Mains: {Mon: {"Cheese Ravioli": 23.77}},
      Total: 20.32}},
    {name: "Apple Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.01, Mon: 0.01, Fri: 0.92, Thu: 0.04, Tue: 0.01},
      Mains: {
        Fri: {"Chicken ala Parmigiana": 27.6, "N.Y. Sirloin Steak": 38.35},
        Thu: {"Chicken ala Parmigiana": 57.27}},
      Total: 67.14}},
    {name: "Rice Pudding", group: "Pudding", weight: {
      Days: {Wed: 0.3, Mon: 0.2, Fri: 0.1, Thu: 0.1, Tue: 0.31},
      Mains: {}, Total: 10.27}},
    {name: "Pecan Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.12, Mon: 0.12, Fri: 0.54, Thu: 0.12, Tue: 0.12},
      Mains: {Fri: {"Grilled Marinated Flank Steak": 27.35}},
      Total: 8.69}},
    {name: "Apples Turn Over", group: "Apple Desserts", weight: {
      Days: {Wed: 0.21, Mon: 0.14, Fri: 0.07, Thu: 0.13, Tue: 0.44},
      Mains: {}, Total: 14.39}},
    {name: "Loukamades", group: "Greek Desserts", weight: {
      Days: {Wed: 0.18, Mon: 0.28, Fri: 0.06, Thu: 0.08, Tue: 0.41},
      Mains: {}, Total: 34.32}},
    {name: "Spanish Flan", group: "Spanish Flan", weight: {
      Days: {Wed: 0.13, Mon: 0.5, Fri: 0.06, Thu: 0.09, Tue: 0.21},
      Mains: {Mon: {"Tomato Soup Grilled Cheese": 22.95}},
      Total: 30.56}},
    {name: "Carrot Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.15, Mon: 0.3, Fri: 0.14, Thu: 0.19, Tue: 0.22},
      Mains: {
        Mon: {"Chicken Golden Nuggets": 25.94},
        Tue: {"Corned Beef and Cabbage": 33.01, "Egg Plant Parmigiana": 26.68},
        Thu: {"Roast Turkey Dinner": 37.71}},
      Total: 27.74}},
    {name: "Cream de Menth Parfeit", group: "Boozy Desserts", weight: {
      Days: {Wed: 0.18, Mon: 0.11, Fri: 0.04, Thu: 0.4, Tue: 0.27},
      Mains: {
        Thu: {"Hot Hot Chicken Wings": 41.02, "Pizza w/ Everything": 39.87}
      },
      Total: 27.95}},
    {name: "Choccolate Cream Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.39, Mon: 0.08, Fri: 0.15, Thu: 0.14, Tue: 0.24},
      Mains: {}, Total: 13.11}},
    {name: "Yougurt Perfeit", group: "Yougurt Perfeit", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Fri: 0.16, Thu: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Cannoli ala Moda", group: "Italian Desserts", weight: {
      Days: {Wed: 0.11, Mon: 0.11, Fri: 0.6, Thu: 0.13, Tue: 0.04},
      Mains: {}, Total: 27.31}},
    {name: "French Sielk Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.34, Mon: 0.17, Fri: 0.17, Thu: 0.17, Tue: 0.17},
      Mains: {}, Total: 6.02}},
    {name: "Lemon Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.26, Mon: 0.35, Fri: 0.03, Thu: 0.15, Tue: 0.21},
      Mains: {
        Thu: {"Cheese Ravioli": 80.05},
        Tue: {"Steak ala Pizzaiola": 28.51, "Chicken Golden Nuggets": 15.45},
        Mon: {"Tomato Soup Grilled Cheese": 53.87},
        Wed: {"Philly Cheese Steak": 66.1}},
      Total: 34.86}},
    {name: "Respberry Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.16, Mon: 0.16, Fri: 0.16, Thu: 0.16, Tue: 0.34},
      Mains: {}, Total: 6.08}},
    {name: "French Sielk Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Fri: 0.17, Thu: 0.32, Tue: 0.17},
      Mains: {}, Total: 5.89}},
    {name: "Banana Cream Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Fri: 0.42, Thu: 0.14, Tue: 0.14},
      Mains: {}, Total: 6.93}},
    {name: "Cookie Cream Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Fri: 0.17, Thu: 0.32, Tue: 0.17},
      Mains: {}, Total: 5.89}},
    {name: "Pumpkin Cake Roll", group: "Pumpkin Desserts", weight: {
      Days: {Wed: 0.29, Mon: 0.14, Fri: 0.14, Thu: 0.14, Tue: 0.29},
      Mains: {}, Total: 7.1}},
    {name: "Apple Tarts", group: "Apple Desserts", weight: {
      Days: {Wed: 0.18, Mon: 0.12, Fri: 0.06, Thu: 0.27, Tue: 0.37},
      Mains: {}, Total: 17.06}},
    {name: "Vanilla Cookies", group: "Cookies", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Fri: 0.16, Thu: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}},
    {name: "Rice Krispies Treats", group: "Rice Krispies Treats", weight: {
      Days: {Wed: 0.18, Mon: 0.18, Fri: 0.09, Thu: 0.17, Tue: 0.38},
      Mains: {}, Total: 11.21}},
    {name: "Tirami Sü", group: "Italian Desserts", weight: {
      Days: {Wed: 0.25, Mon: 0.26, Fri: 0.24, Thu: 0.12, Tue: 0.12},
      Mains: {}, Total: 8.06}},
    {name: "Root Beer Float", group: "Root Beer Float", weight: {
      Days: {Wed: 0.15, Mon: 0.15, Fri: 0.15, Thu: 0.41, Tue: 0.15},
      Mains: {}, Total: 6.78}},
    {name: "Pineapple and Pecan Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Fri: 0.33, Thu: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.97}},
    {name: "Zucchini Bread", group: "Zucchini Bread", weight: {
      Days: {Wed: 0.16, Mon: 0.16, Fri: 0.16, Thu: 0.16, Tue: 0.34},
      Mains: {}, Total: 6.08}},
    {name: "Coconut Cream Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Fri: 0.33, Thu: 0.17, Tue: 0.17},
      Mains: {}, Total: 5.97}},
    {name: "Greek Bakalava", group: "Greek Desserts", weight: {
      Days: {Wed: 0.23, Mon: 0.08, Fri: 0.38, Thu: 0.23, Tue: 0.08},
      Mains: {
        Wed: {"Roast Leg of Lamb": 38.98},
        Fri: {"Vodka Orange Chicken": 35.5}},
      Total: 12.22}},
    {name: "Spice Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.12, Mon: 0.39, Fri: 0.12, Thu: 0.24, Tue: 0.12},
      Mains: {}, Total: 8.03}},
    {name: "Lemon Pie", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.22, Mon: 0.34, Fri: 0.11, Thu: 0.11, Tue: 0.22},
      Mains: {}, Total: 9.23}},
    {name: "Fresh Fruit Sherbet", group: "Fresh Fruit Salad", weight: {
      Days: {Wed: 0.23, Mon: 0.11, Fri: 0.11, Thu: 0.31, Tue: 0.23},
      Mains: {}, Total: 8.88}},
    {name: "Pumpkins Bars", group: "Pumpkin Desserts", weight: {
      Days: {Wed: 0.14, Mon: 0.3, Fri: 0.14, Thu: 0.27, Tue: 0.14},
      Mains: {}, Total: 6.96}},
    {name: "Key Lime Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.13, Mon: 0.13, Fri: 0.37, Thu: 0.24, Tue: 0.13},
      Mains: {}, Total: 7.82}},
    {name: "Vanilla Pudding", group: "Pudding", weight: {
      Days: {Wed: 0.23, Mon: 0.11, Fri: 0.11, Thu: 0.31, Tue: 0.23},
      Mains: {}, Total: 8.88}},
    {name: "Apple Straudel", group: "Apple Desserts", weight: {
      Days: {Wed: 0.23, Mon: 0.21, Fri: 0.06, Thu: 0.15, Tue: 0.35},
      Mains: {Mon: {"Breakfast Dinner": 8.99}},
      Total: 18.09}},
    {name: "Peaches and Cream", group: "Peaches and Cream", weight: {
      Days: {Wed: 0.25, Mon: 0.26, Fri: 0.13, Thu: 0.24, Tue: 0.13},
      Mains: {}, Total: 7.98}},
    {name: "Banana Foster", group: "Boozy Desserts", weight: {
      Days: {Wed: 0.2, Mon: 0.15, Fri: 0.07, Thu: 0.13, Tue: 0.45},
      Mains: {Wed: {"London Broil": 140.96}},
      Total: 14.11}},
    {name: "Greek Spinach Pie", group: "Greek Desserts", weight: {
      Days: {Wed: 0.29, Mon: 0.14, Fri: 0.28, Thu: 0.14, Tue: 0.14},
      Mains: {}, Total: 6.99}},
    {name: "Greek Kataifi", group: "Greek Desserts", weight: {
      Days: {Wed: 0.17, Mon: 0.17, Fri: 0.17, Thu: 0.32, Tue: 0.17},
      Mains: {}, Total: 5.89}},
    {name: "Brownies Pie ala Moda", group: "Pie ala Moda", weight: {
      Days: {Wed: 0.14, Mon: 0.14, Fri: 0.42, Thu: 0.14, Tue: 0.14},
      Mains: {}, Total: 6.93}},
    {name: "Fresh Blueberry Coffee Cake", group: "Cake w/ Frosting", weight: {
      Days: {Wed: 0.16, Mon: 0.34, Fri: 0.16, Thu: 0.16, Tue: 0.16},
      Mains: {}, Total: 6.07}}
  ],
  variants: {
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
    "Chicken Sun Dried Tomato": ["Chicken Sun Dried Tomatoes over Farfalle"],
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
    "Pizza w/ Everything": ["Home Made Pizza w/ Everything", "Pizza w/ Everything Some Plain"],
    "Pork Chops": ["Canadian Pork Chops"],
    "Garlic Whipped Potatoes": ["Garlic Mashed Potatoes", "Whipped Potatoes"],
    "Sliced Potatoes": ["Oven Sliced Potatoes", "Sliced Oven Potatoes"],
    "Roast Turkey Dinner": ["Roast Turkey Dinner w/ Trimmings", "Roast Turkey Dinner w/ Everything"],
    "Salmon Lasagna": ["Baked Salmon Lasagna", "Salmon Lasagna w/ Benchmal Sauce"],
    "Philly Cheese Steak": ["Philly Steak Sandwiches"],
    "Cheese Ravioli": ["Baked Cheese Ravioli", "Cheese Ravioli Bolognase Sauce"],
    "Swedish Meat Balls": ["Swedish Meat Balls over Egg Noodles"],
    "Tomato Soup Grilled Cheese": ["Tomato Soup Grilled Cheese Bacon Tomato"],
    "Carrots": ["Baked Carrots"],
    "Green Beans": ["Beans"],
    "Kale": ["Saute Kale"],
    "Spinash": ["Steam Spinash"],
    "Ziti": ["Ziti Marinara", "Ziti w/ Meat Balls"],
    "Zucchini Bars": ["Home Made Zucchini Bars w/ Cream Cheese Frosting"],
    "Cuban Sandwiches": ["Cuban Sandwiches Pork Ham Provolone Cheese Mustard Pickles"],
    "BBQ Hamburgers Cheeseburgers Hot Dogs": ["BBQ Hamurgers Cheeseburgers", "BBQ Cheeseburgers Hot Dogs"],
    "Peas Onions Mushrooms": ["Peas Mushrooms Onions", "Peas", "Peas Onions"],
    "Pasta Marinara": ["Fettuccine Marinara", "Linguini Marinara", "Spaghetti Marinara"],
    "Pasta Pesto": ["Linguini Pesto", "Pesto Sauce Fettuccini"],
    "Pasta Vodka": ["Fettuccini Vodka", "Linguini Vodka"],
    "Pasta Olive Oil Garlic": ["Farfalle Olive Oil Garlic", "Linguini Olive Oil Garlic"],
    "Sun Dried Tomato Pasta": ["Farfalle Sun Dried Tomatoes", "Angel Hair w/ Sun Dried Tomatoes"],
    "Veggie Risotto": ["Risotto w/ Mushrooms"],
    "Sea Food Platter": ["Sea Food Platter Shrimp Haddock Tilapia Tartar Sauce"],
    "Breakfast Dinner": [
      "Breakfast Dinner Eggs Pancake Bacon Sausage",
      "Breakfast Dinner Eggs Pancake Bacon Corned Beef Hash",
      "Breakfast Dinner Pancake Eggs Bacon Sausage",
      "Breakfast Dinner Pancake Eggs Bacon Ham Hash Brown",
      "Breakfast Dinner Pancake Eggs Sausage Bacon",
      "Breakfast Dinner Bacon Pancakes Eggs Ham",
      "Breakfast Dinner French Toast Eggs Bacon Ham"
    ],
  },
  replacements: {
    "Brushetta Pasta": ["Brushetta Farfalle"],
    "Pasta Alfredo": ["Fettuccini Alfredo"],
    "Pasta Bolognaise": ["Fettuccine Bolognaise"],
    "Pasta Bolognase": ["Spaghetti ala Bolognase"],
    "Pasta Carbonara": ["Fettuccine Carbonara", "Penne ala Carbonara"],
    "Pasta w/ Herb Sauce": ["Angel Hair w/ Herb Sauce"],
    "Pasta w/ Meatballs": ["Rigatoni w/ Meat Balls", "Spaghetti w/ Meat Balls"]
  }
};

/*** TIMELINE DATA ***/
const timeline = {
  key_dishes: [
    {semester: '2007-B', dish: 'Roast Beef'},
    {semester: '2008-A', dish: 'Ziti'},
    {semester: '2008-B', dish: 'Garlic Shrimp Pasta'},
    {semester: '2009-A', dish: 'Baked Ham'},
    {semester: '2009-B', dish: 'Sea Food Pasta'},
    {semester: '2010-A', dish: 'Corned Beef and Cabbage'},
    {semester: '2010-B', dish: 'Swedish Meat Balls'},
    {semester: '2011-A', dish: 'Corned Beef and Cabbage'},
    {semester: '2011-B', dish: 'Breakfast Burrito'},
    {semester: '2012-A', dish: 'Bourbon Chicken'},
    {semester: '2012-B', dish: 'Chicken ala Parmigiana'},
    {semester: '2013-A', dish: 'Tomato Soup Grilled Cheese'},
    {semester: '2013-B', dish: 'Mustard Grilled Chicken'},
    {semester: '2014-A', dish: 'Chicken Enchiladas'},
    {semester: '2014-B', dish: 'BBQ Hamburgers, Cheeseburgers'},
    {semester: '2015-A', dish: 'Hot Sausage'},
    {semester: '2015-B', dish: 'Pistachio Kebab'},
    {semester: '2016-A', dish: 'Roast Leg of Lamb'},
    {semester: '2016-B', dish: 'Chicken Golden Nuggets'},
    {semester: '2017-A', dish: 'Hot Sausage'},
    {semester: '2017-B', dish: 'Chicken Fettuccine Alfredo'},
    {semester: '2018-A', dish: 'Cheese Ravioli'},
    {semester: '2018-B', dish: 'Salmon Lasagna'},
    {semester: '2019-A', dish: 'Swiss Steak'},
    {semester: '2019-B', dish: 'Cuban Sandwiches'},
    {semester: '2020-A', dish: 'Italian Braciole'}
  ],
  semester_counts: {
    Side: {
      '2007-B': 60, '2008-A': 17, '2008-B': 27, '2009-A': 9,
      '2009-B': 29, '2010-A': 56, '2010-B': 44, '2011-A': 17,
      '2011-B': 31, '2012-A': 70, '2012-B': 2, '2013-A': 6,
      '2013-B': 59, '2014-A': 38, '2014-B': 69, '2015-A': 44,
      '2015-B': 50, '2016-A': 31, '2016-B': 63, '2017-A': 60,
      '2017-B': 68, '2018-A': 65, '2018-B': 68, '2019-A': 68,
      '2019-B': 72, '2020-A': 22
    },
    Dessert: {
      '2007-B': 60, '2008-A': 21, '2008-B': 39, '2009-A': 8,
      '2009-B': 30, '2010-A': 61, '2010-B': 46, '2011-A': 28,
      '2011-B': 31, '2012-A': 3, '2013-A': 5,
      '2013-B': 64, '2014-A': 38, '2014-B': 73, '2015-A': 44,
      '2015-B': 51, '2016-A': 31, '2016-B': 65, '2017-A': 60,
      '2017-B': 69, '2018-A': 67, '2018-B': 71, '2019-A': 68,
      '2019-B': 72, '2020-A': 22
    },
    Total: {
      '2007-B': 61, '2008-A': 21, '2008-B': 42, '2009-A': 9,
      '2009-B': 30, '2010-A': 61, '2010-B': 46, '2011-A': 35,
      '2011-B': 33, '2012-A': 83, '2012-B': 29, '2013-A': 49,
      '2013-B': 65, '2014-A': 38, '2014-B': 73, '2015-A': 44,
      '2015-B': 51, '2016-A': 31, '2016-B': 65, '2017-A': 60,
      '2017-B': 69, '2018-A': 67, '2018-B': 72, '2019-A': 68,
      '2019-B': 72, '2020-A': 22
    },
    Main: {
      '2007-B': 61, '2008-A': 21, '2008-B': 42, '2009-A': 9,
      '2009-B': 30, '2010-A': 61, '2010-B': 46, '2011-A': 35,
      '2011-B': 33, '2012-A': 83, '2012-B': 29, '2013-A': 49,
      '2013-B': 65, '2014-A': 38, '2014-B': 73, '2015-A': 43,
      '2015-B': 51, '2016-A': 31, '2016-B': 65, '2017-A': 60,
      '2017-B': 69, '2018-A': 67, '2018-B': 72, '2019-A': 68,
      '2019-B': 72, '2020-A': 22
    },
    Friday: {
      '2007-B': 10, '2008-A': 5, '2008-B': 9, '2009-A': 2,
      '2009-B': 6, '2010-A': 14, '2010-B': 10, '2011-A': 6,
      '2011-B': 6, '2012-A': 18, '2012-B': 5, '2013-A': 9,
      '2013-B': 13, '2014-A': 7, '2014-B': 15, '2015-A': 9,
      '2015-B': 11, '2016-A': 7, '2016-B': 14, '2017-A': 12,
      '2017-B': 12, '2018-A': 14, '2018-B': 15, '2019-A': 14,
      '2019-B': 14, '2020-A': 5
    }
  },
  dish_semesters: {
    Main: {
      'Cheese Manicotti': {
        '2009-B': 1, '2012-B': 1, '2015-B': 2, '2016-A': 1, '2016-B': 1,
        '2018-B': 1
      },
      'Sizzling Fajitas': {
        '2009-B': 1, '2013-A': 1, '2013-B': 1, '2019-A': 1, '2019-B': 1
      },
      'BBQ Pork Ribs': {
        '2009-B': 1, '2010-A': 2, '2011-A': 1, '2011-B': 1, '2013-B': 1,
        '2014-A': 1, '2014-B': 1, '2015-A': 1, '2016-B': 1, '2017-A': 1,
        '2017-B': 3, '2018-A': 1, '2019-A': 2, '2019-B': 2, '2007-B': 2,
        '2008-B': 1
      },
      'Chicken ala Parmigiana': {
        '2009-B': 3, '2010-A': 4, '2010-B': 2, '2011-B': 1, '2011-A': 2,
        '2012-B': 3, '2013-A': 3, '2013-B': 2, '2014-A': 1, '2014-B': 4,
        '2015-A': 2, '2015-B': 2, '2016-A': 1, '2016-B': 4, '2017-A': 3,
        '2017-B': 3, '2009-A': 1, '2018-A': 3, '2018-B': 3, '2019-A': 3,
        '2019-B': 2, '2020-A': 1, '2012-A': 5, '2007-B': 3, '2008-A': 2,
        '2008-B': 3
      },
      'Hot Sausage': {
        '2009-B': 1, '2010-A': 1, '2010-B': 1, '2011-A': 1, '2012-B': 1,
        '2014-A': 2, '2014-B': 3, '2015-A': 3, '2016-A': 1, '2016-B': 2,
        '2017-A': 4, '2017-B': 1, '2009-A': 1, '2018-A': 3, '2018-B': 2,
        '2019-A': 3, '2019-B': 2
      },
      'N.Y. Sirloin Steak': {
        '2009-B': 1, '2010-A': 3, '2010-B': 1, '2011-B': 1, '2013-B': 2,
        '2014-A': 1, '2015-A': 1, '2015-B': 1, '2017-A': 2, '2017-B': 1,
        '2018-A': 2, '2018-B': 1, '2019-B': 1, '2007-B': 1, '2008-A': 1,
        '2008-B': 1, '2012-A': 1
      },
      'Chicken Sun Dried Tomato': {
        '2009-B': 2, '2010-B': 1, '2011-A': 1, '2011-B': 1, '2012-B': 1,
        '2012-A': 1, '2007-B': 2, '2008-B': 1
      },
      'Baked Lasagna': {
        '2009-B': 2, '2010-A': 2, '2010-B': 2, '2011-A': 1, '2012-B': 2,
        '2013-A': 1, '2013-B': 2, '2014-A': 1, '2014-B': 3, '2016-B': 1,
        '2017-A': 1, '2017-B': 1, '2009-A': 1, '2018-A': 1, '2018-B': 1,
        '2019-A': 1, '2012-A': 3, '2007-B': 2, '2008-B': 2
      },
      'Pizza w/ Everything': {
        '2009-B': 1, '2010-A': 4, '2010-B': 2, '2011-A': 3, '2011-B': 1,
        '2012-B': 1, '2013-A': 3, '2013-B': 3, '2014-A': 1, '2014-B': 3,
        '2015-A': 2, '2015-B': 3, '2016-A': 2, '2016-B': 2, '2017-A': 2,
        '2017-B': 3, '2009-A': 1, '2018-A': 5, '2018-B': 5, '2019-A': 4,
        '2019-B': 3, '2012-A': 4, '2007-B': 3, '2008-A': 1, '2008-B': 1
      },
      'Roast Turkey Dinner': {
        '2009-B': 1, '2010-A': 1, '2010-B': 2, '2011-B': 1, '2011-A': 2,
        '2013-A': 2, '2013-B': 3, '2014-A': 1, '2014-B': 3, '2015-A': 1,
        '2015-B': 1, '2016-A': 1, '2016-B': 3, '2017-A': 1, '2017-B': 2,
        '2018-A': 1, '2018-B': 2, '2019-A': 2, '2019-B': 2, '2020-A': 1,
        '2012-A': 3, '2007-B': 3, '2008-B': 2
      },
      'Egg Plant Parmigiana': {
        '2009-B': 1, '2010-A': 5, '2010-B': 2, '2011-A': 2, '2011-B': 2,
        '2013-B': 1, '2014-B': 2, '2015-B': 1, '2016-A': 1, '2016-B': 2,
        '2017-A': 2, '2017-B': 2, '2018-A': 2, '2018-B': 2, '2019-A': 3,
        '2019-B': 4, '2020-A': 1, '2012-A': 4, '2007-B': 1, '2008-B': 1
      },
      'Baked Marinated Chicken': {
        '2009-B': 1, '2010-A': 2, '2013-B': 1, '2014-B': 2, '2016-B': 1,
        '2017-A': 1, '2017-B': 1, '2018-A': 1, '2019-B': 1
      },
      'Home Made Calzones': {
        '2009-B': 1, '2010-A': 1, '2013-A': 1, '2013-B': 1, '2014-B': 1,
        '2017-B': 1, '2019-B': 1, '2007-B': 1, '2008-A': 1, '2008-B': 1
      },
      'Roast Prime Ribs of Beef': {
        '2009-B': 1, '2010-B': 1, '2013-A': 1, '2008-B': 1
      },
      'Steak ala Pizzaiola': {
        '2009-B': 1, '2011-A': 2, '2011-B': 2, '2013-A': 1, '2013-B': 2,
        '2014-A': 2, '2014-B': 3, '2015-A': 1, '2015-B': 2, '2016-A': 2,
        '2016-B': 2, '2017-A': 2, '2017-B': 3, '2018-A': 1, '2018-B': 1,
        '2019-A': 1, '2019-B': 3, '2007-B': 1, '2008-A': 2, '2008-B': 2
      },
      'Breakfast Dinner': {
        '2009-B': 1, '2010-A': 2, '2010-B': 2, '2011-A': 2, '2011-B': 2,
        '2013-B': 3, '2014-B': 2, '2015-A': 1, '2015-B': 1, '2016-A': 1,
        '2016-B': 3, '2017-A': 2, '2017-B': 2, '2018-A': 3, '2018-B': 4,
        '2019-A': 3, '2019-B': 4, '2020-A': 2, '2012-A': 1, '2008-B': 2
      },
      'Grilled Cheese': {
        '2009-B': 1, '2010-B': 1, '2015-A': 1, '2016-B': 1, '2017-A': 1,
        '2019-A': 1
      },
      'BBQ Hamburgers, Cheeseburgers': {
        '2009-B': 1, '2010-A': 1, '2011-A': 1, '2011-B': 1, '2013-A': 2,
        '2013-B': 1, '2014-A': 2, '2014-B': 4, '2015-A': 3, '2016-B': 3,
        '2017-A': 3, '2017-B': 1, '2009-A': 1, '2018-A': 2, '2018-B': 1,
        '2019-A': 3, '2019-B': 2, '2012-A': 1, '2007-B': 1, '2008-A': 1,
        '2008-B': 1
      },
      'Philly Cheese Steak': {
        '2009-B': 1, '2010-A': 1, '2013-B': 1, '2014-A': 1, '2014-B': 1,
        '2018-A': 1, '2018-B': 1, '2019-B': 1, '2012-A': 1
      },
      'Vodka Orange Chicken': {
        '2009-B': 1, '2010-A': 1, '2011-A': 1, '2011-B': 1, '2014-A': 1,
        '2015-A': 1, '2015-B': 1, '2016-B': 1, '2018-A': 1, '2019-A': 1,
        '2012-A': 4, '2008-B': 1
      },
      'London Broiled': {
        '2010-A': 1, '2010-B': 2, '2013-B': 1, '2014-A': 1, '2014-B': 1,
        '2015-A': 1, '2018-B': 1, '2019-A': 3, '2019-B': 2, '2007-B': 1,
        '2008-A': 1, '2008-B': 1
      },
      'Corned Beef and Cabbage': {
        '2010-A': 7, '2010-B': 2, '2011-A': 3, '2011-B': 1, '2012-B': 2,
        '2013-A': 3, '2013-B': 1, '2014-A': 1, '2014-B': 2, '2015-A': 1,
        '2015-B': 1, '2016-A': 2, '2016-B': 1, '2017-A': 2, '2017-B': 1,
        '2019-A': 1, '2012-A': 1
      },
      'Pasta w/ Meatballs': {
        '2010-A': 1, '2010-B': 1, '2013-A': 1, '2013-B': 1, '2014-A': 1,
        '2015-A': 1, '2016-B': 1, '2017-A': 1, '2017-B': 1, '2018-B': 2,
        '2019-A': 1, '2012-A': 1
      },
      'Beef Burgandy': {
        '2010-A': 2, '2010-B': 1, '2011-B': 1, '2013-A': 1, '2013-B': 1,
        '2014-A': 1, '2012-A': 1, '2008-B': 1
      },
      'Chicken Marsala': {
        '2010-A': 1, '2015-A': 1, '2015-B': 1, '2016-B': 1, '2017-B': 1,
        '2018-A': 1, '2012-A': 1, '2007-B': 2, '2008-A': 1
      },
      'Steamed Brats in Beer': {
        '2010-A': 1, '2016-B': 2, '2017-A': 1, '2017-B': 1, '2008-B': 1
      },
      'Roast Pork': {
        '2010-A': 1, '2012-B': 1, '2014-B': 1, '2017-A': 1, '2018-A': 1,
        '2018-B': 1, '2007-B': 1
      },
      'Chili Con Carne': {
        '2010-A': 1, '2010-B': 1, '2014-A': 1, '2014-B': 2, '2012-A': 1
      },
      'Hot Hot Chicken Wings': {
        '2010-A': 5, '2010-B': 2, '2011-A': 3, '2011-B': 1, '2012-B': 1,
        '2013-A': 2, '2013-B': 4, '2014-A': 1, '2014-B': 2, '2015-A': 2,
        '2015-B': 3, '2016-A': 1, '2016-B': 4, '2017-A': 2, '2017-B': 4,
        '2009-A': 1, '2018-A': 5, '2018-B': 4, '2019-A': 4, '2019-B': 3,
        '2012-A': 5, '2007-B': 2, '2008-A': 2, '2008-B': 1
      },
      'Home Made Gnocchi': {
        '2010-A': 1, '2013-B': 1, '2014-B': 1, '2018-A': 1, '2018-B': 2,
        '2019-A': 1, '2019-B': 1, '2020-A': 1, '2007-B': 1, '2008-A': 1
      },
      'Tomato Soup Grilled Cheese': {
        '2010-A': 2, '2010-B': 2, '2012-B': 1, '2013-A': 4, '2013-B': 2,
        '2014-B': 2, '2015-B': 1, '2016-B': 2, '2017-B': 3, '2018-A': 2,
        '2018-B': 2, '2019-A': 1, '2012-A': 4, '2008-A': 1, '2008-B': 1
      },
      'Swedish Meat Balls': {
        '2010-A': 1, '2010-B': 3, '2011-B': 1, '2011-A': 1, '2012-B': 2,
        '2013-A': 2, '2013-B': 2, '2014-A': 1, '2014-B': 3, '2015-A': 1,
        '2015-B': 1, '2016-A': 1, '2017-A': 1, '2012-A': 4
      },
      'Chicken Fettuccine Alfredo': {
        '2010-A': 2, '2011-B': 1, '2017-B': 3, '2018-A': 3, '2018-B': 2,
        '2019-A': 2, '2019-B': 3, '2020-A': 1, '2012-A': 1
      },
      'BBQ Baked Meat Loaf': {
        '2010-A': 1, '2014-B': 1, '2016-A': 1, '2016-B': 1, '2017-A': 3,
        '2017-B': 2, '2009-A': 1, '2018-A': 2, '2019-B': 1, '2007-B': 1,
        '2008-A': 1, '2008-B': 1
      },
      'Ziti': {
        '2010-A': 2, '2010-B': 1, '2011-A': 1, '2011-B': 1, '2014-A': 2,
        '2015-B': 2, '2016-A': 2, '2016-B': 3, '2017-A': 1, '2017-B': 1,
        '2009-A': 1, '2018-B': 1, '2019-A': 1, '2019-B': 3, '2020-A': 2,
        '2012-A': 4, '2007-B': 2, '2008-A': 2, '2008-B': 2
      },
      'Cheese Ravioli': {
        '2010-A': 1, '2011-B': 2, '2011-A': 1, '2013-A': 1, '2013-B': 1,
        '2014-A': 1, '2014-B': 2, '2015-A': 1, '2015-B': 1, '2016-A': 1,
        '2016-B': 2, '2017-A': 2, '2017-B': 3, '2018-A': 5, '2018-B': 5,
        '2019-A': 4, '2019-B': 5, '2020-A': 1, '2007-B': 2, '2008-A': 1
      },
      'Roast Leg of Lamb': {
        '2010-A': 1, '2011-A': 1, '2011-B': 1, '2013-B': 2, '2016-A': 2,
        '2017-A': 2, '2017-B': 2, '2018-A': 2, '2018-B': 2, '2019-A': 1,
        '2020-A': 1, '2007-B': 1, '2008-B': 1
      },
      'Bourbon Chicken': {
        '2010-A': 2, '2010-B': 2, '2011-B': 2, '2012-B': 1, '2013-A': 2,
        '2013-B': 2, '2014-B': 1, '2015-A': 1, '2016-A': 2, '2016-B': 1,
        '2009-A': 1, '2018-B': 2, '2019-A': 1, '2012-A': 5, '2007-B': 3,
        '2008-A': 1
      },
      'Sea Food Platter': {
        '2010-A': 1, '2010-B': 1, '2011-A': 1, '2012-B': 1, '2013-A': 1,
        '2016-A': 1, '2017-A': 1, '2018-A': 1, '2019-A': 2, '2012-A': 1,
        '2007-B': 3, '2008-B': 2
      },
      "Taco's on Soft Shells": {
        '2010-A': 1, '2010-B': 1, '2016-B': 2, '2017-A': 1, '2017-B': 1,
        '2018-B': 1
      },
      'Salmon alla Puttanesca': {
        '2010-A': 1, '2010-B': 1, '2011-A': 1, '2014-A': 1, '2016-A': 1,
        '2016-B': 1, '2017-A': 1, '2018-A': 1, '2007-B': 2, '2008-B': 1
      },
      'Chicken Golden Nuggets': {
        '2010-A': 1, '2010-B': 1, '2011-A': 1, '2013-B': 1, '2014-A': 1,
        '2015-B': 4, '2016-B': 6, '2017-A': 4, '2017-B': 4, '2009-A': 1,
        '2018-A': 4, '2018-B': 4, '2019-A': 4, '2019-B': 3, '2020-A': 1,
        '2012-A': 1, '2007-B': 3, '2008-A': 2, '2008-B': 2
      },
      'Grilled Marinated Flank Steak': {
        '2010-A': 1, '2013-A': 1, '2013-B': 1, '2014-A': 1, '2014-B': 2,
        '2015-A': 1, '2016-A': 1, '2016-B': 2, '2017-A': 1, '2017-B': 2,
        '2018-A': 2, '2018-B': 2, '2019-A': 3, '2019-B': 3
      },
      'Moroccan Style Chicken': {
        '2010-B': 2, '2011-B': 1, '2011-A': 1, '2012-B': 1, '2013-A': 2,
        '2013-B': 2, '2014-A': 1, '2014-B': 3, '2015-A': 2, '2015-B': 3,
        '2017-A': 1, '2018-B': 1, '2019-A': 1, '2012-A': 3, '2007-B': 2,
        '2008-B': 2
      },
      'Caprese Panini': {
        '2010-B': 2, '2014-A': 1, '2014-B': 1, '2019-B': 1, '2012-A': 2
      },
      "Farmer's Pork Chops": {
        '2010-B': 1, '2011-A': 1, '2014-A': 1, '2014-B': 1, '2015-B': 1,
        '2016-B': 1, '2017-B': 1, '2018-B': 3, '2019-A': 3, '2019-B': 1,
        '2020-A': 1
      },
      'Shrimp Creole': {
        '2010-B': 1, '2014-A': 1, '2018-A': 1, '2019-B': 1, '2012-A': 1
      },
      'Chicken Gordon Blue': {
        '2010-B': 1, '2011-B': 1, '2011-A': 1, '2014-B': 1, '2015-B': 1,
        '2019-B': 1, '2012-A': 2, '2008-B': 1
      },
      'BBQ Pulled Pork': {
        '2010-B': 2, '2011-B': 2, '2012-B': 2, '2013-A': 3, '2013-B': 1,
        '2014-A': 2, '2014-B': 2, '2015-A': 2, '2015-B': 1, '2016-B': 2,
        '2017-A': 3, '2017-B': 3, '2018-A': 2, '2018-B': 3, '2019-A': 2,
        '2019-B': 3, '2020-A': 1, '2012-A': 4
      },
      'Breakfast Burrito': {
        '2011-B': 2, '2012-B': 1, '2013-A': 1, '2013-B': 2, '2014-A': 2,
        '2014-B': 2, '2015-A': 2, '2015-B': 1, '2016-A': 1, '2016-B': 1,
        '2012-A': 3
      },
      'Sea Food and Chicken Paella': {
        '2012-B': 1, '2013-A': 1, '2013-B': 2, '2014-B': 2, '2016-B': 1,
        '2018-B': 1
      },
      'Chicken Enchiladas': {
        '2013-A': 1, '2013-B': 1, '2014-A': 2, '2016-B': 1, '2017-B': 1,
        '2018-A': 1, '2019-A': 1, '2019-B': 1, '2007-B': 1
      },
      'Beef Veggie Stir Fry': {
        '2013-A': 1, '2015-B': 1, '2016-B': 1, '2017-A': 1, '2020-A': 1
      },
      'Ciabatta Steak Sandwiches': {
        '2013-B': 1, '2014-B': 1, '2015-A': 1, '2017-B': 1
      },
      'Southern Fried Chicken': {
        '2013-B': 1, '2014-A': 1, '2014-B': 1, '2015-B': 1, '2009-A': 1,
        '2018-B': 1, '2019-A': 1, '2019-B': 1, '2012-A': 2
      },
      'Pork Chops': {
        '2014-B': 1, '2017-A': 1, '2017-B': 1, '2012-A': 3, '2008-A': 1
      },
      'Salmon Lasagna': {
        '2015-A': 2, '2015-B': 2, '2016-A': 1, '2016-B': 1, '2017-A': 2,
        '2017-B': 2, '2018-A': 2, '2018-B': 4, '2019-A': 3, '2019-B': 3,
        '2020-A': 1
      },
      'Cuban Sandwiches': {
        '2015-A': 1, '2015-B': 1, '2016-A': 2, '2016-B': 3, '2017-A': 1,
        '2017-B': 3, '2018-A': 3, '2018-B': 1, '2019-A': 2, '2019-B': 4,
        '2020-A': 2
      },
      'Mexican Pizza': {'2009-B': 1, '2018-A': 1},
      'Chicken Quesadillas': {'2009-B': 1, '2011-B': 1, '2017-A': 1},
      'Sea Food Pasta': {'2009-B': 2, '2010-B': 1, '2015-A': 1, '2017-B': 2},
      'Cheese Ravioli Alfredo': {'2009-B': 1, '2016-A': 1, '2019-B': 1},
      'Brisket of Beef': {'2009-B': 1, '2011-B': 1, '2011-A': 1, '2012-A': 3},
      'Chicken Fajitas': {'2010-A': 1, '2016-B': 1},
      'Chicken Fried Steak': {'2010-B': 1, '2012-B': 1},
      'Shrimp Fra Diavlo': {'2010-B': 1, '2017-A': 1},
      'Falafel on Pita': {'2010-B': 1, '2013-B': 1, '2014-B': 1, '2016-A': 1},
      'Swiss Steak': {'2012-B': 1, '2019-A': 3, '2019-B': 1, '2020-A': 1},
      'Pierogis': {'2010-B': 1, '2017-A': 1, '2019-B': 2},
      'Bratwurst': {'2011-A': 1, '2012-A': 1},
      'Coconut Shrimp': {'2011-A': 1, '2019-A': 1},
      'Shrimp Parmigiana': {'2011-A': 1, '2013-B': 1, '2014-A': 1},
      'Beef Terryaky': {'2011-B': 1, '2007-B': 1, '2008-B': 1},
      'Chicken w/ Broccoli': {'2011-B': 1, '2017-A': 1},
      'Beef Enchiladas': {'2012-B': 1, '2013-A': 1, '2013-B': 1, '2015-B': 1},
      'Chicken Phylo Parcels': {'2011-A': 1, '2008-B': 1},
      'Sloppy Joes on Buns': {'2012-B': 1, '2015-A': 2},
      "Shepherd's Pie": {'2012-B': 1, '2014-B': 1, '2015-A': 1, '2015-B': 1},
      'Chicken Curry': {'2012-B': 1, '2008-B': 1},
      'Clam Chowder': {'2013-A': 1, '2014-B': 1},
      'Chicken Burgers': {'2013-B': 1, '2014-A': 1, '2013-A': 1},
      'Mustard Grilled Chicken': {'2013-B': 2, '2016-B': 1, '2007-B': 2},
      'Stuffed Peppers': {'2013-B': 1, '2012-A': 1},
      'Falafel on Buns': {'2013-B': 1, '2015-B': 1},
      'Roast Beef': {'2014-A': 1, '2018-B': 1, '2019-A': 1, '2007-B': 3},
      'Chicken Chorizo Jambalaya': {'2014-B': 2},
      'Pistachio Kebab': {'2014-B': 1, '2015-B': 3, '2016-A': 1},
      'Linguine w/ Clams': {'2014-B': 1, '2015-A': 1, '2017-A': 1, '2017-B': 1},
      'Shrimp and Grits': {'2015-A': 2},
      'Shrimp Alfredo': {'2015-A': 2, '2015-B': 1, '2012-A': 1},
      'Pad Thai Shrimp': {'2015-A': 1, '2015-B': 1},
      'Chicken Pesto': {'2015-A': 1, '2016-A': 1, '2018-B': 2, '2012-A': 1},
      'Veal Parmigiana': {'2015-B': 1, '2018-B': 1},
      'Baked Ham': {'2016-A': 1, '2009-A': 1, '2007-B': 2, '2008-B': 1},
      'Stuffed Cheese Shells': {'2016-B': 1, '2018-A': 1, '2019-B': 2},
      'Brushetta Chicken': {'2016-B': 2, '2017-A': 1, '2017-B': 1, '2018-B': 1},
      'Reuben on Rye Bread': {'2016-B': 1, '2017-B': 1},
      'Shrimp Scambi': {'2017-A': 1}, 'Italian Braciole': {'2020-A': 2},
      'Chicken Saltimbocca': {'2017-A': 1, '2017-B': 1, '2018-A': 1},
      'Chicken Piccata': {'2017-B': 1, '2007-B': 1},
      'Meat Loaf': {'2017-B': 1, '2012-A': 1},
      'Sea Food Marinara': {'2018-A': 1, '2020-A': 1},
      "Taco's on Hard Shells": {'2018-A': 2, '2019-B': 1},
      'Ham Scalloped Potatoes': {'2018-A': 1, '2012-A': 2},
      'Brandied Shrimp': {'2018-B': 1, '2008-A': 1},
      'Chicken Fettuccine Carbonara': {'2019-B': 1, '2012-A': 1},
      'Beef Stroganoff': {'2019-B': 1, '2012-A': 1, '2007-B': 1},
      'Garlic Shrimp Pasta': {'2007-B': 2, '2008-B': 2},
      'Lamb Stew': {'2007-B': 1, '2008-A': 1, '2008-B': 1},
      "Beef Taco's": {'2008-A': 1, '2008-B': 1}
    },
    Side: {
      'Caesar Salad': {
        '2009-B': 2, '2010-A': 1, '2010-B': 1, '2011-A': 1, '2011-B': 1,
        '2017-A': 1, '2018-B': 2, '2007-B': 2
      },
      'Home Fried Potatoes': {
        '2009-B': 3, '2010-A': 3, '2010-B': 2, '2011-A': 1, '2011-B': 4,
        '2013-B': 2, '2014-A': 3, '2013-A': 1, '2014-B': 5, '2015-A': 3,
        '2015-B': 1, '2016-A': 2, '2016-B': 4, '2017-A': 3, '2017-B': 4,
        '2009-A': 1, '2018-A': 4, '2018-B': 2, '2019-A': 1, '2019-B': 1,
        '2007-B': 5, '2008-B': 1
      },
      'Pasta Primavera': {
        '2009-B': 2, '2012-B': 1, '2013-B': 2, '2014-B': 2, '2015-A': 1,
        '2016-A': 1, '2016-B': 1, '2017-A': 1, '2017-B': 1, '2018-A': 1,
        '2019-B': 1, '2008-B': 3
      },
      'Pasta Vodka': {
        '2009-B': 2, '2010-A': 3, '2013-B': 1, '2016-B': 1, '2017-A': 1,
        '2017-B': 1, '2008-A': 2, '2008-B': 1
      },
      'Broccoli': {
        '2009-B': 4, '2010-A': 8, '2010-B': 6, '2011-A': 2, '2011-B': 7,
        '2013-A': 1, '2013-B': 10, '2014-A': 7, '2014-B': 14, '2015-A': 6,
        '2015-B': 9, '2016-A': 6, '2016-B': 13, '2017-A': 10, '2017-B': 15,
        '2009-A': 2, '2018-A': 16, '2018-B': 14, '2019-A': 14, '2019-B': 17,
        '2020-A': 5, '2012-A': 13, '2007-B': 6, '2008-A': 2, '2008-B': 4
      },
      'Rice': {
        '2009-B': 1, '2010-B': 1, '2013-B': 2, '2014-B': 1, '2017-B': 1,
        '2009-A': 1, '2019-B': 1, '2012-A': 2, '2008-B': 1
      },
      'Oven Brown Potatoes': {
        '2009-B': 1, '2011-B': 1, '2013-B': 3, '2015-B': 2, '2016-A': 3,
        '2016-B': 1, '2018-B': 3, '2019-A': 2, '2020-A': 1, '2007-B': 1
      },
      'Corn': {
        '2009-B': 1, '2010-A': 9, '2010-B': 4, '2011-A': 2, '2011-B': 4,
        '2013-B': 9, '2014-A': 5, '2014-B': 8, '2015-A': 1, '2016-A': 1,
        '2016-B': 5, '2017-A': 6, '2017-B': 4, '2018-A': 8, '2018-B': 3,
        '2019-A': 7, '2019-B': 15, '2020-A': 4, '2012-A': 10, '2007-B': 5,
        '2008-A': 1, '2008-B': 3
      },
      'Mushrooms Onions Peppers': {
        '2009-B': 1, '2010-A': 2, '2010-B': 2, '2014-A': 2, '2014-B': 1,
        '2015-A': 1, '2015-B': 1, '2016-A': 1, '2016-B': 3, '2017-A': 1,
        '2018-A': 1, '2018-B': 2, '2019-A': 5, '2019-B': 3, '2012-A': 1,
        '2008-B': 1
      },
      'Swiss Chard': {
        '2009-B': 3, '2010-A': 6, '2010-B': 2, '2011-A': 3, '2013-A': 1,
        '2015-B': 2, '2016-A': 3, '2016-B': 2, '2017-A': 1, '2017-B': 2,
        '2009-A': 1, '2018-A': 1, '2018-B': 4, '2019-B': 1, '2012-A': 8,
        '2007-B': 5, '2008-A': 2, '2008-B': 1
      },
      'Green Beans': {
        '2009-B': 4, '2010-A': 4, '2010-B': 7, '2011-A': 3, '2011-B': 1,
        '2013-A': 2, '2013-B': 7, '2014-A': 5, '2014-B': 10, '2015-A': 5,
        '2015-B': 7, '2016-A': 3, '2016-B': 5, '2017-A': 6, '2017-B': 9,
        '2009-A': 1, '2018-A': 11, '2018-B': 9, '2019-A': 13, '2019-B': 11,
        '2020-A': 3, '2012-A': 12, '2007-B': 6, '2008-B': 4
      },
      'Carrots': {
        '2009-B': 1, '2010-A': 2, '2010-B': 1, '2011-B': 1, '2013-B': 6,
        '2014-A': 1, '2014-B': 5, '2015-A': 4, '2015-B': 6, '2016-A': 2,
        '2016-B': 2, '2017-A': 6, '2017-B': 5, '2009-A': 1, '2018-A': 6,
        '2018-B': 7, '2019-A': 3, '2019-B': 3, '2020-A': 1, '2012-A': 3,
        '2007-B': 4, '2008-A': 1, '2008-B': 1
      },
      'F.F. Potatoes': {
        '2009-B': 2, '2010-A': 6, '2010-B': 1, '2011-A': 1, '2011-B': 3,
        '2013-B': 10, '2014-A': 7, '2014-B': 9, '2015-A': 4, '2015-B': 3,
        '2016-A': 2, '2016-B': 8, '2017-A': 5, '2017-B': 8, '2018-A': 4,
        '2018-B': 4, '2019-A': 5, '2019-B': 9, '2020-A': 2, '2007-B': 4,
        '2008-A': 1, '2008-B': 2
      },
      'Pasta Pesto': {
        '2009-B': 2, '2010-A': 2, '2010-B': 2, '2011-A': 2, '2011-B': 2,
        '2013-A': 1, '2013-B': 3, '2014-A': 1, '2014-B': 6, '2015-A': 1,
        '2015-B': 2, '2016-B': 1, '2018-B': 3, '2012-A': 6, '2007-B': 2,
        '2008-A': 1, '2008-B': 1
      },
      'Peas Onions Mushrooms': {
        '2009-B': 4, '2010-A': 7, '2010-B': 8, '2011-A': 4, '2011-B': 7,
        '2013-B': 5, '2014-A': 2, '2014-B': 4, '2015-A': 3, '2015-B': 3,
        '2016-A': 1, '2016-B': 4, '2017-A': 3, '2017-B': 6, '2018-A': 5,
        '2018-B': 5, '2019-A': 6, '2019-B': 5, '2020-A': 2, '2012-A': 6,
        '2007-B': 7, '2008-A': 2, '2008-B': 3
      },
      'Styr Fry Veggie': {
        '2009-B': 1, '2010-B': 2, '2014-A': 1, '2015-A': 1, '2015-B': 2,
        '2016-A': 2, '2016-B': 2, '2017-A': 1, '2017-B': 1, '2019-A': 3,
        '2007-B': 2, '2008-B': 1
      },
      'Potatoes Tarts': {
        '2009-B': 2, '2010-A': 2, '2010-B': 1, '2011-A': 1, '2013-A': 1,
        '2015-A': 3, '2015-B': 2, '2016-A': 1, '2016-B': 3, '2017-A': 3,
        '2017-B': 5, '2018-A': 1, '2018-B': 2, '2019-A': 3, '2019-B': 3,
        '2020-A': 2
      },
      'Egg Plant Marinara': {
        '2009-B': 2, '2010-A': 1, '2010-B': 1, '2012-A': 3
      },
      'Garlic Whipped Potatoes': {
        '2009-B': 1, '2010-A': 2, '2010-B': 1, '2011-B': 2, '2013-B': 1,
        '2014-A': 1, '2014-B': 4, '2015-A': 1, '2016-A': 1, '2016-B': 1,
        '2017-A': 2, '2017-B': 3, '2018-A': 2, '2018-B': 2, '2019-A': 3,
        '2019-B': 2, '2012-A': 5, '2007-B': 6, '2008-B': 1
      },
      'Guacamole': {
        '2009-B': 1, '2010-A': 1, '2011-A': 1, '2017-B': 1, '2012-A': 3
      },
      'Caponata': {
        '2009-B': 1, '2010-A': 3, '2013-B': 1, '2016-B': 1, '2009-A': 1,
        '2019-B': 1, '2007-B': 3
      },
      'Mixed Vegetable': {
        '2009-B': 1, '2010-A': 4, '2010-B': 2, '2014-A': 6, '2014-B': 4,
        '2015-A': 2, '2015-B': 6, '2016-A': 4, '2016-B': 3, '2017-A': 8,
        '2017-B': 6, '2009-A': 1, '2018-A': 7, '2018-B': 8, '2019-A': 7,
        '2019-B': 10, '2020-A': 4, '2007-B': 4, '2008-A': 3
      },
      'Calliflower': {
        '2009-B': 1, '2010-A': 1, '2010-B': 1, '2011-B': 1, '2013-B': 4,
        '2014-A': 4, '2014-B': 3, '2015-A': 2, '2016-A': 1, '2016-B': 2,
        '2017-A': 4, '2017-B': 3, '2018-A': 3, '2018-B': 8, '2019-A': 3,
        '2012-A': 1
      },
      'Garlic Bread': {
        '2009-B': 1, '2010-A': 1, '2010-B': 1, '2011-B': 1, '2014-B': 2,
        '2015-A': 2, '2016-B': 1, '2017-A': 3, '2018-A': 2, '2018-B': 3,
        '2019-A': 1, '2008-A': 1
      },
      'Pizza Pepperoni Bread': {
        '2009-B': 1, '2010-B': 3, '2011-A': 1, '2011-B': 3, '2014-A': 2,
        '2014-B': 4, '2015-A': 3, '2015-B': 2, '2016-A': 1, '2016-B': 3,
        '2017-A': 5, '2017-B': 4, '2018-B': 2, '2019-A': 2, '2007-B': 3,
        '2008-B': 2
      },
      'Sliced Potatoes': {
        '2010-A': 2, '2014-B': 2, '2015-B': 4, '2016-B': 3, '2017-A': 3,
        '2017-B': 2, '2018-A': 7, '2018-B': 3, '2019-A': 3, '2019-B': 1,
        '2007-B': 2
      },
      'Baked Potatoes': {
        '2010-A': 2, '2011-B': 1, '2013-B': 2, '2014-A': 3, '2014-B': 2,
        '2015-A': 2, '2015-B': 1, '2016-B': 2, '2017-A': 2, '2017-B': 2,
        '2018-A': 2, '2018-B': 1, '2019-A': 2, '2007-B': 1, '2008-A': 1
      },
      'Sweet Potatoes': {
        '2010-A': 1, '2010-B': 1, '2016-A': 1, '2009-A': 1, '2007-B': 2
      },
      'Pasta Carbonara': {
        '2010-A': 1, '2010-B': 2, '2011-A': 1, '2011-B': 1, '2015-A': 1,
        '2017-A': 1, '2017-B': 1, '2018-A': 1, '2019-B': 1, '2007-B': 1
      },
      'Potatoes': {
        '2010-A': 1, '2014-A': 1, '2014-B': 1, '2015-A': 1, '2017-A': 1,
        '2017-B': 1, '2018-A': 2, '2019-B': 1, '2020-A': 1, '2012-A': 3,
        '2007-B': 1, '2008-B': 1
      },
      'Spinash': {
        '2010-A': 3, '2010-B': 3, '2011-B': 1, '2013-A': 1, '2013-B': 3,
        '2014-A': 4, '2014-B': 7, '2015-A': 2, '2015-B': 3, '2016-B': 5,
        '2017-A': 3, '2017-B': 2, '2018-A': 1, '2018-B': 2, '2019-B': 3
      },
      'Pasta Marinara': {
        '2010-A': 3, '2010-B': 1, '2011-A': 1, '2011-B': 1, '2013-B': 1,
        '2014-B': 2, '2015-A': 1, '2016-A': 1, '2016-B': 1, '2017-B': 1,
        '2018-A': 4, '2018-B': 2, '2019-A': 2, '2019-B': 2, '2020-A': 1,
        '2012-A': 3, '2007-B': 1
      },
      '② Baked Potatoes': {
        '2010-A': 2, '2010-B': 1, '2011-B': 1, '2013-B': 1, '2014-B': 1,
        '2015-A': 1, '2015-B': 3, '2016-A': 2, '2016-B': 2, '2017-A': 1,
        '2017-B': 1, '2009-A': 1, '2018-A': 2, '2018-B': 5, '2019-A': 5,
        '2019-B': 5, '2020-A': 2, '2007-B': 2, '2008-A': 1, '2008-B': 1,
        '2012-A': 1
      },
      'Asparagus': {
        '2010-A': 1, '2011-B': 1, '2013-B': 1, '2015-A': 1, '2015-B': 3,
        '2016-A': 1, '2016-B': 1, '2017-A': 1, '2017-B': 1, '2019-A': 1,
        '2007-B': 1
      },
      'Veggie Tempura': {
        '2010-A': 1, '2010-B': 1, '2014-B': 1, '2016-A': 1, '2016-B': 1,
        '2007-B': 1, '2008-B': 1
      },
      'Roast Potatoes': {
        '2010-A': 1, '2011-A': 1, '2014-B': 2, '2015-B': 1, '2009-A': 1,
        '2018-B': 1
      },
      'Zucchini': {
        '2010-A': 1, '2011-B': 2, '2013-B': 2, '2014-B': 4, '2015-A': 1,
        '2016-B': 1, '2017-B': 1, '2007-B': 3, '2008-B': 1
      },
      'Pasta Alfredo': {
        '2010-B': 1, '2013-B': 1, '2018-A': 1, '2019-B': 1, '2012-A': 1,
        '2007-B': 1
      },
      'Sweet Fried Potatoes': {
        '2010-B': 3, '2015-B': 1, '2017-A': 1, '2018-B': 1
      },
      'Lima Beans': {
        '2010-B': 1, '2011-A': 1, '2015-A': 1, '2016-B': 2, '2018-B': 2
      },
      'Sicilian Egg Plant': {
        '2010-B': 1, '2011-A': 1, '2013-B': 3, '2014-A': 1, '2014-B': 2,
        '2015-A': 1, '2016-A': 1, '2017-B': 1, '2018-A': 1
      },
      'Pasta with Olive Oil': {
        '2010-B': 1, '2014-A': 2, '2015-B': 1, '2016-A': 1, '2016-B': 1,
        '2017-A': 2, '2017-B': 1, '2018-A': 3, '2018-B': 2, '2019-A': 5,
        '2019-B': 4, '2020-A': 2, '2007-B': 1, '2008-A': 1
      },
      'Baked Beans': {
        '2011-B': 2, '2013-B': 2, '2014-A': 2, '2014-B': 3, '2015-A': 1,
        '2015-B': 2, '2016-A': 1, '2016-B': 1, '2018-A': 1, '2018-B': 2,
        '2019-A': 1, '2019-B': 1, '2012-A': 6, '2007-B': 2, '2008-A': 2
      },
      'Pasta': {
        '2011-B': 1, '2012-B': 1, '2013-B': 3, '2014-A': 1, '2015-A': 1,
        '2015-B': 1, '2016-A': 2, '2017-A': 1, '2017-B': 1, '2018-A': 2,
        '2018-B': 2, '2019-A': 3, '2019-B': 1, '2020-A': 1, '2008-A': 1,
        '2008-B': 1, '2012-A': 1
      },
      'Potatoes Salad': {
        '2011-B': 1, '2013-B': 1, '2017-A': 1, '2017-B': 3, '2009-A': 1,
        '2018-A': 1, '2018-B': 1, '2019-B': 1, '2012-A': 4
      },
      'Brussel Sprouts': {
        '2011-B': 1, '2013-B': 1, '2015-A': 7, '2015-B': 5, '2016-A': 3,
        '2016-B': 9, '2017-A': 3, '2017-B': 4, '2018-A': 5, '2018-B': 3,
        '2019-A': 6, '2019-B': 4, '2020-A': 3
      },
      'Kale': {
        '2013-B': 1, '2016-A': 2, '2016-B': 2, '2017-A': 3, '2017-B': 3,
        '2019-B': 1
      },
      'Sun Dried Tomato Pasta': {
        '2013-B': 1, '2014-A': 1, '2014-B': 2, '2015-A': 1, '2015-B': 1,
        '2016-B': 3, '2017-A': 2, '2017-B': 2, '2012-A': 3, '2007-B': 3
      },
      'Lyonnaise Potatoes': {
        '2013-B': 2, '2015-A': 1, '2018-A': 1, '2012-A': 3, '2008-A': 1,
        '2008-B': 1
      },
      'Spanish Rice': {
        '2013-B': 4, '2014-B': 2, '2015-B': 1, '2017-B': 1, '2019-A': 1
      },
      'Macaroni and Cheese': {
        '2013-B': 1, '2014-A': 2, '2014-B': 2, '2015-A': 3, '2016-A': 1,
        '2016-B': 6, '2017-A': 5, '2017-B': 3, '2018-A': 3, '2018-B': 2,
        '2019-A': 4, '2019-B': 4, '2020-A': 1
      },
      'Veggie Risotto': {
        '2016-A': 1, '2016-B': 3, '2017-A': 2, '2017-B': 2, '2008-B': 1
      },
      'Veggie Marinara': {'2009-B': 1, '2017-B': 1, '2019-B': 1, '2007-B': 1},
      'Brushetta Bread': {'2009-B': 1, '2016-B': 2, '2017-A': 2, '2018-B': 1},
      'Broccoli Normandy': {'2009-B': 3, '2010-A': 2, '2010-B': 1},
      'Brushetta': {'2010-A': 1, '2015-A': 1, '2015-B': 1},
      'Mashed Potatoes': {'2010-B': 1, '2011-B': 1, '2017-A': 1},
      'Walsh Rabbit': {'2010-B': 1, '2007-B': 1},
      'Pasta alla Puttanesca': {'2010-A': 1, '2018-A': 1},
      'Pasta Salad': {'2010-A': 1, '2016-B': 2, '2017-B': 1},
      'Mexican Corn': {'2010-A': 1, '2015-A': 1, '2016-B': 1, '2017-B': 2},
      'Cole Slaw': {'2011-B': 1, '2016-A': 1, '2018-B': 1, '2012-A': 4},
      'Pasta Fasula': {'2013-B': 1, '2014-B': 1, '2017-A': 1, '2019-A': 1},
      'Onions': {'2011-B': 1, '2017-B': 1, '2018-A': 1},
      'Rice Pilaf': {'2011-B': 1, '2015-B': 2},
      'Minestrone': {'2010-A': 1, '2016-B': 1},
      'Macaroni Salad': {'2014-A': 1, '2019-A': 1},
      'Corn Bread': {'2014-A': 1, '2014-B': 1}, 'Artichokes': {'2012-A': 2},
      'Potato Wedges': {'2014-B': 1, '2015-B': 1},
      'Green Collards': {'2014-B': 1, '2009-A': 1},
      'Squash': {'2014-B': 3, '2015-B': 1, '2012-A': 3, '2007-B': 1},
      'German Sauerkraut': {'2016-B': 1, '2017-A': 1, '2017-B': 1, '2012-A': 1},
      'Brown Rice': {'2017-A': 1, '2008-B': 1},
      'Risotto': {'2018-A': 2, '2018-B': 1, '2008-A': 1},
      'Onion Rings': {'2018-A': 1, '2018-B': 1, '2019-A': 1},
      'Caprese Salad': {'2018-A': 2, '2018-B': 4, '2019-B': 1},
      'Putine': {'2018-B': 2, '2019-A': 2, '2019-B': 2},
      'Herb Baked Potatoes': {'2007-B': 1, '2008-B': 1},
      'Pasta w/ Herb Sauce': {'2007-B': 3},
      'California Veggies': {'2007-B': 1, '2008-A': 1},
      'Broccoli w/ Cheese Sauce': {'2007-B': 1, '2008-B': 1},
      'Ciabatta Bread': {'2009-B': 3, '2015-B': 1},
      'Mozzarella Sticks': {'2009-B': 1, '2010-A': 1, '2010-B': 1, '2007-B': 1}
    },
    Dessert: {
      'Choccolate Brownies': {
        '2009-B': 6, '2010-A': 10, '2010-B': 8, '2011-A': 6, '2011-B': 4,
        '2013-B': 8, '2014-A': 6, '2014-B': 12, '2015-A': 8, '2015-B': 7,
        '2016-A': 4, '2016-B': 6, '2017-A': 7, '2017-B': 6, '2009-A': 1,
        '2018-A': 6, '2018-B': 9, '2019-A': 5, '2019-B': 10, '2020-A': 3,
        '2007-B': 11, '2008-A': 3, '2008-B': 6, '2012-A': 1
      },
      'Hot Fudge Sunday': {
        '2009-B': 4, '2010-A': 10, '2010-B': 7, '2011-A': 5, '2011-B': 3,
        '2013-A': 1, '2013-B': 11, '2014-A': 8, '2014-B': 14, '2015-A': 6,
        '2015-B': 10, '2016-A': 5, '2016-B': 11, '2017-A': 13, '2017-B': 14,
        '2009-A': 1, '2018-A': 14, '2018-B': 13, '2019-A': 14, '2019-B': 19,
        '2020-A': 4, '2007-B': 10, '2008-A': 3, '2008-B': 8
      },
      'Carrot Cake': {
        '2009-B': 1, '2010-A': 1, '2010-B': 2, '2011-A': 2, '2011-B': 1,
        '2013-B': 1, '2014-A': 3, '2014-B': 3, '2015-A': 2, '2016-A': 1,
        '2017-A': 2, '2018-B': 2, '2019-A': 1, '2019-B': 1, '2020-A': 1,
        '2008-B': 1
      },
      'Cheese Cake': {
        '2009-B': 1, '2010-A': 1, '2010-B': 1, '2011-B': 4, '2011-A': 1,
        '2013-B': 5, '2014-A': 2, '2014-B': 2, '2015-A': 5, '2015-B': 2,
        '2016-A': 3, '2016-B': 3, '2017-A': 2, '2017-B': 3, '2018-A': 4,
        '2018-B': 4, '2019-A': 4, '2019-B': 4, '2020-A': 1, '2007-B': 3,
        '2008-B': 1, '2012-A': 1
      },
      'Banana Foster': {
        '2009-B': 1, '2010-A': 2, '2010-B': 2, '2011-A': 1, '2013-B': 1,
        '2009-A': 1
      },
      'Choccolate Cream Pie ala Moda': {
        '2009-B': 1, '2010-A': 1, '2016-B': 2, '2019-A': 3
      },
      'Cannoli ala Moda': {
        '2009-B': 1, '2010-A': 1, '2010-B': 1, '2013-B': 2, '2014-A': 1,
        '2015-B': 3, '2016-A': 2, '2017-A': 1, '2017-B': 2, '2018-A': 1,
        '2018-B': 3, '2020-A': 1, '2008-B': 1
      },
      'Choccolate Chips Cookies': {
        '2009-B': 1, '2010-A': 6, '2010-B': 5, '2011-B': 5, '2011-A': 1,
        '2013-B': 5, '2014-A': 2, '2013-A': 1, '2014-B': 5, '2015-A': 3,
        '2015-B': 2, '2016-A': 4, '2016-B': 5, '2017-A': 3, '2017-B': 9,
        '2009-A': 1, '2018-A': 10, '2018-B': 6, '2019-A': 5, '2019-B': 3,
        '2020-A': 2, '2007-B': 4, '2008-A': 3, '2008-B': 2, '2012-A': 1
      },
      'Fresh Fruit Salad': {
        '2009-B': 3, '2010-A': 4, '2010-B': 2, '2011-A': 2, '2011-B': 1,
        '2013-A': 1, '2015-B': 3, '2017-A': 2, '2007-B': 5, '2008-A': 2,
        '2008-B': 2
      },
      'Pumpkins Pie ala Moda': {
        '2009-B': 1, '2010-B': 2, '2013-B': 1, '2015-B': 1, '2016-A': 2,
        '2016-B': 4, '2017-B': 2, '2018-A': 2, '2018-B': 2, '2019-B': 3,
        '2007-B': 1, '2008-B': 1
      },
      'Strauberry Short Cake': {
        '2009-B': 2, '2010-A': 6, '2015-B': 1, '2009-A': 1, '2018-B': 1,
        '2019-A': 1
      },
      'Apple Pie ala Moda': {
        '2009-B': 3, '2010-A': 6, '2010-B': 1, '2011-B': 2, '2011-A': 1,
        '2013-B': 2, '2014-A': 2, '2014-B': 5, '2015-A': 1, '2015-B': 1,
        '2016-A': 1, '2016-B': 4, '2017-A': 4, '2017-B': 4, '2009-A': 1,
        '2018-A': 5, '2018-B': 4, '2019-A': 3, '2019-B': 6, '2020-A': 2,
        '2007-B': 5, '2008-A': 2, '2008-B': 2
      },
      'Blueberry Pie ala Moda': {
        '2009-B': 1, '2010-A': 1, '2010-B': 1, '2016-B': 1, '2017-A': 1,
        '2018-B': 2, '2020-A': 1, '2007-B': 2, '2008-A': 1
      },
      "Choccolate E'Clair": {
        '2010-A': 3, '2010-B': 1, '2013-B': 2, '2014-A': 1, '2015-B': 2,
        '2016-B': 2, '2018-A': 2, '2018-B': 1, '2019-A': 2, '2007-B': 1
      },
      'Choccolate Cake': {
        '2010-A': 1, '2011-A': 2, '2011-B': 1, '2013-A': 1, '2013-B': 2,
        '2014-A': 2, '2014-B': 4, '2015-B': 3, '2016-A': 1, '2016-B': 2,
        '2017-A': 4, '2017-B': 3, '2009-A': 1, '2018-A': 3, '2018-B': 5,
        '2019-A': 3, '2019-B': 4, '2020-A': 1, '2007-B': 6, '2008-A': 2,
        '2008-B': 2
      },
      'Yeallow Cake': {
        '2010-A': 2, '2010-B': 1, '2011-A': 2, '2011-B': 3, '2013-B': 4,
        '2014-A': 4, '2014-B': 7, '2015-A': 2, '2015-B': 2, '2016-A': 1,
        '2016-B': 2, '2017-A': 1, '2017-B': 3, '2018-A': 1, '2018-B': 2,
        '2019-A': 2, '2019-B': 2, '2007-B': 4, '2008-A': 2, '2008-B': 3
      },
      'Cherry Pie ala Moda': {
        '2010-A': 1, '2010-B': 1, '2014-A': 1, '2016-A': 1, '2016-B': 2,
        '2017-B': 3, '2018-B': 1, '2019-A': 2, '2007-B': 1, '2008-A': 1,
        '2008-B': 2
      },
      'Choccolate Pudding': {
        '2010-B': 1, '2011-A': 1, '2011-B': 1, '2013-B': 1, '2016-A': 1,
        '2016-B': 1, '2018-B': 1, '2007-B': 2, '2008-B': 2
      },
      'Cream de Menth Parfeit': {
        '2010-B': 3, '2011-B': 3, '2013-B': 4, '2014-A': 2, '2015-A': 2,
        '2016-B': 1, '2017-B': 2, '2018-A': 4, '2018-B': 2, '2019-A': 3
      },
      'White Cake': {
        '2011-A': 1, '2013-B': 2, '2014-B': 1, '2015-B': 2, '2016-B': 1,
        '2017-A': 2, '2017-B': 3, '2018-A': 2, '2019-A': 4, '2019-B': 7,
        '2020-A': 1, '2007-B': 4, '2008-A': 2, '2008-B': 2
      },
      'Greek Bakalava': {
        '2011-A': 2, '2011-B': 2, '2013-B': 2, '2014-B': 2, '2015-A': 1,
        '2016-B': 1
      },
      'Loukamades': {
        '2013-A': 1, '2013-B': 3, '2014-A': 1, '2014-B': 2, '2015-A': 3,
        '2015-B': 2, '2016-B': 2, '2017-A': 3, '2017-B': 2, '2018-A': 3,
        '2018-B': 2, '2019-A': 2, '2019-B': 1
      },
      'Spanish Flan': {
        '2013-B': 2, '2014-A': 1, '2014-B': 5, '2015-A': 1, '2015-B': 1,
        '2016-A': 1, '2016-B': 2, '2017-A': 4, '2017-B': 1, '2018-A': 1,
        '2018-B': 2, '2019-A': 1, '2019-B': 2
      },
      'Apple Tarts': {
        '2014-A': 1, '2015-B': 3, '2017-A': 2, '2017-B': 4, '2018-A': 1
      },
      'Zucchini Bars': {
        '2014-B': 4, '2015-A': 1, '2016-B': 3, '2017-B': 3, '2018-B': 2,
        '2019-B': 1
      },
      'Lemon Cake': {
        '2014-B': 2, '2015-A': 2, '2015-B': 2, '2016-A': 1, '2016-B': 4,
        '2017-A': 5, '2017-B': 4, '2018-A': 5, '2018-B': 4, '2019-A': 3,
        '2019-B': 2, '2020-A': 1
      },
      'Apples Turn Over': {
        '2014-B': 1, '2015-A': 2, '2018-B': 1, '2019-A': 1, '2019-B': 2,
        '2020-A': 2
      },
      'Rice Krispies Treats': {
        '2015-A': 1, '2015-B': 1, '2016-A': 2, '2016-B': 2
      },
      'Vanilla Pudding': {'2010-B': 2, '2011-B': 1},
      'Tirami Sü': {'2010-B': 2, '2018-B': 1},
      'Apple Straudel': {'2009-B': 2, '2010-A': 5, '2010-B': 3, '2011-A': 1},
      'Peaches and Cream': {'2009-B': 2, '2014-B': 1},
      'Fresh Fruit Sherbet': {'2013-B': 2, '2015-B': 2},
      'Greek Spinach Pie': {'2013-B': 1, '2014-B': 1},
      'Spice Cake': {'2014-B': 2, '2018-A': 1},
      'Cake': {'2013-B': 1, '2007-B': 1, '2008-B': 1},
      'Rice Pudding': {'2013-B': 1, '2014-A': 1, '2015-A': 2},
      'Pumpkins Bars': {'2015-A': 2, '2016-B': 1},
      'Pecan Pie ala Moda': {'2015-B': 1, '2016-B': 2, '2017-A': 1, '2019-B': 2},
      'Zucchini Bread': {'2016-A': 1}, 'Greek Kataifi': {'2013-B': 1},
      'Lemon Pie': {'2016-B': 1, '2017-A': 1, '2017-B': 1, '2019-B': 1},
      'Pineapple and Pecan Cake': {'2017-A': 1},
      'Key Lime Pie ala Moda': {'2017-A': 1, '2018-A': 2},
      'Root Beer Float': {'2009-A': 1}, 'Vanilla Cookies': {'2018-B': 1},
      'Banana Cream Pie ala Moda': {'2019-A': 2},
      'Cookie Cream Pie ala Moda': {'2019-A': 1},
      'Coconut Cream Pie ala Moda': {'2019-A': 1},
      'Coffee Cake': {'2019-A': 1}, 'French Sielk Cake': {'2019-A': 1},
      'French Sielk Pie ala Moda': {'2019-A': 1},
      'Yougurt Perfeit': {'2019-A': 1}, 'Respberry Pie ala Moda': {'2019-B': 1},
      'Brownies Pie ala Moda': {'2019-A': 1, '2020-A': 1},
      'Pumpkin Cake Roll': {'2019-B': 1, '2020-A': 1},
      'Ricotta Pie ala Moda': {'2008-B': 2}, 'Vanilla Pie': {'2008-B': 1}
    },
    Friday: {
      'Chicken ala Parmigiana': {
        '2009-B': 1, '2010-A': 4, '2010-B': 2, '2011-B': 1, '2011-A': 1,
        '2012-B': 3, '2013-A': 2, '2013-B': 2, '2014-A': 1, '2014-B': 3,
        '2015-A': 2, '2015-B': 2, '2016-A': 1, '2016-B': 4, '2017-A': 3,
        '2017-B': 2, '2009-A': 1, '2018-A': 3, '2018-B': 3, '2019-A': 3,
        '2019-B': 2, '2020-A': 1, '2012-A': 4, '2007-B': 1, '2008-A': 2,
        '2008-B': 1
      },
      'N.Y. Sirloin Steak': {
        '2009-B': 1, '2010-A': 3, '2010-B': 1, '2011-B': 1, '2013-B': 2,
        '2014-A': 1, '2015-A': 1, '2015-B': 1, '2017-A': 2, '2017-B': 1,
        '2018-A': 1, '2018-B': 1, '2019-B': 1, '2007-B': 1, '2008-A': 1,
        '2008-B': 1, '2012-A': 1
      },
      'Roast Turkey Dinner': {
        '2009-B': 1, '2010-A': 1, '2010-B': 2, '2013-A': 1, '2013-B': 2,
        '2014-A': 1, '2014-B': 2, '2015-A': 1, '2015-B': 1, '2016-A': 1,
        '2016-B': 1, '2017-B': 2, '2019-A': 2, '2019-B': 1, '2020-A': 1
      },
      'Bourbon Chicken': {
        '2010-A': 2, '2010-B': 2, '2011-B': 2, '2012-B': 1, '2013-A': 2,
        '2013-B': 2, '2014-B': 1, '2015-A': 1, '2016-B': 1, '2018-B': 2,
        '2019-A': 1, '2012-A': 4, '2007-B': 3, '2008-A': 1
      },
      'Grilled Marinated Flank Steak': {
        '2013-A': 1, '2013-B': 1, '2014-A': 1, '2014-B': 2, '2015-A': 1,
        '2016-A': 1, '2016-B': 2, '2017-A': 1, '2017-B': 2, '2018-A': 2,
        '2018-B': 2, '2019-A': 3, '2019-B': 3
      },
      'Vodka Orange Chicken': {
        '2009-B': 1, '2010-A': 1, '2011-A': 1, '2011-B': 1, '2014-A': 1,
        '2015-B': 1, '2016-B': 1, '2018-A': 1, '2012-A': 2, '2008-B': 1
      },
      'Ziti': {
        '2010-A': 2, '2011-A': 1, '2014-A': 1, '2015-B': 1, '2016-B': 2,
        '2009-A': 1, '2018-B': 1, '2020-A': 1, '2012-A': 2, '2008-A': 1
      },
      'Salmon Lasagna': {
        '2015-A': 1, '2015-B': 1, '2016-A': 1, '2017-A': 2, '2017-B': 2,
        '2018-A': 2, '2018-B': 3, '2019-A': 3, '2019-B': 3, '2020-A': 1
      },
      'Sea Food Platter': {
        '2011-A': 1, '2013-A': 1, '2016-A': 1, '2017-A': 1, '2018-A': 1,
        '2019-A': 2, '2012-A': 1, '2007-B': 2, '2008-B': 1
      },
      'Salmon alla Puttanesca': {
        '2010-A': 1, '2010-B': 1, '2011-A': 1, '2014-A': 1, '2016-A': 1,
        '2016-B': 1, '2017-A': 1, '2018-A': 1, '2008-B': 1
      },
      'Chicken Marsala': {
        '2010-A': 1, '2015-A': 1, '2015-B': 1, '2016-B': 1, '2007-B': 1
      },
      'Chicken Gordon Blue': {
        '2010-B': 1, '2014-B': 1, '2019-B': 1, '2012-A': 1, '2008-B': 1
      },
      'Roast Prime Ribs of Beef': {
        '2009-B': 1, '2010-B': 1, '2013-A': 1, '2008-B': 1
      },
      'Sea Food and Chicken Paella': {
        '2013-A': 1, '2013-B': 1, '2014-B': 1, '2018-B': 1
      },
      'Sea Food Pasta': {'2009-B': 2, '2010-B': 1, '2017-B': 1},
      'Hot Hot Chicken Wings': {'2015-B': 1, '2016-B': 1, '2008-B': 1},
      'Brisket of Beef': {'2009-B': 1, '2011-A': 1},
      'Sea Food Marinara': {'2018-A': 1, '2020-A': 1},
      'Egg Plant Parmigiana': {'2010-A': 1, '2012-A': 2},
      'Roast Leg of Lamb': {'2013-B': 1, '2017-B': 1},
      'Pizza w/ Everything': {'2015-B': 1, '2008-B': 1},
      'BBQ Hamburgers, Cheeseburgers': {'2009-A': 1},
      'Chicken Sun Dried Tomato': {'2011-B': 1},
      'Moroccan Style Chicken': {'2012-B': 1}, 
      'Shrimp Creole': {'2010-B': 1}, 'Sea Food Risotto': {'2009-B': 1},
      'Surf and Turf': {'2013-B': 1}, 'Corned Beef and Cabbage': {'2013-B': 1},
      'London Broiled': {'2014-A': 1, '2014-B': 1, '2019-B': 2, '2007-B': 1},
      'Baked Lasagna': {'2014-B': 1, '2017-A': 1, '2012-A': 2, '2008-B': 1},
      'Salmon': {'2014-B': 1}, 'Beer Batter Fish Fry': {'2010-A': 1},
      'Clam Chowder': {'2014-B': 1}, 'Roast Leg of Venison': {'2015-A': 1},
      'Italian Cannelloni': {'2015-B': 1}, 'Pistachio Kebab': {'2015-B': 1},
      'Falafel on Buns': {'2015-B': 1}, 'Cheese Manicotti': {'2016-A': 1},
      'Cuban Sandwiches': {'2016-B': 1}, 'BBQ Pulled Pork': {'2016-B': 1},
      'Brushetta Chicken': {'2016-B': 1}, 'Shrimp Fra Diavlo': {'2017-A': 1},
      'Chicken Fettuccine Alfredo': {'2017-B': 1, '2018-A': 2, '2018-B': 1},
      'Clams Casino': {'2018-A': 1}, 'Wiener Schnitzel': {'2018-B': 1},
      'Veal Parmigiana': {'2018-B': 1}, 'Caprese Panini': {'2019-B': 1},
      'Chicken Calabrese': {'2020-A': 1}, 'Pork Chops': {'2012-A': 1},
      'Teriyaki Flank Steak': {'2007-B': 1}, 'Scallops': {'2007-B': 1},
      'Brandied Shrimp': {'2008-A': 1}, 'Garlic Shrimp Pasta': {'2008-B': 2},
      'Hot Sausage': {'2009-A': 1}, 'Steak ala Pizzaiola': {'2011-A': 1}
    }
  }
};

/*** METADATA ***/
const meta = {
  tape_widths: {
    masking: 10, // 1"
    painter: 14, // 1.41"
    scotch: 8, // 0.75"
    duct: 19, // 1.88"
    electrical: 8 // 0.75"
  },
  days: {
    Mon: {name: "Monday", order: 1},
    Tue: {name: "Tuesday", order: 2},
    Wed: {name: "Wednesday", order: 3},
    Thu: {name: "Thursday", order: 4},
    Fri: {name: "Friday", order: 5},
    Sat: {name: "Saturday", order: 6},
    Sun: {name: "Sunday", order: 7}
  },
  course_colors: {
    Main: "rgb(194,49,30)",
    Side: "rgb(124,157,72)",
    Dessert: "rgb(138,78,63)",
    Friday: "rgb(194,49,30)"
  }
};