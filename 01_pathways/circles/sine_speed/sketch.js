/* Mimi Yin NYU-ITP
Using sin() to set speed
*/

// x-coordinate of current position
let x = 0;
// Angle of current speed
let a = 0;
// Speed at which we move along sine wave
let aspeed = 0.025;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);

  // Move along sine wave
  a+= aspeed;
  // Move with speed set by sine wave
  x+=sin(a)*(width/2)*aspeed;

  fill(0);
  noStroke();
  ellipse(x, height/2, 10, 10);
}