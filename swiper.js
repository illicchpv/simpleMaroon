// https://swiperjs.com/demos

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    spaceBetween: 30,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    navigation: {
        nextEl: ".arr-right",
        prevEl: ".arr-left",
      },
      // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
