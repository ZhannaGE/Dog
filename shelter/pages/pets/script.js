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

let SCREEN_WIDTH = 0; // 1 создаем переменную текущей ширины

function setScreenWidth() { // 2 кладем в нее ширину получаемую в зависимости от экрана

    if (window.innerWidth < 768) {
        SCREEN_WIDTH = 0;
    } else if (window.innerWidth > 768 && window.innerWidth < 1100) {
        SCREEN_WIDTH = 768;
    } else {
        SCREEN_WIDTH = 1100;
    }
}

setScreenWidth();

const responsiveLimits = { // задаем объект с количеством видимых сдайдов
    0: {
        limit: 3,
    },
    768: {
        limit: 3,
    },
    1100: {
        limit: 8,
    }
};

function pagination(selector, limitOptions, startPage = 1) { //функция которая принимает селекторы, наш объект и текущую страницу


    function loadItem() { // вычитываем кол показываемых слайдов и меняем класс в зависимости от числа
        let beginGet = limit * (thisPage - 1);
        let endGet = limit * thisPage - 1;
        list.forEach((item, key) => {
            if (key >= beginGet && key <= endGet) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
        listPage();
    }


    function listPage() {
        let count = Math.ceil(list.length / limit);
        console.log(count)
        document.querySelector('.listPage').innerHTML = ''; // чистка ппагинации от старых страниц (кнопок на другие страницы)

        if (thisPage !== 1) {
            let prev = document.createElement('li');
            prev.innerText = '<<';
            prev.addEventListener('click', function () {
                changePage(thisPage - 1)
            })
            document.querySelector('.listPage').appendChild(prev);
        }

        for (let i = 1; i <= count; i++) {
            let newPage = document.createElement('li');
            newPage.dataset.pageNumber = i;
            newPage.innerText = i;
            if (i === thisPage) {
                newPage.classList.add('active');
            }
            newPage.addEventListener('click', function () {
                changePage(i)
            })
            document.querySelector('.listPage').appendChild(newPage);
        }

        if (thisPage !== count) {
            let next = document.createElement('li');
            next.innerText = '>>';
            next.addEventListener('click', function () {
                changePage(thisPage + 1)
            })
            document.querySelector('.listPage').appendChild(next);
        }
    }

    function changePage(i) {
        thisPage = i;
        loadItem();
    }

    let thisPage = startPage;
    let list = document.querySelectorAll(selector);
    let limit = limitOptions[SCREEN_WIDTH].limit;
    console.log(list)

    loadItem();

// не пойму зачем это

    document.body.addEventListener('click', function (e) {
        const listPage = document.querySelector('.listPage');
        const target = e.target;
        console.log(target.dataset.pageNumber)
        console.log(target.parentNode)

        if (target.parentNode === listPage) {
            console.log('change page')
            console.log(e.target);
            let i = 3; //test
            changePage(i);
        }
    })

}

pagination('.card-container .card-pet', responsiveLimits);

window.addEventListener('resize', function () {
    console.log('Здесьмы будем перерисовывать пагинцаию');
    setScreenWidth();
    console.log(SCREEN_WIDTH)
    pagination('.card-container .card-pet', responsiveLimits);
})


