var currentIndex = 0;
var totalSlides = document.querySelectorAll('.slide').length;
var interval;

function startCarousel() {
  interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopCarousel() {
  clearInterval(interval);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
  //stopCarousel(); // Stop automatic sliding when manually navigating
}

function updateSlider() {
  var slidesContainer = document.querySelector('.slides');
  var slideWidth = document.querySelector('.slide').offsetWidth;
  slidesContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';

  // Update active dot
  var dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Start the carousel initially
startCarousel();

var openContentId = null;

function toggleContent(questionNumber) {
  var contentId = 'content-' + questionNumber;
  var content = document.getElementById(contentId);

  if (openContentId !== null) {
    var openContent = document.getElementById(openContentId);
    openContent.style.display = 'none';

    if (openContentId === contentId) {
      openContentId = null;
      return;
    }
  }

  content.style.display = 'block';
  openContentId = contentId;
}



document.addEventListener('DOMContentLoaded', function () {
  const ul = document.querySelector('ul');

  ul.addEventListener('click', function (event) {
    const clickedLi = event.target.closest('li');
    if (clickedLi) {
      clickedLi.classList.toggle('open');
    }
  });
});