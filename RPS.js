var playerChoice = 'r';

var choices = ['r','p','s']; 
var compChoice = choices[Math.floor(Math.random()*3)]; //random computer choice

// tie situation
if (playerChoice == compChoice){
    console.log("It's a tie!");
}

// player picks rock computer picks paper
if (playerChoice == 'r' && compChoice == 'p'){
    console.log("Rocks loses to paper, You Lose!");
}

// player picks rock computer picks scissors 
if (playerChoice == 'r' && compChoice == 's'){
    console.log("Rock wins against scissors, You Win!");
}