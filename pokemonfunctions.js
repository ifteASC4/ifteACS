
function randLetter(num){
    // funciton that calls a random letter from the alaphabet 
    var randNum = Math.random()*num; // gives a random number 
    var result = Math.floor(randNum); // set randNum to non decimal 
return result;
}

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// console.log(alphabet.length); 

// console.log(alphabet[randLetter(25)]);

var myString = "";

for ( i=0; i< randLetter(10); i ++){
    myString = myString + alphabet[randLetter(25)];
    // console.log(alphabet[randLetter(25)]); 
}

console.log(myString);

function randWord(){
for ( i=0; i< randLetter(10); i ++){
    myString = myString + alphabet[randLetter(25)];
    // console.log(alphabet[randLetter(25)]); 
    }
// console.log(myString);
return myString
}

function randSentece(){
    var mySentence = ""
    for ( i=0; i<5; i++){
        mySentence = mySentence + randWord();
    }
    console.log(randSentence);
}