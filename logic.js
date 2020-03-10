// Function to determine marker size based on salary
function markerSize(salary) {
  return salary / 1.2;
}

// Function to determine marker size based on job openings
function markerSizepos(positions) {
  return positions * 1000;
}

// Define arrays to hold created positions and salary markers
var positionMarkers = [];
var salaryMarkers = [];

d3.csv("output_file.csv").then(data => { 
  console.log(data);
  // Loop through locations and create salary and poitions markers
  data.forEach(cities => {
    // Setting the marker radius by passing salary into the markerSize function
    salaryMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "white",
        radius: markerSize(cities.salary)
      })
    )

    // Setting the marker radius for the city by passing job openings into the markerSize function
    positionMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(cities.positions)
      })
    )
  })
});






// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var salary = L.layerGroup(salaryMarkers);
var positions = L.layerGroup(positionMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Average Salary": salary,
  "Job Openings": positions
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, salary, positions]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
