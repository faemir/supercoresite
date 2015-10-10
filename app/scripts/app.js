(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    // console.log('Our app is ready to rock!');
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

  // Scroll page to top and expand header
  // app.scrollPageToTop = function() {
  //   document.getElementById('main-container').scrollTop = 0;
  // };

})(document);
