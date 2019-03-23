$(document).ready(function () {
    // global variables  

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


$("????").on("click", function () {

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

                // append distance 

            }
        });
});






// MAIN PROCESS



});