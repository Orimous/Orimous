const sortBtns = document.querySelectorAll('.sort-btn');
const projectList = document.querySelector('.project-list');

sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Удаляем активный класс у всех кнопок
        sortBtns.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс только к выбранной кнопке
        btn.classList.add('active');

        // Проходимся по всем проектам и прячем/показываем их в зависимости от выбранного фильтра
        for (let project of projectList.children) {
            if (filter === 'all') {
                project.style.display = 'flex';
            } else if (project.classList.contains(filter)) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        }
    });
});

