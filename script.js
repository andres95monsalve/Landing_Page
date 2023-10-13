const bikePrincipal = document.getElementById("bike_principal");
const listaImagenes = document.querySelectorAll("#lista-imagenes li img");

listaImagenes.forEach(imagen => {
  imagen.addEventListener("click", () => {
    // Cambia la imagen principal cuando se hace clic en una imagen de la lista
    bikePrincipal.src = imagen.src;
  });
});
