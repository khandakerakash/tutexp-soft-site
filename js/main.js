(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hamburger Icon
    // (function () {
    //     $('.mobile_menu-icon_wrap').on('click', function() {
    //         $('.hamburger-icon').toggleClass('animate');
    //     })
    // })();

    $('.mobile_menu-icon_wrap').on('click', function () {
        $('#navbarResponsive').toggleClass("Collapse_ham");
        $('.hamburger-icon').toggleClass('animate');
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();

    sr.reveal('.sr-icon-1', {
        delay: 200,
        scale: 0
    });
    sr.reveal('.sr-icon-2', {
        delay: 400,
        scale: 0
    });
    sr.reveal('.sr-icon-3', {
        delay: 600,
        scale: 0
    });
    sr.reveal('.sr-icon-4', {
        delay: 800,
        scale: 0
    });
    sr.reveal('.sr-button', {
        delay: 200,
        distance: '15px',
        origin: 'bottom',
        scale: 0.8
    });
    sr.reveal('.sr-contact-1', {
        delay: 200,
        scale: 0
    });
    sr.reveal('.sr-contact-2', {
        delay: 400,
        scale: 0
    });

    // wow initialize
    new WOW().init();

    // Mixitup
    $(function () {
        var filterList = {

            init: function () {

                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio_items',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.apps'
                    }
                });
            }
        };

        // Run the show!
        filterList.init();
    });

    //Modal popup$(function () {
    $('.portfolio-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $(document).on('click', '.portfolio-modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    // Owl Carousel For clients
    $("#clients_slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed:1000,
        pagination: false,
        dots: true,
    });

    // Owl Carousel For Team
    $("#team_slider").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 18,
        nav: false,
        pagination: false,
        dots: true,
        smartSpeed:1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            767: {
                items: 3,
            },
            1199: {
                items: 4,
            }
        }
    });

    // open contact form home page
    $('#send_message').on('click',function(e){
        e.preventDefault();
        $('.contact_popup').css('display','flex');
    });
    $('.contact_popup').on('click',function(e){
        var $target = e.target.nodeName;
        if($target != 'FORM' && $target != 'INPUT' && $target != 'BUTTON' && $target != 'TEXTAREA'){
            $(this).fadeOut();
            $(this).addClass('animated');
        }
    });

    // scrollup back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn("slow");
        } else {
            $('.scrollup').fadeOut("slow");
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // site preloader
    $(window).on('load', function(){
        setTimeout(function(){
            $('#cover').fadeOut(400);
        },400)
    });

})(jQuery); // End of use strict

// site preloader
// $(window).on('load', function(){
//     setTimeout(function(){
//         $('#cover').fadeOut(400);
//     },400)
// });
