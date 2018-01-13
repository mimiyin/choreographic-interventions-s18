/*
Mimi Yin NYU-ITP
Drawing lines with the mouse.
Strokeweight based on mouse speed.
The faster the mouse, the thinner the line.
Non-linear mapping.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  // Calculate speed of mouse
  let speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  
  // Set the strokweight to be the inverse of the speed x 100.
  strokeWeight(100/speed);
  // Draw a line from the previous mouse position
  // to the current mouse position.
  line(pmouseX, pmouseY, mouseX, mouseY);

}