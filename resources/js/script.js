// ensures that code will run only when the document has been loaded
$(document).ready(function() {


    // sticky nav
    // function starts at: js--section-features
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    // scroll on buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    // navigation scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    // animations on scroll
    $('.js--waypoint-1').waypoint(function(direction) {
        // add classes: animated and fadeIn
        $('.js--waypoint-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-2').waypoint(function(direction) {
        // add classes: animated and fadeIn
        $('.js--waypoint-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-3').waypoint(function(direction) {
        // add classes: animated and fadeIn
        $('.js--waypoint-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-4').waypoint(function(direction) {
        // add classes: animated and fadeIn
        $('.js--waypoint-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    // mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        // open and close effect for hamburger menu
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});