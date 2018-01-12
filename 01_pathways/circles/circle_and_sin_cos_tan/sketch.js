/*
Mimi Yin NYU-ITP
Adding tan wave to the visualization.
*/


let circle, speed;
let d, r, theta, tSpeed;
let drawSin = true;
let drawCos = false;
let drawTan = false;

function setup() {
  createCanvas(TWO_PI * 100, window.innerHeight);
  circle = createVector(0, height / 2);
  speed = createVector((width / TWO_PI) * .0075, 0);
  d = 200;
  r = d / 2;
  theta = 0;
  // Fit the speed to the width of the window
  // Make sure a complete sine-wave is drawn
  tSpeed = (width / TWO_PI) * .000075;
}


function draw() {
  background(128);
  noStroke();

  if (drawSin) {
    fill(255, 0, 0);
    // Draw all the points of the sin wave until the current "theta"
    for (let t = 0; t < theta; t += abs(tSpeed)) {
      ellipse(t * 100, circle.y + r * sin(t), 1, 1);
    }
  }

  if (drawCos) {
    // Draw all the points of the cos wave until the current "theta"
    fill(0, 0, 255);
    for (let t = 0; t < theta; t += abs(tSpeed)) {
      ellipse(t * 100, circle.y + r * cos(t), 1, 1);
    }
  }

  if (drawTan) {
    // Draw all the points of the tan wave until the current "theta"
    fill(0);
    for (let t = 0; t < theta; t += abs(tSpeed)) {
      ellipse(t * 100, circle.y + r * tan(t), 1, 1);
    }
  }

  stroke(225);
  line(0, circle.y, width, circle.y);

  // Calculate position of dot going around the circumference of the circle
  let circum = createVector(circle.x + r * cos(theta), circle.y + r * sin(theta));

  noStroke();
  // Red Center of Circle
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, 10, 10);

  // Green Y-Position Dot
  fill(0, 255, 0);
  ellipse(circle.x, circum.y, 10, 10);


  // Blue Circumference Dot
  fill(0, 0, 255);
  ellipse(circum.x, circum.y, 10, 10);

  stroke(255, 0, 0);
  strokeWeight(5);
  //Height line
  line(circle.x, circle.y, circle.x, circum.y);

  //Vertical height Line
  line(circum.x, circum.y, circum.x, circle.y);

  //strokeWeight(1);
  stroke(0, 0, 255);
  //Horizontal height line
  line(circum.x, circum.y, circle.x, circum.y);

  noFill();
  strokeWeight(1);
  stroke(200);
  ellipse(circle.x, circle.y, d, d);

  // Bounce back and forth
  if (circle.x > width || circle.x < 0) {
    speed.mult(-1);
    tSpeed *= -1;
  }

  //Move the circle
  circle.add(speed);

  //Move forward through the degrees of the circle for the sin and cos calculations
  theta += tSpeed;
}

// Press 'c' to turn cosine wave on/off
// Press 's' to turn sine wave on/off
// Press 't' to turn tan wave on/off
function keyPressed() {
  switch (key) {
    case 'C':
      drawCos = !drawCos;
      break;
    case 'S':
      drawSin = !drawSin;
      break;
    case 'T':
      drawTan = !drawTan;
      break;
  }
}