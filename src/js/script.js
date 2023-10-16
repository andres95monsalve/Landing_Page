document.addEventListener('DOMContentLoaded', function() {
  
  const smallImages = document.querySelectorAll('.image-item img');

  const mainImage = document.querySelector('.principal-bike');

  const mainImageWidth = mainImage.width;
  const mainImageHeight = mainImage.height;

  smallImages.forEach(function(smallImage) {
    smallImage.addEventListener('click', function() {
      
      const newImageSrc = smallImage.getAttribute('src');

      const newImage = new Image();
      newImage.onload = function() {

        newImage.width = mainImageWidth;
        newImage.height = mainImageHeight;

        mainImage.src = newImage.src;
      };

      newImage.src = newImageSrc;
    });
  });
});

document.getElementById("button-up").style.transform = "scale(0)";

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

var imagenActual = "src/img/imagenParte3.svg";
var listaImagenes = ["src/img/bike_principal.svg", "src/img/imagenMenuInf.svg", "src/img/imagenParte3.svg"];

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

document.querySelector(".imagen-parte4").src = imagenActual;
document.querySelector(".previewNext").classList.add("disabled");
