/*
Mimi Yin NYU-ITP
Mapping Kinect Skeleton locations to floor projection.
 */

// Declare kinectron
let kinectron = null;

// Mapping Kinect data to projecion
let xscl, yscl;
let xshift, yshift;
let scl = true;

// Keep track of positions for multiple bodies
let positions = {};
// Joint to track
let j;
// Size of circle
let sz = 0;
let szspeed = 1;
// Distance to edge
let dToEdge;

// Diag of screen
let diag;

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
  diag = sqrt(sq(width) + sq(height));

  xscl = (width/3.2)*0.55;
  yscl = -(width/3.2)*0.6;
  xshift = 0;
  yshift = height / 2;
}

function draw() {
  background(0);

  // Average out body positions
  let avg = createVector();
  let numBodies = 0;
  for(let p in positions) {
    let pos = positions[p];
    avg.add(pos);
    numBodies++;
  }
  avg.div(numBodies);

  // Get distance of avg from center
  let dFromCenter = avg.mag();
  dToEdge = sz-dFromCenter;
  // If you're inside the circle, as you get closer to the edge, growth slows down
  szspeed = (dToEdge >= 0 ? 1 : -1)*pow(100, dToEdge);
  sz = constrain(sz, 0, diag);

  // Draw a white circle centered in the top-left corner
  fill(255);
  ellipse(0, 0, sz, sz);

  // Grow the circle
  sz+=szspeed;
}

// What to do to track body
function bodyTracked(body) {
  positions[body.trackingId] = scalePos(body.joints[j]);
}

// Scale the data to fit the screen
// Move it to the center of the screen
// Return it as a vector
// Use z as x
// Use x as y
function scalePos(joint) {
  return createVector((joint.z * xscl) + xshift, (joint.x * yscl) + yshift);
}

// Add vertices to polygon manually
function mousePressed() {
  polygon.addVertex(mouseX, mouseY);
}

function keyPressed() {
  // Switch mode of arrow keys
  if (keyCode == ESCAPE) scl = !scl;

  // Adjust scale of x,z coordinates to map to projection
  if (scl) {
    switch (keyCode) {
      case RIGHT_ARROW:
        xscl++;
        break;
      case LEFT_ARROW:
        xscl--;
        break;
      case UP_ARROW:
        yscl++;
        break;
      case DOWN_ARROW:
        yscl--;
        break;
    }

    xscl = constrain(xscl, 0, width);
    yscl = constrain(yscl, 0, width);
  }
  // Adjust shift
  else {
    switch (keyCode) {
      case RIGHT_ARROW:
        xshift++;
        break;
      case LEFT_ARROW:
        xshift--;
        break;
      case UP_ARROW:
        yshift++;
        break;
      case DOWN_ARROW:
        yshift--;
        break;
    }
    xshift = constrain(xshift, 0, width);
    yshift = constrain(yshift, 0, height);
  }
}