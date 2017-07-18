var value = 0;

function setup(){
    createCanvas(500,500);
    background('gray');
}

function draw(){
    textSize(20);
    text("Hello, welcome to the typetester!", 20, 20);
    // text("Copy these sentences below as fast as you can:", 20, 40);
    // text("Is this the real life?", 20, 100);
    // text("Is this just fantasy?", 20, 120);
    // text("Caught in a landslide.", 20, 140);
}

var myWords = "";

function keyTyped(){
    myWords = myWords + key; 
} 
function draw(){
    fill(255);
    text(myWords, 50, 50);
}