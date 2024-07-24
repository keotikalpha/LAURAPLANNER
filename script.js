
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (n >= totalSlides) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = n;
    }

    // Move the slider to the current slide
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    showSlides((slideIndex + n + totalSlides) % totalSlides);
}

// Initialize slider
showSlides(slideIndex);

// Optional: Automatic slide change every 5 seconds
setInterval(() => plusSlides(1), 5000);
document.addEventListener("DOMContentLoaded", function() {
    const eventImages = document.querySelectorAll(".event-img");
    
    eventImages.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.toggle("zoomed");
        });
    });
});


