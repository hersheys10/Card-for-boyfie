const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.innerText = "⏸ Pause Music";
  } else {
    music.pause();
    playBtn.innerText = "▶ Play Music";
  }
});

function nextPage() {
  alert("Next cute page coming soon 😘💖");
}
