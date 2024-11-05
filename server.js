const express = require("express");
const path = require("path");
const app = express();

// Servindo arquivos estáticos na pasta raiz
app.use(express.static(__dirname));

// Rota para servir o index.html na raiz "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Rota para servir index.html em "/inicio"
app.get("/inicio", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Mudado para servir index.html
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
