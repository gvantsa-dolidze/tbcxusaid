// ====== caroussel
let currentIndex = 0; //Следит за индексом текущего слайда.
const totalSlides = document.querySelectorAll('.slide').length; // Хранит общее количество слайдов в карусели.
let interval; // Содержит идентификатор интервала для управления автоматической сменой слайдов.

const startCarousel = () => { // Запускает автоматическое перемещение карусели. 
  interval = setInterval(nextSlide, 3000); // Он устанавливает интервал, который вызывает функцию nextSlide каждые 3 секунды.
};

const stopCarousel = () => { // Останавливает автоматическое перемещение карусели, очищая интервал.
  clearInterval(interval);
};

const nextSlide = () => {// Переходит к следующему слайду, обновляя 'currentIndex'. 
  currentIndex = (currentIndex + 1) % totalSlides; // Он также вызывает 'updateSlider', чтобы визуально обновить карусель.
  updateSlider();
};

const prevSlide = () => { //Переходит к предыдущему слайду, обновляя 'currentIndex'. 
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Он также вызывает 'updateSlider', чтобы визуально обновить карусель.
  updateSlider();
};

const goToSlide = (index) => { // Переходит к определенному слайду, указанному переданным индексом. 
  currentIndex = index;  // Обновляет 'currentIndex' и вызывает 'updateSlider'
  updateSlider(); // для визуального обновления карусели.
  // stopCarousel(); // Stop automatic sliding when manually navigating
};

const updateSlider = () => {
  const slidesContainer = document.querySelector('.slides'); //Обновляет визуальное представление карусели. 
  const slideWidth = document.querySelector('.slide').offsetWidth; // Он перемещает контейнер слайдов горизонтально на основе 
  slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`; // 'currentIndex' и обновляет активный индикатор точки.

  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// Start the carousel initially
startCarousel(); //Сценарий начинается с вызова startCarousel, чтобы начать автоматическое перемещение карусели сначала.

// ===== lists
let openContentId = null; //Хранит идентификатор открытого содержимого. Изначально устанавливается в 'null' ცვლადი

const toggleContent = (questionNumber) => { // Переключает отображение содержимого при клике на вопрос. Принимает номер вопроса в качестве параметра.
  const contentId = `content-${questionNumber}`;
  const content = document.getElementById(contentId);

  if (openContentId !== null) {
    const openContent = document.getElementById(openContentId);
    openContent.style.display = 'none';

    if (openContentId === contentId) {
      openContentId = null;
      return;
    }
  }

  content.style.display = 'block';
  openContentId = contentId;
};

document.addEventListener('DOMContentLoaded', () => { // Срабатывает, когда DOM-дерево полностью загружено.
  const ul = document.querySelector('ul');

  ul.addEventListener('click', (event) => { // Добавляется обработчик клика на элемент 'ul'.
    const clickedLi = event.target.closest('li');
    if (clickedLi) {
      clickedLi.classList.toggle('open');// Логика:
     // При клике на вопрос (элемент li) добавляется класс open, который определяет, что вопрос раскрыт.
     // При повторном клике класс open удаляется, что скрывает содержимое вопроса.
      
    }
  });
});
