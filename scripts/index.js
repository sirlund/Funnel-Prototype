/**
 * index.js
 * - All our useful JS goes here, awesome!
 */



$(document).ready(function () {
  
  console.log("JavaScript is amazing!");

  $('[data-element="carousel"]').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    customPaging : function(slider, i) {
      return '<span></span>';
    },
  });

  $('.toggle-card').on('click', function(e) {
    $('.Card--optional').toggleClass("hidden"); //you can list several class names 
    $(this).text(function(i, text){
      return text === "Ver opción básica" ? "Ocultar opción básica" : "Ver opción básica";
    })
    e.preventDefault();
  });

});