var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuariosControllers");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.get("/pegarDescricao/:idVariacao", function (req, res) {
    usuarioController.pegarDescricao(req, res);

})

router.post("/autenticar", function(req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/enviarDadosQuiz", function(req, res) {
    usuarioController.enviarDadosQuiz(req, res);
})

router.post("/inicioQuiz", function(req, res){
    usuarioController.inicioQuiz(req, res);
})

router.post("/finalQuiz", function (req, res) {
    usuarioController.finalQuiz(req, res)
})

router.post("/PegaridQuiz/:dataInicioQuiz", function (req, res) {
    usuarioController.PegaridQuiz(req, res)
})

module.exports = router;