$(document).ready(function() {
  $('.portfolio__button').on("click", function() {
    $('.portfolio__button').removeClass("active");
    $(this).addClass("active");
    var filter = $(this).data();
    $.each(filter, function(key,value) {
      var controlKey = $('.portfolio__list').find('.' + value).length;

      if (controlKey) {
        $('.portfolio__list').find('.list__item').fadeOut('fast');
        setTimeout(function() {
          $('.portfolio__list').find('.' + value).fadeIn('slow');
        },500);
      } 
      // else {
      //   $('.portfolio__list').find('.list__item').fadeOut('slow');
      // }
    });
  });
});
