$(document).ready(function() {

    $.ajax({
        url: "https://swapi.co/api/people/3/?format=json",
        dataType: "json",
        success: function (data){
            console.log(data.name);
        }

    })

})