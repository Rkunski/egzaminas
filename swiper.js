const swiper = new Swiper('.swiper', {
  // Optional parameters
  calculateHeight:true,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    slidesPerView: 1,
    clickable: true,
    // dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1000:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    slidesPerView: 1,
     type: 'bullets',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    1000:{
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
});
