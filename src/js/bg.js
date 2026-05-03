const glow = document.getElementById("cursor-glow");

glow.style.background = "radial-gradient(circle, #6AADF4 0%, transparent 70%)";

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const lines = document.querySelectorAll(".line");
const stars = document.querySelectorAll(".star");

lines.forEach((line, i) => {
  line.style.animationDelay = `${i * 0.03}s`;
});

stars.forEach((star, i) => {
  star.style.animationDelay = `${0.5 + i * 0.01}s`;
});