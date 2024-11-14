const cards = document.querySelectorAll('.card'); // Получаем все элементы .card
let intervalIds = []; // Массив для хранения ID интервалов для каждой карточки

function createFallingImage(card) {
    const image = document.createElement('img');
    image.src = 'heart2.png'; // Замени на путь к вашему изображению
    image.classList.add('falling-image');

    // Размещаем изображение случайным образом по верхней части карточки
    const randomX = Math.random() * (card.clientWidth - 50); // Учитываем ширину изображения
    image.style.left = `${randomX}px`;

    card.appendChild(image);

    // Удаляем изображение после завершения анимации
    image.addEventListener('animationend', () => {
        image.remove();
    });
}

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const intervalId = setInterval(() => createFallingImage(card), 200); // Каждые 200 мс создаем новое изображение
        intervalIds.push(intervalId);
    });

    card.addEventListener('mouseleave', () => {
        clearInterval(intervalIds.pop()); // Останавливаем генерацию при уходе курсора
    });
});