// my APIKey is "b4ed94adc674507878b0aeb7f93e988b";
//declare variables to store values
var enterCityName = $("#cityName");
var confirmAppointment = $("#confirm");
var holidayName = $("#holiday-name");
var holidayDate = $("#holiday-date");
var DateofAppointment = $("#Date-of-Appointment");
var todayWeather = $("#today-weather");
var CanadianFedralHoliday = $("#canadian-holiday");

//main function starts here
$(document).ready(function () {
  //event listener on search button
  confirmAppointment.on("click", function () {
    //get value in input search value
    var searchCity = enterCityName.val();
    enterCityName.val(" ");
    var date = DateofAppointment.val();
    console.log("this is Customer Input date", date);
    weatherDashboard(searchCity)
    weatherForecast(searchCity);
    canadianholidays(date);
  });

  //The keypress event is fired when a key that produces a character value is pressed down.
  confirmAppointment.keypress(function (event) {
    var keycode = (event.keycode ? event.keycode : event.which);
    if (keycode === 13) {
      weatherDashboard(searchCity);
      weatherForecast(searchCity);
      canadianholidays(date);
    }
  });

  //weatherDashboard function
  function weatherDashboard(searchCity) {
    //fetch weather api
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b")
      .then(function (response) {
        if (response.ok) {

          response.json()
            .then(function (data) {

// this is to fetch the data and return and object

"https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b"
"https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b&units=imperial"

              // todayWeather.empty();
              // //create element and append it to dispaly today weather
              // var title = $("<h3>").text(data.name + " (" + new Date().toLocaleDateString() + ")");
              // var imgtag = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
              // var divCard = $("<div>");
              // var divcardBody = $("<div>");
              // var displayWind = $("<p>").text("Wind: " + data.wind.speed + " MPH");
              // var displayHumid = $("<p>").text("Humidity: " + data.main.humidity + " %");
              // var displayTemp = $("<p>").text("Temperature: " + data.main.temp + " K");
              // console.log(data);

              // //append data
              // title.append(imgtag);
              // divcardBody.append(title, displayTemp, displayHumid, displayWind);
              // divCard.append(divcardBody);
              // todayWeather.append(divCard);
              // console.log(data);
            })
        }
      })
  }

  // function weatherForecast(searchTerm) 
  function weatherForecast(searchCity) {

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b&units=imperial")
      .then(function (response) {
        // making sure we have status 200 ok from server before parsing data
        if (response.ok) {
          response.json().then(function (data) {
            console.log("this is the weather", data);
            $("#forecast").html("<h4 class=\"mt-3\">Upcoming Forecast:</h4>").append("<div class=\"row\">");

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

  // gets the date of the appointment as an argument
  function canadianholidays(apptDate) {
    // date is 2023-05-05
    var dateYear = apptDate.split("-");
    var apiURL = `https://canada-holidays.ca/api/v1/holidays?year=${dateYear[0]}&`;
    fetch(apiURL)
      .then(function (response) {
        // checks if the response is ok (200) from server
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            for (var i = 0; i < data.holidays.length; i++) {
              var offDay = data.holidays[i];
              if (offDay.federal === 1 && offDay.date === apptDate) {
                //if there is a Canadian fedral holiday it will display , bottom line
                CanadianFedralHoliday.append("this is the Federal Holiday data    ", offDay.date, "   ", offDay.nameEn);

                console.log("this is the Federal Holiday data    ", offDay.date, "   ", offDay.nameEn);


              };
            };

          });
        }
      })

  }
});
