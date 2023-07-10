const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
}

const object = new Player(canvas.width / 2, canvas.height / 2, 50, 'orange');
const player = new Player(120, 120, 50, 'yellow');
const xlayer = new Player(320, 320, 50, 'yellow');

// object.draw();
// player.draw();


// Add event listeners for mouse movement
canvas.addEventListener('mousemove', (event) => {
  player.x = event.x
  player.y = event.y
});

// Function to clear the canvas
function clearCanvas() {
  c.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to check for collision
function checkCollision() {
  // const distance = Math.sqrt((player.x - object.x) ** 2 + (player.y - object.y) ** 2);

  let dx = player.x - object.x
  let dy = player.y - object.y
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance <= player.radius + object.radius) {
    object.color = 'green';
  } else {
    object.color = 'orange';

  }
}

// Function to animate the game
function animate() {
  requestAnimationFrame(animate);
  clearCanvas();
  checkCollision();
  object.draw();
  player.draw();
  xlayer.draw();

}

animate();
