const timerIcon = document.getElementById('timerIcon');
const timerMinutes = document.getElementById('timerMinutes');
const timerSecond = document.getElementById('timerSec');
const watchSecond = document.getElementById('watchSec');
const watchMiliSec = document.getElementById('watchMiliSec');
const timerStartButton = document.getElementById('timerBtn');
const timerResetButton = document.getElementById('timerResetBtn');
const timerContainer = document.getElementById('timer');
const stopWatchContainer = document.getElementById('stopWatch');
const watchStartButton = document.getElementById('watchBtn');
const watchResetButton = document.getElementById('watchResetBtn');
const timerResult = document.getElementById('timerResult');
const stopWatchResult = document.getElementById('stopWatchResult');
const timerBtnContainer = document.getElementById('timerButtonContainer')
const watchButtonContainer = document.getElementById('watchButtonContainer')


let timerTime = 0;
let stopWatchTime = 0;
let timerInterval;
let stopWatchInterval;
let timerRunning = false;
let stopWatchRunning = false;


stopWatchContainer.addEventListener('click' , () => {
    timerContainer.classList.remove('border')
    stopWatchContainer.classList.add('border')
    timerIcon.classList.remove('fa-solid')
    timerIcon.classList.add('fa-regular')
    stopWatchResult.style.display = "flex";
    timerResult.style.display = "none"
    timerBtnContainer.style.display = "none"
    watchButtonContainer.style.display = "flex"
})
timerContainer.addEventListener('click' , () => {
    stopWatchContainer.classList.remove('border')
    timerContainer.classList.add('border')
    timerIcon.classList.remove('fa-regular')
    timerIcon.classList.add('fa-solid');
    timerResult.style.display = "flex";
    stopWatchResult.style.display = "none"
    watchButtonContainer.style.display = "none"
    timerBtnContainer.style.display = "flex"

})
function startWatch() {
    stopWatchInterval = setInterval(() => {
        stopWatchTime += 10;
        
        let seconds = Math.floor(stopWatchTime / 1000);
        let milliSeconds = stopWatchTime % 1000;

        watchSecond.textContent = seconds;
        watchMiliSec.textContent = milliSeconds;

    }, 10)
    stopWatchRunning = true;
    watchStartButton.innerText = "Stop"
   
}
function stopStopwatch() {
    clearInterval(stopWatchInterval);
    stopWatchRunning = false;
    watchStartButton.textContent = 'Start';
  }

watchStartButton.addEventListener('click', () => {
    if (stopWatchRunning) {
      stopStopwatch();
    } else {
      startWatch();
    }
});

function resetStopwatch() {
    clearInterval(stopWatchInterval);
    stopWatchRunning = false;
    stopWatchTime = 0;
    watchSecond.textContent = '0';
    watchMiliSec.textContent = '0';
    watchStartButton.textContent = 'Start';
}

watchResetButton.addEventListener('click', resetStopwatch)

function startTimer() {
    let minutes = parseInt(timerMinutes.innerText) || 0;
    let seconds = parseInt(timerSec.innerText) || 0;

    console.log(minutes , seconds);
    timerTime = (minutes * 60) + seconds;
  
    timerInterval = setInterval(() => {
      timerTime--;
      let displayMinutes = Math.floor(timerTime / 60);
      let displaySeconds = timerTime % 60;
      timerMinutes.innerText = displayMinutes;
      timerSec.innerText = displaySeconds;
  
      if (timerTime <= 0) {
        clearInterval(timerInterval);
        alert('Time is up!'); // Alert or play a beep sound
        timerStartButton.textContent = 'Start';
        timerRunning = false;
      }
    }, 1000); // Decrement every second
  
    timerRunning = true;
    timerStartButton.textContent = 'Stop';
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerStartButton.textContent = 'Start';
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerMinutes.value = '0';
    timerSec.value = '0';
    timerBtn.textContent = 'Start';
  }
  
  timerStartButton.addEventListener('click', () => {
    if (timerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  });
  
  timerResetButton.addEventListener('click', () => {
    resetTimer();
  });
