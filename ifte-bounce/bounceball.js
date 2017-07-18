var x = 10; // starting x coordinate
var y = 10; // starting y coordinate
var x2 = 1; //  direction of x
var y2 = 5; // direction of y

function setup() {
    createCanvas(200,200);
}

function draw(){
    background("gray");
    ellipse(x, y, 10, 10);
   
   if(x>=200-5){
       x2 = -x2;
   } else if(x <= 0+1){
       x2 = -x2
   }
   x = x + x2;
   if(y>=200-5){
       y2 = -y2;    
   }else if(y<= 0+1){
       y2 = -y2;
   }
   y = y + y2;
}