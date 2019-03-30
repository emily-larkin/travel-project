// Make an ajax request.

//Then when the query loads, make a for statement that creates the divs and put the activity data within them.

var activity = sessionStorage.getItem("activity");

console.log(activity);

var ajaxurl = "https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search?query=" + activity + "&start_date=" + getTodaysDate() + "&near=Salt%20Lake%20City,UT,US&show_distance=true&sort=distance&api_key=9deez853x9tvu4b2ycpsjs7m"


console.log(ajaxurl)
$.ajax({
  url: ajaxurl,
  method: "GET"
}).then(function (response) {

  console.log(response)

<<<<<<< HEAD
  for (let i = 0; i < response.results.length; i++) {
=======
  for (var i = 0; i < response.results.length; i++) {
    // append location
    // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
    var newItem = $("<div class = 'list-item'>")
>>>>>>> 763b806a816e22ad260128de55626fd632c41ca6

    //ajax request for google geocoding api to get location.

    var long = response.results[i].place.longitude;

<<<<<<< HEAD
    var lat = response.results[i].place.latitude;

    var address = "sucks";

    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long +" &key=AIzaSyDXLr5R_-ztYDx3GcZtuWCS4FsY6JrOa9A",
      method: "GET"
    }).then(function (response2) {
      address = response2.results[0].formatted_address
      var holderDiv = $("<div>");
      
=======
    newItem.append("<p>Location of Activity: " + response.results[i].place.longitude + " " + response.results[i].place.latitude + "</p>")

    // append distance


>>>>>>> 763b806a816e22ad260128de55626fd632c41ca6

      

      var newItem = $("<div class = 'list-item flex-container'>")

      newItem.append("<img class = 'thumbnail' src =" + response.results[i].assetImages[0].imageUrlAdr + " width ='70px' height = '70px' alt = 'img'>")

     

      holderDiv.append("<p>" + response.results[i].assetName + "</p>")

      holderDiv.append("<a href=" + response.results[i].homePageUrlAdr + "> Website</a>")

      

      newItem.append(holderDiv);

      holderDiv.append("<p>Location: " + address+ "</p>")


      $("#scroll-list").append(newItem)
    })



    
  }

})

//test ajax call

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd + "..";
  return today
}

