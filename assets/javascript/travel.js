$( document ).ready( function () {
  // GLOBAL VARIABLES

  // Initial Values
  // Initial list of acitvity choices in an array
  var activities = ["Hiking", "Skiing", "Mountain Biking", "Surfing", "Skydiving"]

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



  // FUNCTIONS

  // Dropdown trigger
  // (function($) {
  //   $(function() {
 
  //     $('.button-collapse').sideNav();
  //     $('select').material_select();
  //     $('.dropdown-button').dropdown();
 
  //   }); // end of document ready
  // })(jQuery); // end of jQuery name space
 
  $('.dropdown-trigger').dropdown();


  // on click function to call the api, should use data- to input which activity is being clicked or searched
  // $( "????" ).on( "click", function () {
  //   // assigns the data attribute
  //   var sdfdf = $( this ).attr( "data-sdfdf" );
  //   // &limit=10 limits the response by 10
  //   activityQueryURL = 'http://api.amp.active.com/v2/search&q=' + sdfdf + 'near=Salt%20Lake%20City,UT,US&show_distance=true&sort=distance&api_key=&limit=15';

  //   // link the api using ajax
  //   $.ajax( {
  //     url: activityQueryURL,
  //     method: "GET"
  //   } )
  //     .then( function ( response ) {
  //       var results = response.data;
  //       $( "#????" ).empty();
  //       for ( var i = 0; i < results.length; i++ ) {
  //         // append location
  //         // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
  //         // append distance

  //       }
  //     } );
  // } );


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

  // snapshot to database
  database.ref( "???" ).on( "value", function ( snapshot ) {



    // If any errors are experienced, log them to console.
  }, function ( errorObject ) {
    console.log( "The read failed: " + errorObject.code );
  } );



  // MAIN PROCESS



} );

$(document).ready(function () {
    // GLOBAL VARIABLES

    // Initial Values


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCcRG_GwiN8sBxD8xwcMEttzby0cND52KY",
        authDomain: "travel-project-ac0c2.firebaseapp.com",
        databaseURL: "https://travel-project-ac0c2.firebaseio.com",
        projectId: "travel-project-ac0c2",
        storageBucket: "travel-project-ac0c2.appspot.com",
        messagingSenderId: "549559435677"
    };

    firebase.initializeApp(config);
    var database = firebase.database();



    // FUNCTIONS 

    // on click function to call the api, should use data- to input which activity is being clicked or searched
    $("????").on("click", function () {
        // assigns the data attribute
        var sdfdf = $(this).attr("data-sdfdf");
        // &limit=10 limits the response by 10 
        activityQueryURL = 'http://api.amp.active.com/v2/search&q=' + sdfdf + 'near=Salt%20Lake%20City,UT,US&show_distance=true&sort=distance&api_key=&limit=15';

        // link the api using ajax
        $.ajax({
                url: activityQueryURL,
                method: "GET"
            })
            .then(function (response) {
                var results = response.data;
                $("#????").empty();
                for (var i = 0; i < results.length; i++) {
                    // append location 
                    // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
                    // append distance 

                }
            });
    });

    // snapshot to database
    database.ref("???").on("value", function (snapshot) {


    
    // If any errors are experienced, log them to console.
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });



    // MAIN PROCESS



});
