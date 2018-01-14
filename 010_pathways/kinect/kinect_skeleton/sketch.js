/*
Mimi Yin NYU-ITP
Drawing skeleton joints
Showing selected joint
 */

// Declare kinectron
let kinectron = null;
// Keep track of selected joint
let j;
// Directory of joints
let joints = [
  "SPINEBASE",
  "SPINEMID",
  "NECK",
  "HEAD",
  "SHOULDERLEFT",
  "ELBOWLEFT",
  "WRISTLEFT",
  "HANDLEFT",
  "SHOULDERRIGHT",
  "ELBOWRIGHT",
  "WRISTRIGHT",
  "HANDRIGHT",
  "HIPLEFT",
  "KNEELEFT",
  "ANKLELEFT",
  "FOOTLEFT",
  "HIPRIGHT",
  "KNEERIGHT",
  "ANKLERIGHT",
  "FOOTRIGHT",
  "SPINESHOULDER",
  "HANDTIPLEFT",
  "THUMBLEFT",
  "HANDTIPRIGHT",
  "THUMBRIGHT"
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.117");

  // CONNECT TO MIRCROSTUDIO
  //kinectron = new Kinectron("kinectron.itp.tsoa.nyu.edu");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Start by tracking left hand
  j = kinectron.HANDLEFT;

  // Draw black background
  background(0);
}

function draw() {
}

function bodyTracked(body) {
  background(0);

  // Draw all the joints
  kinectron.getJoints(drawJoint);

  // Get the selected joint
  let joint = body.joints[j];
  let pos = scaleJoint(joint);

  noStroke();
  fill(255);
  // Draw a bigger, red ellipse for the selected joint
  ellipse(pos.x, pos.y, 50, 50);

  // Print which joint is selected
  stroke(255);
  textSize(18);
  text("RT/LFT to change joints. " + j + ": " + joints[j], 10, 20);

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
  switch (keyCode) {
    case LEFT_ARROW:
    	j--;
    case RIGHT_ARROW:
    	j++;
      break;
  }

  // There are only 25 joints
  j = constrain(j, 0, 24);
}

// Scale joint position data to screen
function scaleJoint(joint) {
  return {
    x: (joint.cameraX * width / 2) + width / 2,
    y: (-joint.cameraY * width / 2) + height / 2,
  }
}