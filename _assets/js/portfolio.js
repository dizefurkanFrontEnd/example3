$(document).ready(function() {
  $('.portfolio__button').on("click", function() {
    var filter = $(this).data();
    $.each(filter, function(key,value) {
      var controlKey = $('.portfolio__list').find('.' + value).length;

      if (controlKey) {
        $('.portfolio__list').find('.list__item').fadeOut();
        $('.portfolio__list').find('.' + value).fadeIn();
      } else {
        $('.portfolio__list').find('.list__item').fadeOut();
      }
    });
  });
});
