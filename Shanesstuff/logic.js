// Function to determine marker size based on population
function markerSize(salary) {
  return salary / 3;
}

// An array containing all of the information needed to create city and state markers
var locations = [




    {
        coordinates: [33.466667,	-81.966667],
        state: {
          name: "Georgia",
          
        },
        city: {
          name: "Augusta",
          salary: 44020,
          rank: "#72"
        }
      },
      {
        coordinates: [36.1699,	-115.1398],
        state: {
          name: "Nevada",
          
        },
        city: {
          name: "Las Vegas",
          salary: 44450,
          rank: "#71"
        }
      },
  
  
  
      {
    coordinates: [61.217381,	-149.863129],
    state: {
      name: "Alaska",
      
    },
    city: {
      name: "Anchorage",
      salary: 58980,
      rank: "#70"
    }
  },
  {
    coordinates: [39.758949,	-84.191605],
    state: {
      name: "Ohio",
      
    },
    city: {
      name: "Dayton",
      salary: 48700,
      rank: "#69"
    }
  },
  {
    coordinates: [35.481918,	-97.508469],
    state: {
      name: "Oklahoma",
      
    },
    city: {
      name: "Oklahoma City",
      salary: 46070,
      rank: "#68"
    }
  },
  {
    coordinates: [34.0007,	-81.0348],
    state: {
      name: "South Carolina",
      
    },
    city: {
      name: "Columbia",
      salary: 43840,
      rank: "#67"
    }
  },
  {
    coordinates: [36.044659,	-79.766235],
    state: {
      name: "North Carolina",
      
    },
    city: {
      name: "Greensboro",
      salary: 43310,
      rank: "#66"
    }
  },
  {
    coordinates: [47.658779,	-117.426048],
    state: {
      name: "Washington",
      
    },
    city: {
      name: "Spokane",
      salary: 47320,
      rank: "#65"
    }
  },
  {
    coordinates: [38.328732,	-85.764771],
    state: {
      name: "Kentucky",
      
    },
    city: {
      name: "Louisville",
      salary: 45100,
      rank: "#64"
    }
  },
  {
    coordinates: [28.538336,	-81.379234],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Orlando",
      salary: 44410,
      rank: "#63"
    }
  },
  {
    coordinates: [42.2626,	-71.8023],
    state: {
      name: "Massachusetts",
      
    },
    city: {
      name: "Worchester",
      salary: 53110,
      rank: "#62"
    }
  },
  {
    coordinates: [43.038902,	-87.906471],
    state: {
      name: "Wisconsin",
      
    },
    city: {
      name: "Milwaukee",
      salary: 50070,
      rank: "#61"
    }
  },
  {
    coordinates: [21.315603,	-157.858093],
    state: {
      name: "Hawaii",
      
    },
    city: {
      name: "Honolulu",
      salary: 54030,
      rank: "#60"
    }
  },
  {
    coordinates: [28.039465,	-81.949806],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Lakeland",
      salary: 40560,
      rank: "#59"
    }
  },
  {
    coordinates: [43.16103,	-77.610924],
    state: {
      name: "New York",
      
    },
    city: {
      name: "Rochester",
      salary: 49570,
      rank: "#58"
    }
  },
  {
    coordinates: [33.753746,	-84.38633],
    state: {
      name: "Georgia",
      
    },
    city: {
      name: "Atlanta",
      salary: 51390,
      rank: "#57"
    }
  },
  {
    coordinates: [27.964157,	-82.452606],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Tampa",
      salary: 46080,
      rank: "#56"
    }
  },
  {
    coordinates: [35.045631,	-85.309677],
    state: {
      name: "Tennessee",
      
    },
    city: {
      name: "Chattanooga",
      salary: 42870,
      rank: "#55"
    }
  },
  {
    coordinates: [43.088947,	-76.15448],
    state: {
      name: "New York",
      
    },
    city: {
      name: "Syracuse",
      salary: 49850,
      rank: "#54"
    }
  },



  {
    coordinates: [37.54129,	-77.434769],
    state: {
      name: "Virginia",
      
    },
    city: {
      name: "Richmond",
      salary: 49840,
      rank: "#53"
    }
  },

  {
    coordinates: [37.54129,	-77.434769],
    state: {
      name: "Virginia",
      
    },
    city: {
      name: "Richmond",
      salary: 49840,
      rank: "#53"
    }
  },
  


  {
    coordinates: [42.88023,	-78.878738],
    state: {
      name: "New York",
      
    },
    city: {
      name: "Buffalo",
      salary: 48150,
      rank: "#52"
    }
  },

  {
    coordinates: [39.983334,	-82.98333],
    state: {
      name: "Ohio",
      
    },
    city: {
      name: "Columbus",
      salary: 50020,
      rank: "#51 Go Bucks!"
    }
  },

  {
    coordinates: [40.440624,	-79.995888],
    state: {
      name: "Pennsylvania",
      
    },
    city: {
      name: "Pittsburgh",
      salary: 48580,
      rank: "#50"
    }
  },
  {
    coordinates: [39.099724,	-94.578331],
    state: {
      name: "Missouri",
      
    },
    city: {
      name: "Kansas City",
      salary: 49460,
      rank: "#49"
    }
  },

  {
    coordinates: [40.044437,	-76.306229],
    state: {
      name: "Pennsylvania",
      
    },
    city: {
      name: "Lancaster",
      salary: 43760,
      rank: "#48"
    }
  },

  {
    coordinates: [41.76371,	-72.685097],
    state: {
      name: "Connecticut",
      
    },
    city: {
      name: "Hartford",
      salary: 60040,
      rank: "#47"
    }
  },

  {
    coordinates: [35.964668,	-83.926453],
    state: {
      name: "Tennessee",
      
    },
    city: {
      name: "Knoxville",
      salary: 43840,
      rank: "#46"
    }
  },
  {
    coordinates: [32.776566,	-79.930923],
    state: {
      name: "South Carolina",
      
    },
    city: {
      name: "Charleston",
      salary: 44970,
      rank: "#45"
    }
  },

  {
    coordinates: [40.26368,	-76.890739],
    state: {
      name: "Pennsylvania",
      
    },
    city: {
      name: "Harrisburg",
      salary: 48270,
      rank: "#44"
    }
  },
  {
    coordinates: [43.008663,	-71.454391],
    state: {
      name: "New Hampshire",
      
    },
    city: {
      name: "Manchester",
      salary: 52640,
      rank: "#43"
    }
  },

  {
    coordinates: [30.332184,	-81.655647],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Jacksonville",
      salary: 45760,
      rank: "#42"
    }
  },


  {
    coordinates: [42.732536,	-84.555534],
    state: {
      name: "Michigan",
      
    },
    city: {
      name: "Lansing",
      salary: 47990,
      rank: "#41"
    }
  },

  {
    coordinates: [41.093842,	-85.139236],
    state: {
      name: "Indiana",
      
    },
    city: {
      name: "Fort Wayne",
      salary: 43590,
      rank: "#40"
    }
  },

  

  {
    coordinates: [39.103119,	-84.512016],
    state: {
      name: "Ohio",
      
    },
    city: {
      name: "Cincinnati",
      salary: 48890,
      rank: "#39"
    }
  },
  {
    coordinates: [39.791,	-86.148003],
    state: {
      name: "Indiana",
      
    },
    city: {
      name: "Indianapolis",
      salary: 48030,
      rank: "#38"
    }
  },
  {
    coordinates: [30.433283,	-87.240372],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Pensacola",
      salary: 41200,
      rank: "#37"
    }
  },

  {
    coordinates: [32.715736,	-117.161087],
    state: {
      name: "California",
      
    },
    city: {
      name: "San Diego",
      salary: 56410,
      rank: "#36"
    }
  },

  {
    coordinates: [26.640629, -81.872307],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Fort Myers",
      salary: 41380,
      rank: "#35"
    }
  },

  {
    coordinates: [29.424349,	-98.491142],
    state: {
      name: "Texas",
      
    },
    city: {
      name: "San Antonio",
      salary: 46200,
      rank: "#34"
    }
  },

  {
    coordinates: [39.530895, -119.814972],
    state: {
      name: "Nevada",
      
    },
    city: {
      name: "Reno",
      salary: 46330,
      rank: "#33"
    }
  },
  {
    coordinates: [41.25716,	-95.995102],
    state: {
      name: "Nebraska",
      
    },
    city: {
      name: "Omaha",
      salary: 47660,
      rank: "#32"
    }
  },

  {
    coordinates: [36.099861, -80.244217],
    state: {
      name: "North Carolina",
      
    },
    city: {
      name: "Winston-Salem",
      salary: 44910,
      rank: "#31"
    }
  },
  {
    coordinates: [29.749907, -95.358421],
    state: {
      name: "Texas",
      
    },
    city: {
      name: "Houston",
      salary: 53820,
      rank: "#30"
    }
  },

  {
    coordinates: [38.047989, -84.50164],
    state: {
      name: "Kentucky",
      
    },
    city: {
      name: "Lexington-Fayette",
      salary: 43720,
      rank: "#29"
    }
  },

  {
    coordinates: [42.65258, -73.756233],
    state: {
      name: "New York",
      
    },
    city: {
      name: "Albany",
      salary: 52770,
      rank: "#28"
    }
  },
  {
    coordinates: [42.361145, -71.057083],
    state: {
      name: "Massachusets",
      
    },
    city: {
      name: "Boston",
      salary: 65420,
      rank: "#27"
    }
  },

  {
    coordinates: [33.448376, -112.074036],
    state: {
      name: "Arizona",
      
    },
    city: {
      name: "Phoenix",
      salary: 49500,
      rank: "#26"
    }
  },

  {
    coordinates: [28.0836, -80.6081],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Melbourne",
      salary: 48240,
      rank: "#25"
    }
  },


  {
    coordinates: [40.758701, -111.876183],
    state: {
      name: "Utah",
      
    },
    city: {
      name: "Salt Lake City",
      salary: 47272,
      rank: "#24"
    }
  },
  {
    coordinates: [43.6591, -70.2568],
    state: {
      name: "Maine",
      
    },
    city: {
      name: "Portland",
      salary: 48970,
      rank: "#23"
    }
  },
  
  {
    coordinates: [34.852619, -82.394012],
    state: {
      name: "South Carolina",
      
    },
    city: {
      name: "Greenville",
      salary: 43230,
      rank: "#22"
    }
  },

  {
    coordinates: [32.779167, -96.808891],
    state: {
      name: "Texas",
      
    },
    city: {
      name: "Dallas-Fort Worth",
      salary: 51250,
      rank: "#21"
    }
  },
  {
    coordinates: [35.227085,	-80.843124],
    state: {
      name: "North Carolina",
      
    },
    city: {
      name: "Charlotte",
      salary: 50150,
      rank: "#20"
    }
  },
  {
    coordinates: [38.9072, -77.0369],
    state: {
      name: "Washington DC",
      
    },
    city: {
      name: "Washington, DC",
      salary: 69210,
      rank: "#19"
    }
  },
  {
    coordinates: [27.341274, -82.528267],
    state: {
      name: "Florida",
      
    },
    city: {
      name: "Sarasota",
      salary: 42680,
      rank: "#18"
    }
  },
  {
    coordinates: [43.618881, -116.215019],
    state: {
      name: "Idaho",
      
    },
    city: {
      name: "Boise",
      salary: 43880,
      rank: "#17"
    }
  },

  {
    coordinates: [35.5951, -82.5515],
    state: {
      name: "North Carolina",
      
    },
    city: {
      name: "Ashville",
      salary: 41210,
      rank: "#16"
    }
  },
  {
    coordinates: [36.174465, -86.76796],
    state: {
      name: "Tennessee",
      
    },
    city: {
      name: "Nashville",
      salary: 47110,
      rank: "#15"
    }
  },

  {
    coordinates: [37.3382, -121.8863],
    state: {
      name: "California",
      
    },
    city: {
      name: "San Jose",
      salary: 77180,
      rank: "#14"
    }
  },

  {
    coordinates: [42.963795, -85.6681],
    state: {
      name: "Michigan",
      
    },
    city: {
      name: "Grand Rapids",
      salary: 44770,
      rank: "#13"
    }
  },
  {
    coordinates: [43.073051, -89.40123],
    state: {
      name: "Wisconsin",
      
    },
    city: {
      name: "Madison",
      salary: 52190,
      rank: "#12"
    }
  },
  {
    coordinates: [34.738228, -86.601791],
    state: {
      name: "Alabama",
      
    },
    city: {
      name: "Huntsville",
      salary: 53600,
      rank: "#11"
    }
  },

  {
    coordinates: [35.787743, -78.644257],
    state: {
      name: "North Carolina",
      
    },
    city: {
      name: "Raleigh Durham",
      salary: 53788,
      rank: "Ranked 10th best city to live in"
    }
  },



  {
    coordinates: [47.608013, -122.335167],
    state: {
      name: "Washington",
      
    },
    city: {
      name: "Seattle",
      salary: 63120,
      rank: "Ranked 9th best city to live in"
    }
  },

  {
    coordinates: [45.523064, -122.676483],
    state: {
      name: "Oregon",
      
    },
    city: {
      name: "Portland",
      salary: 55330,
      rank: "Ranked 8th best city to live in"
    }
  },
  {
    coordinates: [37.733795, -122.446747],
    state: {
      name: "California",
      
    },
    city: {
      name: "San Francisco",
      salary: 69700,
      rank: "Ranked 7th best city to live in"
    }
  },


  {
    coordinates: [44.986656, -93.258133],
    state: {
      name: "Minnesota",
      
    },
    city: {
      name: "Minneapolis-St. Paul",
      salary: 56030,
      rank: "Ranked 6th best city to live in"
    }
  },
  {
    coordinates: [41.619549, -93.598022],
    state: {
      name: "Iowa",
      
    },
    city: {
      name: "Des Moines",
      salary: 50600,
      rank: "Ranked 5th best city to live in"
    }
  },

  {
    coordinates: [36.082157, -94.171852],
    state: {
      name: "Arkansas",
      
    },
    city: {
      name: "Fayetteville",
      salary: 45830,
      rank: "Ranked 4th best city to live in"
    }
  },
  {
    coordinates: [39.742043, -104.991531],
    state: {
      name: "Colorado",
      
    },
    city: {
      name: "Denver",
      salary: 57400,
      rank: "Ranked 2nd best city to live in"
    }
  },
  
  
  {
    coordinates: [30.266666, -97.7431],
    state: {
      name: "Texas",
      
    },
    city: {
      name: "Austin",
      salary: 51840,
      rank: "Ranked 1st, best city to live in"
    }
  },
  {
    coordinates: [38.846127, -104.800644],
    state: {
      name: "Colorado"
      
    },
    city: {
      name: "Colorado Springs",
      salary: 50050,
      rank: "Ranked 3rd best city to live in"
      
    }
  }
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
 

  // Setting the marker radius for the city by passing population into the markerSize function
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "orange",
      fillColor: "red",
      radius: markerSize(locations[i].city.salary)
    }).bindPopup(`${locations[i].city.name}: ${locations[i].city.rank}`)
  );
  
}

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
var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
 //"Above 50": rank >#50
  "Top 50 Cities to live in": cities
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap, states, cities]
});


   
  
// Giving each feature a pop-up with information pertinent to it
//layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);