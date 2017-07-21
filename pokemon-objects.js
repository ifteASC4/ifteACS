var myPokemonRoster = [];

function pokemon(hp, atk, def, legend, name, type){
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.legend = legend;
    this.name = name;
    this.type = type;   
    // return pokemon;
}

var eevvee = {
    'hp': 150,
    'is legendary': true

}

var eevee = new pokemon(55, 55, 50, false, "Eevee", "Normal");
var pikachu = new pokemon(35, 55, 40, false, "Pikachu", "Electric");
var charmander = new pokemon(39, 52, 43, false, "Charmander", "Fire");
var squirtle = new pokemon(44, 48, 65, false, "Squirtle", "Water");
var chimchar = new pokemon(44, 58, 44, false, "Chimchar", "Fire");
var snorlax = new pokemon(160, 110, 65, false, "Snorlax", "Normal");

myPokemonRoster.push(eevee);
myPokemonRoster.push(pikachu);

// var health = myPokemonRoster.hp; 

// for (i=0; i<6; i++){
//     myPokemonRoster.hp = (health - 10);
// }

// var x = pokemon();

for (var i=0; i< myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i].name)
} 

// console.log(eevee);
// myPokemonRoster.push(eevee);
// myPokemonRoster.push(eevee2);

function printHello(name){
    return name
}

function getArea(length, width){
    return length * width;
}
getArea(2, 5);
console.og

printHello('Victor');

printHello(222);

printHello(true);




