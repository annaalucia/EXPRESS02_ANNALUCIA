//incorporar respostas a partir de outros arquivos
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Servidor no ar mano!!!");
});

//criar arquivo functions

//importar funções
const funcoes = require("./functions");

app.get("/", (req, res) => {
  res.send("Teste com arquivos externos");
});

//rota para a função add
app.get("/add/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const resultado = funcoes.add(a, b);

  res.send(`A soma de ${a} com ${b} é ${resultado}`);
});

//criar rota para sub (com hífen)
app.get("/add/:a-:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  const resultado = funcoes.add(a, b);

  res.send(`A sona de ${a} com ${b} é ${resultado}`);
});
