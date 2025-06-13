window.addEventListener("load", function () {
  // swiper 만들기
  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
  });
});
