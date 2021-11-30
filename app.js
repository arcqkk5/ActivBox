$(function() {

    /*fixedHeader*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrolPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrolPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrolPos = $(this).scrollTop();

        checkScroll(scrolPos, introH);

    });

    function checkScroll(){
        if(scrolPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 600)
    });



    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });


    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });


});



// JavaScript

const mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove()
    }, 800);
});















