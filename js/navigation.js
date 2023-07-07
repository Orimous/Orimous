const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    // Переключение навигационного меню
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Анимация для ссылок в навигационном меню
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Анимация бургерной иконки
        burger.classList.toggle('toggle');
    });
};

navSlide();