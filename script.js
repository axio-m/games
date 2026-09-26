const player = document.getElementById('player');

let x = 100;
let y = 100;
const speed = 15;
const playerSize = 50

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
  if (x<0) {
    x=0;
  }
  if (x>window.innerWidth-playerSize) {
    x=window.innerWidth-playerSize;
  }
  if (y<0) {
    y=0;
  }
  if (y>window.innerHeight-playerSize) {
    y=window.innerHeight-playerSize;
  }
  player.style.left = x + 'px';
  player.style.top = y + 'px';
});
