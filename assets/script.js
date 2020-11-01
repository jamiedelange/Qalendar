


// global variables
var tasks = {};
var myTime = document.querySelector("#clock");
var currentTime = moment();
var text = $(this).text().trim();

$(document).ready(function() {

// display current time and date at top of page
myTime.textContent = currentTime.format("MMMM DD, YYYY - h:mm:ss a");
function update() {
  $("#clock").html(moment().format("MMMM DD, YYYY - h:mm:ss a"));
}
setInterval(update, 1000);





/* var saveTasks = function () {
  localStorage.setItem("tasks", text);
}; */

// click textarea
$(".taskEl").on("click", "p", function () {
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});






$("#9button").on("click", function() {
  var text = $("#9text").val().trim();
  localStorage.setItem("9", text);
});
$("#10button").on("click", function() {
  var text = $("#10text").val().trim();
  localStorage.setItem("10", text);  
});
$("#11button").on("click", function() {
  var text = $("#11text").val().trim();
  localStorage.setItem("11", text);
});
$("#12button").on("click", function() {
  var text = $("#12text").val().trim();
  localStorage.setItem("12", text);
});
$("#13button").on("click", function() {
  var text = $("#13text").val().trim();
  localStorage.setItem("13", text);
});
$("#14button").on("click", function() {
  var text = $("#14text").val().trim();
  localStorage.setItem("14", text);
});
$("#15button").on("click", function() {
  var text = $("#15text").val().trim();
  localStorage.setItem("15", text);
});
$("#16button").on("click", function() {
  var text = $("#16text").val().trim();
  localStorage.setItem("16", text);
});
$("#17button").on("click", function() {
  var text = $("#17text").val().trim();
  localStorage.setItem("17", text);
});



var time1 = moment(currentTime, "L").set("hour", 9);
var time2 = moment(currentTime, "L").set("hour", 10);
var time3 = moment(currentTime, "L").set("hour", 11);
var time4 = moment(currentTime, "L").set("hour", 12);
var time5 = moment(currentTime, "L").set("hour", 13);
var time6 = moment(currentTime, "L").set("hour", 14);
var time7 = moment(currentTime, "L").set("hour", 15);
var time8 = moment(currentTime, "L").set("hour", 16);
var time9 = moment(currentTime, "L").set("hour", 17);
var timeArr = [time1, time2, time3, time4, time5, time6, time7, time8, time9];
let timeClass = 9;

function colorFill(time, elClass) {
  if (time.isSame(currentTime, "hour"))
    $(`.${elClass}`).addClass("bg-danger");

  moment().isBefore(time)
    ? $(`.${elClass}`).addClass("bg-success")
    : $(`.${elClass}`).addClass("bg-secondary");
}

for (let i = 0; i < timeArr.length; i++) {
  const time = timeArr[i];
  colorFill(time, timeClass);
  timeClass++;
}

});

var checkStorage = function() {
  $("#9text").val(localStorage.getItem("9"));
  $("#10text").val(localStorage.getItem("10"));
  $("#11text").val(localStorage.getItem("11"));
  $("#12text").val(localStorage.getItem("12"));
  $("#13text").val(localStorage.getItem("13"));
  $("#14text").val(localStorage.getItem("14"));
  $("#15text").val(localStorage.getItem("15"));
  $("#16text").val(localStorage.getItem("16"));
  $("#17text").val(localStorage.getItem("17"));
};
checkStorage();


/* $(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(time, value);
  });
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourUpdater();
  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);
  // load any saved data from localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
}); */