const dice = document.getElementById('🎲');
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const zInput = document.getElementById('z');

function update() {
  const x = xInput.value;
  const y = yInput.value;
  const z = zInput.value;

  dice.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

  localStorage.setItem('x', x);
  localStorage.setItem('y', y);
  localStorage.setItem('z', z);
}

xInput.addEventListener('input', update);
yInput.addEventListener('input', update);
zInput.addEventListener('input', update);

document.addEventListener('DOMContentLoaded', () => {
  xInput.value = localStorage.getItem('x') || 0;
  yInput.value = localStorage.getItem('y') || 0;
  zInput.value = localStorage.getItem('z') || 0;
  update();
});
