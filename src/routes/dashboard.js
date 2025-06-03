var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get(`/variacaoMaisEscolhida`, (req, res) => {
    dashboardController.variacaoMaisEscolhida(req, res);
});


module.exports = router;