/*
Mimi Yin NYU-ITP
Drawing lines.
*/

let mode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  // Calculate speed of mouse
  let speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  // A variable to store strokeweight value
	let sw;

  // 4 ways to set strokeweight according to speed
  // based on mode, default is mode 0
  switch(mode){
    case 1:
      sw = speed/10;
      break;
    case 2:
  		sw = 100/speed;
      break;
    case 3:
  		sw = map(speed, 0, 100, 10, 1);
      break;
    default:
      sw = 1;
      break;
  }

  // Stroke (outline) color is black
  stroke(0);
  // Stroke thickness is whatever sw is
  strokeWeight(sw);
  // Draw a line from the previous mouse position
  // to the current mouse position
  line(pmouseX, pmouseY, mouseX, mouseY);

}

// Press the mouse to change mode
function mousePressed(){
 	mode++;
  mode%=4;
}

// Press any key to redraw white background
function keyPressed(){
  background(255);
}

  