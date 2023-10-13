$.noConflict();
jQuery(document).ready(function($) {
  // Your Magnific Popup initialization code here
  $(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});
