// Function to determine marker size based on salary
function markerSizesal(salary) {
  return salary ;
}

// Function to determine marker size based on job openings
function markerSizepos(positions) {
  return positions * 1000;
}

// Function to determine marker size based on median house prices
function markerSizehouse(med_h) {
  return med_h /3 ;
}

// Function to determine marker size based on median rents
function markerSizemrent(med_r) {
  return med_r * 50;
}

// Function to determine marker size based on mortgage/salary
function markerSizemtg(mbs) {
  return mbs * 2000;
}

// Function to determine marker size based on rent/salary
function markerSizerent(rbs) {
  return rbs * 2000;
}


// Define arrays to hold created positions and salary markers
var salaryMarkers = [];
var positionMarkers = [];
var houseMarkers = [];
var mrentMarkers = [];
var mtgToSalMarkers = [];
var rentToSalMarkers = [];

  // Create separate layer groups
  var salary = L.layerGroup(salaryMarkers);
  var positions = L.layerGroup(positionMarkers);
  var house = L.layerGroup(houseMarkers);
  var mrent = L.layerGroup(mrentMarkers);
  var mtgToSal = L.layerGroup(mtgToSalMarkers);
  var rentToSal = L.layerGroup(rentToSalMarkers);

  // Define variables for our base layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  // Define a map object
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetmap, salary]
  });

  // Create an overlay object
  var overlayMaps = {
    "Average Salary": salary,
    "Job Openings": positions,
    "Median home price": house,
    "Median monthly rent": mrent,
    "Mortgage to Salary": mtgToSal,
    "Rent to Salary": rentToSal
  };

d3.csv("final_df_weights.csv").then(data => { 
  console.log(data);
  // Loop through cities and create salary and job opening markers
  data.forEach(cities => {
    // Setting the marker radius by passing salary into the markerSize function
    salaryMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "red",
        fillColor: "red",
        radius: markerSizesal(cities.salary)
      }).bindPopup("<h1>#" + cities.rank + ": " + cities.city + "</h1> <hr> <h3>  Salary: $" + cities.salary + "</h3>").addTo(salary)
    )
    
    // Setting the marker radius for the city by passing job openings into the markerSize function
    positionMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "yellow",
        fillColor: "yellow",
        radius: markerSizepos(cities.positions)
      }).bindPopup("<h1>#" + cities.rank + ": " + cities.city + "</h1> <hr> <h3> Job openings: " + cities.positions + "</h3>").addTo(positions)
    )

    // Setting the marker radius for the city by passing home prices into the markerSize function
    houseMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "blue",
        fillColor: "blue",
        radius: markerSizehouse(cities.med_h)
      }).bindPopup("<h1>#" + cities.rank + ": " + cities.city + "</h1> <hr> <h3> Median Home Price: $" + cities.med_h + "</h3>").addTo(house)
    )
    // Setting the marker radius for the city by passing job openings into the markerSize function
    mrentMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "violet",
        fillColor: "violet",
        radius: markerSizemrent(cities.med_r)
      }).bindPopup("<h1>#" + cities.rank + ": " + cities.city + "</h1> <hr> <h3> Median Rent: $" + cities.med_r + "</h3>").addTo(mrent)
    )

    // Setting the marker radius by passing mortgage/salary into the markerSize function
    mtgToSalMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        //radius: markerSize(1)
        radius: markerSizemtg(cities.mbs)
      }).bindPopup("<h1>#" + cities.rank + ": " + cities.city + "</h1> <hr> <h3>Mortgage To Salary: " + cities.mbs + "%</h3>").addTo(mtgToSal)
    )

    // Setting the marker radius by passing rent/salary into the markerSize function
    rentToSalMarkers.push(
      L.circle([cities.Lat, cities.Long], {
        stroke: false,
        fillOpacity: 0.75,
        color: "orange",
        fillColor: "orange",
        //radius: markerSize(2)
        radius: markerSizerent(cities.rbs)
      }).bindPopup("<h1>#" + cities.rank + ": " +  cities.city + "</h1> <hr> <h3>  Rent To Salary: " + cities.rbs + "%</h3>").addTo(rentToSal)
    )

  })

  main(); 
});


function main() {

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });


  // Create a baseMaps object
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create an overlay object
  var overlayMaps = {
    "Average Salary": salary,
    "Job Openings": positions,
    "House Price": house,
    "Rent": mrent,    
    "Mortgage to Salary": mtgToSal,
    "Rent to Salary": rentToSal
  };

  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}