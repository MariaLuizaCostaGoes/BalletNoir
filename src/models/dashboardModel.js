var database = require('../database/config');

function variacaoMaisEscolhida(tipo) {
  const instrucao = `
    SELECT 
      v.nomeVariacao,
      COUNT(r.idResultado) AS total
    FROM 
      variacao v
    LEFT JOIN resultado r ON r.fkVariacao = v.idVariacao
    LEFT JOIN quiz q ON r.fkQuiz = q.idQuiz
    WHERE v.genero = '${tipo}'
    GROUP BY 
      v.nomeVariacao
    ORDER BY 
      total DESC;
  `;

  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}


function enviarDadosPersonalidade(fkVariacao, fkUsuario) {
  var instrucaoSQL = `insert into resultadoPersonalidade (fkVariacao, fkUsuario) values (${fkVariacao}, ${fkUsuario});`
  console.log("Executando a instrução SQL: \n" + instrucaoSQL);
  return database.executar(instrucaoSQL);
}

function variacaoMaisCombina(tipo) {
  var instrucaoSQL = `
    SELECT 
          v.nomeVariacao,
          ROUND(COUNT(rp.idResultado) / (
              SELECT COUNT(*) 
              FROM resultadoPersonalidade
                WHERE fkVariacao IN (SELECT idVariacao FROM variacao WHERE genero = '${tipo}')
          ) * 100, 2) AS percentual
      FROM resultadoPersonalidade rp
      JOIN variacao v ON rp.fkVariacao = v.idVariacao
      WHERE v.genero = '${tipo}'
      GROUP BY v.nomeVariacao
      ORDER BY percentual DESC;
  `

  console.log("Executando a instrução SQL: \n" + instrucaoSQL);
  return database.executar(instrucaoSQL);

}

module.exports = {
  variacaoMaisEscolhida,
  enviarDadosPersonalidade,
  variacaoMaisCombina
};
