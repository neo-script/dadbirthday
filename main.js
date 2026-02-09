const balloonBtn = document.getElementById("balloonBtn");
const confettiBtn = document.getElementById("confettiBtn");
const cakeBtn = document.getElementById("cakeBtn");
const musicBtn = document.getElementById("musicBtn");
const messageBtn = document.getElementById("messageBtn");

const cake = document.getElementById("cake");
const message = document.getElementById("message");
const song = document.getElementById("birthdaySong");

balloonBtn.onclick = () => {
  for (let i = 0; i < 12; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.textContent = "🎈";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
  }
};

confettiBtn.onclick = () => {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      `hsl(${Math.random() * 360},100%,50%)`;
    confetti.style.animationDuration =
      2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
};

cakeBtn.onclick = () => cake.classList.toggle("hidden");
messageBtn.onclick = () => message.classList.toggle("hidden");

musicBtn.onclick = () => {
  song.paused ? song.play() : song.pause();
};
