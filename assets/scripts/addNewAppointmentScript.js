
var userFormEl = $('#userForm');
var cityNameSearch = $('#cityNameSearch');
var dateOfAppointment = $('#dateOfAppointment');
var timeOfAppointment = $('#timeOfAppointment');
var fullName = $('#fullName');
var apptAddress = $('#address');

function submitHandler(event) {
    event.preventDefault();
    console.log(this.dateOfAppointment.value);
    console.log("i am called");

    var cityName = this.cityNameSearch.value.trim();
    var date = this.dateOfAppointment.value;
    var time = this.timeOfAppointment.value;

    console.log(cityName, date, time);
}
userFormEl.on('submit', submitHandler);