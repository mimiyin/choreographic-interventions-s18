/*
Mimi Yin NYU-ITP
Affect noisy pathways with the selected joint.
Use LEFT/RIGHT arrow keys to change selected joint.
Use UP/DOWN arrow keys to change mode.
Press ENTER to erase.
*/

// Declare kinectron
let kinectron = null;
// Keep track of selected joint
let j;
// Which drawing mode
let mode;
// Store current and previous positions of selected joint
let pos, ppos;

// Store x,y coordinates of current location
let x, y;
// Store x,y coordinates of previous location
let px, py;
// Store current xspeed and yspeed
let xspeed, yspeed;
// Current position in noise graph
let t;
// How quickly we skip along noise graph
let tspeed;

// Range of random, relative range of vertical random
let range, yscl;
// How much to shift right/left, up/down
let xshift, yshift;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.107");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Initialize values
  mode = 0;

  // Start drawing with left hand
  j = kinectron.HANDLEFT;

  // Draw white background
  background(255);

  // Initialize noisy pathway variables
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
  xspeed = 0;
  yspeed = 0;
  t = 0;
  tspeed = 0.01;

  range = 4;
  yscl = 1;
  xshift = .5;
  yshift = .5;
}

function draw() {
  background(0, 5);

  // Move forward along noise graph
  t += tspeed;

  xspeed = (noise(t) - xshift) * range; //shift median to right/left
  yspeed = (noise(t + 100) - yshift) * range * yscl //shift median to up/down


  // Move
  x += xspeed;
  y += yspeed;

  // Draw a line from the previous loc to this loc
  stroke(255);
  strokeWeight(3);
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
}

function bodyTracked(body) {
  // Get the left hand joint
  let joint = body.joints[j];

  // Calculate its x,y,z coordinates
  pos = scaleJoint(joint);

  // If there is a previous position
  // Calculate range (speed) of noisy pathway
  // Based on speed of selected joint
  if (ppos) {
    // The faster the motion, the faster the noisy pathway
    range = dist(ppos.x, ppos.y, ppos.z, pos.x, pos.y, pos.z);
    // The faster the motion, the less random the pathway
    tspeed = 10/range;

    // Inverse of the above
    // The faster the motion, the slower the noisy pathway
    //range = 100/dist(ppos.x, ppos.y, ppos.z, pos.x, pos.y, pos.z);
    // The slower the motion the more random the pathway
    //tspeed = range/10;
  }

  // Store current location for next frame
  ppos = pos;
}

// Draw each joint
function drawJoint(joint) {
  let pos = scaleJoint(joint);
  noStroke();
  fill(255);
  ellipse(pos.x, pos.y, 10, 10);
}

function keyPressed() {
  // Use RIGHT/LEFT arrow keys to change selected joint
  // ENTER to erase
  switch (keyCode) {
    case UP_ARROW:
      mode++;
      mode %= 4;
      break;
    case LEFT_ARROW:
      j--;
    case RIGHT_ARROW:
      j++;
      break;
    case ENTER:
      background(255);
      break;
  }

  // There are only 25 joints
  j = constrain(j, 0, 24);
}

// Scale the joint position data to fit the screen
// 1. Move it to the center of the screen
// 2. Flip the y-value upside down
// 3. Return it as an object literal
function scaleJoint(joint) {
  return {
    x: (joint.cameraX * width / 2) + width / 2,
    y: (-joint.cameraY * width / 2) + height / 2,
    z: joint.cameraZ * 100
  }
}