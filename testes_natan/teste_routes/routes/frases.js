const express = require("express");
const frasesController = require("../controllers/frases");

const router = express.Router();

/* 
    Há algumas coisas obsoletas neste formato. São elas:
    1º: não é necessário passar no get do router a função "(req, res) => {}", haja vista que os módulos do arquivo Controller já a possuem
    2º: não é necessário definir os parametros nas funções referentes ao arquivo controller
*/
// router.get("/", (req, res) => {
//     frasesController.fraseFazendinha(req, res);
// })

//Forma mais simplificada
router.get("/", frasesController.fraseFazendinha);

module.exports = router;