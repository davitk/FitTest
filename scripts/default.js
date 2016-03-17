$(document).ready(function(){
    fitMainContainer();

    $(window).resize(function(){
        fitMainContainer();
    });
});

function fitMainContainer()
{
    var imageHolder = $(".main-container .phone-image-holder");
    var mainContainer = $(".main-container");
    var bottom = imageHolder.offset().top + imageHolder.outerHeight();
    if ($(window).width() < 768) {
        mainContainer.css("min-height", bottom - 30);
    } else {
        mainContainer.css("min-height", "auto");
    }
}