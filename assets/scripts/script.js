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
            "date": "2023-06-08",
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
            "date": "2023-06-08",
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
            "date": "2023-06-08",
            "time": "16:11"
        }, {
            "id": 4,
            "fullName": "Tiffie Moan",
            "email": "tmoan3@umn.edu",
            "phone": "965-484-1861",
            "address": "2933 Lake View Street",
            "city": "Windsor",
            "prov": "Ontario",
            "postalZip": "J1S",
            "date": "2023-06-09",
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
            "date": "2023-06-10",
            "time": "13:26"
        },
        {
            "id": 6,
            "fullName": "Bram Greenland",
            "email": "bgreenland9@house.gov",
            "phone": "177-739-2618",
            "address": "97918 Melody Drive",
            "city": "Aylmer", "prov": "Ontario",
            "postalZip": "N5H",
            "date": "2023-07-01",
            "time": "5:09"
        },
        {
            "id": 7,
            "fullName": "Ami Ply",
            "email": null,
            "phone": "942-984-7037",
            "address": "4996 Macpherson Place",
            "city": "Orillia",
            "prov": "Ontario",
            "postalZip": "L3V",
            "date": "2023-08-07",
            "time": "5:09"
        },
        {
            "id": 12,
            "fullName": "Consuelo Safont",
            "email": null,
            "phone": "500-847-6808",
            "address": "53406 Hovde Pass",
            "city": "Concord",
            "prov": "Ontario",
            "postalZip": "L4K",
            "date": "2023-12-31",
            "time": "5:09"
        },
        {
            "id": 13,
            "fullName": "Alexa Giffkins",
            "email": "agiffkinsc@si.edu",
            "phone": "534-361-0612",
            "address": "43662 Sheridan Circle",
            "city": "Espanola",
            "prov": "Ontario",
            "postalZip": "P5E",
            "date": "2024-01-01",
            "time": "5:09"
        },

    ];
    var storedHistory = JSON.parse(localStorage.getItem("appointment_history"));
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
    // sort by date and time
    genData.sort(compare);
    // save to local storage function
    function saveToLocalStorage(apptObj) {
        if (storedHistory !== null) {
            let foundDouplicate = contains(apptObj.id);
            if (!foundDouplicate) {
                console.log(`no duoplicates`);
                apptInfo.push(apptObj);
                localStorage.setItem("appointment_history", JSON.stringify(apptInfo));
            };
        } else {
            apptInfo.push(apptObj);
            localStorage.setItem("appointment_history", JSON.stringify(apptInfo));
        }


    }
    // calls the save to local storage function for each item in the array
    $.each(genData, function () {
        // console.log(this);
        saveToLocalStorage(this);
    });

}
init();
// console.log(apptInfo);