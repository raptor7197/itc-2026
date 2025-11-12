'use strict';
var theme = function ($) {

    /* Fix RTL */
    function fixrtl(){
        if( $('html').attr('dir') == 'rtl' ){
            $('[data-vc-full-width="true"]').each( function(i,v){
                $(this).css('right' , $(this).css('left') ).css( 'left' , 'auto');
                
            });
        }
    }

    /* prevent empty links */
    
    function handlePreventEmptyLinks() {
        $('a[href="#"]').click(function (event) {
            event.preventDefault();
        });
    }

   

    /* BootstrapSelect */
    
    function handleBootstrapSelect() {
        $('.selectpicker').selectpicker();
    }

    /* add hover class for correct view on mobile devices */
    function handleHoverClass() {
        var hover = $('.thumbnail');
        hover.hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        );
    }

    /* superfish menu */
    function handleSuperFish() {
        $('ul.sf-menu').superfish();
        $('ul.sf-menu a').click(function() {
            $('body').scrollspy('refresh');
        });
        /* fixed menu toggle */
        $('.menu-toggle').on('click', function(){
            if($('.navigation').hasClass('opened')) {
                $(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
                $('.navigation').removeClass('opened').addClass('closed');
            } else {
                $(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
                $('.navigation').removeClass('closed').addClass('opened');
            }
        });
        /* submenu fix */
        $('.mobile-submenu').click(function () {
            $(this).parent().toggleClass('mobile-submenu-open');
        });
        $('ul.sf-menu a').click(function() {
            $('ul.sf-menu li').removeClass('mobile-submenu-open');
        });
    }

    /* Fix mobile */
    function menumobile(){
        var win_width = $(window).width();
        if( win_width < 990 ){
            $('ul.sf-menu a').click(function(){
             
               if($('nav.navigation').hasClass('opened')) {
                    $('nav.navigation').find('.fa').removeClass('fa-times').addClass('fa-bars');
                    $('nav.navigation').removeClass('opened').addClass('closed');
                } else {
                    $('nav.navigation').find('.fa').removeClass('fa-bars').addClass('fa-times');
                    $('nav.navigation').removeClass('closed').addClass('opened');
                }
            });    
        }
       
    }

    /* Smooth scrolling */
    function handleSmoothScroll(){
        $('.sf-menu a, .scroll-to').click(function () {

            
            var headerH = 0;
            $('.sf-menu a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - headerH + 'px'
            }, {
                duration: 1200,
                easing: 'easeInOutExpo'
            });
            return false;
        });
    }

    /* prettyPhoto */
    function handlePrettyPhoto() {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }

    /* Scroll totop button */
    function handleToTopButton() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.to-top').css({bottom: '15px'});
                $('.to-top').css({display: 'block'});
            } else {
                $('.to-top').css({bottom: '-100px'});
            }
        });
        $('.to-top').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    }

    

    /* Shrink header on scroll */
    function handleAnimatedHeader() {
        var header = $('.header.fixed');
        function refresh() {
            var scroll = $(window).scrollTop();
            if (scroll >= 99) {
                header.addClass('shrink');
            } else {
                header.removeClass('shrink');
            }
        };
        $(window).load(function () { refresh(); });
        $(window).scroll(function () { refresh(); });
        $(window).on('touchstart',function(){ refresh(); });
        $(window).on('scrollstart',function(){ refresh(); });
        $(window).on('scrollstop',function(){ refresh(); });
        $(window).on('touchmove',function(){ refresh(); });

    }

    /* handleTabsFAQ */
    function handleTabsFAQ() {
        if($('#tabs-faq').length){
            var tabs = $('#tabs-faq');
            tabs.find('a').on('click', function () {
                tabs.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-plus');
                $(this).find('.fa').removeClass('fa-plus').addClass('fa-angle-right');
            });
            /* get the id */
            $('#tabs-faq.style2 li').click(function () {
                var self = $(this),
                    index = self.index(),
                    id = index;
                var $items = $('#tabs-faq.style2 li');
                var fh = $items.eq(0).height();
                var first = $items.eq(0).offset().top + fh;
                var two = $items.eq(id).offset().top;
                var distance  = (two - first) + 51;
                if ($(window).width() > 767) {
                    $('.row.faq .tab-content').css('margin-top', distance);
                } else {
                    $('.row.faq .tab-content').css('margin-top', 20);
                }
                /* scroll to */
                $('html, body').animate({
                    scrollTop: $('.row.faq .tab-content').offset().top - 80
                }, 500);
            });
        }
    }

    /* resize page */
    function resizePage() {
        if ($('body').hasClass('boxed')) {
            $('#main-slider').find('.page').each(function () {
                $(this).removeAttr('style');
            });
        }

        $('#main-slider').trigger('refresh');
        $('.testimonials').trigger('refresh');
        $('.partners-carousel .owl-carousel').trigger('refresh');
    }

    /* audio play */
    function playAudio() {
        if ($('#player').length) {
            if($('#player').data('play') == 'auto_play'){
                $('#player').trigger("play");    
            }
            
            $('.control').click(function(){
                if ($(this).hasClass('play')) {
                    $(this).html('<i class="fa fa-pause"></i>');
                    $(this).removeClass('play').addClass('pause');
                    $('#player').trigger("pause");
                }
                else {
                    $(this).html('<i class="fa fa-play"></i>');
                    $(this).removeClass('pause').addClass('play');
                    $('#player').trigger("play");
                }
            });
        }
    }

    /* schedule-list Tabination version 2.8 */
    function schedule_list(){
        $('.schedule-list').find('.jevent-title-1.toggle').click(function (e) {
            e.preventDefault();
            $(this).next().slideToggle('fast');
            $(".schedule-details").not($(this).next()).slideUp('fast');
        });    
    }
    

    /* INIT FUNCTIONS */
    return {
        onResize: function() {
            fixrtl();
            resizePage();
        },
        init: function () {
            
            fixrtl();
            handlePreventEmptyLinks();
            handleBootstrapSelect();
            handleHoverClass();
            handleSuperFish();
            handleSmoothScroll();
            handlePrettyPhoto();
            handleToTopButton();
            handleAnimatedHeader();
            handleTabsFAQ();
            playAudio();
            schedule_list();
            menumobile();

        },
        /* Main Slider */
        initMainSlider: function () {

            var rtl = false;
            if( $('html').attr('dir') == 'rtl' ){
                rtl = true;
            }

            $('#main-slider').each(function(){

                var auto_slider=$(this).data('auto_slider');
                var duration= $(this).data('duration');
                var navigation=$(this).data('navigation');
                var loop=$(this).data('loop');

                $(this).owlCarousel({
                    autoplay: auto_slider,
                    autoplayHoverPause: true,
                    loop: loop,
                    margin: 0,
                    dots: false,
                    autoplayTimeout: duration,
                    nav: navigation,
                    rtl: rtl,
                    navText: [
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>"
                    ],
                    responsiveRefreshRate: 100,
                    responsive: {
                        0:    {items: 1},
                        479:  {items: 1},
                        768:  {items: 1},
                        991:  {items: 1},
                        1024: {items: 1}
                    }
                });
            });

        },
        /* CountDown */
        initCountDown: function () {
            
            $('.defaultCountdown').each(function(){

                var years = $(this).data('years');
                var months = $(this).data('months');
                var weeks = $(this).data('weeks');
                var days = $(this).data('days');
                var hours = $(this).data('hours');
                var minutes = $(this).data('minutes');
                var seconds = $(this).data('seconds');

                var year = $(this).data('year');
                var month = $(this).data('month');
                var week = $(this).data('week');
                var day = $(this).data('day');
                var hour = $(this).data('hour');
                var minute = $(this).data('minute');
                var second = $(this).data('second');

                var end_date_y = $(this).data('end_date_y');
                var end_date_m = $(this).data('end_date_m')-1;
                var end_date_d = $(this).data('end_date_d');
                var end_date_h = $(this).data('end_date_h');
                var end_date_i = $(this).data('end_date_i');

                

                var timezone = $(this).data('timezone');
                var display_format = $(this).data('display_format');


                var austDay = new Date();
                austDay = new Date(end_date_y, end_date_m, end_date_d, end_date_h, end_date_i);
                
               $(this).countdown({
                    labels: [years,months,weeks,days,hours,minutes,seconds], 
                    labels1: [year,month,week,day,hour,minute,second], 
                    until: austDay, 
                    timezone: timezone, 
                    format: display_format
                });
            });
              
        },
        
        /* Google map */
        initGoogleMap: function(){
            $('.google-map').each(function(){

                var map;
                var marker;
                var zoom = $(this).data('zoom');
                var latitude = $(this).data('latitude');
                var longitude = $(this).data('longitude');
                var defineid = $(this).data('defineid');
                var marker_title = $(this).data('marker_title');

                function initialize() {
                    var mapOptions = {
                        scrollwheel: false,
                        zoom: zoom,
                        center: new google.maps.LatLng(latitude, longitude)
                    };
                    map = new google.maps.Map(document.getElementById(defineid), mapOptions);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude, longitude),
                        map: map,
                        title: marker_title
                    });
                }
                google.maps.event.addDomListener(window, "load", initialize);
            });
                
            
        },
       
        /* Testimonials */
        initTestimonials: function () {
            $('.testimonials').each(function(){
                var auto = $(this).data('auto');
                var timeout = $(this).data('timeout');
                var loop = $(this).data('loop');

                var rtl = false;
                if( $('html').attr('dir') == 'rtl' ){
                    rtl = true;
                }

                $(this).owlCarousel({
                    items: 1,
                    autoplay: auto,
                    loop: loop,
                    dots: true,
                    autoplayTimeout: timeout,
                    nav: false,
                    rtl:rtl,
                    navText: [
                        "<i class='fa fa-caret-left'></i>",
                        "<i class='fa fa-caret-right'></i>"
                    ]
                });
            });
            
        },

        testimonials2: function(){
            $('.testimonials-slider').each(function(){
                var auto = $(this).data('auto');
                var timeout = $(this).data('timeout');
                var loop = $(this).data('loop');

                var rtl = false;
                if( $('html').attr('dir') == 'rtl' ){
                    rtl = true;
                }


                $(this).owlCarousel({
                    items: 1,
                    autoplay: auto,
                    loop: loop,
                    rtl:rtl,
                    autoplayTimeout: timeout
                });
            });

            $(".testimonials-wrap .next").click(function () {
                $(".testimonials-slider").trigger('next.owl.carousel');
            });
            $(".testimonials-wrap .prev").click(function () {
                $(".testimonials-slider").trigger('prev.owl.carousel');
            });

        },

       


        /* Partners Slider */
        initPartnerSlider: function (){
            $(".partners-carousel .owl-carousel").each(function(){
                var autoplay = $(this).data('auto');
                var itemslide = $(this).data('itemslide');
                var show_nav = $(this).data('show_nav');
                var loop = $(this).data('loop');
                var autoplaytimeout = $(this).data('autoplaytimeout');
                
                var rtl = false;
                if( $('html').attr('dir') == 'rtl' ){
                    rtl = true;
                }

                $(this).owlCarousel({
                      autoplay: autoplay,
                      loop: loop,
                      margin: 25,
                      dots: false,
                      nav: show_nav,
                      rtl:rtl,
                      autoplayTimeout: autoplaytimeout,
                      navText: [
                          "<i class='fa fa-caret-left'></i>",
                          "<i class='fa fa-caret-right'></i>"
                      ],
                      responsive: {
                          0:    {items: 1},
                          479:  {items: 2},
                          768:  {items: 3},
                          991:  {items: 4},
                          1024: {items: itemslide}
                      }
                });
            });
            
        },

        /* Animation on Scroll */
        initAnimation: function () {
            if( $('body').hasClass( 'no_ova_animate' ) == true ){
            }else{
                var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (isMobile == false) {
                    $('*[data-animation]').addClass('animated');
                    $('.animated').waypoint(function (down) {
                        var elem = $(this);
                        var animation = elem.data('animation');
                        if (!elem.hasClass('visible')) {
                            var animationDelay = elem.data('animation-delay');
                            if (animationDelay) {
                                setTimeout(function () {
                                    elem.addClass(animation + ' visible');
                                }, animationDelay);
                            } else {
                                elem.addClass(animation + ' visible');
                            }
                        }
                    }, {
                        offset: $.waypoints('viewportHeight')
                    });
                }    
            }
            

            if(isMobile) {
                $('.wow').addClass('wow-removed').removeClass('wow');
            } else {
                $('.wow-removed').addClass('wow').removeClass('wow-removed');
            }
            
        },
        
        schedule: function(){
            $('.schedule-tabs #tabs-lv1 li').first().addClass('active');
            $('.schedule-tabs .tab-content #tab-day-01').first().addClass('in active');
        },

        slideshow_height: function(){

            var win_w = $(window).width();
            var win_h = $(window).height();

            var height_desk = $("#main-slider").data('height_desk');
            var height_ipad = $("#main-slider").data('height_ipad');
            var height_mobile = $("#main-slider").data('height_mobile');

            if( height_mobile == "fullheight" ){
                height_mobile = win_h;
            }

            if( height_ipad == "fullheight"){
                height_ipad = win_h;
            }

            if( height_desk == "fullheight"){
                height_desk = win_h;
            }
            

            if(win_w < 768){
                $('#main-slider').css('height', height_mobile);
                $('#main-slider.owl-carousel .owl-item .item').css('min-height', height_mobile);    
            }else if (win_w >= 768 && win_w < 991){
                $('#main-slider').css('height', height_ipad);    
                $('#main-slider.owl-carousel .owl-item .item').css('min-height', height_ipad);
            }else{
                $('#main-slider').css('height', height_desk);    
                $('#main-slider.owl-carousel .owl-item .item').css('min-height', height_desk);
            }
        }

    };

}(jQuery);