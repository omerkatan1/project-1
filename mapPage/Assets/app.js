

$(document).ready(function () {

    $('body').css('display', 'none').fadeIn(1000);
})

$("#goBtn").click(function (e) {
    e.preventDefault();

    var addressText = $("#destination").val();
    console.log(addressText);


    loadMap(addressText);
    getWeatherInfo("seattle");
});

function displayMapContent() {
    $(".grid-container").empty();

    $("<div>", {
        html: "hello",
        appendTo: ".map"
    })

    $("<iframe>", {
        src: "https://maps.google.com/maps?q=seattle&t=&z=13&ie=UTF8&iwloc=&output=embed",
        class: "framedMap",
        appendTo: ".map"
    })
}
