function initNApp() {

    var apptInfo = [];
    var userFormEl = $('#userForm');
    var weatherInfo = $("#weatherInfo");
    var holidayInfo = $("#holidayInfo");
    // var cityNameSearch = $('#cityNameSearch');
    // var dateOfAppointment = $('#dateOfAppointment');
    // var timeOfAppointment = $('#timeOfAppointment');
    // var fullName = $('#fullName');
    // var eMail = $("#eMail");
    // var pHone = $("#pHone");
    // var apptAddress = $('#address');

    var storedHistory = JSON.parse(localStorage.getItem("appointment_history"));
    if (storedHistory !== null) {
        apptInfo = storedHistory;
    };
    // checking duplicates
    function contains(key) {
        storedHistory = JSON.parse(localStorage.getItem("appointment_history"));
        for (i = 0; i < storedHistory.length; i++) {
            if (storedHistory[i].id === key) {
                console.log(`found Douplicate`);
                return true;
            }
        };
        return false;
    }
    // comparision for sorting
    // function compare(a, b) {
    //     if ((a.date < b.date) && (a.time < b.time)) {
    //         return -1;
    //     }
    //     if ((a.date > b.date) && (a.time > b.time)) {
    //         return 1;
    //     }
    //     return 0;
    // }

    // Rajni's Code Here
    function renderHoliday(hName, hDate) {
        console.log(`this is name ${hName}`);
        console.log(`this is date ${hDate}`);
        holidayInfo.empty();
        holidayInfo.append(
            `<p> It is ${hName} on ${hDate} `
        );
    }
    // gets the date of the appointment as an argument
    function canadianholidays(apptDate) {
        // date is 2023-05-05
        var dateYear = apptDate.split("-");
        console.log(dateYear);
        var apiURL = `https://canada-holidays.ca/api/v1/holidays?year=${dateYear[0]}&`;
        fetch(apiURL)
            .then(function (response) {
                // checks if the response is ok (200) from server
                if (response.ok) {
                    response.json().then(function (data) {
                        for (var i = 0; i < data.holidays.length; i++) {
                            var offDay = data.holidays[i];
                            if (offDay.federal === 1 && offDay.date === apptDate) {
                                // holidayInfo.empty();
                                // console.log(` The date your chose is a Federal Holiday. It is ${offDay.nameEn} on ${offDay.date}`);
                               renderHoliday(offDay.nameEn,offDay.date);
                                // holidayInfo.append("this is the Federal Holiday data    ", offDay.date, "   ", offDay.nameEn);

                            };
                        };
                        // console.log(data.holidays.length);
                    });
                }
            });

    }
    // function weatherForecast(searchTerm) 
    function weatherForecast(searchCity, date) {

        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b&units=imperial")
            .then(function (response) {
                // making sure we have status 200 ok from server before parsing data
                if (response.ok) {
                    response.json().then(function (data) {
                        // console.log("this is the weather", data);
                        var obj = data;
                        //render #weatherInfo
                        weatherInfo.empty();
                        weatherInfo.append(`<div class="card "><header class="card-header"><p class="card-header-title has-background-warning-light ">Current Forecast for: ${obj.city.name} </p></header><div class="card-content"><div class="card-image"><figure class="image is-48x48"><img src="https://openweathermap.org/img/wn/${obj.list[0].weather[0].icon}@2x.png" alt="Placeholder image"></figure></div><div class="content">
                        <p class="title">${obj.list[0].weather[0].description}</p>
                        <p>Temperature: ${obj.list[0].main.temp} C</p>
                        <p>Humidity: ${obj.list[0].main.humidity} </p>
                        </div></div></div>`);
                        canadianholidays(date);

                    });
                };

            });
       
    }


    function saveToLocalStorage(apptObj) {
        let foundDouplicate = contains(apptObj.id);
        if (!foundDouplicate) {
            console.log(`no duoplicates`);
            apptInfo.push(apptObj);
            localStorage.setItem("appointment_history", JSON.stringify(apptInfo));
        };
    }

    function submitHandler(event) {
        event.preventDefault();
        //  create new user info object
        var newObjToStore = {
            "id": this.pHone.value + "_" + this.cityNameSearch.value.trim(),
            "fullName": this.fullName.value,
            "email": this.eMail.value,
            "phone": this.pHone.value,
            "address": this.address.value.trim(),
            "city": this.cityNameSearch.value.trim(),
            "prov": "Ontario",
            "postalZip": this.postalCode.value,
            "date": this.dateOfAppointment.value,
            "time": this.timeOfAppointment.value
        };

        // console.log(newObjToStore);
        this.fullName.value = "";
        this.eMail.value = "";
        this.pHone.value = "";
        this.address.value = "";
        this.cityNameSearch.value = "";
        this.postalCode.value = "";
        this.dateOfAppointment.value = "";
        this.timeOfAppointment.value = "";
        weatherForecast(newObjToStore.city, newObjToStore.date);
        // canadianholidays(newObjToStore.date);
        saveToLocalStorage(newObjToStore);
        // pass it on to save to storage function
    }
    userFormEl.on('submit', submitHandler);
}

initNApp();
