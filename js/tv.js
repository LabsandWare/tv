(function ($) {
  'use strict';

  /*--------------------------
  preloader
  ---------------------------- */
  $(window).on('load', function () {
    var pre_loader = $('#preloader')
    pre_loader.fadeOut('slow', function () { $(this).remove(); });
  });	

  /*----------------------------
  jQuery MeanMenu
  ------------------------------ */
    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();

  /*--------------------------
   scrollUp
  ---------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  /*----------------------------
   Counter js active
  ------------------------------ */
  var count = $('.counter');
  count.counterUp({
    delay: 40,
    time: 3000
  });


  /*---------------------
  TOP Menu Stick
  --------------------- */
  var windows = $(window);
  var sticky = $('#sticker');

  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
      sticky.removeClass('stick');
    } else {
      sticky.addClass('stick');
    }
  });

  /*--------------------------
  Parallax
  ---------------------------- */
  var parallaxeffect = $(window);
  parallaxeffect.stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false
  });


  /*--------------------------
       slider carousel
  ---------------------------- */
  var intro_carousel = $('.intro-carousel');
  intro_carousel.owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    dots: false,
    navText: ["<i class='icon icon-chevron-left'></i>", "<i class='icon icon-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


})(jQuery);