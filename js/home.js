new WOW().init();
 
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    var scroll = new SmoothScroll('a[href*="#"]');
    $("body").niceScroll({
        cursorcolor:"darkorange",
        cursorwidth:"16px"
      });
})