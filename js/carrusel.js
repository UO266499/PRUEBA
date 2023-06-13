var carrusel = new Object();
carrusel.fotos = [
  "picoCourio(2).jpg",
  "picoPorcabezas.jpg",
  "picoMontenegro.jpg",
  "picoUrro.jpg",
  "museoLasAyalgas.jpg",
];
carrusel.alt = [
  "foto tomada en la cima del pico Courio",
  "foto tomada en la cima del pico Porcabezas",
  "foto tomada en la cima del pico Montenegro",
  "foto tomada en la cima del pico Urro",
  "foto del nuevo museo ayalgas en belmonte",
];
carrusel.numeroFoto = 0;
carrusel.izquierda = function () {
  carrusel.numeroFoto--;
  if (carrusel.numeroFoto === -1) {
    carrusel.numeroFoto = carrusel.fotos.length - 1;
  }
  document.getElementsByTagName("img")[1].src =
    "multimedia/imagenes/" + carrusel.fotos[carrusel.numeroFoto];
  document.getElementsByTagName("img")[1].alt =
    carrusel.alt[carrusel.numeroFoto];
};
carrusel.derecha = function () {
  carrusel.numeroFoto++;
  if (carrusel.numeroFoto === carrusel.fotos.length) {
    carrusel.numeroFoto = 0;
  }
  document.getElementsByTagName("img")[1].src =
    "multimedia/imagenes/" + carrusel.fotos[carrusel.numeroFoto];
  document.getElementsByTagName("img")[1].alt =
    carrusel.alt[carrusel.numeroFoto];
};
