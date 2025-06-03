var express = require("express");
var router = express.Router();

var kpiController = require('../controllers/kpiController');

router.get('/tempoDeConclusao/:idUsuario', (req, res) => {
  kpiController.tempoDeConclusao(req, res);
});

router.get('/qtdVezesFem/:idUsuario', (req, res) => {
  kpiController.qtdVezesFem(req, res);
})

router.get('/qtdVezesMasc/:idUsuario', (req, res) => {
  kpiController.qtdVezesMasc(req, res);
})

module.exports = router;