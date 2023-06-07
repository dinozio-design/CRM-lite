
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
    console.log(this.dateOfAppointment.value);
    console.log("i am called");
    var id = this.pHone.value+"_"+this.cityNameSearch.value.trim();
    var fullName = this.fullName.value;
    var email = this.eMail.value;
    var phone = this.pHone.value
    var address = this.address.value.trim();
    var city = this.cityNameSearch.value.trim();
    var prov = "";
    var postalZip = this.postalCode.value;
    var date = this.dateOfAppointment.value;
    var time = this.timeOfAppointment.value;


    console.log(fullName, email, phone, address, city, prov, postalZip, date, time);
}
userFormEl.on('submit', submitHandler);


// "id": 1,
//             "fullName": "Lowell Bowland",
//             "email": "lbowland0@t.co",
//             "phone": "593-913-2017",
//             "address": "8859 3rd Court",
//             "city": "Greater Napanee",
//             "prov": "Ontario",
//             "postalZip": "K7R",
//             "date": "2023-06-08",
//             "time": "10:28"