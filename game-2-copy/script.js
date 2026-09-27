const player = document.getElementById('player');
const world = document.getElementById('world');

let x = 250;
let y = 2500;

let velocityX=0;
let velocityY=0;

let cameraX=250;
let cameraY=2500;

const maxSpeed = 3;
const acceleration=0.2;
const friction=0.15

const cameraFollowSpeed=0.08;
const cameraOffset=-40;

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
  velocityX+=dx*acceleration;
  velocityY+=dy*acceleration;
  const velocity=Math.sqrt(
    velocityX*velocityX+velocityY*velocityY
  );
  if (velocity>maxSpeed){
    velocityX=(velocityX/velocity)*maxSpeed;
    velocityY=(velocityY/velocity)*maxSpeed;
  }
  if (dx===0){
    velocityX*=1-friction;
  }
  if (dy===0){
    velocityY*=1-friction
  }
  if (Math.abs(velocityX)<0.01) velocityX=0;
  if (Math.abs(velocityY)<0.01) velocityY=0;
  x+=velocityX;
  y+=velocityY;
  player.style.left=x+'px';
  player.style.top=y+'px';
  const targetCameraX=x+velocityX*cameraOffset;
  const targetCameraY=y+velocityY*cameraOffset;
  cameraX+=(targetCameraX-cameraX)*cameraFollowSpeed;
  cameraY+=(targetCameraY-cameraY)*cameraFollowSpeed;
  const screenCenterX=window.innerWidth/2;
  const screenCenterY=window.innerHeight/2;
  world.style.transform=
    `translate(${screenCenterX-cameraX-playerSize/2}px,
      ${screenCenterY-cameraY-playerSize/2}px)`;
  requestAnimationFrame(gameLoop);
}

gameLoop();
