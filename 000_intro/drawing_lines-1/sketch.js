/*
Mimi Yin NYU-ITP
Drawing lines with the mouse.
Strokeweight based on mouse speed.
The faster the mouse, the thicker the line.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  // Calculate speed of mouse
  let speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  
  // Set the strokweight to 1/10th of the speed.
  strokeWeight(speed / 10);
  // Draw a line from the previous mouse position
  // to the current mouse position.
  line(pmouseX, pmouseY, mouseX, mouseY);

}