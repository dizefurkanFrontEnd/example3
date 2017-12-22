$(document).ready(function (){
  $("#item__search").click(function() {
    $("html, body").css("overflow", "hidden");
    $(".searchArea").toggle();
  });

  $("#searchAreaEXIT").click(function() {
    $(".searchArea").fadeOut();
    $("html, body").css("overflow", "auto");
  });
  var navbar = false;
  $("header #navBar").click(function() {
    $("header #navBar").toggleClass("change");
    $("header #list").slideToggle();
    navbar = !navbar;
  });
    $("header .list__item").click(function() {
      var dropdown = $(this).has(".dropdown").length;

      if (navbar) {
        $(this).find(".popup__list").slideToggle();
        if (dropdown != 0) { $(this).find(".dropdown").slideToggle(); };
      };
    });

});
