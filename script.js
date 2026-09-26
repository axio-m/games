const player = document.getElementById('player');

let x = 100;
let y = 100;
const speed = 3;
const playerSize = 50
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
  if(x<0){
    x=0;
  }
  if(x>window.innerWidth-playerSize){
    x=window.innerWidth-playerSize;
  }
  if(y<0){
    y=0;
  }
  if(y>window.innerHeight-playerSize){
    y=window.innerHeight-playerSize;
  }
  player.style.left=x+'px';
  player.style.top=y+'px';
  requestAnimationFrame(gameLoop);
}

gameLoop();
