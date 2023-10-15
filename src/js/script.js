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

// Disable scroll-to-top button on page load
document.getElementById("button-up").style.transform = "scale(0)";

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

  if (scroll > 100) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 100) {
    buttonUp.style.transform = "scale(0)";
  }
};


// Variables globales
var imagenActual = "src/img/imagenParte3.svg";
var listaImagenes = ["src/img/bike_principal.svg", "src/img/imagenMenuInf.svg", "src/img/imagenParte3.svg"];

// Eventos onclick
function prevImage() {
  var currentIndex = listaImagenes.indexOf(imagenActual);
  if (currentIndex > 0) {
    imagenActual = listaImagenes[currentIndex - 1];
  } else {
    imagenActual = listaImagenes[listaImagenes.length - 1]; // Mostrar la última imagen al llegar al principio
  }
  document.querySelector(".imagen-parte4").src = imagenActual;
  document.querySelector(".previewNext").classList.remove("disabled");
}

function nextImage() {
  var currentIndex = listaImagenes.indexOf(imagenActual);
  if (currentIndex < listaImagenes.length - 1) {
    imagenActual = listaImagenes[currentIndex + 1];
  } else {
    imagenActual = listaImagenes[0]; // Mostrar la primera imagen al llegar al final
  }
  document.querySelector(".imagen-parte4").src = imagenActual;
  document.querySelector(".previewNext").classList.remove("disabled");
}

// Inicializar
document.querySelector(".imagen-parte4").src = imagenActual;
document.querySelector(".previewNext").classList.add("disabled");
