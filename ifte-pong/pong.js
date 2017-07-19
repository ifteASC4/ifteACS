var x = 100; // starting x coordinate
var y = 100; // starting y coordinate
var x2 = 2; //  direction of x
var y2 = 4; // direction of y
var postionx = 0;

function setup() {
    createCanvas(700,700);
}

function draw(){
    background("gray");
    ellipse(x, y, 40, 40);
   
   if(x>=700-5){
       x2 = -x2;
   } else if(x <= 0+1){
       x2 = -x2
   }else if(x>=postionx && x<=postionx + 70){
       if(y === 680){
           y2 = -y2;
       }else if(y === 20){
           y2 = -y2;
       }
   }
   x = x + x2;

   if(y>=700-5){
    //    y2 = -y2; // this makes a wall at the bottom
    textSize(20);  
    text("GAME OVER!", 300, 300);   
   }else if(y<= 0+1){
    //    y2 = -y2;
    textSize(20);  
    text("GAME OVER!", 300, 300); 
   }
   y = y + y2;

   fill("Blue");
   rect(postionx, 680, 70, 20);
   if(keyIsDown(RIGHT_ARROW))
    postionx = postionx + 5;
    postionx = postionx >= 620 ? 620:postionx;
   if(keyIsDown(LEFT_ARROW))
    postionx = postionx - 5;
    postionx = postionx <= 10 ? 10:postionx;

    fill("red");
   rect(postionx, 20, 70, 20);
   if(keyIsDown(UP_ARROW))
    postionx = postionx + 5;
    postionx = postionx >= 620 ? 620:postionx;
   if(keyIsDown(DOWN_ARROW))
    postionx = postionx - 5;
    postionx = postionx <= 10 ? 10:postionx;
}

// function keyTyped(){
//     if(key === 'd'){
//         postionx = postionx + 100;
//     }
// }
