/*
Mimi Yin NYU-ITP
Draw joints as 3D shapes to shift
the body's Center of Gravity
*/

// Declare kinectron
let kinectron = null;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("192.168.0.117");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  background(0);
}

function draw() {
}

function bodyTracked(body) {
  background(255);

  rotateY(2*TWO_PI*mouseX/width);
  rotateX(3*TWO_PI*mouseY/width);

  // Draw all the joints
  kinectron.getJoints(drawJoint);

  // Get all the joints off the tracked body and do something with them

  // Mid-line
  let head = scaleJoint(body.joints[kinectron.HEAD]);
  let neck = scaleJoint(body.joints[kinectron.NECK]);
  let spineShoulder = scaleJoint(body.joints[kinectron.SPINESHOULDER]);
  let spineMid = scaleJoint(body.joints[kinectron.SPINEMID]);
  let spineBase = scaleJoint(body.joints[kinectron.SPINEBASE]);

  // Right Arm
  let shoulderRight = scaleJoint(body.joints[kinectron.SHOULDERRIGHT]);
  let elbowRight = scaleJoint(body.joints[kinectron.ELBOWRIGHT]);
  let wristRight = scaleJoint(body.joints[kinectron.WRISTRIGHT]);
  let handRight = scaleJoint(body.joints[kinectron.HANDRIGHT]);
  let handTipRight = scaleJoint(body.joints[kinectron.HANDTIPRIGHT]);
  let thumbRight = scaleJoint(body.joints[kinectron.THUMBRIGHT]);

  // Left Arm
  let shoulderLeft = scaleJoint(body.joints[kinectron.SHOULDERLEFT]);
  let elbowLeft = scaleJoint(body.joints[kinectron.ELBOWLEFT]);
  let wristLeft = scaleJoint(body.joints[kinectron.WRISTLEFT]);
  let handLeft = scaleJoint(body.joints[kinectron.HANDLEFT]);
  let handTipLeft = scaleJoint(body.joints[kinectron.HANDTIPLEFT]);
  let thumbLeft = scaleJoint(body.joints[kinectron.THUMBLEFT]);

  // Right Leg
  let hipRight = scaleJoint(body.joints[kinectron.HIPRIGHT]);
  let kneeRight = scaleJoint(body.joints[kinectron.KNEERIGHT]);
  let ankleRight = scaleJoint(body.joints[kinectron.ANKLERIGHT]);
  let footRight = scaleJoint(body.joints[kinectron.FOOTRIGHT]);

  // Left Leg
  let hipLeft = scaleJoint(body.joints[kinectron.HIPLEFT]);
  let kneeLeft = scaleJoint(body.joints[kinectron.KNEELEFT]);
  let ankleLeft = scaleJoint(body.joints[kinectron.ANKLELEFT]);
  let footLeft = scaleJoint(body.joints[kinectron.FOOTLEFT]);

  push();
  translate(spineBase.x, spineBase.y, spineBase.z);
  sphere(10);
  pop();

  push();
  translate(handLeft.x, handLeft.y, handLeft.z);
  sphere(50);
  pop();

  // Put the head on the left hand as if it were the base of the spine
  // Make it a box
  let offset = p5.Vector.sub(head, spineBase).add(handLeft);
  push();
  translate(offset.x, offset.y, offset.z);
  box(100);
  pop();

}

// Scale the joint position data to fit the screen
// 1. Move it to the center of the screen
// 2. Flip the y-value upside down
// 3. Return it as a Vector
function scaleJoint(joint) {
  return createVector(joint.cameraX*width/4, -joint.cameraY*width/4, joint.cameraZ*100);
}

// Draw skeleton
function drawJoint(joint) {

  //console.log("JOINT OBJECT", joint);
  let pos = scaleJoint(joint);

  push();
	translate(pos.x, pos.y, pos.z);
  sphere(5);
  pop();
}



