/*
Mimi Yin NYU-ITP
Graphing Random
*/

// Store current x,y coordinates
let x, y;
// Store previous x,y coordinates
let px, py;

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(255);
  // Begin in the left, middle.
  x = 0;
  y = height/2;
  px = x;
  py = y;
}

function draw() {

  // Advance 10 pixels across every frame.
  x+=10;

  // Generate a new random number for the y-position.
  y = random(-height/4, height/4) + height/2;

  // Draw a line from last frame's position to this frame's.
 	line(px, py, x, y);

  // Remember this frame's position for the next frame.
  px = x;
  py = y;
}