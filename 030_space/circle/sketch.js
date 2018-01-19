let sz = 0;
let invert = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(invert ? 0: 255);

  // Grow size of circle
  sz++;
  fill(invert ? 255: 0);
  ellipse(0, 0, sz, sz);
}

// Press any key to invert
function keyPressed(){
 invert = !invert;
}