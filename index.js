const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll(".imageSlider img");
let currentPosition = 0;

images.forEach(image => {
    image.style.display = 'none';
});

function showCurrentImage() {
    images.forEach((image, index) => {
        if (index === currentPosition) {
            image.style.display = 'inline-block';
        } else {
            image.style.display = 'none';
        }
    });
}

function prevSlide() {
    currentPosition = (currentPosition - 1 + images.length) % images.length;
    showCurrentImage();
}

function nextSlide() {
    currentPosition = (currentPosition + 1) % images.length;
    showCurrentImage();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showCurrentImage();
