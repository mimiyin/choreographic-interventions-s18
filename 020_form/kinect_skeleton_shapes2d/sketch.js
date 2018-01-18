/*
Mimi Yin NYU-ITP
Connecting joints in new ways
with 2D drawing
*/

// Declare kinectron
let kinectron = null;
let mode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

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
	background(0);

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

  fill(255, 64);
  stroke(255);

  switch(mode) {
    case 0:
      // Draw  shape
      strokeWeight(2);
      beginShape();
        vertex(hipLeft.x, hipLeft.y);
        vertex(thumbRight.x, thumbRight.y);
        vertex(head.x, head.y);
        vertex(footRight.x, footRight.y);
        vertex(shoulderLeft.x, shoulderLeft.y);
        vertex(hipLeft.x, hipLeft.y);
      endShape(CLOSE);
      break;
    case 1:
      // Draw curved shape
      strokeWeight(2);
      beginShape();
        curveVertex(hipLeft.x, hipLeft.y);
        curveVertex(thumbRight.x, thumbRight.y);
        curveVertex(head.x, head.y);
        curveVertex(footRight.x, footRight.y);
        curveVertex(shoulderLeft.x, shoulderLeft.y);
      endShape(CLOSE);
      break;
    }

  textSize(18);
  stroke(255);
  fill(255);
  text("Press key to change modes.", 10, 20);
}

// Scale the joint position data to fit the screen
// 1. Move it to the center of the screen
// 2. Flip the y-value upside down
// 3. Return it as a Vector
function scaleJoint(joint) {
  return createVector((joint.cameraX * width/2) + width/2, (-joint.cameraY * width/2) + height/2);
}

// Draw skeleton
function drawJoint(joint) {

  //console.log("JOINT OBJECT", joint);
  let pos = scaleJoint(joint);

  //Kinect location data needs to be normalized to canvas size
  stroke(255);
  strokeWeight(5);
  point(pos.x, pos.y);
}

// Press any key to change modes
function keyPressed(){
  mode++;
  mode%=2;
}



