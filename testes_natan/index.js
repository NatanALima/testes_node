// require("./modules/express");
const express = require("express");
const app = express();
const port = 8080;


/* Primeiro teste */
// const frasesRoutes = require('./teste_routes/routes/frases');
// app.use(frasesRoutes);

const userRoutes = require('./routes/user');
app.use(userRoutes);

app.listen(port, () => console.log("tudo OK!"))