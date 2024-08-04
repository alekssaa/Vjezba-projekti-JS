const progres = document.querySelector("#progress");
const song = document.querySelector("#song");
const ctrlIcon = document.querySelector("#ctrlIcon");

song.onloadedmetadata = () => {
  progres.max = song.duration;
  progres.value = song.currentTime;
};
const playPause = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};
if (song.play()) {
  setInterval(() => {
    progres.value = song.currentTime;
  }, 500);
}
progres.onchange = () => {
  song.play();
  song.currentTime = progres.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};
