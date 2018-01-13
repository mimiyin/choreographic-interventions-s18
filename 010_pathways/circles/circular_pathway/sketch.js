/*
Mimi Yin NYU-ITP
Circular Pathways
*/

//Store x,y coordinates of current position
let x, y;
// Store angle of rotation
let angle;
// Store radius of circle (size)
let r;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = 0;
  r = 100;
  x = width/2;
  y = height/2-r;
}

function draw() {
	fill(0);

  // Move around the circle
  angle += 0.01;

  // Calculate x,y coordinates
  //Method 1
  x = cos(angle)*r + width/2;
  y = sin(angle)*r + height/2;

  //Method 2
  // x += cos(angle);
  // y += sin(angle);

  // Draw a circle at x,y
  ellipse(x, y, 1, 1);
}