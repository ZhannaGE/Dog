function burgerMenu() {
    const menuButton = document.querySelector('.menuButton')
    const mobileMenu = document.querySelector('.header-nav')
    const closeMenuButton = document.querySelector('.closeMenu')

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.add('show');
    })

    closeMenuButton.addEventListener('click', function () {
            mobileMenu.classList.remove('show');
        }
    )
}

burgerMenu();


function petsModal() {
    const modalWindow = document.querySelector('.myModal');
    const modalName = modalWindow.querySelector('.modal-name');
    const modalKind = modalWindow.querySelector('.modal-kind');
    const modalInfo = modalWindow.querySelector('.modal-info');
    const closeX = document.querySelector('.closeByX')


    function openPetsModal(cardPet) {
        modalName.textContent = cardPet.querySelector('.card-pet_name').textContent;
        modalKind.textContent = cardPet.dataset.petKind;
        modalInfo.textContent = cardPet.dataset.petInfo;
        modalWindow.classList.add('show');
    }


    document.body.addEventListener('click', function(event){

        console.log(event.target.tagName)
        if(event.target.tagName === 'BUTTON' && event.target.classList.contains('openMyModal')){
            console.log('Кликнули на опенМодал кнопку');
            const grandParent = event.target.closest('.card-pet');
            console.log(grandParent);
            openPetsModal(grandParent);
        }

    })

    closeX.addEventListener('click', function(){
        modalWindow.classList.remove('show');
    })

}
petsModal()


// const slider1Config = {
//     slideLength: 0, // максимальное количество слайдов (или номер последнего слайда)
//     currentSlide: 0,
//     // slideCount: 2 // количество слайдов в карусели,
//     responsive: {
//         0: {
//             slideCount: 1,
//         },
//         768: {
//             slideCount: 2,
//         }
//     },
//     cardWidth: 0,
// }
//
// let SCREEN_WIDTH = 0;
//
//
// function setScreenWidth() {
//     if (window.innerWidth < 768) {
//         SCREEN_WIDTH = 0;
//     } else {
//         SCREEN_WIDTH = 768;
//     }
// }
//
// function initSlider(slider, state) {
//     console.log('Start slider' + slider);
//     const cardSlides = document.querySelectorAll('.card-pet');
//     const btnRight = document.querySelector('.button-right');
//     const btnLeft = document.querySelector('.button-left');
//     const slideLine = document.querySelector('.card-container');
//
//
//     function sliderSetup() {
//         setScreenWidth();
//         state.width = slider.offsetWidth - 2;
//         state.slideLength = cardSlides.length;
//         state.cardWidth = state.width / state.responsive[SCREEN_WIDTH].slideCount;
//         cardSlides.forEach(function (card) {
//         })
//         const slideLineWidth = state.cardWidth * cardSlides.length;
//         slideLine.style.width = slideLineWidth + 'px';
//     }
//
//     sliderSetup();
//
//     function moveSlider(direction) {
//         if (direction === "next" && state.currentSlide < state.slideLength - state.responsive[0].slideCount) {
//             state.currentSlide = state.currentSlide + state.responsive[SCREEN_WIDTH].slideCount;
//         }
//         if (direction === "prev" && state.currentSlide > 0) {
//             state.currentSlide = state.currentSlide - state.responsive[SCREEN_WIDTH].slideCount;
//         }
//
//         const slideShift = state.currentSlide * state.cardWidth;
//         slideLine.style.transform = "translate(-" + slideShift + "px ,0)";
//     }
//
//     btnRight.addEventListener('click', function () {
//         moveSlider('next');
//     })
//     btnLeft.addEventListener('click', function () {
//         moveSlider('prev');
//     })
//
//
//     window.addEventListener('resize', function () {
//         console.log('resize');
//         sliderSetup();
//         const slideShift = state.currentSlide * state.cardWidth;
//         slideLine.style.transform = "translate(-" + slideShift + "px ,0)";
//     })
//
//
// }
//
//
// const slider1 = document.querySelector('.slider');
// initSlider(slider1, slider1Config);