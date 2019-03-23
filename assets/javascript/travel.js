// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcRG_GwiN8sBxD8xwcMEttzby0cND52KY",
  authDomain: "travel-project-ac0c2.firebaseapp.com",
  databaseURL: "https://travel-project-ac0c2.firebaseio.com",
  projectId: "travel-project-ac0c2",
  storageBucket: "travel-project-ac0c2.appspot.com",
  messagingSenderId: "549559435677"
};

firebase.initializeApp( config );
var database = firebase.database();


// Initial Values

// Initial list of acitvity choices in an array
var activities = ["Hiking", "Skiing", "Mountain Biking", "Surfing", "Skydiving"]

// Function to get giphy api's using user input(?)
function showInfo() {
  var activity = $( this ).attr( "data-name" );
  console.log( activity );
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + activity + "&rating=g&api_key=CzAlbxJgZNeqUfc3v0PSdcxACwxhr5Zh&limit=1";

  // Use ajax to get gifs

  $.ajax( {
    url: queryURL,
    method: "GET"

  } ).then( function ( response ) {
    console.log( response );
    for ( var i = 0; i < response.data.length; i++ ) {

      var image = $( "<img src= " + response.data[i].images.fixed_width.url + ">" )
        ( "#display" ).append( image );
    }
  } )
};

// Put the gifs each into a div
//Click event for each images takes you to the second page


