/*
Mimi Yin NYU-ITP
Circular Pathways with Controls
*/

// Store current and previous x,y coordinates
let x, y;
let px, py;

// Angle
let a;
// Angle speed: How quickly we're circling
let aspeed;

// How quickly we're circling vertically versus horizontally
let yfreq;

// Size of circle (radius)
let range;

// Verticality of circle
let yscl;

// Center of circle
let centerX, centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angle = 0;
  aspeed = 0.01;
  yfreq = 1;

  range = width/4;
  yscl = 1;

  centerX = width/2;
  centerY = height/2;

  background(0);
}

function draw() {
  background(0, 10);

  angle += aspeed;

  //Move
  x = cos(angle)*range + centerX;
  y = sin(angle*yfreq)*range*yscl + centerY;

	// Draw line
	stroke(255, 64);
  if(px) line(px, py, x, y);

  // Remember x,y coordinates for next frame
  px = x;
  py = y;

  // Controls
  // Speed of travel around circle
  aspeed = pow(mouseX/(width/2), 2);
  // Size of circle
  //range = dist(centerX, centerY, mouseX, mouseY);
  // Verticality of circle
  //yscl = 4*mouseY/height;
  // Ups and downs versus lefts and rights
  //yfreq = 4*mouseY/height;

}