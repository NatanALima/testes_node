// require("./modules/express");
const express = require("express");
const conn = require('./db/connect');
const userRoutes = require('./routes/user');
const app = express();
const port = 8080;

//Conexão com o Banco de dados
conn();

//express.json() -> serve para indicar que tudo que o express trabalhará é com JSON;
app.use(express.json());
app.use(userRoutes);

app.listen(port, () => console.log("tudo OK!"));