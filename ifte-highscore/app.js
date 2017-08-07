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
var statusOptions = ["Survived", "ded"];
var status = statusOptions[doa];

function game() {
    if (doa === 0) {
        $("#outcome").append("You survived!");
    }
    if (doa === 1) {
        $("#outcome").append("You died!");

    }
}

// makes jumbotron go away
function hideTitle() {
    $(".btn").click(function () {
        $(".jumbotron").hide()
        game();
    })
}
$(hideTitle);
// end of the function that makes jumbotron go away