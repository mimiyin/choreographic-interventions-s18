/* Mimi Yin, NYU-ITP
Levy Flight adapted from Dan Shiffman's version for Nature of Code
https://github.com/shiffman/The-Nature-of-Code-Examples/tree/master/introduction/RandomWalkLevy
*/

// Store x,y coordinates of current position
let x, y;
// Store x,y coordinates of previous position
let px, py;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Start in the middle
  x = width/2;
  y = height/2;
  px = x;
  py = y;

  // Don't draw an outline
  noStroke();
  // Draw a black background
  background(0);
}

function draw() {

  // Calculate step size
  let stepSize = montecarlo()*100;

  // Move in a random direction at calculated stepsize
	x += random(-1,1)*stepSize;
	y += random(-1,1)*stepSize;

  // Draw a line from the previous loc to this loc
  stroke(255);
  line(px, py, x, y);

  // Remember current location for next frame
  px = x;
  py = y;

}

// Calculating stepsize favoring smaller steps
function montecarlo(){
  while (true) {
		let r1 = random(1);
  	let probability = pow(1.0 - r1,8);
    let r2 = random(1);
    if (r2 < probability) {
      return r1;
    }
  }
}