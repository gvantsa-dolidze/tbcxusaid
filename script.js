let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
let interval;

const startCarousel = () => {
  interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
};

const stopCarousel = () => {
  clearInterval(interval);
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
};

const goToSlide = (index) => {
  currentIndex = index;
  updateSlider();
  // stopCarousel(); // Stop automatic sliding when manually navigating
};

const updateSlider = () => {
  const slidesContainer = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

  // Update active dot
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// Start the carousel initially
startCarousel();

let openContentId = null;

const toggleContent = (questionNumber) => {
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

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  ul.addEventListener('click', (event) => {
    const clickedLi = event.target.closest('li');
    if (clickedLi) {
      clickedLi.classList.toggle('open');
    }
  });
});
