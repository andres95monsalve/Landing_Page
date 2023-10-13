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

                    // Cambia la imagen principal con la imagen clickeada usando GSAP
                    gsap.to(mainImage, { src: newImageSrc, duration: 0.5 });
                });
            });
        });