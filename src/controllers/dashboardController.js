var dashboardModel = require('../models/dashboardModel');

function variacaoMaisEscolhida(req, res) {
    var tipo1 = 'Masc'
    var tipo2 = 'Fem'

    dashboardModel.variacaoMaisEscolhida(tipo1)
        .then((resultado) => {
            dashboardModel.variacaoMaisEscolhida(tipo2)
            console.log('res', resultado)
                .then((resultado2) => {
                    res.json({
                        resultadoMasc: resultado,
                        resultadoFem: resultado2
                    }
                    );
                })
                .catch((erro) => {
                    res.status(500).json(erro.sqlMessage || erro.message);
                });


        })
        .catch((erro) => {
            console.error("Erro no Masc:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}

function variacaoMaisEscolhida(req, res) {
    var tipo = req.params.tipo

    dashboardModel.variacaoMaisEscolhida(tipo)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro no Masc:", erro);
            res.status(500).json({ erro: erro.sqlMessage || erro.message });
        });
}

function enviarDadosPersonalidade(req, res) {
    var fkVariacao = req.body.fkVariacaoServer
    var fkUsuario = req.body.fkUsuarioServer
    dashboardModel.enviarDadosPersonalidade(fkVariacao, fkUsuario).then(function (resultado) {
        res.status(200).send({ fkVariacao: fkVariacao, fkUsuario: fkUsuario })
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })

}

function variacaoMaisCombina(req, res) {
    var tipo = req.params.tipo

    dashboardModel.variacaoMaisCombina(tipo)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.error("Erro no Masc:", erro);
            res.status(500).json({ erro: erro.sqlMessage || erro.message });
        });
}

module.exports = {
    variacaoMaisEscolhida,
    enviarDadosPersonalidade,
    variacaoMaisCombina,
};