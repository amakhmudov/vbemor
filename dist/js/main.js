  const cinemaThumbs = new Swiper(".cinema-thumbs", {
    spaceBetween: 12,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: true,
    breakpoints: {
//     // when window width is >= 640px
    640: {
      slidesPerView: 6,
    },
  }
  });

  const cinema = new Swiper(".cinema", {
    spaceBetween: 12,
    keyboard: {
    enabled: true,
    allowTouchMove: true,
    onlyInViewport: false,
  },
    navigation: {
      nextEl: ".cinema-thumbs-next",
      prevEl: ".cinema-thumbs-prev",
    },
    thumbs: {
      swiper: cinemaThumbs,
    },
});
