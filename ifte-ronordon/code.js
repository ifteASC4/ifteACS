function ron() {
    $.ajax({
        url: "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
        success: function (data) {
            handleData(data[0])
        }
    })
}
function don() {
    $(document).ready(function () {
        $.ajax({
            url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
            dataType: 'json',
            success: function (data) {
                handleData(data.message);
            }
        })
    })
}
function check() {
    console.log('ron')
}
function ronOrDon() {
    $('.row').css("display", "inline")
    var pick = Math.floor(Math.random() * 2);
    if (pick === 0) {
        output = [ron(), 'ron'];
        $('body').append("<p class='answers'style='opacity:0'>ron</p>")
    } else if (pick === 1) {
        output = [don(), 'don'];
        $('body').append("<p class='answers'style='opacity:0'>don</p>")
    }
    return output;
}

function handleData(data) {
    $('.col-md-8').append("<h1>" + data + "</h1>")
}
$('document').ready(function () {
    $('.btn').click(function () {
        ronOrDon()[0]
    })
    $('.btn-md').click(check())
})

function hideTitle(){
    $(".start").click(function(){
        $(".title").hide()
    })
}

$(hideTitle);