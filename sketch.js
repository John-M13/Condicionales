let x = 200;
let y = 200;
let xspeed = 20;
let yspeed = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(210, 255, 114);
    fill(84, 195, 146);
    noStroke()
    ellipse(x, y, 100, 100);
    // Movimiento
  x += xspeed;
  y += yspeed;
  
  // Rebotar en los bordes
  
  if (x > width - 55 || x < 5) {
    xspeed *= -1;
  }
  if (y > height - 5|| y < 5) {
    yspeed *= -1;

}
}