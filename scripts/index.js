/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

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