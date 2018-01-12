/*
Mimi Yin NYU-ITP
Drawing lines with the mouse.
Fixed strokweight.
*/

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255);
} 

function draw() {  
  // Draw a line from the previous mouse position
  // to the current mouse position.
  line(pmouseX, pmouseY, mouseX, mouseY);  
}
  
  