// Базовая инициализация и обработчики ошибок
function init() {
    console.log('Сайт lanoms загружен!');
    
    // Обработка ошибок загрузки изображений
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            console.error('Ошибка загрузки изображения:', this.src);
            this.style.display = 'none';
        };
    });
}

// Запуск при полной загрузке страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Добавляем плавное появление элементов
window.addEventListener('load', function() {
    document.querySelector('.container').style.opacity = '1';
});