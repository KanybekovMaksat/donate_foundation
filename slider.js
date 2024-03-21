import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

var swiper = new Swiper('.slider__content', {
  grabCursor: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});

var slider = new Swiper('.partners__slider', {
  slidesPerView: 3,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1000: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

var sliderAbout = new Swiper('.aboutus-slider', {
  slidesPerView: 2,
  spaceBetween: 140,
  grabCursor: true,
  spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 140,
    },
  },
});

var introSlide = new Swiper('.intro__slider', {
  grabCursor: true,
  spaceBetween: 5,
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
});

var donateSlide = new Swiper('.donate__send-form-inner', {
  grabCursor: true,
  spaceBetween: 5,
  pagination: {
    el: '.donate-form__pagination',
    clickable: true,
  },
});

var blogSlide = new Swiper('.blog-slider__content', {
  grabCursor: true,
  spaceBetween: 5,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
});
