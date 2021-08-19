const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome"><br>
  Outro campo: <input type="text" name="aquioutrocampo">
  <button>Olá mundo</button>
  </form>
  `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  // req.params -> /testes/3
  // req.query -> /testes/?chave1=valor1&chave2=valor2&chave3=valor3
  console.log(req.params.idUsuarios);
  console.log(req.query);
  res.send(req.query.chave1);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
