/* Mimi Yin NYU/ITP
Speed of mouse sets tempo.
*/

let bpm = 0;
let setBPM = 0;
let counter = 0;

let speeds = [];

function preload() {
 beat = loadSound('clock.mp3');
}

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  frameRate(30);
}

function draw() {
  background(0);

  // Calculate speed of mouse in this frame
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  // Add speed to array of speeds
  speeds.push(speed);
  // Only keep 2 seconds of speed data around
  if(speeds.length > 60) speeds.shift();
  // Average speeds over 2 seconds
  let avgspeed = 0;
  for(let s = 0; s < speeds.length; s++) {
    avgspeed += speeds[s];
  }
  avgspeed /= speeds.length;

  // Scale bpm to avgspeed
  bpm = 5000*(avgspeed/width);

  // Only change bpm, every 30 beats
  // Reset beat counter to 0 when bpm changes
  let res = 30;
  if(abs(bpm - setBPM) > res) {
    setBPM = Math.round(bpm/res)*res;
    counter = 0;
  }

  counter++;

  // Play beat every 60/bpm seconds
  if(setBPM  > 0 && counter%int(30*60/setBPM) == 0) {
    background(255);
    beat.play();
  }

  // Display bpm speed is changing
  fill(255);
  textSize(48);
  text(int(bpm), width/2, height/2 - 50);

  // Display bpm actually affecting sound
  textSize(64);
  text(int(setBPM), width/2, height/2 + 50);
}