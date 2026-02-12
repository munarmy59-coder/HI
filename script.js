const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = "🔇 Tắt nhạc";
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = "🔊 Bật nhạc";
    isPlaying = false;
  }
});
