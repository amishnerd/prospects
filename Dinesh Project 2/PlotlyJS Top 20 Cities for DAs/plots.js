// Part 1
var trace1 = {
  x: ["Des Moines",
      "Fayetteville",
      "Madison",
      "Huntsville",
      "Denver",
      "Colorado Springs",
      "Austin",
      "Grand Rapids",
      "Charlotte",
      "Nashville",
      "Portland",
      "Greenville",
      "Boise",
      "Seattle",
      "Phoenix",
      "Sarasota",
      "Houston",
      "Salt Lake City",
      "Winston-Salem",
      "Melbourne"       ],
  y: [  83.5,
        78.0,
        76.0,
        74.0,
        74.0,
        73.5,
        73.5,
        71.5,
        68.5,
        66.5,
        66.0,
        62.0,
        60.0,
        58.5,
        58.0,
        58.0,
        56.0,
        55.0,
        54.5,
        54.5
    ],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Top 20 Job Markets recommended for new Data Analysts".bold(),
  xaxis: { title: "Cities".bold()},
  yaxis: { title: "Weighted Score".bold()}
};

Plotly.newPlot("plot", data, layout);

