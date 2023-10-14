// Image gallery

document.addEventListener('DOMContentLoaded', function() {
  // Obtiene todas las imágenes pequeñas de la lista
  const smallImages = document.querySelectorAll('.image-item img');

  // Obtiene la imagen principal
  const mainImage = document.querySelector('.principal-bike');

  // Obtiene las dimensiones de la imagen principal antes de cambiarla
  const mainImageWidth = mainImage.width;
  const mainImageHeight = mainImage.height;

  // Agrega un evento clic a cada imagen pequeña
  smallImages.forEach(function(smallImage) {
    smallImage.addEventListener('click', function() {
      // Obtiene la ruta de la imagen clickeada
      const newImageSrc = smallImage.getAttribute('src');

      // Crea una nueva imagen
      const newImage = new Image();
      newImage.onload = function() {
        // Configura las dimensiones de la nueva imagen a ser las mismas que las dimensiones de la imagen antigua
        newImage.width = mainImageWidth;
        newImage.height = mainImageHeight;

        // Cambia la fuente de la imagen principal a la nueva imagen
        mainImage.src = newImage.src;
      };

      // Carga la nueva imagen
      newImage.src = newImageSrc;
    });
  });
});

// Scroll-to-top button

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
  }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function() {
  var scroll = document.documentElement.scrollTop;

  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};
