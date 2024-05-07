const timerIcon = document.getElementById('timerIcon'),
        timerBody = document.getElementById("timerBody"),
        stopwatchBody= document.getElementById('stopWatchBody'),
        timerContainer=document.getElementById('timer'),
        stopWatchContainer=document.getElementById('stopWatch'),
        stopwatchBtns=document.getElementById('stopwatchBtn'),
        timerBtn=document.getElementById('timerBtns'),
        stopwatchMinutes = document.getElementById('stopwatch-minutes'),
        stopwatchM = document.getElementById('M'),
        stopwatchSec = document.getElementById('stopwatch-sec'),
        stopwatchMiliSec = document.getElementById('stopwatch-miliSec'),
        watchStartButton = document.getElementById('watchBtn'),
        watchResetBtn = document.getElementById('watchResetBtn')


let timerTime = 0;
let stopWatchTime = 0;
let timerInterval;
let stopWatchInterval;
let timerRunning = false;
let stopWatchRunning = false;


stopWatchContainer.addEventListener('click', () => {
    timerContainer.classList.remove('border')
    stopWatchContainer.classList.add('border')
    timerIcon.classList.remove('fa-solid')
    timerIcon.classList.add('fa-regular')
    stopwatchBody.classList.remove('hidden')
    stopwatchBody.classList.add('flex')
    timerBody.classList.remove('flex')
    timerBody.classList.add('hidden')
    stopwatchBtns.classList.remove('hidden')
    stopwatchBtns.classList.add('flex')
    timerBtn.classList.remove('flex')
    timerBtn.classList.add('hidden')
    
})
timerContainer.addEventListener('click', () => {
    stopWatchContainer.classList.remove('border')
    timerContainer.classList.add('border')
    timerIcon.classList.remove('fa-regular')
    timerIcon.classList.add('fa-solid');
    stopwatchBody.classList.remove('flex')
    stopwatchBody.classList.add('hidden')
    timerBody.classList.remove('hidden')
    timerBody.classList.add('flex')
    stopwatchBtns.classList.remove('flex')
    stopwatchBtns.classList.add('hidden')
    timerBtn.classList.remove('hidden')
    timerBtn.classList.add('flex')

})

let miliSec = 0, sec = 0, min = 0;

function startWatch() {
    stopWatchInterval = setInterval(() => {
        miliSec++;
        stopwatchMiliSec.textContent = miliSec;

        if (miliSec === 99) {
            miliSec = '00';
            sec++;
            stopwatchMiliSec.textContent = miliSec;
            stopwatchSec.textContent = sec;
        }
        
        if (sec === 2) {
            stopwatchMinutes.classList.remove('hidden')
            stopwatchM.classList.remove('hidden')
            sec = '00';
            min++;
            stopwatchSec.textContent = sec;
            stopwatchMinutes.textContent = min;
        }

       

    }, 10)
    stopWatchRunning = true;
    watchStartButton.innerText = "Stop"


}
function stopWatch() {
    clearInterval(stopWatchInterval);
    stopWatchRunning = false;
    watchStartButton.textContent = 'Start';
}

watchStartButton.addEventListener('click', () => {
    if (stopWatchRunning) {
        stopWatch();
    } else {
        startWatch();
    }
});

function resetStopwatch() {
    clearInterval(stopWatchInterval);
    stopWatchRunning = false;
    stopWatchTime = 0;
    stopwatchSec.textContent = '0';
    stopwatchMiliSec.textContent = '00';
    watchStartButton.textContent = 'Start';
    stopwatchMinutes.textContent = 0
    stopwatchMinutes.classList.add('hidden')
    stopwatchM.classList.add('hidden')
}

watchResetBtn.addEventListener('click', resetStopwatch)

// function startTimer() {
//     let minutes = parseInt(timerMinutes.innerText) || 0;
//     let seconds = parseInt(timerSec.innerText) || 0;

//     console.log(minutes, seconds);
//     timerTime = (minutes * 60) + seconds;

//     timerInterval = setInterval(() => {
//         timerTime--;
//         let displayMinutes = Math.floor(timerTime / 60);
//         let displaySeconds = timerTime % 60;
//         timerMinutes.innerText = displayMinutes;
//         timerSec.innerText = displaySeconds;

//         if (timerTime <= 0) {
//             clearInterval(timerInterval);
//             alert('Time is up!'); // Alert or play a beep sound
//             timerStartButton.textContent = 'Start';
//             timerRunning = false;
//         }
//     }, 1000); // Decrement every second

//     timerRunning = true;
//     timerStartButton.textContent = 'Stop';
// }

// function stopTimer() {
//     clearInterval(timerInterval);
//     timerRunning = false;
//     timerStartButton.textContent = 'Start';
// }

// function resetTimer() {
//     clearInterval(timerInterval);
//     timerRunning = false;
//     timerMinutes.value = '0';
//     timerSec.value = '0';
//     timerBtn.textContent = 'Start';
// }

// timerStartButton.addEventListener('click', () => {
//     if (timerRunning) {
//         stopTimer();
//     } else {
//         startTimer();
//     }
// });

// timerResetButton.addEventListener('click', () => {
//     resetTimer();
// });
