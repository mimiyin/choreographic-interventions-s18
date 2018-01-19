/*
Mimi Yin NYU-ITP
Mapping Kinect Skeleton locations to floor projection.
 */

// Declare kinectron
let kinectron = null;

// Track multiple multiple bodies
let bodies = {};
// Joint to track
let j;
let sounds = [];

function preload(){
  sounds.push(loadSound('2.wav'));
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
  j = kinectron.HANDLEFT;

  textAlign(CENTER);
  frameRate(30);
}

function draw() {
  background(0);

  for (let b in bodies) {
    let body = bodies[b];
    // Kill body if it hasn't received
    // new data for more than 1s
    if (millis() - body.ts > 1000) {
      // Stop the sound
      if (body.beat) body.beat.stop();
      delete bodies[b];
      continue;
    }

    // Increment counter for this myBody
    body.counter++;

    // Play beat every 60/bpm seconds
    if (body.beat && body.setBPM > 0 && body.counter % int(30 * 60 / body.setBPM) == 0) {
      background(255);
      body.beat.play();
    }

    fill(255);
    noStroke();
    textSize(32);
    text(nfs(body.avgspeed, 0, 2), body.pavgpos.x, body.pavgpos.y - 50);
    textSize(48);
    text(body.setBPM, body.pavgpos.x, body.pavgpos.y);
  }
}

// What to do to track body
function bodyTracked(body) {
  let id = body.trackingId;

  // New body
  if (!(id in bodies)) {
    bodies[id] = {
      beat: loadSound('drum.wav'),
      pavgpos: null,
      speeds: [],
      avgspeed: 0,
      setBPM: 0,
      counter: 0,
      ts: 0,
    }
  }

  // Calculate current average position
  let avgpos = createVector();
  for(let j = 0; j < body.joints.length; j++) {
    avgpos.add(scaleJoint(body.joints[j]));
  }
  avgpos.div(body.joints.length);

  let myBody = bodies[id];
  // Calculate speed
  if (myBody.pavgpos) {
    let speed = p5.Vector.sub(avgpos, myBody.pavgpos).mag();
    myBody.speeds.push(speed);
   }
  // Only keep 1 second of speed data around
  if (myBody.speeds.length > 30) myBody.speeds.shift();
  // Average speeds over 2 seconds
  let avgspeed = 0;
  for (let s = 0; s < myBody.speeds.length; s++) {
    avgspeed += myBody.speeds[s];
  }
  avgspeed /= myBody.speeds.length;

  // Remember position for next time
  myBody.pavgpos = avgpos;

  // Scale bpm to avgspeed
  myBody.avgspeed = avgspeed;

  // Resolution of tempo
  // Only change tempo every RES beats of change
  let RES = 40;
  let bpm = map(avgspeed, 0, 10, 0, 200);
  // Don't change tempo more than 1x per second
  if (abs(bpm - myBody.setBPM) > RES) {
    myBody.setBPM = Math.round(bpm / RES) * RES;
    myBody.counter = 0;
  }

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