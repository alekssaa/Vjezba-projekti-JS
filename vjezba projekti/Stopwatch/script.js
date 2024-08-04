const displayTime = document.querySelector("#displayTime");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
const stopWatch = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s + ":";
};
const startWatch = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
};
const Stop = () => {
  clearInterval(timer);
};
const reset = () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
};
