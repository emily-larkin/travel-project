// Make an ajax request.

//Then when the query loads, make a for statement that creates the divs and put the activity data within them.

var activity =sessionStorage.getItem("activity");

console.log(activity);

var ajaxurl = "https://cors-anywhere.herokuapp.com/http://api.amp.active.com/v2/search?query=" + activity + "&start_date="+ getTodaysDate()+"&near=Salt%20Lake%20City,UT,US&show_distance=true&sort=distance&api_key=9deez853x9tvu4b2ycpsjs7m"


console.log(ajaxurl)
$.ajax({
  url: ajaxurl,
  method: "GET"
}).then(function(response){

  console.log(response)

  for ( var i = 0; i < response.results.length; i++ ) {
    // append location
    // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
    var newItem = $("<div class = 'list-item'>")

    newItem.append("<p>" + response.results[i].assetName + "</p>")

    newItem.append("<p>" + response.results[i].homePageUrlAdr + "</p>")

    newItem.append("<p>Location of Activity: " + response.results[i].place.longitude + " " + response.results[i].place.latitude+ "</p>")

    // append distance

  

    $("#scroll-list").append(newItem)
  }

})

//test ajax call

function getTodaysDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy+ '-' + mm + '-' + dd + "..";
  return today
}

