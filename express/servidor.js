var cafe = require("express");
var aplicacion = cafe();
var ruta = "index.html";

aplicacion.get("/", inicio);
aplicacion.get("/cursos",cursos);

  function inicio(peticion, resultado)
  {
    resultado.send("index.html");
  }

  function cursos(peticion, resultado)
  {
    resultado.send("Estos son los <strong>cursos</strong>");
  }

  aplicacion.listen(8989);
