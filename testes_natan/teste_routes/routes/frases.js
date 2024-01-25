const express = require("express");
const frasesController = require("../controllers/frases");

const router = express.Router();

router.get("/", (req, res) => {
    frasesController.fraseFazendinha(req, res);
})

module.exports = router;