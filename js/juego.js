var juego = new Object();
juego.preguntas = [
  "Cuál de las siguientes es una ruta de Belmonte de Miranda:",
  "Como se llama el concejo del que trata esta página web:",
  "Plato típico de Belmonte de Miranda:",
  "Que jornada gastronómica se realiza en el concejo:",
  "Que festival se realiza en el concejo:",
  "Que plato tiene como ingrediente principal las Fabas:",
  "Cuál de las siguientes es una ruta de Belmonte de Miranda:",
  "Cuál de estos restaurantes está situado en Belmonte:",
  "Cuál de los siguientes es un museo automovilistico:",
  "Que jornada gastronómica se realiza en el concejo:",
];
juego.contador = -1;
juego.respuestasUsuario = [];
juego.respuestasCorrectas = [0, 3, 1, 2, 0, 0, 1, 2, 1, 3];
juego.matrizJuego = [
  [
    "Salmones arriba",
    "Pedro pasando",
    "La ruta del piquillo",
    "Madrid caminante",
    "El rio de naves",
  ],
  ["Grao", "Tineo", "Avilés", "Belmonte de miranda", "Onís"],
  [
    "Pimientos del padrón",
    "Sollombo a la manteiga",
    "Lentejas con arroz",
    "Melón con Jamón",
    "Pan con leche",
  ],
  [
    "Vino tinto",
    "Fideos",
    "Arbeyos con jamón",
    "Licor de hierbas",
    "Patata cocida con pulpo",
  ],
  [
    "Huerta y del Pan de Escanda",
    "Bombastic",
    "Arenal sound",
    "Lechuga y patata",
    "Calabaza más grande",
  ],
  [
    "Fabada asturiana",
    "Bollo preñao",
    "Cachopo",
    "Arbeyos con jamón",
    "Sollombo a la manteiga",
  ],
  [
    "L'baju",
    "L'altu",
    "El camino al cielo",
    "La ruta de los mil pasos",
    "La ruta desde Belmonte",
  ],
  [
    "Sidrería Restaurante Ruta del Oro",
    "Casa Marcial",
    "La Fuyeca",
    "Sidreria rita mortero",
    "Casa Pedrito",
  ],
  [
    "Aula del oro",
    "Las ayalgas de Silviella",
    "Museo del arte automovilistico",
    "Museo del prado",
    "La carrera del río",
  ],
  [
    "Vino tinto y carne roxa",
    "Pixín y vino blanco",
    "Cultivo de noviembre",
    "Pote de berzas y carne roxa",
    "Chorizos y el picadillo",
  ],
];
juego.seleccionar0 = function () {
  juego.respuestasUsuario.push(0);
  juego.cambiarPregunta();
};
juego.seleccionar1 = function () {
  juego.respuestasUsuario.push(1);
  juego.cambiarPregunta();
};
juego.seleccionar2 = function () {
  juego.respuestasUsuario.push(2);
  juego.cambiarPregunta();
};
juego.seleccionar3 = function () {
  juego.respuestasUsuario.push(3);
  juego.cambiarPregunta();
};
juego.seleccionar4 = function () {
  juego.respuestasUsuario.push(4);
  juego.cambiarPregunta();
};
juego.inicializar = $(document).ready(function () {
  juego.cambiarPregunta();
});
juego.mostrarPuntuacion = function () {
  juego.puntuacion = 0;

  for (let index = 0; index < juego.respuestasCorrectas.length; index++) {
    if (juego.respuestasCorrectas[index] === juego.respuestasUsuario[index]) {
      juego.puntuacion++;
    }
  }

  document.getElementsByTagName("section")[0].innerHTML +=
    "<p> Puntuación final: " + juego.puntuacion + "/10</p>";
};
juego.cambiarPregunta = function () {
  juego.contador++;
  if (juego.contador < 10) {
    document.getElementsByTagName("input")[0].value =
      juego.preguntas[juego.contador];
    document.getElementsByTagName("button")[0].innerText =
      juego.matrizJuego[juego.contador][0];
    document.getElementsByTagName("button")[1].innerText =
      juego.matrizJuego[juego.contador][1];
    document.getElementsByTagName("button")[2].innerText =
      juego.matrizJuego[juego.contador][2];
    document.getElementsByTagName("button")[3].innerText =
      juego.matrizJuego[juego.contador][3];
    document.getElementsByTagName("button")[4].innerText =
      juego.matrizJuego[juego.contador][4];
  } else if (juego.contador == 10) {
    juego.mostrarPuntuacion();
    document.getElementsByTagName("input")[0].value = "Gracias por participar!";
  }
};
