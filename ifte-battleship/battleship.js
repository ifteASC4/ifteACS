var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(501, 501);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 50;
  noLoop();  // Run once and stop
}

function draw() {
  background(70, 130, 180);
  // This embedded loop skips over values in the arrays based on
  // the spacer variable, so there are more values in the array
  // than are drawn here. Change the value of the spacer variable
  // to change the density of the points
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
    //   stroke(distances[x][y]); 
      rect(x, y, 50, 50);
    }
  }
}