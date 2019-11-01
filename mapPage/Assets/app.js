$(document).ready(function () {

    $('body').css('display', 'none').fadeIn(1000);
})

$("#goBtn").on("click", function (event) {
    event.preventDefault();
    displayTopBar();
    displayMapContent();
    // var city = $("#destination").val();
    getWeatherInfo("seattle");
});

function displayTopBar() {
    $("<nav>", {
        class: "top-bar",
        appendTo: "#topBar"
    })
    $("<img />", {
        src: "Assets/Images/logo.png",
        alt: "logo",
        class: "topBarLogo",
        appendTo: ".top-bar"
    })
}

// function displayMapContent() {
//     $(".grid-container").empty();

//     $("<div>", {
//         html: "hello",
//         appendTo: ".map"
//     })

//     $("<iframe>", {
//         src: "https://maps.google.com/maps?q=seattle&t=&z=13&ie=UTF8&iwloc=&output=embed",
//         class: "framedMap",
//         appendTo: ".map"
//     })
// }
