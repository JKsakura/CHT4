$(document).ready(function() {  
    /* ---------- Carousel function ---------- */
    $("#myCarousel").swiperight(function() {  
        $(this).carousel('prev');  
    });  
    $("#myCarousel").swipeleft(function() {  
        $(this).carousel('next');  
    });
    /* ------ control the hamburger menu -------- */
    $('.hamburger_menu').on("click", function(){
        $('header').css({
            "opacity": "1"
        });
        
        $('.hamburger_nav').fadeIn('fast');
    });
    $('#cross_r').on("mouseover", function(){
        $(this).fadeOut(100);
        $('#cross_h').fadeIn(100);
        $('#cross_h').on("click", function(){
            $('.hamburger_nav').fadeOut('fast');
            $('header').css({
                "opacity":"0.8"
            });
        });
    });
    $('#cross_h').on("mouseout", function(){
        $(this).fadeOut(100);
        $('#cross_r').fadeIn(100);
    });
});  