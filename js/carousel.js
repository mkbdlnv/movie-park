var carouselLinks = document.querySelectorAll('.carousel-link');

carouselLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var carouselContainer = document.getElementById(targetId);

        if (carouselContainer) {
            carouselContainer.style.display = carouselContainer.style.display === 'none' ? 'block' : 'none';
        }
    });
});

