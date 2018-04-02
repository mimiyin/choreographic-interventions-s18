/*
Mimi Yin NYU-ITP
Defining a sound terrain in 3 ways: Linear, Random and Noise
Press '[' and ']' to adjust granularity of terrain

Mapping Kinect Skeleton locations to floor projection.
Press arrow keys to adjust ratio of pixels to meters.
Press ESC and then arrows keys to adjust horizontal and
vertical shift of projection relative to position of camera.
 */

// Declare kinectron
let kinectron = null;

// Mapping Kinect data to projecion
let xscl, yscl;
let xshift, yshift;
let scl = true;

// Keep track of pos, ppos and note for all bodies
let bodies = {};
// Joint to track
let j;

// Terrain granularity / resolution
let div = 1;
let skip = 1;
// Terrain colors
let colors = [];
// Frequency of base note
let tonic = 261.626;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  //kinectron = new Kinectron("172.16.231.112");
  kinectron = new Kinectron("192.168.0.108");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Track the head
  j = kinectron.HEAD;

  // Projection mapping scaling
  xscl = width * 0.25;
  yscl = -width * 0.45;
  xshift = 0;
  yshift = height / 2;

  // Draw terrain
  terrain();
}

function terrain() {
  console.log("Reset Terrain");
  background(0);
  colors = [];
  //Set up the terrain
  skip = width / div;
  rectMode(CENTER);
  noStroke();
  for (let x = skip / 2; x < width; x += skip) {
    let c = map(x, 0, width, 0, 1);
    //let c = random(1);
    //let c = noise(x*0.005);

    // Math to round the color to the nearest 1/div
    let factor = div - 1;
    c = round(c * factor) / factor;
    fill(c * 255);
    rect(x, height / 2, skip, height);

    // Remember this color
    colors.push(c*255);
  }
}

function draw() {
  // Draw the bodies and turn on/turn off the notes
  for (let b in bodies) {
    let body = bodies[b];
    let pos = body.pos;
    let pc = body.pc; // previous color
    let note = body.note;
    let ts = body.ts;

    // Delete body if it's dead and move on to next body
    if (millis() - ts > 1000) {
      delete bodies[b];
      continue;
    }

    // Sample the terrain at the body's position
    let c = colors[int(pos.x / skip)];

    // If this is the first note, OR
    // If the body has moved more than size of a note since last note
    if (pc == undefined || abs(c - pc) > 0) {
      // Remember color for next frame
      body.pc = c;
      // Create a new note
      body.note = createNewNote(c);

      // Release current note for this body into the wild
      if(note) fadeNote(note);
    }

    // Remember pos for next frame
    body.ppos = pos;

    // Draw the body at it's current position
    strokeWeight(10);
    stroke(255, 0, 0);
    point(pos.x, pos.y);
    strokeWeight(1);
    stroke(0);
    //fill(255);
    //text(floor(pos.x) + ", " + floor(pos.y), pos.x + 10, pos.y + 10);
  }
}

function createNewNote(c) {
  let n = new p5.Oscillator();
  n.setType('sine');
  freq = map(c, 0, 255, tonic, tonic * 2);
  n.freq(freq);
  n.amp(0);
  n.start();
  n.amp(1, 20/div);
  return n;
}

function fadeNote(n) {
  n.amp(0, 6/div);
  setTimeout(function() {
    n.stop();
  }, 10000/div);
}

function bodyTracked(body) {
  let id = body.trackingId;

  // Create new body
  if (!(id in bodies)) {
    bodies[id] = {};
  }
  // Update data for body
  bodies[id].pos = scaleJoint(body.joints[j]);
  bodies[id].ts = millis();
}

// Scale the data to fit the screen
// Move it to the center of the screen
// Return it as a vector
// Use x as x
// Use z as y
function scaleJoint(joint) {
  return createVector((joint.cameraZ * xscl) + xshift, (joint.cameraX * yscl) + yshift);
}

function keyPressed() {
  if (key == 'D' || key == 'S') {
    // Adjust granularity of Terrain
    if (key == 'D') div++;
    else if (key == 'S') div--;

    // Constrain number of divisions
    div = constrain(div, 1, width);

    // Re-draw terrain
    terrain();
    return;
  }


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