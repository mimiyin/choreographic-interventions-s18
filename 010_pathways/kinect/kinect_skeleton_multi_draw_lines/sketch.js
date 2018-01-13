/*
Mimi Yin NYU-ITP
Drawing skeleton joints and bones.
 */

// Declare kinectron
let kinectron = null;
let bm = new BodyManager();

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.112");

  // CONNECT TO MIRCROSTUDIO
  //kinectron = new Kinectron("kinectron.itp.tsoa.nyu.edu");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Draw black background
  background(0);
}

function draw() {
  background(0);

  // Get all the joints off the tracked body and do something with them
  let bodies = bm.getBodies();
  for (let b in bodies) {
    let body = bodies[b];
    // Draw all the joints
    let joints = body.getJoints();
    for (let j = 0; j < joints.length; j++) {
      drawJoint(joints[j]);
    }


    // Mid-line
    let head = getPos(joints[kinectron.HEAD]);
    let neck = getPos(joints[kinectron.NECK]);
    let spineShoulder = getPos(joints[kinectron.SPINESHOULDER]);
    let spineMid = getPos(joints[kinectron.SPINEMID]);
    let spineBase = getPos(joints[kinectron.SPINEBASE]);

    // Right Arm
    let shoulderRight = getPos(joints[kinectron.SHOULDERRIGHT]);
    let elbowRight = getPos(joints[kinectron.ELBOWRIGHT]);
    let wristRight = getPos(joints[kinectron.WRISTRIGHT]);
    let handRight = getPos(joints[kinectron.HANDRIGHT]);
    let handTipRight = getPos(joints[kinectron.HANDTIPRIGHT]);
    let thumbRight = getPos(joints[kinectron.THUMBRIGHT]);

    // Left Arm
    let shoulderLeft = getPos(joints[kinectron.SHOULDERLEFT]);
    let elbowLeft = getPos(joints[kinectron.ELBOWLEFT]);
    let wristLeft = getPos(joints[kinectron.WRISTLEFT]);
    let handLeft = getPos(joints[kinectron.HANDLEFT]);
    let handTipLeft = getPos(joints[kinectron.HANDTIPLEFT]);
    let thumbLeft = getPos(joints[kinectron.THUMBLEFT]);

    // Right Leg
    let hipRight = getPos(joints[kinectron.HIPRIGHT]);
    let kneeRight = getPos(joints[kinectron.KNEERIGHT]);
    let ankleRight = getPos(joints[kinectron.ANKLERIGHT]);
    let footRight = getPos(joints[kinectron.FOOTRIGHT]);

    // Left Leg
    let hipLeft = getPos(joints[kinectron.HIPLEFT]);
    let kneeLeft = getPos(joints[kinectron.KNEELEFT]);
    let ankleLeft = getPos(joints[kinectron.ANKLELEFT]);
    let footLeft = getPos(joints[kinectron.FOOTLEFT]);
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
function getPos(joint) {
  return createVector((joint.cameraX * width / 2) + width / 2, (-joint.cameraY * width / 2) + height / 2);
}

// Draw skeleton
function drawJoint(joint) {

  //console.log("JOINT OBJECT", joint);
  let pos = getPos(joint);

  //Kinect location data needs to be normalized to canvas size
  stroke(255);
  strokeWeight(5);
  point(pos.x, pos.y);
}