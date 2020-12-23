let date = new Date();

document.getElementById("date").innerHTML = "Date du jour: " + date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

function sec() {
    setTimeout(function () {
        document.getElementById("seconds").style.transform = "rotate(" + ((seconds + 45) * 6) +"deg)";
        document.getElementById("minutes").style.transform = "rotate(" + ((minutes + 45) * 6) +"deg)";
        document.getElementById("hours").style.transform = "rotate(" + ((hours + 45) * 30) +"deg)";
        console.log(minutes);
        seconds++
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++
        }
        sec()
    }, 1000)
}


sec()