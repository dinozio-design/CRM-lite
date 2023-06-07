
var userFormEl = $('#userForm');
var cityNameSearch = $('#cityNameSearch');
var dateOfAppointment = $('#dateOfAppointment');
var timeOfAppointment = $('#timeOfAppointment');
var fullName = $('#fullName');
var eMail = $("#eMail");
var pHone = $("#pHone");
var apptAddress = $('#address');


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
    // pass it on to save to storage function
}
userFormEl.on('submit', submitHandler);
