var apptInfo = [];
function init() {
    // staticly generated data for dev purpose
    const genData = [
        {
            "id": 1,
            "fullName": "Lowell Bowland",
            "email": "lbowland0@t.co",
            "phone": "593-913-2017",
            "address": "8859 3rd Court",
            "city": "Greater Napanee",
            "prov": "Ontario",
            "postalZip": "K7R",
            "date": "2024-05-01",
            "time": "10:28"
          }, {
            "id": 2,
            "fullName": "Charisse Slott",
            "email": "cslott1@blog.com",
            "phone": "210-102-8504",
            "address": "64 High Crossing Way",
            "city": "Powassan",
            "prov": "Ontario",
            "postalZip": "E3G",
            "date": "2024-02-02",
            "time": "14:00"
          }, {
            "id": 3,
            "fullName": "Dorris Bleyman",
            "email": null,
            "phone": "369-763-8850",
            "address": "3 Boyd Parkway",
            "city": "Wingham",
            "prov": "Ontario",
            "postalZip": "T5K",
            "date": "2023-09-03",
            "time": "1:11"
          }, {
            "id": 4,
            "fullName": "Tiffie Moan",
            "email": "tmoan3@umn.edu",
            "phone": "965-484-1861",
            "address": "2933 Lake View Street",
            "city": "Windsor",
            "prov": "Ontario",
            "postalZip": "J1S",
            "date": "2024-05-09",
            "time": "5:09"
          }, {
            "id": 5,
            "fullName": "Andie Styant",
            "email": null,
            "phone": "781-501-3314",
            "address": "5288 Burning Wood Junction",
            "city": "Hearst",
            "prov": "Ontario",
            "postalZip": "S4A",
            "date": "2023-07-29",
            "time": "13:26"
          }
    ];
    function contains(key) {
        for (i = 0; i < apptInfo.length; i++) {
            if (apptInfo[i].key === key) {
                console.log(`found Douplicate`);
                return true;
            }
        };
        return false;
    }
    function compare( a, b ) {
        if ( (a.date < b.date)&& (a.time < b.time)){
          return -1;
        }
        if ( (a.date > b.date)&& (a.time > b.time) ){
          return 1;
        }
        return 0;
      }
      
    genData.sort(compare);
    $.each(genData, function (){
        // console.log(this);
        saveToLocalStorage(this);
    })
    
    var displayAreaRight = $('#rightDisplay');
    var displayAreaLeft = $('#lefttDisplay');
    var storedHistory = JSON.parse(localStorage.getItem("appointment_history"));
    if (storedHistory !== null) {
        apptInfo = storedHistory;
        renderAppointments();
    };
    function renderAppointments() {
        displayAreaRight.empty();
        for (i = 0; i < apptInfo.length; i++) {
            displayAreaRight.append(`<article class="tile is-child notification is-info"><p class="subtitle">${apptInfo[i].fullName} on ${apptInfo[i].date}, at ${apptInfo[i].time}</p><p>${apptInfo[i].address}, ${apptInfo[i].city}, ${apptInfo[i].prov} | Phone: ${apptInfo[i].phone}<span>    icons</span></p></article>`);
        }
    };
    function saveToLocalStorage(apptObj){
        let foundDouplicate = contains(apptObj.id);
        if (!foundDouplicate) {
            console.log(`no duoplicates`);
            apptInfo.push(apptObj);
            localStorage.setItem("appointment_history", JSON.stringify(apptInfo));
        };
    }

}
init();





// WHEN User Clicks submit then the script will take the input information and saves it in the apptInfo array
// THEN the code will set