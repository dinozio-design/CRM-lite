var apptInfo = [];
function init() {

    var displayAreaRight = $('#rightDisplay');
    // var displayAreaLeft = $('#lefttDisplay');
    var storedHistory = JSON.parse(localStorage.getItem("appointment_history"));
    if (storedHistory !== null) {
        apptInfo = storedHistory;
        renderAppointments();
    };
    function renderAppointments() {
        displayAreaRight.empty();
        for (i = 0; i < apptInfo.length; i++) {
            // get weather
            // var weather = getWeather(apptInfo[i].city, apptInfo[i].date);
            var weather = "https://openweathermap.org/img/wn/10d@2x.png"
            // get Holiday
            // var statHoliday = getHoliday(apptInfo[i].date);

            displayAreaRight.append(`<article class="tile is-child notification is-info"><p class="subtitle">${apptInfo[i].fullName} on ${apptInfo[i].date}, at ${apptInfo[i].time} <span><figure class="image is-48x48"><img src=${weather} alt="Placeholder image"></figure></span></p><p>${apptInfo[i].address}, ${apptInfo[i].city}, ${apptInfo[i].prov} | Phone: ${apptInfo[i].phone}<span></span></p></article>`);
        }
    };

}
init();