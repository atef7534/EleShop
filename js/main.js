// script.js
let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let dots = document.querySelectorAll(".dot");
let timer;

function showSlides() {
  for (let itr = 0; itr < slides.length; itr++) {
    slides[itr].style.display = "none";
  }
  for (let itr = 0; itr < slides.length; itr++) {
    dots[itr].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  timer = setTimeout(showSlides, 2000); 
}

function changeSlide(n) {
    clearTimeout(timer);
    slideIndex += n - 1;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function currentSlide(n) {
  clearInterval(timer);
  showSlides(slideIndex = n - 1);
}
showSlides();
