/*
Mimi Yin NYU-ITP
Bisect space.
Horizontal and Vertical.
Use LEFT/RIGHT arrow keys to bisect vertically.
Use UP/DOWN arrow keys to bisect horizontally.
*/

// Bisect horizontally or vertically?
let horizontal = false;
let w = 0;
let h = 0;

function setup() {
  createCanvas(1080, windowHeight);
  noStroke();
}

function draw() {
  background(0);

  // Draw the cells
  fill(255);
  if (horizontal) {
    rect(0, 0, width, h);
    h++;
  }
  else {
    rect(0, 0, w, height);
    w++;
  }
}

// Switch modes with any key press
function keyPressed() {
  horizontal = !horizontal;
}