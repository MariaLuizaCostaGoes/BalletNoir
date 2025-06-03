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


module.exports = {
    variacaoMaisEscolhida,
};
