function init() {
    // staticly generated data for dev purpose
    const genData = [
        {
            "id": 1,
            "full-name": "Dannye Colbron",
            "email": "dcolbron0@eventbrite.com",
            "phone": "259-926-8025",
            "address": "12719 Blackbird Crossing",
            "city": "Little Current",
            "prov": "Ontario",
            "postalZip": "J6A",
            "date": "2023-07-20"
          }, {
            "id": 2,
            "full-name": "Web Domerc",
            "email": "wdomerc1@paypal.com",
            "phone": "378-731-1527",
            "address": "45252 Troy Point",
            "city": "Mississauga",
            "prov": "Ontario",
            "postalZip": "L5W",
            "date": "2023-10-28"
          }, {
            "id": 3,
            "full-name": "Maurine Teggart",
            "email": "mteggart2@craigslist.org",
            "phone": "364-334-9182",
            "address": "2472 Anniversary Plaza",
            "city": "North York",
            "prov": "Ontario",
            "postalZip": "M3H",
            "date": "2023-06-12"
          }
    ];
    var apptInfo = [];
    $.each(genData, function (){
        // console.log(this);
        saveToLocalStorage(this);
    })
    // var opernWeatherKey = "71786d75fbc7f8c6556506473f4a9371";
    // var userFormEl = $('#userForm');
    // var displayArea = $('#displayArea');
    var historyButtonsEl = $('#historyButtons');
    var storedHistory = JSON.parse(localStorage.getItem("appointmentHistory"));
    if (storedHistory !== null) {
        apptInfo = storedHistory;
        renderAppointments();
    };
    function renderAppointments() {
        // console.log(apptInfo);
        historyButtonsEl.empty();
        for (i = 0; i < apptInfo.length; i++) {
            historyButtonsEl.append(`<button class="button" name=" ${apptInfo[i].name}">${apptInfo[i].date}, ${apptInfo[i].time}</button>`
            );
        }
    };
    function saveToLocalStorage(apptObj){
        console.log(apptObj);
        console.log(apptObj.date);
        console.log(apptObj.time);
        
        // var myDateSearchKey = `${apptObj.date}-${apptObj.time.splice(" ")}`;
        // console.log(myDateSearchKey);
    }

}
init();





// WHEN User Clicks submit then the script will take the input information and saves it in the apptInfo array
// THEN the code will set