document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");
    let index = 0;
    const totalSlides = images.length;
    
    function nextSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
