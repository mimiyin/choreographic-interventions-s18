function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Happens about 1x per second
  if(frameCount%60 == 0) {
   console.log("SAY HEY!");
  }
  // Happens 1x at about 5 seconds
  if(frameCount == 300) {
   console.log("SAY YIPPEE");
  }
  // Happens about 60x per second after about 10 seconds
  if(frameCount > 600) {
   console.log("SAY YO");
  }
}