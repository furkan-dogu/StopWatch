const stopWatch = document.getElementById("stopWatch");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
[second, minutes, msecond, hours] = [0, 0, 0, 0];
let stopW;
let Stp = true;

function updateWatch() {
  msecond += 1;
  if (msecond >= 100) {
    msecond = 0;
    second++;
  }
  if (second >= 60) {
    second = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  stopWatch.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${second < 10 ? "0" + second : second}:${
    msecond < 10 ? "0" + msecond : msecond
  }
  `;
}

playBtn.addEventListener("click", () => {
  if (Stp) {
    stopW = setInterval(updateWatch, 10);
    Stp = false;
  }
});
stopBtn.addEventListener("click", () => {
  clearInterval(stopW);
  Stp = true;
});
resetBtn.addEventListener("click", () => {
  clearInterval(stopW);
  [second, minutes, msecond, hours] = [0, 0, 0, 0];
  stopWatch.innerText = "00:00:00:00";
  Stp = true;
});