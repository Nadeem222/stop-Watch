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

console.log(watchStartButton)

let time = 0;
let timerInterval;
let running = false;


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
    timerInterval = setInterval(() => {
        time++;
        watchSecond.textContent = time;

    }, 1000)
    running = true;
    watchStartButton.innerText = "Stop"
}

function stopWatch(){
    clearInterval(timerInterval);
    running= false;
    watchStartButton.innerText = "Start"

}


watchStartButton.addEventListener('click' , () => {

    console.log("Hello");
    if(running){
        stopWatch()
    }else{
        startWatch()
    }
})

watchResetButton.addEventListener('click' , () => {
    stopWatch();
    time= 0;
    watchSecond.textContent = time;
})
