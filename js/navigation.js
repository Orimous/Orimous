const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    // Переключение навигационного меню
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Анимация бургерной иконки
        burger.classList.toggle('toggle');
    });
};

navSlide();