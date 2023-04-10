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

  $("#emphasis-list").on("click", "button", function () {
    const carName = $(this).data("car");
    $("#car").val(carName);
  });

  $("#promotions-list").on("click", "button", function () {
    const carName = $(this).data("car");
    $("#car").val(carName);
  });

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      tel: {
        required: true,
      },
    },
    messages: {
      name: "Nome obrigatório",
      tel: "Telefone obrigatório",
      email: "Email obrigatório",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (e, validator) {
      let invalidFields = validator.numberOfInvalids();
      console.log(invalidFields);
    },
  });

  $("section button").on("click", function () {
    const destiny = $("#contact-section");

    $("html").animate(
      {
        scrollTop: destiny.offset().top,
      },
      500
    );
  });
});
