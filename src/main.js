let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-list__item');
    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const carousel = document.querySelector('.slider-list');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
