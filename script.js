let countdown;
const display = document.getElementById('display');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const breakTimer = document.getElementById('breakTimer');
const timerType = document.getElementById('timerType');
const ding = document.getElementById('ding');

function displayTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const formattedZero = remainderSeconds < 10 ? '0' : '';
  display.textContent = `${minutes}:${formattedZero}${remainderSeconds}`;
}

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({now, then});
  displayTimer(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it!
    if(timerType.textContent == "Break" && secondsLeft < 0) {
      clearInterval(countdown);
      ding.play();
      return;
    }
    if(secondsLeft < 0) {
        clearInterval(countdown);
        ding.play();
        timer(300); //break time
        timerType.textContent = 'Break';
        return;
    }
    console.log(secondsLeft);
    displayTimer(secondsLeft);
}, 1000);
} 

start.addEventListener('click', (e) => timer(1500)); //timer time
stop.addEventListener('click', (e) => clearInterval(countdown));

//make stop button work like a pause button
//+ and - buttons to change time
//css?



