var kpiModel = require('../models/kpiModel');

function tempoDeConclusao(req, res) {
	let idUsuario = req.params.idUsuario;

	kpiModel
		.tempoDeConclusao(idUsuario)
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function mediaTempodeConclusaoFem(req, res) {
	kpiModel
		.mediaTempodeConclusaoFem()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function mediaTempodeConclusaoMasc(req, res) {
	kpiModel
		.mediaTempodeConclusaoMasc()
		.then((resultado) => {
			res.status(200).json(resultado);
		})
		.catch((erro) => {
			res.status(500).json(erro.sqlMessage);
		});
}

function qtdVezesFem(req, res) {
	var idUsuario = req.params.idUsuario;
	kpiModel.qtdVezesFem(idUsuario).then((resultado) => {
		res.status(200).json(resultado)
	}).catch((erro) => {
		res.status(500).json(erro.sqlMessage)
	})
}


function qtdVezesMasc(req, res) {
	var idUsuario = req.params.idUsuario;
	kpiModel.qtdVezesMasc(idUsuario).then((resultado) => {
		res.status(200).json(resultado)
	}).catch((erro) => {
		res.status(500).json(erro.sqlMessage)
	})
}

module.exports = {
	tempoDeConclusao,
	mediaTempodeConclusaoFem,
	mediaTempodeConclusaoMasc,
	qtdVezesFem,
	qtdVezesMasc
};
