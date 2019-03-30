// Make an ajax request.

//Then when the query loads, make a for statement that creates the divs and put the activity data within them.

var activity = sessionStorage.getItem("activityName");

console.log(activity);

var ajaxurl = "https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search?query=" + activity + "&start_date=" + getTodaysDate() + "&near=Salt%20Lake%20City,UT,US&show_distance=true&sort=distance&api_key=9deez853x9tvu4b2ycpsjs7m"


console.log(ajaxurl)
$.ajax({
  url: ajaxurl,
  method: "GET"
}).then(function (response) {

  console.log(response)

  for (let i = 0; i < response.results.length; i++) {

    //ajax request for google geocoding api to get location.

    var long = response.results[i].place.longitude;

    var lat = response.results[i].place.latitude;

    var address = "sucks";

    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long +" &key=AIzaSyDXLr5R_-ztYDx3GcZtuWCS4FsY6JrOa9A",
      method: "GET"
    }).then(function (response2) {
      address = response2.results[0].formatted_address
      var holderDiv = $("<div>");
      

      

      var newItem = $("<div class = 'list-item flex-container'>")

      if(response.results[i].assetImages.length > 0)

        newItem.append("<img class = 'thumbnail' src =" + response.results[i].assetImages[0].imageUrlAdr + " width ='70px' height = '70px' alt = 'img'>")
      
      else

        newItem.append("<img class = 'thumbnail' src = './assets/placeholder-images/placeholder.png' width ='70px' height = '70px' alt = 'img'>")

      holderDiv.append("<p>" + response.results[i].assetName + "</p>")

      if(response.results[i].homePageUrlAdr !== "")

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

