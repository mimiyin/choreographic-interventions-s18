/* Mimi Yin, NYU-ITP
Linear motion, deconstructed.
*/

// Variables to store x,y coordinates of position
let x, y;

// Variables to start starting x,y coordinates
let xstart, ystart;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Start near the middle, top
  x = width/2;
  y = 10;
  xstart = x;
	ystart = y;
  noStroke();
  textSize(16);
}

function draw() {
  // Draw a black background
  background(0);

  //Move
  x += .2;
  y += .8;

  // Draw linear pathway
  fill(255);
  ellipse(x, y, 10, 10);
  text("c", x + 10, y + 5);

  // Draw x-component of pathway
  fill(255, 16);
  rect(0, 0, x, height);
  fill(255, 0, 0);
  ellipse(x, ystart, 10, 10);
  text("a", x + 10, ystart + 5);

  // Draw y-component of pathway
  fill(255, 8);
  rect(0, 0, width, y);
  fill(0, 0, 255);
  ellipse(xstart, y, 10, 10);
  text("b", xstart - 20, y + 5);
}