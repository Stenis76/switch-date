

const dt = new Date()
document.getElementById("datetime").innerHTML = dt.toLocaleString();

let day = dt.getDay()

switch(day) {
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

document.getElementById("dayOfTheWeek").innerHTML = "Idag är det " + day +"!";