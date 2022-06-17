/* const myInterval = setInterval(() => {
    console.log("Ha pasado un segundo");
},1000)

setTimeout(() => {
    console.log("Se borró el Interval");
    clearInterval(myInterval)
}, 3000)
 */

let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
const chronometerButton = document.querySelector("#chronometer-button");
const timerButton = document.querySelector("#timer-button");
const hero = document.querySelector("#principal");

let secondsValue = 0;
let minutesValue = 0;
let currentInterval;
let currentButton;

function startChronometer(){
    currentButton = event.target;
    currentButton.disabled = true;
    currentInterval = setInterval(() => {
        secondsValue +=1
        if(secondsValue === 60) {
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
            secondsSpan.textContent = formatValue(secondsValue);
        
    },1000);
}

function formatValue(value) {
    return ("0" + value).slice(-2);
}

function stopChronometer() {
    if (currentButton) {
        currentButton.disabled = false;
    }
    clearInterval(currentChronometer);
}

function resetChronometer() {
    secondsValue = 0;
    minutesValue = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
}

function startTimer() {
    event.preventDefault();
    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);
    currentInterval = setInterval (() => {

    })
    
}

function executeTimer() {

    hero.innerHTML = 
    
    ` <h1 class=hero--title>Timer</h1>
    <div class="hero--time">
      <p id="time"><span id="minutes">00</span>:<span id="seconds">00</span></p>
    </div>
    <div class="hero--buttons">
      <form onsubmit="startTimer()">
        <input type="number" Placeholder = "Escribe los minutos" id="minutesInput" name="minutes">
        <input type="number" Placeholder = "Escribe los Segundo" id="secondsInput" name= "seconds">
        <button type="submit">Star</button>
       </form>
    </div>`;

 secondsSpan = document.querySelector("#seconds");
 minutesSpan = document.querySelector("#minutes");

}
