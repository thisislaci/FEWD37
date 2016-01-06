
$("#movie-search-form").submit(formSubmitted);

function createMovie(movieTitle, id, year) {

  var item = $("<li>").addClass("movie").appendTo("#movies");
  var title = $("<div>").addClass("movie-title").appendTo(item);
  var url = "http://www.imdb.com/title/" + id;

  $("<a>").text(movieTitle).attr("href", url).attr("target", "_blank").appendTo(title);

  $("<div>").text(year).addClass("movie-release-date").appendTo(item);



};

function resultsReceived(results) {
    for (var i = 0; i < results["Search"].length; i++) {
      var movie = results["Search"][i];
      createMovie(movie["Title"], movie["imdbID"], movie["Year"]);

    }
}

function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);

}




// var li = document.createElement("li");
// var title = document.createElement("div");
// var link = document.createElement("a");
// var date = document.createElement("div");
// var ul = document.querySelector("#movies");
//
// li.setAttribute("class", "movie");
// title.setAttribute("class", "movie-title");
// link.setAttribute("href", "http://www.imdb.com/title/", "imdbID");
// link.setAttribute("target", "_blank");
// date.setAttribute("class", "movie-release-date");
//
// title.appendChild(link);
// li.appendChild(title);
// ul.appendChild(li);
// li.appendChild(date);

// // Access the array of movies:
// results["Search"]
//
// // Access the first movie title
// results["Search"][0]["Title"]

// Try putting a debugger here and inspecting the results argument
// The array of movies lives inside results["Search"]
// See the sampleResult above for an example

// This is what the data returning from IMDB will look like:
// var sampleResult = {
//   "Search": [
//     {
//       "Title": "Cool Runnings",
//       "Type": "movie",
//       "Year": "1993",
//       "imdbID": "tt0106611"
//     }
//   ]
// }

// Attach an event listener to the form submit (using jQuery)
