
function randLetter(num){
    // funciton that calls a random letter from the alaphabet 
    var randNum = Math.random()*num; // gives a random number 
    var result = Math.floor(randNum); // set randNum to non decimal 
return result;
}

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// console.log(alphabet.length); 

console.log(alphabet[randLetter(25)]);
