/*** Helper Functions ***/
function forceBBox() {
  var nodes;

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i];
      if (node.x < node.x_min || node.x > node.x_max) node.vx = 0;
      if (node.y < node.y_min || node.y > node.y_max) node.vy = 0;
      node.x = Math.max(Math.min(node.x, node.x_max), node.x_min);
      node.y = Math.max(Math.min(node.y, node.y_max), node.y_min);
    }
  }

  force.initialize = function(_) {
    nodes = _;
  }

  return force;
}

function forceGravity() {
  var nodes,
      strength = 1,
      v_terminal = 5;

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      nodes[i].vy = Math.min(v_terminal, nodes[i].vy + strength);
    }
  }

  force.initialize = function(_) {
    nodes = _;
  }

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  }

  return force;
}

/*** INITIALIZE MEAL PLOT ***/
function drawTimeline() {
  var margin = {top: 0, right: 0, bottom: 30, left: 0},
      width = $("#meal-plot").width(),
      height = $("#meal-plot").height(),
      // padding between nodes
      radius = 4,
      semesterPadding = 0.2,
      grey_default = "#aaa",
      grey_missing = "#eee";
  
  var semesters = Object.keys(timeline.semester_counts['Total']).sort();

  var g = d3.select("#meal-plot").append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleBand()
    .padding(semesterPadding)
    .domain(semesters)
    .range([0, width - margin.left - margin.right]);
  var row_count = Math.ceil(x.bandwidth() / (radius * 2));

  function rad(i, fri) {
    if (i % fri === 0) return radius;
    if (i % fri === 3) return radius - 0.75;
    if (i % fri >= 5) return radius + 0.25;
    return radius - 0.25;
  }

  var meal_nodes = Array();
  semesters.forEach(sem => {
    var count = timeline.semester_counts['Total'][sem];
    var fridays = timeline.semester_counts['Friday'][sem];
    var friday_interval = Math.floor(count / fridays);
    friday_interval += friday_interval === row_count ? 1 : 0;
    for (var i=0; i < count; i++) {
      meal_nodes.push({
        semester: sem,
        mealnum: i + 1,
        fridays: fridays,
        r: rad(i, friday_interval),
        x: x(sem) + (i % row_count) * radius * 2,
        x_min: x(sem),
        x_max: x(sem) + x.bandwidth(),
        y: height - margin.top - margin.bottom - (Math.floor(i / row_count) + 1) * radius * 2,
        y_min: 0,
        y_max: height - margin.top - margin.bottom - radius
      });
    }
  });

  var simulation = d3.forceSimulation(meal_nodes)
    .velocityDecay(0.2)
    .force("collision", d3.forceCollide(n => n.r).strength(1.2))
    .force("y", forceGravity().strength(0.04))
    .force("bbox", forceBBox())
    .stop()

  // Semester labels
  var labels = g.append("g").attr("transform", "translate(0," + (height - margin.top - margin.bottom) + ")")
    .selectAll("g").data(semesters).enter()
      .append("g").attr("transform", d => "translate(" + (x(d) + x.bandwidth() / 2) + ",12)");
  labels.append("text").attr("text-anchor", "middle").attr("font-size", "8pt")
    .text(d => d.split("-")[0]);
  labels.append("text").attr("text-anchor", "middle").attr("font-size", "8pt")
    .attr("dy", "1.2em")
    .text(d => d.split("-")[1] === "A" ? "Spring" : "Fall");

  // Key Meal labels
  var keymeals = d3.select("#key-dishes")
    .selectAll("div").data(timeline.key_dishes).enter().append("div")
      .style("left", d => (x(d.semester) - 40 + x.bandwidth() / 2) + "px")
      .style("height", d => x.bandwidth() + "px")
      .style("line-height", d => x.bandwidth() + "px")
      .append("p").text(d => d.dish);

  // Semester lines
  g.append("g")
    .selectAll("line").data(semesters).enter()
      .append("line")
      .attr("x1", d => x(d) - x.padding() * x.step() / 2)
      .attr("x2", d => x(d) - x.padding() * x.step() / 2)
      .attr("y1", margin.top).attr("y2", height - margin.top - margin.bottom)
      .attr("stroke", "#bbb")
      .attr("stroke-width", 0.5);

  // Draw meal_circles but hide them
  var meal_circles = g.append("g")
      .selectAll("circle")
      .data(meal_nodes)
      .enter().append("circle")
        .attr("cx", -50)
        .attr("cy", -50)
        .attr("r", d => d.r)
        .attr("fill", grey_default)
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .style("cursor", "pointer");

  // Use a timeout to allow the rest of the page to load first.
  // See https://github.com/d3/d3-force/blob/master/README.md#simulation_tick
  d3.timeout(function() {
    simulation.tick(400);
    meal_circles.attr("cx", d => d.x).attr("cy", d => d.y);
  });

  /*** HOVER DISH NAMES -> HIGHLIGHT MEALS ***/
  var percent_labels = g.append("g").selectAll("text").data(semesters).enter()
    .append("text")
      .attr("text-anchor", "middle")
      .attr("font-weight", 500)
      .attr("font-size", "9pt")
      .attr("x", d => x(d) + x.bandwidth() / 2)
      .attr("dy", 10);
  d3.selectAll(".dish")
    .on("mouseover", function() {
      var course = $(this).closest(".summary-list").data("course");
      var dish_name = $(this).find(".name").text();
      var D = timeline.dish_semesters[course][dish_name];
      var S = timeline.semester_counts[course];
      var highlight = meta.course_colors[dish_name] || meta.course_colors[course]
      meal_circles.attr("fill", d => {
        if (d.mealnum <= (D[d.semester] || 0))
          return highlight;
        else if (d.mealnum <= (S[d.semester] || 0))
          return grey_default;
        else
          return grey_missing;
      });
      percent_labels.text(d => {
        if (D[d] > 0) {
          return Math.round(D[d] / S[d] * 100) + "%";
        } else {
          return "";
        }
      })
      .attr("fill", highlight);
    })
    .on("mouseout", function() {
      meal_circles.attr("fill", "#aaa");
      percent_labels.text("");
    });

  /*** CLICK MEALS -> SHOW MENU ***/
  meal_circles
    .on("mouseover", function() {
      meal_circles.attr("fill", grey_default);
      $(this).attr("fill", "rgb(0,77,166)");
    })
    .on("mouseout", function() {
      meal_circles.attr("fill", grey_default);
    })
    .on("click", d => {
      let response = menu_text[d.semester][d.mealnum];
      d3.select("#menu-modal")
        .style("left", (d.x + radius + margin.left) + "px")
        .style("top", (d.y + radius + margin.top) + "px");
      d3.select("#menu-menu").text(response.meal);
      d3.select("#menu-day").text(meta.days[response.day].name);
    });
  d3.select("#menu-modal").on("click", function() {
    d3.select(this).style("left", "-500px").style("top", "-500px");
  });
}