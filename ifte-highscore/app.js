function playerChoosing() {
    $(".rock").click(function () {
        playerChoice = playerOptions[0]
        hideTitle()
    })
    $(".paper").click(function () {
        playerChoice = playerOptions[1]
        hideTitle()
        console.log(playerChoice)
    })
    $(".scissors").click(function () {
        playerChoice = playerOptions[2]
        hideTitle()
    })
}

$(playerChoosing)
//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB() {
    var name = $("#name").val();
    console.log(name)

    //Update database here
    var value = {
        NAME: name,
        STATUS: status
    }
    database.push(value);
}

database.on("child_added", function (rowData) {
    var row = rowData.val();
    var name = row.NAME
    var status = row.STATUS
    var fullText = "<p>" + name + ":" + status + "</p>";
    $("#highscore").append(fullText);
})

var doa = Math.floor(Math.random() * 2)
var statusOptions = ["Win", "Lose", "Tie"];
var status = statusOptions[doa];

// makes jumbotron go away
function hideTitle() {
    $(".jumbotron").hide()
    game()
}
// end of the function that makes jumbotron go away

var playerOptions = ['r', 'p', 's'];
var options = ['r', 'p', 's'];

var compOption = options[Math.floor(Math.random() * 3)]; //random computer choices

function game() {
    // rock situation
    if (playerOptions == compOption) {
        $("#outcome").append("Tie!")
        status = statusOptions[2]
    } else if ((playerChoice == "r") && compOption == 'p') {
        $("#outcome").append("You lost!")
        status = statusOptions[1]
    } else if ((playerChoice == "r") && compOption == 's') {
        $("#outcome").append("You won!")
        status = statusOptions[0]
    }
    // paper situation
    else if ((playerChoice == "p") && compOption == 's') {
        $("#outcome").append("You lost!")
        status = statusOptions[1]
    } else if ((playerChoice == "p") && compOption == 'r') {
        $("#outcome").append("You won!")
        status = statusOptions[0]
    }
    // scissors situation
    else if ((playerChoice == "s") && compOption == 'r') {
        $("#outcome").append("You lost!")
        status = statusOptions[1]
    } else if ((playerChoice == "s") && compOption == 'p') {
        $("#outcome").append("You won!")
        status = statusOptions[0]
    }
}