// on click add/update the following to local storage:


var appointmentInfo = [];

const genData = [
        {
            "name": "Nerea Whitley",
            "phone": "1-717-230-2234",
            "email": "egestas.a.dui@aol.com",
            "address": "552-3118 Eget Rd.",
            "postalZip": "75932",
            "numberrange": 17,
            "time": "7:45 AM",
            "date": "2024.07.02"
        },
        {
            "name": "Owen Ayala",
            "phone": "1-268-733-7127",
            "email": "elit@yahoo.ca",
            "address": "P.O. Box 408, 1309 Sapien Avenue",
            "postalZip": "73563",
            "numberrange": 336,
            "time": "1:35 AM",
            "date": "2023.03.02"
        },
        {
            "name": "Linus Brooks",
            "phone": "1-352-898-8015",
            "email": "elementum.dui.quis@icloud.edu",
            "address": "102-3165 Et Street",
            "postalZip": "858631",
            "numberrange": 366,
            "time": "6:54 AM",
            "date": "2024.06.02"
        },
        {
            "name": "Jamalia Puckett",
            "phone": "1-676-955-3206",
            "email": "cras.eget@yahoo.com",
            "address": "Ap #641-9098 Commodo St.",
            "postalZip": "7234-6679",
            "numberrange": 79,
            "time": "10:25 AM",
            "date": "2023.04.24"
        },
        {
            "name": "Veda Boyer",
            "phone": "1-602-244-7471",
            "email": "eu.dolor@aol.edu",
            "address": "319-7228 Mauris St.",
            "postalZip": "WO7V 7YN",
            "numberrange": 317,
            "time": "9:39 PM",
            "date": "2024.08.20"
        }
    ];





function saveToLocalStorage(apptObj) {
    localStorage.setItem("appointments", JSON.stringify(apptObj));
        
};

saveToLocalStorage(appointmentInfo);

