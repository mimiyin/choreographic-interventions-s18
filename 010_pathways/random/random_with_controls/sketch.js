/* Mimi Yin, NYU-ITP
Random pathways with controls.

- mouseX controls range (speed) of motion
- mouseY controls interval (how often there is a random change in direction)

When mouse is pressed:
- mouse position relative to center controls direction and extent of drift
When key is pressed:
- mouseY controls yscl (verticality)

*/

// Store x,y coordinates of current location
let x, y;
// Store x,y coordinates of previous location
let px, py;
// Store current xspeed and yspeed
let xspeed, yspeed;

// # of frames to wait before changing direction.
let interval;
// Range of random, relative range of vertical random
let range, yscl;
// How much to shift right/left, up/down
let xshift, yshift;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = (height / 2) + 120;
  px = x;
  py = y;

  xspeed = 0;
  yspeed = 0;

  interval = 1;
  range = 4;
  yscl = 1;
  xshift = 1;
  yshift = 1;

  background(0);
  noStroke();
}

function draw() {

  // Draw very transparent background every frame
  // to create fade-out effect
  background(0, 10);

  //Change direction
  if (frameCount % interval == 0) {
    xspeed = random(-range, range * xshift); //shift median to go right/left
    yspeed = random(-range * yscl, range * yscl * yshift); // shift median to go up/down
  }

  // Move
  x += xspeed;
  y += yspeed;

  // Draw a line from the previous loc to this loc
  stroke(255);
  line(px, py, x, y);

  // Remember current location for next frame
  px = x;
  py = y;

  // Wrap around screen
  if (x < 0 || x > width || y < 0 || y > height) {
    if (x < 0) x = width;
    else if (x > width) x = 0;
    if (y < 0) y = height;
    else if (y > height) y = 0;

    // Don't draw line when wrapping around
    px = x;
    py = y;
  }

  // Draw a landmark in the center
  fill(255);
  noStroke();
  rect(width / 2, height / 2, 10, 10);

  // Controls
  if (keyIsPressed) {
    // mouseY controls yscl (verticality)
    yscl = mouseY / height;
  }
  // Mouse position relative to center sets directional drift
  else if (mouseIsPressed) {
    // Horizontal shift
    xshift = mouseX / (width / 2);
    // Vertical shift
    yshift = mouseY / (height / 2);
  }
  else {
    // mouseX controls range (speed)
    range = 100 * mouseX / width;
    // mouseY controls interval (frequency of change)
    interval = int(120*mouseY/height);
  }
}