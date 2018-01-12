/*
Mimi Yin NYU-ITP
Zeno's Paradox or easing.
*/
let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize x at 0
  x = 0;
}

function draw() {
  // Draw a white background
  background(255);

  // Increment x by 1% of the distance remaining between x and the right edge
  x += (width-x)*0.01;

  // Set fill color to black
  fill(0);
  // Draw a circle at x
  ellipse(x, height/2, 10,10);
}