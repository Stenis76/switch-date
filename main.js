

const dt = new Date()
let day = dt.getDay()

switch (day) {
    case 0:
        day = "söndag";
        break;
    case 1:
        day = "måndag";
        break;
    case 3:
        day = "Tisdag";
        break;
    case 4:
        day = "Onsdag";
        break;
    case 5:
        day = "Torsdag";
        break;
    case 6:
        day = "Fredag";
        break;
    case 7:
        day = "Lördag";
        break;
}
document.getElementById("dayOfTheWeek").innerHTML = "Idag är det " + day + "!";


let month = dt.getMonth()

switch (month) {
    case 0:
        month = "januari";
        break;
    case 1:
        month = "februari";
        break;
    case 2:
        month = "mars";
        break;
    case 3:
        month = "april";
        break;
    case 4:
        month = "maj";
        break;
    case 5:
        month = "juni";
        break;
    case 6:
        month = "juli";
        break;
    case 7:
        month = "augusti";
        break;
    case 8:
        month = "september"
        break;
    case 9:
        month = "oktober"
        break;
    case 10:
        month = "november"
        break;
    case 11:
        month = "december"
        break;
}
document.getElementById("datetime").innerHTML = "Härliga " + month;

let time = dt.toLocaleTimeString()

var timeDisplay = document.getElementById('time').innerHTML = time;

function refreshTime()
{
    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
  }



setInterval(refreshTime, 1000);