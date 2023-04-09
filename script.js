$(document).ready(function () {
  $("#carousel-imgs").slick({
    arrows: false,
    autoplay: true,
  });

  $(".menu").click(function () {
    $("#nav-container").slideToggle();
  });
});
