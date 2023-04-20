let pets = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]



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
console.log(SCREEN_WIDTH)

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
            console.log(state.responsive[SCREEN_WIDTH])
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
        sliderSetup();
        const slideShift = state.currentSlide * state.cardWidth;
        slideLine.style.transform = "translate(-" + slideShift + "px ,0)";
    })


}

const slider1 = document.querySelector('.slider');
initSlider(slider1, slider1Config);