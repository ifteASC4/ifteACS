var blue = x; 
var red = y;
var green = z;
var value = [blue, red, green];

function setup() {
    createCanvas(700, 700);
    background("gray");
    fill('Blue');   
    rect(0, 0, 700, 25) = x;
    fill('Red');
    rect(0, 25, 700, 25) = y;
    fill("Green");
    rect(0, 50, 700, 25 = z);
}

function mousePressed() {
  if (value == x) {
    fill('Blue');
    ellipse(mouseX, mouseY, 10, 10);
  }
  return mousePressed
}

// function mouseDragged() {
//     ellipse(mouseX, mouseY, random([20],[100]), random([20],[100]));
//      // prevent default
//     return false;
//     }   