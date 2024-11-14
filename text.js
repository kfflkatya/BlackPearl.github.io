const waveTextElements = document.querySelectorAll(".wave-text"); // Выбираем все элементы с классом wave-text

        waveTextElements.forEach(textElement => {
            const letters = textElement.textContent.split(""); // Разделяем текст на буквы

            textElement.innerHTML = ""; // Очищаем содержимое элемента

            // Создаем элемент для каждой буквы
            letters.forEach((letter, index) => {
                const span = document.createElement("span");
                span.textContent = letter;
                span.classList.add("letter");
                textElement.appendChild(span);

                // Добавляем анимацию волны
                const waveAnimation = () => {
                    span.style.transform = `translateY(${Math.sin(index + Date.now() / 300) * 5}px)`; // Параметр 5 для регулировки амплитуды
                };

                // Обновляем позицию каждой буквы каждый 100 мс
                setInterval(waveAnimation, 100);
            });
        });