
import './styles/style.scss'

const canvas = document.getElementById("repulsion");
const ctx = canvas.getContext("2d");

let animationId = null;
let isAnimating = false;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function fade() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.53)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function scribble() {
  const strokesPerFrame = 15;

  for (let i = 0; i < strokesPerFrame; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.beginPath();
    ctx.moveTo(x, y);

    const segments = 10 + Math.random() * 30;

    for (let j = 0; j < segments; j++) {
      x += (Math.random() - 0.5) * 60;
      y += (Math.random() - 0.5) * 60;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.lineWidth = Math.random() * 1.8 + 0.6;
    ctx.globalCompositeOperation = "";
    ctx.lineCap = "round";
    ctx.stroke();
  }
}

function text() {
  ctx.font = "150px serif";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("I HATE EVERYTHING", canvas.width / 2, canvas.height / 2);
}

function animate() {
  if (!isAnimating) return;

  fade();
  scribble();
  text();

  animationId = requestAnimationFrame(animate);
}

const strokeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isAnimating) {
        isAnimating = true;
        animate();
    } else {
      isAnimating = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }
  });
});

strokeObserver.observe(canvas);
