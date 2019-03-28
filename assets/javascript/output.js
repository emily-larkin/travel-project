// Make an ajax request.

//Then when the query loads, make a for statement that creates the divs and put the activity data within them.

var activity = JSON.parse(sessionStorage.getItem("activityJSON"));

<<<<<<< HEAD
for (var i = 0; i < 15; i++) {
  // append location
  // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
  var newItem = $("<div class = 'list-item'>")
=======
for ( var i = 0; i < 10; i++ ) {
    // append location
    // example: $("#giphy").prepend("<p>Rating of Giph: " + results[i].rating + "</p>");
    var newItem = $("<div class = 'list-item'>")
>>>>>>> 42cba49d4bc24375e50e6b1f99f6373f4f51477f

  newItem.append("<h2>Location of Activity:" + + "</h2>")

  // append distance

  newItem.append("<p>Distance of Activity: " + + "</p>")

  $("#scroll-list").append(newItem)
}