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

// function weatherForecast(searchTerm) 
function weatherForecast(searchCity) {

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b&units=imperial")
    .then(function (response) {
      // making sure we have status 200 ok from server before parsing data
      if (response.ok) {
        response.json().then(function (data) {
          console.log("this is the weather", data);
          $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

          //loop to create a 5 days weather forecast`
          for (var i = 0; i < data.list.length; i++) {

            if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {

              var titleFivedays = $("<h3>").text(new Date(data.list[i].dt_txt).toLocaleDateString());
              var imgFivedays = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
              var colFivedays = $("<div>");
              var cardFivedays = $("<div>");
              var cardBodyFivedays = $("<div>");
              var windFivedays = $("<p>").text("Wind: " + data.list[i].wind.speed + " MPH");
              var humidFivedays = $("<p>").text("Humidity: " + data.list[i].main.humidity + "%");
              var tempFivedays = $("<p>").text("Temperature: " + data.list[i].main.temp + " Â°F");


              //combine together and display on page
              colFivedays.append(cardFivedays.append(cardBodyFivedays.append(titleFivedays, imgFivedays, tempFivedays, humidFivedays, windFivedays)));
              //append card to column, body to card, and other elements to body
              $("#forecast .row").append(colFivedays);
            }
          };
        });
      };

    });
}