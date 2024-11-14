document.addEventListener("DOMContentLoaded", function() { //Проверяет полную загрузку страница чтобы после этого начать выполнять код

    const welcomeText = document.createElement("h1"); //Создаёт заголовок <h1>
    welcomeText.className = "rainbow-text"; //Добавляет ему класс
    welcomeText.textContent = "Black Pearl"; //Записывает в заголовок текст
    document.getElementById("welcome-banner").appendChild(welcomeText); //Вставляет то что находится в велкам текст в див с классов велкам банер

    //Анимация при прокрутке
    const elements = document.querySelectorAll("#home .content > *, #games > .game-cards > *, #about > *, #contacts > *"); //Ищет все элементы и записывает их в перменную элементс для анимирования

    const observer = new IntersectionObserver((entries) => { //Отслеживание того есть ли элемент на экране
        entries.forEach(entry => {
            if (entry.isIntersecting) { //Если элемент на экране то добавляет к нему класс шоу
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); //Если нет то убирает
            }
        });
    }, {
        threshold: 0.4 //Порог видимости 0.1 от полного элемента
    });

    elements.forEach(element => {
        element.classList.add("hidden"); //Добавляет всем элементам класс хиден чтобы они изначально были скрыты
        observer.observe(element); //Скрипт следит за элементами чтобы когда надо включить анимку
    });


    // Анимация падающих сердечек внутри блока с приветственной надписью
    const heartContainer = document.getElementById('welcome-banner'); //Ищет блок с классом велкам банер
    function createHeart() {
    
        const heart = document.createElement('div'); //Создается новый див для сердец
        heart.classList.add('heart'); //сердца добавляется лкасс харт
        heart.style.left = Math.random() * 100 + '%'; //Размещение сердца в случайном месте по горизонтали
        heart.style.animationDuration = 3 + Math.random() * 2 + 's'; //Установка случайно продолжительности анимации от 3 до 5 секунд
    
        heartContainer.appendChild(heart); //Добавление сердчека в блок с радужной надписью
    
        setTimeout(() => {
            heart.remove(); //Проанимированное сердечко удаляется из кэша чтобы не нагружать память
        }, parseFloat(heart.style.animationDuration) * 1000 + 1000);
    }
    
    setInterval(createHeart, 500); //Каждое новое сердеко генерируется раз в 500мс
});




