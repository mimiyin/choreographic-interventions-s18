/*
Mimi Yin NYU-ITP
Drawing lines with the mouse.
Strokeweight based on mouse speed.
The faster the mouse, the thinner the line.
Linear mapping.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  // Calculate speed of mouse
  let speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  // Set the strokweight to be the inverse of the speed x 100.
  let sw = map(speed, 0, 100, 10, 1);
  strokeWeight(sw);
  // Draw a line from the previous mouse position
  // to the current mouse position.
  line(pmouseX, pmouseY, mouseX, mouseY);

}