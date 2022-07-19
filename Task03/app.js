let start = document.querySelector('.btn-success');
let stop = document.querySelector('.btn-danger');
let reset = document.querySelector('.btn-secondary');

let startTrigger = false;

let second = 0;
let minute = 0;

let secondElement = document.querySelector('#second');
let minuteElement = document.querySelector('#minute');

let timerStartStop;

start.addEventListener('click', startButton);
stop.addEventListener('click', stopButton);
reset.addEventListener('click', resetButton);

function startButton () {
    if (!startTrigger) {
        timerStartStop = setInterval(timer, 1000);
        startTrigger = true;
    }
}

function stopButton () {
    if (startTrigger) {
        clearInterval(timerStartStop);
        startTrigger = false;
    }
}

function resetButton () {
    second = 0;
    minute = 0;
    setTime();
}

function timer () {
    second++;
    if (second == 60) {
        minute++;
        second = 0;
    }

    setTime();
}

function setTime () {
    secondElement.textContent = second;
    minuteElement.textContent = minute;
}