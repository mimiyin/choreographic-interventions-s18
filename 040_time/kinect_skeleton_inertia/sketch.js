/*
Mimi Yin NYU-ITP
Mapping Kinect Skeleton locations to floor projection.
 */

// Declare kinectron
let kinectron = null;

// Track multiple multiple bodies
let bodes = {};
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
  kinectron = new Kinectron("172.16.231.112");
  //kinectron = new Kinectron("192.168.0.118");

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
  for(let b in bodies) {
    let body = bodies[b];
    // Kill body if it hasn't received
    // new data for more than 1s
    if(millis() - body.ts > 1000) {
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
  vol += (0.001 - avgspeed)/100;
  // Bottom out at -5;
  vol = max(-5, vol);

  // Don't set negative volumes
  sound.setVolume(max(0,vol));

  if(avgSpeed && vol)
  text(nfs(avgSpeed, 0, 2) + " " + nfs(shushVol, 0, 2), width/2, height/2);
}

// What to do to track body
function bodyTracked(body) {
  let id = body.trackingId;
  let pos = scalePos(body.joints[j]);
  // New body
  if(!(id in bodies)) {
    bodes[id] = {
      speed : null,
      ppos : null,
      ts : millis();
    }
  }
  // Calculate speed
  if(ppos) bodes[id].speed = p5.Vector.sub(pos, ppos).mag();
  // Remember position for next time
  bodes[id].ppos = pos;
}


// Scale the joint position data to fit the screen
// 1. Move it to the center of the screen
// 2. Flip the y-value upside down
// 3. Return it as a Vector
function scaleJoint(joint) {
  return createVector(joint.cameraX * width / 4, -joint.cameraY * width / 4, joint.cameraZ * 100);
}