/* Mimi Yin NYU-ITP
Simply sine and cosine
*/

let r, yOffset;
let dotX, dotY, dotA;
let aSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 100;
  yOffset = height / 2;
  dotX = 0;
  dotY = yOffset;
  dotA = 0;
  aSpeed = TWO_PI / width;
}

function draw() {
  background(255);

  fill(0);
  noStroke();
  let x = 0;
  // Draw static sine and cosine waves
  for (let a = 0; a < TWO_PI; a += aSpeed) {
    x++;
    // Draw a circle for each point along the sine wave
    let y = sin(a) * r + yOffset;
    ellipse(x, y, 1, 1);

    // Draw a circle for each point along the cosine wave
    // Can you calculate y for the cosine wave
    // using the sin() function instead?
    let y = cos(a) * r + yOffset;
    ellipse(x, y, 1, 1);
  }

  // Move the dot every frame
  dotX++;
  dotA += aSpeed;

  if (dotX > width) dotX = 0;
  fill(255, 0, 0);

  // Draw dot for sine wave.
  dotY = sin(dotA) * r + yOffset;
  ellipse(dotX, dotY, 10, 10);

  // Draw dot for cosine wave.
  // Can you calculate dotY for the cosine wave
  // using the sin() function instead?
  dotY = cos(dotA) * r + yOffset;
  ellipse(dotX, dotY, 10, 10);
}