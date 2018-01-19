/*
Mimi Yin NYU-ITP
Kinect Skeleton
Averages speed of all head joints to
eventually adjust volume of sound.
*/

// Declare kinectron
let kinectron = null;

// Track multiple multiple bodies
let bodies = {};
// Joint to track
let j;
// Sound sample;
let sound;
// Volume of sound;
let vol = 0;

function preload() {
  sound = loadSound('clock.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  //kinectron = new Kinectron("172.16.231.112");
  kinectron = new Kinectron("192.168.0.117");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Track the head
  j = kinectron.HEAD;

  // Start in silence
  sound.loop();
  sound.setVolume(vol);
}

function draw() {
  background(0);

  // Calculate average speed of bodies
  let avgspeed = 0;
  let num = 0;
  for (let b in bodies) {
    let body = bodies[b];
    // Kill body if it hasn't received
    // new data for more than 1s
    if (millis() - body.ts > 1000) {
      delete bodies[b];
      continue;
    }

    let speed = body.speed;
    avgspeed += speed;
    num++;
  }

  avgspeed /= num;
  // Adjust volume based on how far
  // above or below TH the avgspeed is
  if (avgspeed) vol += (1 - avgspeed) * 0.01;
  // Bottom out at -5;
  vol = max(-5, vol);
  // Don't set negative volumes
  sound.setVolume(max(0, vol));

  fill(255);
  noStroke();
  textSize(48);
  textAlign(CENTER);
  text(nfs(avgspeed, 0, 2) + ": " + nfs(vol, 0, 2), width / 2, height / 2);
}

// What to do to track body
function bodyTracked(body) {
  let id = body.trackingId;
  let pos = scaleJoint(body.joints[j]);
  // New body
  if (!(id in bodies)) {
    bodies[id] = {
      speed: null,
      ppos: null,
      ts: null,
    }
  }
  let myBody = bodies[id];
  // Calculate speed
  if (myBody.ppos) myBody.speed = p5.Vector.sub(pos, myBody.ppos).mag();
  // Remember position for next time
  myBody.ppos = pos;

  // Keep track of when body last received data
  myBody.ts = millis();
}


// Scale the joint position data to fit the screen
// 1. Move it to the center of the screen
// 2. Flip the y-value upside down
// 3. Return it as a Vector
function scaleJoint(joint) {
  return createVector(joint.cameraX * width / 4 + width / 2, -joint.cameraY * width / 4 + height / 2, joint.cameraZ * 100);
}