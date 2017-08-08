var playerRock = 'r';
var playerPaper = 'p';
var playerScissors = 's';
var choices = ['r','p','s']; 

var compChoice = choices[Math.floor(Math.random()*3)]; //random computer choices

// rock situation
if (playerRock == compChoice){
    console.log("It's a tie!");
}else if (playerRock == 'r' && compChoice == 'p') {
    console.log("Rocks loses to paper, You Lose!");
}else (playerRock == 'r' && compChoice == 's') {
    console.log("Rock wins against scissors, You Win!");
}

// paper situation
if (playerPaper == compChoice) {
    console.log("It's a tie!");
} else if (playerPaper == 'p' && compChoice == 's') {
    console.log("Paper loses to scissors, You Lose!");
} else (playerPaper == 'p' && compChoice == 'r') {
    console.log("Paper wins against rock, You Win!");
}

// scissors situation
if (playerScissors == compChoice) {
    console.log("It's a tie!");
} else if (playerScissors == 's' && compChoice == 'r') {
    console.log("Scissors loses to rock, You Lose!");
} else (playerScissors == 's' && compChoice == 'p') {
    console.log("Scissors wins against paper, You Win!");
}

// player picks rock computer picks paper
// if (playerChoice == 'r' && compChoice == 'p'){
//     console.log("Rocks loses to paper, You Lose!");
// }

// player picks rock computer picks scissors 
// if (playerChoice == 'r' && compChoice == 's'){
//     console.log("Rock wins against scissors, You Win!");
// }