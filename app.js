const clock = document.getElementById("clock");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");

let isRunning = false;
let interval;

start.addEventListener("click", function(){
    if(!isRunning){
        interval = setInterval(updateClock, 1000);
        isRunning = true;
    }
})

pause.addEventListener("click", function(){
    if(isRunning){
        clearInterval(interval);
        isRunning = false;
    }
})

stop.addEventListener("click", function(){
    clearInterval(interval);
    isRunning = false;
    clock.innerHTML = "00:00:00"
})

function updateClock(){
    let time = clock.innerHTML;
    let [minutes, seconds] = time.split(":");
    let min = parseInt(minutes);
    let sec = parseInt(seconds);


if (sec === 59){
    min++;
    sec = 0;
} else{
    sec++;
}

if (min < 10){
    minutes = "0" + min;
} else{
    minutes = min;
}

if (sec < 10) {
    seconds = "0" + sec;
} else {
    seconds = sec;
}

clock.innerHTML =  `${minutes}:${seconds}:00`;

}