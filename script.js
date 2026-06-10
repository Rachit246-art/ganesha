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

// Announcement Bar logic
const annSlides = document.querySelectorAll('.ann-slide');
if (annSlides.length > 0) {
    let currentAnnIndex = 0;
    setInterval(() => {
        annSlides.forEach(s => s.classList.remove('active'));
        currentAnnIndex = (currentAnnIndex + 1) % annSlides.length;
        annSlides[currentAnnIndex].classList.add('active');
    }, 4000);
}

// Countdown timer logic
const timerElements = document.querySelectorAll('.countdown-timer');
if (timerElements.length > 0) {
    // Set a random time between 2 and 5 hours
    let totalSeconds = Math.floor(Math.random() * 10800) + 7200;
    
    setInterval(() => {
        if (totalSeconds > 0) totalSeconds--;
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        timerElements.forEach(el => {
            el.innerHTML = `⏱ ${h}h ${m}m ${s}s`;
        });
    }, 1000);
}
