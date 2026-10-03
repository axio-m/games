const player = document.getElementById('player');
const world = document.getElementById('world');

let x = 250;
let y = 2500;
const speed = 3;
const playerSize = 50;
const keys = {};

document.addEventListener('keydown', (event) => {
  keys[event.key.toLowerCase()] = true;
});
document.addEventListener('keyup',(event) => {
  keys[event.key.toLowerCase()] = false;
});
function gameLoop() {
  let dx = 0;
  let dy = 0;
  if (keys['w']||keys['arrowup']) {
    dy-=1;
  }
  if (keys['s']||keys['arrowdown']) {
    dy+=1;
  }
  if (keys['a']||keys['arrowleft']) {
    dx-=1;
  }
  if (keys['d']||keys['arrowright']) {
    dx+=1;
  }
  if (dx!==0&&dy!==0) {
    dx*=Math.SQRT1_2;
    dy*=Math.SQRT1_2;
  }
  x+=dx*speed;
  y+=dy*speed;
  const screenCenterX=window.innerWidth/2;
  const screenCenterY=window.innerHeight/2;
  player.style.left=x+'px';
  player.style.top=y+'px';
  world.style.transform=
    `translate(${screenCenterX-x-playerSize/2}px,
      ${screenCenterY-y-playerSize/2}px)`;
  requestAnimationFrame(gameLoop);
}

gameLoop();
