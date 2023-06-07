var apptInfo = [];
var userFormEl = $('#userForm');
var cityNameSearch = $('#cityNameSearch');
var dateOfAppointment = $('#dateOfAppointment');
var timeOfAppointment = $('#timeOfAppointment');
var fullName = $('#fullName');
var eMail = $("#eMail");
var pHone = $("#pHone");
var apptAddress = $('#address');

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
function compare(a, b) {
    if ((a.date < b.date) && (a.time < b.time)) {
        return -1;
    }
    if ((a.date > b.date) && (a.time > b.time)) {
        return 1;
    }
    return 0;
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
    console.log(newObjToStore);
    saveToLocalStorage(newObjToStore);
    // pass it on to save to storage function
}
userFormEl.on('submit', submitHandler);
