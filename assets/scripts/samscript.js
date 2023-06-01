// on click add/update the following to local storage:

// - [ ] Customer  name
// - [ ] email
// - [ ] phone number
// - [ ] postal code
// - [ ] address
// - [ ] date and time of the appointment


var appointmentInfo = {
    appID: "01",
    email: "myemail@email.com",
    phone: "14165550123",
    address: "123 mystreet ave.",
    city: "toronto",
    postalCode: "M3N 4B4",
    date: "2023-05-31",
    time: "09:00"
};

function saveToLocalStorage(apptObj) {
    localStorage.setItem("appointments", JSON.stringify(apptObj));
    
};

saveToLocalStorage(appointmentInfo);

