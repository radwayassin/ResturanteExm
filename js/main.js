$(function(){
    'use strict'
    var winH= $(window).height(),
        navH   =$('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - navH);

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      lazyLoad:true,
      margin:5,
      stagePadding:5,
      responsiveClass:true,
      responsive:{
          0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:2,
            nav:false,
            loop:true
        },
        922:{
            items:3,
            nav:true,
            loop:true
        }}
  });
});
new WOW(
{
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
}).init();