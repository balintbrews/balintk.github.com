$(function ($) {

  $('.site-title a').hover(
    function() {
      $('.site-title a i').toggleClass('icon-bookmark-empty icon-bookmark');
    },
    function() {
      $('.site-title a i').toggleClass('icon-bookmark icon-bookmark-empty');
    }
  );

})(jQuery);
