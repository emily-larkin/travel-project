// Make an ajax request.

//Then when the query loads, make a for statement that creates the divs and put the activity data within them.

var activity =JSON.parse(sessionStorage.getItem("activityJSON"));

console.log(activity);

for ( var i = 0; i < 3; i++ ) {
    // append location
    // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
    var newItem = $("<div class = 'list-item'>")

    newItem.append("<h2>Location of Activity:" + + "</h2>")

    // append distance

    newItem.append("<p>Distance of Activity: " + + "</p>")

    $("#scroll-list").append(newItem)
  }