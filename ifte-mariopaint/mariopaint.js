function setup() {
    createCanvas(500, 500);
    background("Red");
}

function mouseDragged() {
    ellipse(mouseX, mouseY, random([20],[100]), random([20],[100]));
     // prevent default
    return false;
    }   