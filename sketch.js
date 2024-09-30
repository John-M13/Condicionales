let x = 200;
let y = 200;
let xspeed = 20;
let yspeed = 20;
let colorCirculo; // Variable para el color del círculo

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorCirculo = color(84, 195, 146); // Color inicial
}

function draw() {
  background(210, 255, 114);
  fill(colorCirculo);
  noStroke();
  ellipse(x, y, 100, 100);

  // Movimiento
  x += xspeed;
  y += yspeed;

  // Rebotar en los bordes
  if (x > width - 55 || x < 55) {
    xspeed *= -1;
  }
  if (y > height - 55 || y < 55) {
    yspeed *= -1;
  }
}

// Cambia el color del círculo al presionar el mouse
function mousePressed() {
  colorCirculo = color(random(255), random(255), random(255)); // Cambiar a un color aleatorio
}
