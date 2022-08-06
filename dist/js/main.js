const slideSwiper = new Swiper(".testimonials-swiper", {
  speed: 900,
  grabCursor: true,
  // autoHeight: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 24,
  // centeredSlides: true,

  pagination: {
    el: ".testimonials-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});
