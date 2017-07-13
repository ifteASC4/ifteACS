// i commented everything below for reference 



// var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');

// var bank = 1000; // start the player with 1000 dollars
// console.log("You have 1,000 Dollars"); // Tell the player

// var inventory = ['high rule sword', 'potion', 'shield', 'bow'];

// promt the user if they want to buy an item
/*
var answer = prompt("Hello, would you like to  buy a " + inventory[0] );

if(answer === 'yes'){
    bank = bank - 500
    console.log("You have " + bank + 'left');
}

for (var x =0; x < inventory.length; x++){
  var answer = prompt("Hello, would you like to  buy a" + inventory[x] );
    if(answer === 'yes'){
    bank = bank - 100
    console.log("You have " + bank + 'left');
    }  
}

for loop:
for (initial condition, final condition, do this){
    do something
}

while loop:
var i= 0
while (i < 10){
    i = i + 1;
    console.log(i)
}
*/

var promptSync = require('prompt-sync')();

var money = 1000;
var items = [];

while(money>99){
  console.log("You have $"+ money +" left. Sword = $500, Food = $100");
  var answer = promptSync("Which item do you want to buy? ");
  if(answer == "Sword" && money> 499){
    money = money - 500;
    items.push("Sword");
    console.log("You brought a Sword!");
 }else if(answer == "Sword" && money < 500){
    console.log("Sorry you don't have enough money!");
  }else if(answer == "Food"){
    money = money - 100;
    items.push("Food");
    console.log("You brought Food!");
  }else{
    console.log("I didn't understand your answer. Try again.");
    }
 }
