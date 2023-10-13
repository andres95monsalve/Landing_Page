document.addEventListener('DOMContentLoaded', function() {
    // Obtiene todas las imágenes pequeñas de la lista
    const smallImages = document.querySelectorAll('.image-item img');

    // Obtiene la imagen principal
    const mainImage = document.querySelector('.principal-bike');

    // Agrega un evento clic a cada imagen pequeña
    smallImages.forEach(function(smallImage) {
        smallImage.addEventListener('click', function() {
            // Obtiene la ruta de la imagen clickeada
            const newImageSrc = smallImage.getAttribute('src');

            // Cambia la imagen principal con la imagen clickeada
            mainImage.setAttribute('src', newImageSrc);
        });
    });
});

    // Obtén el botón y la imagen por sus IDs
var boton = document.getElementById('color-bike1-1');
var imagen = document.getElementById('cambio-color');

// Agrega un evento de clic al botón
boton.addEventListener('click', function() {
    // Cambia la ruta de la imagen
    imagen.src = 'src/img/bike_principal-1.png'; // Reemplaza 'nueva_imagen.jpg' con la ruta de tu nueva imagen
    imagen.alt = 'Nueva Imagen'; // Cambia el texto alternativo si lo deseas
});
