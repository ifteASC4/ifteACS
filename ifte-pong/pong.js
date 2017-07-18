var x = 10; // starting x coordinate
var y = 10; // starting y coordinate
var x2 = 1; //  direction of x
var y2 = 5; // direction of y
var postionx = 0;

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
   }else if(x>=postionx && x<=postionx + 40){
       if(y === 190){
           y2 = -y2;
       }
   }
   x = x + x2;

   if(y>=200-5){
    //    y2 = -y2; // this makes a wall at the bottom
    textSize(10);  
    text("GAME OVER!", 100, 100);   
   }else if(y<= 0+1){
       y2 = -y2; 
   }
   y = y + y2;

   fill("Blue");
   rect(postionx, 190, 40, 10);
   if(keyIsDown(RIGHT_ARROW))
    postionx = postionx + 2;
    postionx = postionx >= 150 ? 150:postionx;
    // if(postionx>=200){
    //     postionx = positionx >= 20;
    // }
   if(keyIsDown(LEFT_ARROW))
    postionx = postionx - 2;
}

// function keyTyped(){
//     if(key === 'd'){
//         postionx = postionx + 100;
//     }
// }
