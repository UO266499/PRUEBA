var met = new Object();
met.apikey = "727c660ef8c103988af4f1a03eebdf3c";
met.unidades = "&units=metric";
met.idioma = "&lang=es";
met.error =
  "<h2>¡problemas! No puedo obtener información de <a href='https://openweathermap.org'>OpenWeatherMap</a></h2>";
met.cargarDatos = $(document).ready(function () {
  met.url =
    "https://api.openweathermap.org/data/2.5/weather?lat=43.283096&lon=-6.2178424" +
    met.unidades +
    met.idioma +
    "&APPID=" +
    met.apikey;

  $.ajax({
    dataType: "json",
    url: met.url,
    method: "GET",
    success: function (data) {
      met.datos = data;
      met.verDatos();
    },
    error: function () {
      document.write(met.error);
    },
  });
});

met.verDatos = function () {
  document.getElementsByTagName("section")[1].innerHTML +=
    '<img src="https://openweathermap.org/img/wn/' +
    met.datos.weather[0].icon +
    '@2x.png" alt="icono que muestra el tiempo actual">' +
    "<p>Temperatura: " +
    met.datos.main.temp +
    " ºC</p>" +
    "<p>Temperatura máxima: " +
    met.datos.main.temp_max +
    " ºC</p>" +
    "<p>Temperatura mínima: " +
    met.datos.main.temp_min +
    " ºC</p>";
};
