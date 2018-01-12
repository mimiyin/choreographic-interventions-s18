/*
Mimi Yin NYU-ITP
A more random random.
Randomly select a cell in a 10x10 grid to make red.
OR Make entire canvas red if a certain cell is randomly selected.
*/

// Mode
let zoom;
// Number of columns and rows in our grid
let numCols, numRows;
// Width and height of cell in our grid
let cellW, cellH;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 10 columns
  numCols = 10;
  // 10 rows
  numRows = 10;
  // Calculate cell width based on width of canvas and number of columns
  cellW = width/numCols;
  // Calculate cell height based on height of canvas and number of rows
  cellH = height/numRows;
}


function draw() {
  // Draw a white background
  background(255);

  // Pick a random cell
	x = floor(random(numCols));
  y = floor(random(numRows));

  // If zoomed in, make entire canvas red
  // if selected cell is cell (2, 5)
  if(zoom) {
    if(x == 2 && y == 5) {
      background('red');
    }
  }
  // Otherwise, make  the randomly selected cell red
  else {
  	fill('red');
    rect(x*cellW, y*cellH, cellW, cellH);
  }
}

// Press mouse to witch modes
function mousePressed(){
 zoom = !zoom;
}