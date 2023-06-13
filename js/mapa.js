var mapa = new Object();
mapa.cargarMapa = $(document).ready(function () {
  var apiKey = "JzEQIyIt4LUIcJbZtgsoqRtPk6YEGFwD";
  var lati = 43.282578;
  var long = -6.2173149;
  var imgMapa =
    "https://api.tomtom.com/map/1/staticimage?key=" +
    apiKey +
    "&zoom=11&center=" +
    long +
    "," +
    lati +
    "&format=jpg&layer=basic&style=main&width=960&height=540&view=Unified&language=es-ES";
  var mapa =
    '<img src="' +
    imgMapa +
    '"' +
    ' alt="Mapa estatico de belmonte de miranda"/>';

  document.getElementsByTagName("section")[2].innerHTML += mapa;
});
