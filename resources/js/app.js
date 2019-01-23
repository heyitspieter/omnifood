$(document).ready(function () {

    $('.sticky-start').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

}, {
    offset: '60px'
});

$('.scrollToPlans').click(function () {
    $('html, body').animate({
        scrollTop: $('.plans-section').offset().top
    }, 1000)
});

$('.scrollToFeatures').click(function () {
    $('html, body').animate({
        scrollTop: $('.features-section').offset().top
    }, 1000)
});


// Select all links with hashes
$(function(){
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    
    /** Animations on scroll **/
    $('.js-wp-1').waypoint(function(){
        $('.js-wp-1').addClass('animated fadeIn') 
    }, {
        offset: '50%'
    });
    
    $('.js-wp-2').waypoint(function(){
        $('.js-wp-2').addClass('animated fadeInUp') 
    }, {
        offset: '50%'
    });
    
    $('.js-wp-3').waypoint(function(){
        $('.js-wp-3').addClass('animated fadeIn') 
    }, {
        offset: '50%'
    });
    
    $('.js-wp-4').waypoint(function(){
        $('.js-wp-4').addClass('animated pulse') 
    }, {
        offset: '50%'
    });
    
    
    $('.nav-ham').click(function(){
        var nav = $('.js-main-nav');
        var hamIcon = $('.nav-ham i');
        if(hamIcon.hasClass('ion-ios-menu')){
            hamIcon.addClass('ion-ios-close');
            hamIcon.removeClass('ion-ios-menu');
        } else {
            hamIcon.addClass('ion-ios-menu');
            hamIcon.removeClass('ion-ios-close');
        }
        
        nav.slideToggle(200);
    });
});

