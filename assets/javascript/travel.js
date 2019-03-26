$(document).ready(function () {
  // GLOBAL VARIABLES

  // showInfo();

  // Initial Values
  // Initial list of acitvity choices in an array
  // var activities = ["Hiking", "Skiing", "Mountain Biking", "Surfing", "Skydiving"]

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
  $(".active").on("click", function () {
    // assigns the data attribute
    var activitiesCall = $(this).attr("data-active");
    // &limit=10 limits the response by 10
    activityQueryURL = 'http://api.amp.active.com/v2/search&q=' + activitiesCall + 'near=Salt%20Lake%20City,UT,US&show_distance=true&sort=distance&api_key=&limit=10';

    // link the api using ajax
    $.ajax({
        url: activityQueryURL,
        method: "GET"
      })
      .then(function (response) {
        var results = response.data;
        $(".list-item").empty();
        for (var i = 0; i < results.length; i++) {
          // append location
          // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
          $(".list-item").append("<h2>Location of Activity:" + +"</h2>")
          // append distance
          $(".list-item").append("<p>Distance of Activity: " + +"</p>")
          sessionStorage.setItem("activityJSON",JSON.stringify(response));
          window.location.href = "./outputPage.html"
        }
      });
  });

  // API for giphy just in case

  // Function to get giphy api's using user input(?)
  function showInfo() {
    var activity = $(this).attr("data-name");
    console.log(activity);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + activity + "&rating=g&api_key=CzAlbxJgZNeqUfc3v0PSdcxACwxhr5Zh&limit=1";

  //   console.log( activity );
  //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + activity + "&rating=g&api_key=CzAlbxJgZNeqUfc3v0PSdcxACwxhr5Zh&limit=1";

  // Use ajax to get gifs

  //   $.ajax( {
  //     url: queryURL,
  //     method: "GET"
  //   } ).then( function ( response ) {

  //     console.log( response );
  //     for ( var i = 0; i < response.data.length; i++ ) {

  //       var image = $( "<img src= " + response.data[i].images.original.url + ">" )
  //       $( "#hiking" ).append( image );
  //     }
  //   } )
  // };

  // Put the gifs each into a div
  //Click event for each images takes you to the second page

  // snapshot to database
  database.ref().on("value", function (snapshot) {



    // If any errors are experienced, log them to console.
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });



  // MAIN PROCESS
  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }


});
