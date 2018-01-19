let cols = 0;
let rows = 0;
let colW, rowH;
let invert = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  init();
  noStroke();
}

function draw() {
  background(0);

  // For each column
  for (let col = 0; col < cols; col++) {
    // And each row in each column
    for (let row = 0; row < rows; row++) {
      // Logic for creating checkerboard pattern
      if ((col % 2 == 0 && row % 2 == 1) || (col % 2 == 1 && row % 2 == 0)) fill(invert ? 255 : 0);
      else fill(invert ? 0 : 255);

      // Calculate x,y location of each cell
      let x = col * colW;
      let y = row * rowH;
      // Draw the cell
      rect(x, y, colW, rowH);
    }
  }
}

// Set column width and row height based on num of cols and rows.
function init() {
  colW = width / cols;
  rowH = height / rows;
}

// Press ESC to invert black and white
// Use ARROW keys Adjust number of columns and rows
function keyPressed() {
  switch (keyCode) {
    case ESCAPE:
      invert = !invert;
      break;
    case RIGHT_ARROW:
      cols++;
      break;
    case LEFT_ARROW:
      cols--;
      break;
    case UP_ARROW:
      rows++;
      break;
    case DOWN_ARROW:
      rows--;
      break;
  }

  // Limit cols/rows to 0-10
  cols = constrain(cols, 0, 10);
  rows = constrain(rows, 0, 10);

  // Re-initialize colW and rowH
  init();
}