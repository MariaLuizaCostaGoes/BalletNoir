var database = require('../database/config');

function tempoDeConclusao(idUsuario) {
	const instrucao = `
    SELECT timediff(endTime, startTime) 'Tempo de conclusão' FROM resultado join usuario on fkUsuario = ${idUsuario} join quiz on fkQuiz = idQuiz limit 1;
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

function qtdVezesFem(idUsuario) {
const instrucao = `
	select count(*) from usuario join resultado on fkUsuario = idUsuario join quiz on fkquiz = idQuiz where idUsuario = ${idUsuario} and tipo = 'Fem';
	`;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

function qtdVezesMasc(idUsuario) {
const instrucao = `
	select count(*) from usuario join resultado on fkUsuario = idUsuario join quiz on fkquiz = idQuiz where idUsuario = ${idUsuario} and tipo = 'Masc';
	`;
	console.log('Executando a instrução SQL: \n' + instrucao);
	return database.executar(instrucao);
}

module.exports = {
	tempoDeConclusao,
	mediaTempodeConclusaoFem,
	mediaTempodeConclusaoMasc,
	qtdVezesFem,
	qtdVezesMasc
};
