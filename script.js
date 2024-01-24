let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

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