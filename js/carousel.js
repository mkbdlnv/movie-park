// script.js
document.getElementById('carousel-link').addEventListener('click', function() {
    var carouselContainer = document.getElementById('carousel-container');
    carouselContainer.style.display = carouselContainer.style.display === 'none' ? 'block' : 'none';
});
