// We're going to capture video from the webcam
let video;
// Keep track of where we're at as we cross the screen
let x = 0;

function setup() {
  createCanvas(800, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(640, 480);
  background(51);
}

function draw() {
  video.loadPixels();
  // image(video, 0, 0);

  let w = video.width;
  let h = video.height;

  // Take the center 1-pixel column from the VIDEO
  // Draw it at x
  copy(video, w/2, 0, 1, h, x, 0, 1, h);

  // Move to the right
  x = x + 1;

  // Wrap around
  if (x > width) {
    x = 0;
  }
}

