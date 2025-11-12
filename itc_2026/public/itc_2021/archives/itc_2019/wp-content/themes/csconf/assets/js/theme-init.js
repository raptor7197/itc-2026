jQuery(document).ready(function () {

    theme.init();
    theme.initGoogleMap();
    theme.initMainSlider();
    theme.initCountDown();
    theme.initPartnerSlider();
    theme.initTestimonials();
    theme.testimonials2();
    theme.schedule();
    theme.slideshow_height();

    var windowWidth = jQuery(window).width();
    /* DISABLE PARALLAX ON MOBILE ON LOAD */
    if(windowWidth <= 768) {
        jQuery('.vc_parallax-content-moving').each(function () {
            jQuery(this).removeClass('vc_parallax');
        });
        
    }

    /* DISABLE PARALLAX ON MOBILE ON RESIZE */
    jQuery(window).on('resize', function () {
        var windowWidth = jQuery(window).width();
        /* DISABLE PARALLAX ON MOBILE ON LOAD */
        if(windowWidth <= 768) {
            jQuery('.vc_parallax-content-moving').each(function () {
                jQuery(this).removeClass('vc_parallax');
            });
        } else {
            jQuery('.vc_parallax-content-moving').each(function () {
                jQuery(this).addClass('vc_parallax');
            });
        }
        
    });


});




jQuery(window).load(function () { jQuery('body').scrollspy({offset: 100, target: '.navigation'}); });
jQuery(window).load(function () { jQuery('body').scrollspy('refresh'); });
jQuery(window).resize(function () { jQuery('body').scrollspy('refresh'); });

jQuery(document).ready(function () { theme.onResize(); });
jQuery(window).load(function(){ theme.onResize(); });
jQuery(window).resize(function(){ theme.onResize(); });



jQuery(window).load(function() {

    /* preloader */
    jQuery('#preloader').fadeOut(); 
    jQuery( 'body' ).find( '.body_hide' ).css('opacity','1');
     
        
    theme.initAnimation();
    new WOW().init();

    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            jQuery('html,body').delay(0).animate({
                scrollTop: jQuery(hash).offset().top - 44 + 'px'
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }


});

