// Optional JavaScript for interactive features, such as a gallery image carousel
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-images img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('You clicked on an image!');
        });
    });
});
