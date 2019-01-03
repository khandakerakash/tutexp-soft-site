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

    // Modal popup$(function () {
    $('.portfolio-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
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

})(jQuery); // End of use strict

// site preloader
// $(window).on('load', function(){
//     setTimeout(function(){
//         $('#cover').fadeOut(400);
//     },400)
// });
