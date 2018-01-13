/* Mimi Yin, NYU-ITP
Random pathways.
*/

// Store current x,y coordinates
let x, y;
// Store previous x,y coordinates
let px, py;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Start in the middle
  x = width/2;
  y = height/2;
  px = x;
  py = y;
  noStroke();
  background(0);
}

function draw() {
  //background(0);

  //Move randomly
	x += random(-50,50);
	y += random(-50,50);;

  // Draw a line from the previous loc to this loc
  stroke(255);
  line(px, py, x, y);

  // Remember current location as previous position
  // for the next frame of animation
  px = x;
  py = y;    
}