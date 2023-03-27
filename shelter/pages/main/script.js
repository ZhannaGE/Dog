





const state = {
    slideLength: 0, // максимальное количество слайдов (или номер последнего слайда)
    currentSlide: 0,
    width: 0, // 900 / slideCount
    slideCount: 3, // количество слайдов в карусели,
    cardWidth: 0,
}

const cardSlides = document.querySelectorAll('.card-pet');
const btnRight = document.querySelector('.button-right');
const btnLeft = document.querySelector('.button-left');
const slideLine = document.querySelector('.card-container');
const slider = document.querySelector('.slider');


function sliderInit() {
    state.width = slider.offsetWidth - 2;
    state.slideLength = cardSlides.length;
    state.cardWidth = state.width / state.slideCount;
    cardSlides.forEach(function (card) {
    })
    const slideLineWidth = state.cardWidth * cardSlides.length;
    slideLine.style.width = slideLineWidth + 'px';
}

sliderInit();

function moveSlider(direction) {
    if (direction === "next" && state.currentSlide < state.slideLength - state.slideCount) {
        state.currentSlide = state.currentSlide + state.slideCount;
    }
    if (direction === "prev" && state.currentSlide > 0) {
        state.currentSlide = state.currentSlide - state.slideCount;
    }

    const slideShift = state.currentSlide * state.cardWidth;
    slideLine.style.transform = "translate(-" + slideShift + "px ,0)";
}

btnRight.addEventListener('click', function () {
    moveSlider('next');
})
btnLeft.addEventListener('click', function () {
    moveSlider('prev');
})


window.addEventListener('resize', function () {
    sliderInit();

    const slideShift = state.currentSlide * state.cardWidth;
    slideLine.style.transform = "translate(-" + slideShift + "px ,0)";
})
