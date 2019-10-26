$(document).ready(function () {

    $('body').css('display', 'none').fadeIn(1000);
})
$(document).on("click", "#goBtn", displayMapContent);

function displayMapContent() {
    $("body").empty();
}