function setTransform(x, y, z) {
  document.getElementById('🎲')?.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
}

let t = 0;
setInterval(() => {
  t += 0.1;
  setTransform(t, t * 10, 0);
}, 10);
