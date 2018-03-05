/* Mimi Yin NYU/ITP
 
 Distort the body's contour.
 Use TAB to change modes.
 Use LEFT/RIGHT arrow keys to change resolution of contour polygon.
 
 Thomas Sanchez Lengeling.
 http://codigogenerativo.com/
 KinectPV2, Kinect for Windows v2 library for processing
 */

// OpenCV (Computer Vision) Library
import gab.opencv.*;
import KinectPV2.*;

OpenCV opencv;
KinectPV2 kinect;

// Resolution of contour
float polygonFactor = 1;

// Contour threshold
int threshold = 10;

//Distance in cm
int maxD = 4500; //4.5m
int minD = 50; //50cm

// Drawing mode
int mode = 0;


void setup() {
  size(800, 600, P2D);
  // Initialize CV stuff
  opencv = new OpenCV(this, 512, 424);
  // Initialize Kinect stuff
  kinect = new KinectPV2(this);
  kinect.enableBodyTrackImg(true);
  kinect.setLowThresholdPC(minD);
  kinect.setHighThresholdPC(maxD);
  kinect.init();
}

void draw() {
  background(0);

  noFill();

  // Get image of tracked bodies from kinect
  PImage bodies = kinect.getBodyTrackImage();
  // Draw the tracked bodies
  //image(bodies, 0, 0);

  // Load tracked bodies into openCV
  opencv.loadImage(bodies);
  // Make image grayscale
  opencv.gray();
  // Set grayscale threshold for which pixels
  // to count as inside versus outside the contour
  opencv.threshold(threshold);
  // Get openCV contour image 
  PImage dst = opencv.getOutput();
  // Draw the CV image
  //image(dst, 0, 0);

  // Get contours as x,y locations in tracked bodies image
  ArrayList<Contour> contours = opencv.findContours(false, false);
  PVector mouse = new PVector(mouseX, mouseY);

  // If there's a contour
  if (contours.size() > 0) {
    // For every contour
    for (Contour contour : contours) {
      // Set resolution of contour polygon
      contour.setPolygonApproximationFactor(polygonFactor);
      // If there are more than 50 points in the polygon
      if (contour.numPoints() > 50) {

        noFill();
        stroke(255);       
        strokeWeight(10);

        beginShape();
        // Get every point in the contour
        for (PVector point : contour.getPolygonApproximation ().getPoints()) {
          // Get rid of edge points
          if (point.x < 10 || point.x > dst.width-10) continue;

          // Scale the contour to 2x its size
          point.mult(2);

          if (mode > 0) {
            // Define a vector radiating from the contour point to the mouse
            PVector offset = PVector.sub(mouse, point);
            float d = offset.mag();
            float mag = 1;
            // Calculate magnitude of offset in 3 different ways
            switch(mode) {
            case 1:
              mag =25000/d;
              break;
            case 2:
              mag = random(25000)/d;
              break;
            }
            // Don't let magnitude be more than distance
            mag = min(mag, d);
            offset.setMag(mag);
            // Move the point by the calculated offset
            point.add(offset);
          }
          // Draw the point
          vertex(point.x, point.y);
        }
        endShape();
      }
    }
    // Draw the mouse
    noStroke();
    fill(255, 0, 0);
    ellipse(mouse.x, mouse.y, 50, 50);
  }


  noStroke();
  fill(255);
  textSize(18);
  text("Press TAB to change modes: " + mode, 10, 20);
  text("Press RT/LT arrow keys to change resolution: " + polygonFactor, 10, 40);
}

// Use TAB to change modes
// Use LEFT/RIGHT arrow keys to change resolution of contour
void keyPressed() {
  switch(keyCode) {
  case TAB:
    mode++;
    mode%=3;
    break;
  case RIGHT:
    polygonFactor++;
    break;
  case LEFT:
    polygonFactor--;
    break;
  }
  polygonFactor = constrain(polygonFactor, 1, 50);
}