// script.js

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider-image');
    let counter = 0;
    const imageWidth = images[0].clientWidth;

    function slide() {
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        slider.style.transform = `translateX(-${imageWidth * counter}px)`;
    }

    setInterval(slide, 3000); // Change slide every 3 seconds
});
