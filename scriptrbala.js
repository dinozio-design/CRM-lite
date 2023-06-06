// my APIKey is "b4ed94adc674507878b0aeb7f93e988b";
//declare variables to store values
var enterCityName = $("#cityName");
var confirmAppointment = $("#confirm");
var holidayName = $("#holiday-name")
var holidayDate = $("#holiday-date")
var DateofAppointment = $("#Date-of-Appointment")

//main function starts here
$(document).ready(function(){
  //event listener on search button
confirmAppointment.on("click",function(){
  //get value in input search value
  var searchCity = enterCityName.val();
  enterCityName.val(" ");
  var date = DateofAppointment.val();
  console.log("this is Customer Input date", date);
  weatherForecast(searchCity);
  canadianholidays(date);
});

//The keypress event is fired when a key that produces a character value is pressed down.
confirmAppointment.keypress(function (event) {
  var keycode = (event.keycode ? event.keycode : event.which);
  if (keycode === 13) {

    weatherForecast(searchCity);
    canadianholidays(date);
  }
});