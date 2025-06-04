var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get('/variacaoMaisEscolhida/:tipo', (req, res) => {
    dashboardController.variacaoMaisEscolhida(req, res);
});

router.post('/enviarDadosPersonalidade', (req, res) => {
    dashboardController.enviarDadosPersonalidade(req, res);
});

router.get('/variacaoMaisCombina/:tipo', (req, res) => {
    dashboardController.variacaoMaisCombina(req, res);
});

module.exports = router;