/* Mimi Yin, NYU-ITP
Noisy pathways.
*/

//Store x,y coordinates for current position
let x, y;
//Store x,y coordinates for previous position
let px, py;
//Store time position in noise graph
let t;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Start in the middle
  x = width/2;
  y = height/2;
  px = x;
  py = y;
  t = 0;

  noStroke();
  background(0);
}

function draw() {
  // Move in time along noise graph.
  t += 0.01;

  // Move
	x += 2*(noise(t)-0.5);
  // Why t+100?
  // What happens if you get rid of the 100?
	y += 2*(noise(t+100)-0.5);

  // Draw a line from the previous loc to this loc
  stroke(255);
  line(px, py, x, y);

  // Remember current location for next frame
  px = x;
  py = y;
}