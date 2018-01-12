/* Mimi Yin, NYU-ITP
Visualizing how direction is constantly
changing as you move around a circle.
*/
let x, y, r, centerX, centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width/2;
  centerY = height/2;
  r = 100;
  noStroke();
}

function draw() {
  background(255);

  //Move
  x = (cos(frameCount*0.01)*r) + centerX;
  y = (sin(frameCount*0.01)*r) + centerY;

  // Draw the tangent
  let len = 20;
  stroke(0, 255)
  push();
  translate(x, y);
  rotate((frameCount*0.01) + PI/4);
  line(0, 0, len, len);
  push();
  translate(len, len);
  rotate(PI/8);
  line(0, 0, -10, -10);
  pop();
  push()
  translate(len, len);
  rotate(-PI/8);
  line(0, 0, -10, -10);
  pop();
  pop();

  //Ellipse moving around circle
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 10, 10);

  // Draw3
  stroke(0, 64);
  noFill();
  ellipse(centerX, centerY, r*2, r*2);
}