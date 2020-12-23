const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day = date.getDate();
let month = (date.getMonth() +1);
let year = date.getFullYear();
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

document.getElementById("date").innerHTML = "Date du jour: " + day + "/" + month + "/" + year;

sec();

function sec() {
    second.style.transform = "rotate(" + ((seconds + 45) * 6) +"deg)";
    minute.style.transform = "rotate(" + ((minutes + 45) * 6) +"deg)";
    hour.style.transform = "rotate(" + ((hours + 45) * 30) +"deg)";
    seconds++
    if(seconds >= 60) {
        seconds = 0;
        minutes++;
        if(minutes >= 60) {
            minutes = 0;
            hours++;
            if(hours >= 24) {
                hours = 0;
                day++;
                if(month === 2) {
                    if(year % 4 === 0) {
                        if(day >= 29){
                            day = 1;
                            month++
                        }
                    }
                    else if(day >= 28) {
                        day = 1;
                        month++
                    }
                }
                else if(month === (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
                    if(day >= 31) {
                        day = 1;
                        month++
                    }
                }
                else if(day >= 30) {
                    day = 1;
                    month++
                }
                if(month >= 12) {
                    month = 1;
                    year++
                }
            }
        }
    }
    setTimeout( sec, 1000)
}