let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
}

function currentSlide(index) {
    showSlide(index);
}

function nextSlide() {
    let newIndex = currentSlideIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
}

// Auto change slide every 5 seconds
setInterval(nextSlide, 5000);
