$(document).ready(function () {
  //setting the current date in the global variables, should change depending on the current date
  var dateNow = moment().format("MMMM Do YYYY");

  //Using the "currentDay" id to display the date onto the page in the JumbTron as part of the header
  var plannerHeading = $("#currentDay");
  plannerHeading.text(dateNow);

  //this function is targeting the save button
  $("#btnSave").on("click", function () {
    //logging it to see if the button is being recognized when its clicked

    console.log("btn clicked");

    var storage = $("#btnSave").val();
    if (localStorage.getItem("#inputBox", storage)) {
      localStorage.setItem("#inputBox", storage);
      storage.append(inputBox);
    }
  });

  var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  if (storedPlans !== null) {
    planTime = new Array(9);
    planTime[0] = "Get up for work";
    console.log(planTime);
  }

  var inputBox = $("#inputBox");
  inputBox.empty();

  //$("#btnSave").on("click", function () {
  // console.log("btn clicked");

  // var inputBox = $("#inputBox");
  // var btnSave = $("#btnSave");

  //// if (btnSave == "click") {
  // }
  //});
});
