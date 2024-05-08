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
        watchResetBtn = document.getElementById('watchResetBtn'),
        timerMinutes = document.getElementById('t-min'),
        timerSec = document.getElementById('t-sec'),
        timerStartButton = document.getElementById('timerBtn'),
        timerResetButton = document.getElementById('timerResetBtn'),
        displayTimeLap = document.getElementById('displayTimeLap')


let timerTime = 0;
let stopWatchTime = 0;
let timerInterval;
let timerRunning = false;
let stopWatchRunning = false;


stopWatchContainer.addEventListener('click', () => {
    timerContainer.classList.remove('border')
    stopWatchContainer.classList.add('border')
    stopWatchContainer.classList.add('font-color')
    timerContainer.classList.remove('font-color')
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
    displayTimeLap.classList.remove('hidden')
    displayTimeLap.classList.add('flex')
    
  })
  timerContainer.addEventListener('click', () => {
    stopWatchContainer.classList.remove('border')
    timerContainer.classList.add('border')
    stopWatchContainer.classList.remove('font-color')
    timerContainer.classList.add('font-color')
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
    displayTimeLap.classList.remove('flex')
    displayTimeLap.classList.add('hidden')
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
        if (sec === 59) {
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
function toggleWatch() {
  if(stopWatchRunning){
    clearInterval(stopWatchInterval);
    stopWatchRunning = false;
    watchStartButton.textContent = 'Start';
  }else{
    startWatch()
  }
}

watchStartButton.addEventListener('click', toggleWatch);

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
    clearLapRows()
}

watchResetBtn.addEventListener('click', resetStopwatch)

let lapCount = 0;

function timeLap(){
  lapCount++
  let lapMin = min;
  let lapSec = sec;
  let lapMiliSec = miliSec;
  
  document.getElementById('timerTable').innerHTML += `
            <tr class="lap">
                <td>${lapCount}</td>
                <td>${lapMin}:${lapSec}:${lapMiliSec}</td>
                <td></td>
            </tr>

  `
}
function clearLapRows() {
  const lapRows = document.querySelectorAll('.lap');
  lapRows.forEach((row) => {
      row.remove();
  });
}

// Timer FUnction STart 

function startTimer() {
    let minutes = parseInt(timerMinutes.innerText) || 0;
    let seconds = parseInt(timerSec.innerText) || 0;

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

function toggleTimer() {
  if(timerRunning){

    clearInterval(timerInterval);
    timerRunning = false;
    timerStartButton.textContent = 'Start';
  }else{
    startTimer()
  }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning =false;
    timerStartButton.textContent = 'Start';
    timerMinutes.innerText = "4";
    timerSec.innerText = "59";
}

timerStartButton.addEventListener('click' , toggleTimer);

timerResetButton.addEventListener('click', () => {
    resetTimer();
});
function makeEditable(element) {
  const currentText = element.innerText;
  const input = document.createElement('input'); 
  input.type = 'text';
  input.value = currentText; 
  input.size = currentText.length; 
  input.className = 'editable'; 

  element.innerHTML = ''; 
  element.appendChild(input); 

  input.focus(); 

  input.addEventListener('blur', () => {
      const newText = input.value;       element.innerHTML = newText; 
  });

  input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
          input.blur();
      }
  });
}

document.querySelectorAll('.editable').forEach((element) => {
  element.addEventListener('click', () => makeEditable(element));
});
