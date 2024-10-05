
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const galleryContainer = document.querySelector('.gallery-container');

function scrollGalleryLeft() {
    galleryContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

