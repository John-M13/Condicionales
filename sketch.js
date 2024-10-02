let x = 200;
let y = 200;
let xspeed = 5;
let yspeed = 5;
let colorRobot; // Variable para el color del círculo

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorRobot = color(84, 195, 146); // Color inicial
  textAlign(CENTER); // Alinear el texto al centro
}

function draw() {
  background(0);

  // Mostrar el texto en la parte superior
  fill(random(170)); // Color del texto
  text("PRESS THE MOUSE", width / 2, 40); // texto centrado

  Text = "CHON";
  TextSize = 20;
  fill(colorRobot);
  textSize(TextSize);
  text(Text, x + 50, y - 110);
  noStroke();
  // cuerpo  robot

  fill(colorRobot);
  noStroke();
  rect(x, y, 100, 50);
  rect(x, y + 55, 100, 50);
  fill(178, 210, 250);
  circle(x + 80, y + 20, 15);
  circle(x + 50, y + 20, 15);
  circle(x + 20, y + 20, 15);
  rect(x + 7, y + 63, 85, 5);
  rect(x + 7, y + 73, 85, 5);
  rect(x + 7, y + 83, 85, 5);
  rect(x + 7, y + 93, 85, 5);
  // cabeza de robot
  fill(93, 155, 155);
  rect(x + 15, y - 45, 70, 40);
  //  antena de robot
  fill(colorRobot);
  rect(x + 47, y - 85, 10, 40);
  fill(178, 210, 250);
  circle(x + 52, y - 85, 15);

  // boca de robot
  fill(178, 210, 250);
  rect(x + 35, y - 17, 30, 5);
  // ojos del robot
  fill(178, 210, 250);
  circle(x + 30, y - 32, 15);
  circle(x + 70, y - 32, 15);
  fill(0);
  circle(x + 30, y - 32, 10);
  circle(x + 70, y - 32, 10);

  // brazos de robot
  fill(93, 155, 155);
  rect(x - 20, y - 60, 15, 100);
  rect(x + 105, y - 60, 15, 100);
  // manos de robot
  fill(178, 210, 250);
  circle(x - 12, y - 60, 20);
  circle(x + 112, y - 60, 20);

  // Patas de robot
  fill(93, 155, 155);
  rect(x + 10, y + 110, 20, 80);
  rect(x + 70, y + 110, 20, 80);
  // pies de robot
  fill(178, 210, 250);
  rect(x + 10, y + 195, 20, 10);
  rect(x + 70, y + 195, 20, 10);
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
  colorRobot = color(random(255), random(255), random(255)); // Cambiar a un color aleatorio
  // Invertir la dirección de la pelota
  xspeed *= -1;
  yspeed *= -1;
}
