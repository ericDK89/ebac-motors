$(document).ready(function () {
  $("#carousel-imgs").slick({
    arrows: false,
    autoplay: true,
  });

  $(".menu").click(function () {
    $("#nav-container").slideToggle();
  });

  $("#tel").mask("(00) 00000-0000", {
    placeholder: "(99) 01234-5678",
  });

  $("#promotions-list").on("click", "button", function () {
    const carName = $(this).data("car");
    $("#car").val(carName);
  });
});
