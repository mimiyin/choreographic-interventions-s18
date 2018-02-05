/*
Mimi Yin NYU-ITP
Same as kinect_skeleton_draw_lines but supports multiple bodies.
Drawing lines with the selected joint in 4 modes.
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
// Store current and previous positions of selected joint for all bodies
let bodies = {};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.117");

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
}

function draw() {}

function bodyTracked(body) {
  // Get id of body
  let id = body.trackingId;

  // Get the left hand joint
  let joint = body.joints[j];

  // Create a record for the body if body is new
  if(!(id in bodies)) {
    bodies[id] = {};
  }

  // Calculate its x,y,z coordinates
  bodies[id].pos = scaleJoint(joint);

  // If there is a previous position
  if (bodies[id].ppos) {

    let px = bodies[id].ppos.x;
    let py = bodies[id].ppos.y;
    let pz = bodies[id].ppos.z;
    let x = bodies[id].ppos.x;
    let y = bodies[id].ppos.y;
    let z = bodies[id].ppos.z;

    // Calculate speed of joint
    let speed = dist(px, py, pz, x,y,z);
    let sw = 1;

    // 3 ways to set strokeweight according to speed.
    switch (mode) {
      case 1:
        sw = speed / 10;
        break;
      case 2:
        sw = 100 / speed;
        break;
      case 3:
        sw = map(speed, 0, 100, 10, 0);
        break;
    }

    // Draw the line
    stroke(0);
    strokeWeight(sw);
    line(px, py, x, y);
  }

  // Store current location for next frame
  body.ppos = body.pos;
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