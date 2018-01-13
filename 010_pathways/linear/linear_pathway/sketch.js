/* Mimi Yin, NYU-ITP
Linear motion.
*/

// Variables to store x,y coordinates
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initial position is middle, near the top
  x = width / 2;
  y = 10;
  // Don't draw an outline
  noStroke();
}

function draw() {
  // Draw black background
  background(0);

  //Move horizontally to the left .4 pixels every frame
  x += -.4;
  // Move vertically down .8 pixels every frame
  y += .8;

  // Set fill color to white
  fill(255);
  // Draw a circle at x,y
  ellipse(x, y, 10, 10);
}