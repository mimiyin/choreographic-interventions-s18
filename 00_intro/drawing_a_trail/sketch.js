/* Mimi Yin NYU-ITP
Drawing a trail with the mouse.
*/

let locs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  fill(255, 64);

  // Add current mouse position to locs array
  locs.push(createVector(mouseX, mouseY));

  // Remove the oldest mouse location after 50 frames
  if(locs.length> 50) locs.shift();

  // Iterate through last 50 mouse positions
  for(let l = 0; l < locs.length; l++) {

    // Draw an ellipse at this location
  	ellipse(locs[l].x, locs[l].y, 10, 10);
  }
}