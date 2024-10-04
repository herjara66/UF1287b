const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("¡bienvenido al examen de Node.js!");
});

app.get("/carlos", function (req, res) {
  var nombre = req.query.nombre;
  res.send(nombre);
});

app.get("/carlos", function (req, res) {
  res.send("hola Carlos");
});

app.get("/calcular", function (req, res) {
  var numeroa = Number(req.query.numeroa);
  var numerob = Number(req.query.numerob);
  let resultado = numeroa + numerob;
  console.log(resultado);
  res.send("suma es : ${resultado}");
});

app.get(undef, function (req, res) {
  var numeroa = Number(req.query.numeroa);
  var numerob = Number(req.query.numerob);
  let resultado = numeroa + numerob;
  console.log(resultado);
  res.send("");
});

app.listen(port, () => {
  console.log(`Servidor   
 escuchando en el puerto ${port}`);
});
