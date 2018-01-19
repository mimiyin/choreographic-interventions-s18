/*
Mimi Yin NYU-ITP
Trisect space.
Horizontal and Vertical.
*/

let horizontal = false;
let w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 0;
  h = 0;
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(255);

  // Draw the cells
  if (horizontal) {
    rect(width / 2, height / 2, width, h);
    h++;
  }
  else {
    rect(width / 2, height / 2, w, height);
    w++;
  }
}

// Switch modes with any key press
function keyPressed() {
  horizontal = !horizontal;
}