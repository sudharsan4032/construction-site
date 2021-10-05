

$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// slider
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 2,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [990, 2],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      slideSpeed: 1000,
      autoPlay: true
    });
  });

//   gallery section 

$(document).ready(function(){
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
    
    });