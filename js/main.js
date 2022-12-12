const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide');

let index = 0;
let timer = 0;

function autoSlider() {
    timer = setTimeout(nextSlide, 1000);

}

const activeSlide = n => {
    for (slide2 of slides) {
        slide2.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        autoSlider();
    } else {
        index++;
        activeSlide(index);
        autoSlider();
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

autoSlider();
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//main dark mod 
const theme = document.getElementById("theme");
if (localStorage.getItem('style_theme') == "white") {
    theme.href = "css/style-light.css"
} else {
    theme.href = "css/style-dark.css";
}

const switchMode = document.getElementById("swichMode");
const switchMode2 = document.getElementById("swichMode2");

switchMode.onclick = function () {
    const theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/style-dark.css") {
        theme.href = "css/style-light.css";
        localStorage.setItem('style_theme', "white");
    }
    else {
        theme.href = "css/style-dark.css";
        localStorage.setItem('style_theme', "black");
    }

}
switchMode2.onclick = function () {
    const theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/style-dark.css") {
        theme.href = "css/style-light.css"
    }
    else {
        theme.href = "css/style-dark.css";
    }
}

//burger menu
const links1 = document.querySelector('.mobile-menu__link.links-1');
const closeBurger = document.querySelector('.mobile-menu__btn');

links1.addEventListener('click', (e) => {
    if (e.target === links) {
        document.querySelector('.mobile-menu__checkbox').checked = false;
    }
});

const links2 = document.querySelector('.mobile-menu__link.links-2');
links2.addEventListener('click', (e) => {
    if (e.target === links) {
        document.querySelector('.mobile-menu__checkbox').checked = false;
    }
});

const links3 = document.querySelector('.mobile-menu__link.links-3');
links3.addEventListener('click', (e) => {
    if (e.target === links) {
        document.querySelector('.mobile-menu__checkbox').checked = false;
    }
});

