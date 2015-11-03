(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.addEventListener('dom-change', function() {
    $('.owl-carousel').owlCarousel({
      stagePadding: 65,
      loop: true,
      margin: 10,
      nav: false,
      lazyLoad: true,
      video: true,
      animateOut: true,
      animateIn: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
      }
    });
  });

  window.addEventListener('WebComponentsReady', function() {

  });


})(document);
