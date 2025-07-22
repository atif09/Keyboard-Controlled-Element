const square = document.getElementById('square');

let positionX = 180;
let positionY = 180;
const speed = 10;
const boundary = 360;

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      positionY = Math.max(positionY - speed, 0);
      break;

    case 'ArrowDown':
    case 's':
      positionY = Math.min(positionY + speed, boundary);
      break;

    case 'ArrowLeft':
    case 'a':
      positionX = Math.max(positionX - speed, 0);
      break;

    case 'ArrowRight':
    case 'd':
      positionX = Math.min(positionX + speed, boundary);
      break;
  }

  square.style.top = positionY + "px";
  square.style.left = positionX + "px";
});
