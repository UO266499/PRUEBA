var parser = new Object();
parser.location = "xml/rutas.xml";
parser.error = "<h3>Ha ocurrido un error al obtener el listado de rutas</h3>";
parser.html = "No se han encontrado rutas";
parser.kml = [];
parser.svg = [];
parser.cargarDatos = $(document).ready(function () {
  $.ajax({
    dataType: "xml",
    url: "xml/rutas.xml",
    success: function (data) {
      parser.datos = data;
      parser.verDatos();
    },
    error: function () {
      document.write(parser.error);
    },
  });
});
parser.verDatos = function () {
  var sections = document.getElementsByTagName("section");
  parser.html = "";
  parser.counter = 0;
  $(parser.datos)
    .find("ruta")
    .each(function () {
      let nombreRuta = $(this).find("nombre").text();
      parser.html += "<section>";
      parser.html += "<h3>Nombre: " + nombreRuta + "</h3>";
      parser.html += "<p>Tipo: " + $(this).find("tipo").text() + "</p>";
      parser.html +=
        "<p>Transporte: " + $(this).find("transporte").text() + "</p>";
      parser.html +=
        "<p>Fecha de Inicio: " + $(this).find("fechaInicio").text() + "</p>";
      parser.html +=
        "<p>Hora de Inicio: " + $(this).find("horaInicio").text() + "</p>";
      parser.html += "<p>Duracion: " + $(this).find("duracion").text() + "</p>";
      parser.html += "<p>Agencia: " + $(this).find("agencia").text() + "</p>";
      parser.html +=
        "<p>Descripcion: " + $(this).find("descripcion").text() + "</p>";
      parser.html +=
        "<p>Tipo de personas: " +
        $(this).find("tipoDePersonas").text() +
        "</p>";
      parser.html +=
        "<p>Lugar de inicio: " + $(this).find("lugarInicio").text() + "</p>";
      parser.html +=
        "<p>Direccion de inicio: " +
        $(this).find("direccionInicio").text() +
        "</p>";
      parser.html += "<p>" + "Coordenadas de inicio: " + "</p>";
      parser.html +=
        "<p>Latitud: " +
        $(this).find("coordenadasInicio").attr("latitud") +
        "</p>";
      parser.html +=
        "<p>Longitud: " +
        $(this).find("coordenadasInicio").attr("longitud") +
        "</p>";
      parser.html +=
        "<p>Altitud: " +
        $(this).find("coordenadasInicio").attr("altitud") +
        " m</p>";
      let counter = 1;
      $(this)
        .find("referencias")
        .each(function () {
          parser.html += "<h4>Referencias</h4>";
          $(this)
            .find("referencia")
            .each(function () {
              parser.html +=
                "<a href='" +
                $(this).text() +
                "'>" +
                nombreRuta +
                ": Enlace " +
                counter +
                "</a>";
              counter++;
            });
        });
      parser.html +=
        "<p>Recomendacion: " + $(this).find("recomendacion").text() + "</p>";
      $(this)
        .find("hitos")
        .each(function () {
          parser.html += "<h4>Hitos</h4>";
          $(this)
            .find("hito")
            .each(function () {
              parser.html += "<h5>Hito</h5>";
              parser.html +=
                "<p>Nombre: " + $(this).find("nombreHito").text() + "</p>";
              parser.html +=
                "<p>Descripcion: " +
                $(this).find("descripcionHito").text() +
                "</p>";
              parser.html += "<p>" + "Coordenadas:" + "</p>";
              parser.html +=
                "<p>Latitud: " +
                $(this).find("coordenadasHito").attr("latitud") +
                "</p>";
              parser.html +=
                "<p>Longitud: " +
                $(this).find("coordenadasHito").attr("longitud") +
                "</p>";
              parser.html +=
                "<p>Altitud: " +
                $(this).find("coordenadasHito").attr("altitud") +
                "m</p>";
              parser.html +=
                "<p>Distancia al anterior: " +
                $(this).find("distanciaAnterior").attr("kilometros") +
                " km</p>";
              $(this)
                .find("galeriaFotos")
                .each(function () {
                  parser.html += "<h6>Galeria Fotos</h6>";
                  $(this)
                    .find("foto")
                    .each(function () {
                      parser.html +=
                        "<img src='multimedia/imagenes/" +
                        $(this).text() +
                        "' alt='Imagen tomada en el hito'/>";
                    });
                });
              $(this)
                .find("galeriaVideos")
                .each(function () {
                  parser.html += "<h6>Galeria Videos</h6>";
                  $(this)
                    .find("video")
                    .each(function () {
                      parser.html +=
                        "<video src='multimedia/videos/" +
                        $(this).text() +
                        "' controls></video>";
                    });
                });
            });
        });
      parser.html +=
        "<p>Planimetria:" + $(this).find("planimetria").text() + "</p>";
      parser.html +=
        "<button type='button' onclick='parser.mostrarMapa(" +
        parser.counter +
        ")'>Ver Planimetria</button>";
      parser.html +=
        "<p>Altimetria:" +
        "<a href='js/" +
        $(this).find("altimetria").text() +
        "'>" +
        $(this).find("altimetria").text() +
        "</a>" +
        "</p>";

      parser.html += "</section>";
      parser.counter += 1;
    });

  sections[1].innerHTML += parser.html;
  parser.verKML();
  parser.verSVG();
};
parser.verKML = function () {
  parser.kmlData = "";
  $(parser.datos)
    .find("ruta")
    .each(function () {
      parser.kmlData +=
        '<?xml version="1.0" encoding="UTF-8"?> \n <kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n';
      parser.kmlData += "<Placemark>\n";
      parser.kmlData += "<name>" + $(this).find("nombre").text() + "</name>\n";
      parser.kmlData +=
        "<description>\n <![CDATA[<p>" +
        $(this).find("descripcion").text() +
        "</p>]]>\n </description>\n";
      parser.kmlData +=
        "<Point>\n<coordinates>" +
        $(this).find("coordenadasInicio").attr("longitud") +
        "," +
        $(this).find("coordenadasInicio").attr("latitud") +
        "</coordinates>\n</Point>";
      parser.kmlData += "</Placemark>\n";
      $(this)
        .find("hitos")
        .each(function () {
          $(this)
            .find("hito")
            .each(function () {
              parser.kmlData += "<Placemark>\n";
              parser.kmlData +=
                "<name>" + $(this).find("nombreHito").text() + "</name>\n";
              parser.kmlData +=
                "<description>\n <![CDATA[<p>" +
                $(this).find("descripcionHito").text() +
                "</p>]]>\n </description>\n";
              parser.kmlData +=
                "<Point>\n<coordinates>" +
                $(this).find("coordenadasHito").attr("longitud") +
                "," +
                $(this).find("coordenadasHito").attr("latitud") +
                "</coordinates>\n</Point>\n";
              parser.kmlData += "</Placemark>\n";
            });
        });
      parser.kmlData += "</Document>\n</kml>\n";
      parser.kml.push(parser.kmlData);
      parser.kmlData = "";
    });
};
parser.verSVG = function () {
  parser.svgData = "";
  var xAnterior = 0;
  var yAnterior = 0;
  $(parser.datos)
    .find("ruta")
    .each(function () {
      parser.svgData +=
        '<?xml version="1.0" encoding="UTF-8"?> \n <!DOCTYPE svg>\n    <svg xmlns="http://www.w3.org/2000/svg">\n';
      parser.svgData +=
        "<title>Altimetria " + $(this).find("nombre").text() + "</title>\n";
      yAnterior = $(this).find("coordenadasInicio").attr("altitud");
      $(this)
        .find("hitos")
        .each(function () {
          $(this)
            .find("hito")
            .each(function () {
              //divido por 10 para que entre en un grafico mas pequeno
              parser.svgData +=
                '<line x1="' +
                xAnterior +
                '" y1="' +
                yAnterior +
                '" x2="' +
                (xAnterior + 100) +
                '" y2="' +
                $(this).find("coordenadasHito").attr("altitud") / 10 +
                '" style="stroke:red; stroke-width:5"/>\n';
              xAnterior = xAnterior + 100;
              yAnterior = $(this).find("coordenadasHito").attr("altitud") / 10;
            });
        });
      parser.svgData += "</svg>\n";
      xAnterior = 0;
      yAnterior = 0;
      parser.svg.push(parser.svgData);
      parser.svgData = "";
    });
};

parser.mostrarMapa = function (number) {
  var lista = [];
  var nombres = [];

  var opciones = {
    zoom: 10,
    center: { lat: 43.3235949, lng: -6.2175564 },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(
    document.getElementsByTagName("article")[0],
    opciones
  );
  $("name", parser.kml[number]).each(function (index) {
    nombres.push($(this).text());
  });
  $("coordinates", parser.kml[number]).each(function (index) {
    var numeros = $(this).text().split(",");
    lista.push(Number(numeros[0]));
    lista.push(Number(numeros[1]));
  });

  var counter = 0;
  for (let index = 0; index < nombres.length; index++) {
    var long = lista[counter++];
    var lat = lista[counter++];
    var marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: long,
      },
      map: map,
      title: nombres[index],
    });
  }
};
