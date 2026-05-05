'use strict';

const slides = [
  'src/images/slider/slide-img-1.jpg',
  'src/images/slider/slide-img-2.jpg',
  'src/images/slider/slide-img-3.jpg'
];
let currentSlide = 0;

const slider = document.querySelector('.slide-bar');
const prevBtn = document.querySelector('.slide-bar__button--left');
const nextBtn = document.querySelector('.slide-bar__button--right');

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentSlide = (currentSlide + 1) % slides.length;
  slider.style.backgroundImage = `url(${slides[currentSlide]})`;
});
prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slider.style.backgroundImage = `url(${slides[currentSlide]})`;
});

