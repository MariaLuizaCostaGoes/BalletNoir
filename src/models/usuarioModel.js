const { idQuiz } = require("../controllers/usuariosControllers");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//Quiz
function pegarDescricao(idVariacao) {
    var instrucaoSql = `select descricaoVariacao from resultado where idResultado = ${idVariacao};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarDadosQuiz(fkVariacao, fkUsuario, fkQuiz) {
    var instrucaoSQL = `insert into resultado (fkVariacao, fkUsuario, fkQuiz) values (${fkVariacao}, ${fkUsuario}, ${fkQuiz});`
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function inicioQuiz(startTime, tipo) {
    var instrucaoSQL = `insert into quiz (startTime, tipo, endTime) values ('${startTime}', '${tipo}', '${startTime}');`
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function finalQuiz(endTime, startTime, idQuiz) {
    var instrucaoSQL = `update quiz set endTime = '${endTime}' where startTime = '${startTime}' and idQuiz = ${idQuiz};`
    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function PegaridQuiz(dataInicioQuiz) {
    var instrucaoSql = `select idQuiz from quiz where startTime = '${dataInicioQuiz}';`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    pegarDescricao,
    enviarDadosQuiz,
    inicioQuiz,
    finalQuiz,
    PegaridQuiz
};