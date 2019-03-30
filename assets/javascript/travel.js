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
  // var database = firebase.database();

  // FUNCTIONS

  // Dropdown trigger
  // (function($) {
  //   $(function() {

  //     $('.button-collapse').sideNav();
  //     $('select').material_select();
  //     $('.dropdown-button').dropdown();

  // })(jQuery); // end of jQuery name space

  $('.dropdown-trigger').dropdown();

  $("body").on("click", ".activity", function () {
    location.href = "outputPage.html";
  });

  $(".g-signin2").on("click", function () {

    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider)
    var auth = firebase.auth();
    console.log(auth);

    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(token, user)

    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });

  // on click function to call the api, sends activity clicked to session storage 
  $(".dropdown-content").on("click", function (e) {
    sessionStorage.setItem("activityName", e.target.innerHTML);
    $("#dropdown1").innerHTML = sessionStorage.getItem(e.target.innerHTML);
  });

}); // end of document ready