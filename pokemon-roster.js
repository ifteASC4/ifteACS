// var myPokemonRoster = [];

// myPokemonRoster[0]= ["Charmander", "Fire", 39, 52, 43, false];
// myPokemonRoster[1]= ["Pikachu", "Electric", 35, 55, 40, false];
// myPokemonRoster[2]= ["Eevee", "Normal", 55, 55, 50, false];
// myPokemonRoster[3]= ["Squirtle", "Water", 45, 48, 65, false];
// myPokemonRoster[4]= ["Bayleef", "Grass", 60, 62, 80, false];
// myPokemonRoster[5]= ["Snorlax", "Water", 160, 110, 65, false];
myPokemonRoster = [["Charmander", "Fire", 39, 52, 43, false], ["Pikachu", "Electric", 35, 55, 40, false], ["Eevee", "Normal", 55, 55, 50, false], ["Squirtle", "Water", 45, 48, 65, false], ["Bayleef", "Grass", 60, 62, 80, false], ["Snorlax", "Water", 160, 110, 65, false]];

// console.log("Pokemon: " + myPokemonRoster[0][0]);

var x = myPokemonRoster;

console.log("")

for (var i=0; i< 6; i++){
    console.log(x[i]);
    for(var j=0;j<6;j++){
        console.log(x[i][j]);
    }
}
