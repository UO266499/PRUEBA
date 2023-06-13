var noticias = new Object();
noticias.apikey = "7cc54f60-e75e-47d3-bf0f-9da1bba39c78";
noticias.unidades = "&units=metric";
noticias.idioma = "&lang=es";
noticias.error =
  "<h2>¡problemas! No puedo obtener información de <a href='https://newsapi.ai'>NewsApi</a></h2>";
noticias.cargarDatos = $(document).ready(function () {
  noticias.url = "https://eventregistry.org/api/v1/article/getArticles";

  $.ajax({
    dataType: "json",
    url: noticias.url,
    data: {
      action: "getArticles",
      keyword: "Belmonte de Miranda",
      articlesPage: 1,
      articlesCount: 100,
      articlesSortBy: "date",
      articlesSortByAsc: false,
      articlesArticleBodyLen: -1,
      resultType: "articles",
      dataType: ["news", "pr"],
      apiKey: "7cc54f60-e75e-47d3-bf0f-9da1bba39c78",
      forceMaxDataTimeWindow: 31,
    },
    method: "GET",
    success: function (data) {
      noticias.datos = data;
      noticias.verDatos();
    },
    error: function () {
      document.write(noticias.error);
    },
  });
});

noticias.verDatos = function () {
  var lasNoticias = noticias.datos.articles.results.slice(0, 10);

  document.getElementsByTagName("section")[3].innerHTML +=
    "<p>Última actualización: " + new Date().toLocaleString("es-ES") + "</p>";
  for (let index = 0; index < lasNoticias.length; index++) {
    var not = lasNoticias[index];
    document.getElementsByTagName("section")[3].innerHTML +=
      "<h3>" +
      not.title +
      "</h3>" +
      '<img src="' +
      not.image +
      '" ' +
      'alt="imagen de la noticia publicada por' +
      not.source.uri +
      '" />' +
      '<a href="' +
      not.url +
      '">Enlace a la noticia</a>' +
      "<p> Ultima actualización de la noticia: " +
      new Date(not.date).toLocaleString("es-ES") +
      "</p>";
  }
};
