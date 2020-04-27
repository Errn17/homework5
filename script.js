$(document).ready(function () {
  //setting the current date in the global variables, should change depending on the current date
  var dateNow = moment().format("MMMM Do YYYY");

  //Using the "currentDay" id to display the date onto the page in the JumbTron as part of the header
  var plannerHeading = $("#currentDay");
  plannerHeading.text(dateNow);

  for (var i = 9; i <= 17; i++) {
    var rowDiv = $("<div>");

    rowDiv.class("row");
    rowDiv.class("hour");
    rowDiv.class("timeblock");
    rowDiv.attr(i, "row", "hour", "timeblock");

    console.log(rowDiv);
  }
});
