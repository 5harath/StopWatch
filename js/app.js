var minute = 0;
var second = 0;
var milisecond = 0;
var timer;

// function to count the time when the timer is started
function callTimer() {
    milisecond++;
    if (milisecond < 100) {
        if (milisecond === 99) {
            milisecond = 0;
            second++;
            if (second === 60)  {
                second = 0;
                minute++;
            }
        }
    }
    else{
        milisecond = 0;
    }
    document.getElementById("timer").innerHTML = ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2);
}

// function to start the timer
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

// function to stop the timer
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

// function to reset the timer
function reset() {
    stop();
    minute = 0;
    second = 0;
    milisecond = 0;
    document.getElementById("timer").innerHTML = ('0' + minute).slice(-2) + ":" + ('0' + second).slice(-2);
}