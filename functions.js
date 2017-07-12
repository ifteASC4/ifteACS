/*function welloHorld(){
    return "Wello Horld!";
    console.log("Wello Horld!");
}

welloHorld();
*/

function rand(num){
// this is a function that returns a random number between 0 and num
var randNum = Math.random()*num; // assign a random # to randNum
var result = Math.floor(randNum); // set randNum to non decimal 
return result;
}
 
var myCoin = ['heads', 'tails'];
console.log(myCoin[rand(2)]);
// console.log(rand(2));

var myDice = ['one', 'two', 'three', 'four', 'five', 'six'];
console.log("You rolled a " + myDice[rand(6)]);