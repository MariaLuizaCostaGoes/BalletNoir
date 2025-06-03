var database = require('../database/config');

function tempoDeConclusao(idUsuario) {
	const instrucao = `
    SELECT timediff(startTime, endTime) 'Tempo de conclusão' FROM quiz WHERE fkUsuario = ${idUsuario};
  `;

	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function mediaTempodeConclusaoFem() {
	const instrucao = `
	SELECT SEC_TO_TIME(ROUND(AVG(TIMESTAMPDIFF(SECOND, startTime, endTime)))) AS media_tempo_formatado FROM quiz WHERE tipo = 'Fem';
	`;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function mediaTempodeConclusaoMasc() {
	const instrucao = `
	SELECT SEC_TO_TIME(ROUND(AVG(TIMESTAMPDIFF(SECOND, startTime, endTime)))) AS media_tempo_formatado FROM quiz WHERE tipo = 'Masc';
	`;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	tempoDeConclusao,
	mediaTempodeConclusaoFem,
	mediaTempodeConclusaoMasc
};
