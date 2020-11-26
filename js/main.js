'use strict'
function opacitySlides(){
    let slideIndex = 1;
    showSlide(slideIndex, '.trip__slide');
    showSlide(slideIndex, '.program__slide');
    function changeSlides(slides, prev, next){
        let prevBtn = document.querySelector(prev), nextBtn = document.querySelector(next);
        prevBtn.addEventListener('click', function(){showSlide(slideIndex += -1, slides);})
        nextBtn.addEventListener('click', function(){showSlide(slideIndex += +1, slides);})
    }
    function showSlide(n, slide) {
        let slides = document.querySelectorAll(slide);
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for (let slide of slides) slide.style.opacity = "0";
        slides[slideIndex - 1].style.opacity = "1";
    }
    changeSlides('.program__slide', '#program__prev', '#program__next');
    changeSlides('.trip__slide', '#trip__prev', '#trip__next');
}
opacitySlides();
//removeClass
function removeClass(elems){
        for(let elem of elems) elem.classList.remove('active');
    }
function instructorSlides(){
    function changeSlides(slide, button){
        let buttons = document.querySelectorAll(button), slides = document.querySelectorAll(slide);
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', function(){
                removeClass(slides);
                removeClass(buttons);
                slides[i].classList.add('active');
                buttons[i].classList.add('active');
            })
        }
    }
    changeSlides('.intructor__slide_1', '.instructor__btn_1');
    changeSlides('.intructor__slide_2', '.instructor__btn_2');
}
instructorSlides();
function reviews() {
    let prevBtn = document.querySelector(".review__prev"), nextBtn = document.querySelector(".review__next");
    let slides = document.querySelectorAll(".review__item"), slider = document.querySelector(".reviews__slider_inner");
    let dots = document.querySelectorAll('.review__dot');
    let stepSize = slides[0].clientWidth, counter = 0;
    function getStep() {
        slider.style.transform = "translateX(" + `${-stepSize * counter}px)`;
        removeClass(dots);
        dots[counter].classList.add('active');
        }
    prevBtn.addEventListener("click", function () {
        if (counter < 1) counter = slides.length;
        counter--;
        getStep();
        });
    nextBtn.addEventListener("click", function () {
        if (counter >= slides.length - 1) counter = -1;
        counter++;
        getStep();
        })
    for(let i = 0; i < dots.length; i++){
        dots[i].addEventListener('click', function(){
            if (counter < 1) counter = slides.length;
            if (counter >= slides.length - 1) counter = -1;
            counter = i;
            getStep();
        })
    }
}
reviews();
