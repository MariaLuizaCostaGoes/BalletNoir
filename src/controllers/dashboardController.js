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
					res.status(500).json(erro.sqlMessage ||erro.message);
				});


		})
		.catch((erro) => {
			console.error("Erro no Masc:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
		});
}

function variacaoMaisEscolhida(req, res) {
    var tipo1 = 'Masc';
    var tipo2 = 'Fem';

    dashboardModel.variacaoMaisEscolhida(tipo1)
        .then((resultadoMasc) => {
            dashboardModel.variacaoMaisEscolhida(tipo2)
                .then((resultadoFem) => {
                    res.json({
                        resultadoMasc,
                        resultadoFem
                    });
                })
                .catch((erro) => {
                    console.error("Erro no Fem:", erro);
                    res.status(500).json({ erro: erro.sqlMessage || erro.message });
                });
        })
        .catch((erro) => {
            console.error("Erro no Masc:", erro);
            res.status(500).json({ erro: erro.sqlMessage || erro.message });
        });
}


module.exports = {
	variacaoMaisEscolhida,
};