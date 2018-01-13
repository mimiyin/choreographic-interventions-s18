/*
Mimi Yin NYU-ITP
Drawing skeleton joints and bones.
 */

// Declare kinectron
let kinectron = null;
let bm = new BodyManager();
let bps = {};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.112");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Draw black background
  background(0);
}

function draw() {
  background(255);

  // Get all the joints off the tracked body and do something with them
  let bodies = bm.getBodies();
  for (let b in bodies) {
    let body = bodies[b];
    // Draw all the joints
    let joints = body.getJoints();
    for (let j = 0; j < joints.length; j++) {
      drawJoint(joints[j]);
    }

    // Get the head
    let head = scaleJoint(joints[kinectron.HEAD]);

    // If the body already exists...
    if(b in bps) {
      bps[b].ppos = bps.pos;
    }
    // Otherwise, create a new record for it
    else {
      bps[b] = {};
    }
    // Store the current position either way
    bps[b].pos = head;
  }

  // Draw line for each body
  for(let b in bps) {
    if(bps.ppos) {
      line(bps.ppos.x, bps.ppos.y, bps.pos.x, bps.pos.y);
    }
  }
}

function bodyTracked(body) {
  let id = body.trackingId;
  // When there is a new body
  if (bm.isTracking(id)) bm.update(body);
  else bm.add(body);
}

// Scale the data to fit the screen
// Move it to the center of the screen
// Return it as a vector
function scaleJoint(joint) {
  let pos = joint.getPos();
  return createVector(pos.x * width / 2) + width / 2, (-pos.y * width / 2) + height / 2);
}

// Draw skeleton
function drawJoint(joint) {

  // Get scaled position for joint
  let pos = scaleJoint(joint);

  //Kinect location data needs to be normalized to canvas size
  stroke(255);
  strokeWeight(5);
  point(pos.x, pos.y);
}