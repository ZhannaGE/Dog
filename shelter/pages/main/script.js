
import pets from "./pets.json";


function burgerMenu() {
    const menuButton = document.querySelector('.menuButton');
    const mobileMenu = document.querySelector('.header-nav');
    const nav = document.querySelector('.nav-icon');
    const shadow = document.querySelector('.menu-container');
    const menuContainer = document.querySelector('.menu-container');


    function toggleMenu() {
        document.body.classList.toggle('_lock');
        nav.classList.toggle('open');
        shadow.classList.toggle('overlay')
        mobileMenu.classList.toggle('show');
    }

    menuButton.addEventListener('click', function () {
        toggleMenu();
    })

    menuContainer.addEventListener('click', function (event) {
        if (event.target === menuContainer) {
            toggleMenu();
        }
        if (event.target.tagName === 'A' && event.target.parentNode.classList.contains('nav-item')) {
            toggleMenu()
        }

    })

}

burgerMenu();


function petsModal() {
    const modalWindow = document.querySelector('.myModal');
    const modalName = modalWindow.querySelector('.modal-name');
    const modalKind = modalWindow.querySelector('.modal-kind');
    const modalInfo = modalWindow.querySelector('.modal-info');
    const modalAge = modalWindow.querySelector('.modal-age');
    const modalJab = modalWindow.querySelector('.modal-jab');
    const modalSick = modalWindow.querySelector('.modal-sick');
    const modalParasites = modalWindow.querySelector('.modal-parasites');
    const modalBreed = modalWindow.querySelector('.modal-breed');
    const closeX = document.querySelector('.closeByX');


    function openModal(card) {
        modalName.textContent = card.name;
        modalKind.textContent = card.type;
        modalInfo.textContent = card.description;
        modalAge.textContent = card.age;
        modalJab.textContent = card.inoculations;
        modalSick.textContent = card.diseases;
        modalParasites.textContent = card.parasites;
        modalBreed.textContent = card.breed;
        // img.src = card.img.
        modalWindow.classList.add('show');
    }

    document.body.addEventListener('click', function (event) {

        if (event.target.tagName === 'BUTTON' && event.target.classList.contains('openMyModal')) {
            const grandParent = event.target.closest('.card-pet');
            const petName = grandParent.querySelector('.card-pet_name').textContent.trim();

            let card = null;
            for (let i = 0; i < pets.length; i++) {
                if (petName === pets[i].name) {
                    card = pets[i]
                }
                console.log(petName)
            }

            openModal(card);
        }

    })

    closeX.addEventListener('click', function () {
        modalWindow.classList.remove('show');
    })

}

petsModal()


const slider1Config = {
    slideLength: 0,
    currentSlide: 0,
    cardWidth: 0,
    responsive: {
        0: {
            slideCount: 1,
        },
        768: {
            slideCount: 2,
        },
        1100:{
            slideCount: 3,
        }
    },
}

let SCREEN_WIDTH = 0;

function setScreenWidth() {

    if (window.innerWidth < 768) {
        SCREEN_WIDTH = 0;
    }
   else if(window.innerWidth > 768 && window.innerWidth < 1100) {
        SCREEN_WIDTH = 768;
    }
   else {
        SCREEN_WIDTH = 1100;
    }
}

function initSlider(slider, state) {
    const cardSlides = document.querySelectorAll('.card-pet');
    const btnRight = document.querySelector('.button-right');
    const btnLeft = document.querySelector('.button-left');
    const slideLine = document.querySelector('.card-container');

    function sliderSetup() {
        setScreenWidth();
        state.width = slider.offsetWidth - 2;
        state.slideLength = cardSlides.length;
        state.cardWidth = state.width / state.responsive[SCREEN_WIDTH].slideCount;
        cardSlides.forEach(function (card) {
        })
        const slideLineWidth = state.cardWidth * cardSlides.length;
        slideLine.style.width = slideLineWidth + 'px';
    }

    sliderSetup();

    function moveSlider(direction) {
        if (direction === "next" && state.currentSlide < state.slideLength - state.responsive[0].slideCount) {
            state.currentSlide = state.currentSlide + state.responsive[SCREEN_WIDTH].slideCount;
        }
        if (direction === "prev" && state.currentSlide > 0) {
            state.currentSlide = state.currentSlide - state.responsive[SCREEN_WIDTH].slideCount;
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
        console.log('resize');
        sliderSetup();
        const slideShift = state.currentSlide * state.cardWidth;
        slideLine.style.transform = "translate(-" + slideShift + "px ,0)";
    })


}


const slider1 = document.querySelector('.slider');
initSlider(slider1, slider1Config);