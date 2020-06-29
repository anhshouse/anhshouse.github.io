// JavaScript Document

$('.owl-carousel').owlCarousel({
    items:1,
	margin:10,
	loop:true,
	autoplay:true,
	autoplayTimeout:6000,
});

! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        $('#preloader').addClass("loaded");
    });

    /* ---------------------------------------------- /*
    * Navbar toggler
    /* ---------------------------------------------- */
    

    $('.navbar-toggler').on('click', function(){
        $("#side-menu").toggleClass('menu-hidden');
        $(".ham").toggleClass('active');
    });

}(window.jQuery);














