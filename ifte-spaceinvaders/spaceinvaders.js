var xShip = 300;
var yShip = 300;
var xAlien = 100;
var xAlien2 = 2; // direction/speed of aliens
var lasers = [10,0,false];
var alien1 = {
    x:xAlien,
    y:100,
    show: true
}
var alien2 = {
    x:xAlien + 200,
    y:150,
    show: true
}
var alien3 = {
    x:xAlien + 300,
    y:200,
    show: true
}

var aliens = [alien1,alien2,alien3];
function setup(){
    createCanvas(600,600);
}

function checkHit(laser, alien){
    if((alien.x - 50) < laser[0] && (alien.x + 50) > laser[0]){
        if((alien.y - 50) < laser[1] && (alien.y + 50) > laser[1]){
            alien.show = false;
            lasers[2] = false;
        }
    }
}
function keyPressed(){
    if(keyIsDown(32)){    
        if(lasers[2] === false){
            lasers[0] = xShip;
            lasers[1] = yShip + 250;
            lasers[2] = true;
        }
    }
}
function draw(){
    background("black");
    fill("green");
    rect(xShip, 545, 25, 50);
    
    // var xAlien = random(-[2], [575]);
    fill("red");
    for(i=0;i<aliens.length;i++){
        if(aliens[i].show === true){
           rect(aliens[i].x, aliens[i].y, 50, 50, 20);
           checkHit(lasers, aliens[i]); 
        }
    }
    if(lasers[1] < 0){
        lasers[2] = false;
    }
    // rect(xAlien, 100, 50, 50, 20);
    // if(aliens[1].x>=600){
    //    xAlien2 = -2;     
    // }else if(aliens[0].x <= 0+1){
    //    xAlien2 = 2;
    // }
    for (var q = 0; q < aliens.length; q++) {
        if(aliens[q].x>=575){
            xAlien2 = -2;     
        }else if(aliens[q].x <= 0+1){
            xAlien2 = 2;
        }
       aliens[q].x = aliens[q].x +  xAlien2;
    }
    // xAlien = xAlien + xAlien2;

    // for(var t = 0; t<lasers.length; t++){
    //     lasers[t][1]-=5;
        // rect(lasers[t][0], lasers[t][1], 10, 10);
    // }
    if(lasers[2] === true){
        lasers[1] -= 6;
        rect(lasers[0],lasers[1],10,10);
    }

    if (keyIsDown(RIGHT_ARROW)){
        xShip = xShip + 3;
        xShip = xShip >= 575 ? 575:xShip;    
    }
    if (keyIsDown(LEFT_ARROW)){
        xShip = xShip - 3;
        xShip = xShip <= 1 ? 1:xShip;
    }

}
