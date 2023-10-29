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

let typed = new Typed(".multipleText", {
    strings: ["Веб-разработчик", "UX/UI дизайнер", "Android разработчик", "Студент-информатик", "Технический энтузиаст"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
