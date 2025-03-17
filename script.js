document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");
    let index = 0;
    
    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds
});
