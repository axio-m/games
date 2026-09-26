const player = document.getElementById('player');

let x = 100;
let y = 100;
const speed = 15;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    y = y - speed;
  }
  if (event.key === 'ArrowDown' || event.key === 's') {
    y = y + speed;
  }
  if (event.key === 'ArrowLeft' || event.key === 'a') {
    x = x - speed;
  }
  if (event.key === 'ArrowRight' || event.key === 'd') {
    x = x + speed;
  }
  player.style.left = x + 'px';
  player.style.top = y + 'px';
});
