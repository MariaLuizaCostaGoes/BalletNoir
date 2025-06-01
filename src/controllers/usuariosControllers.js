var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send('Seu email está undefined!');
    } else if (senha == undefined) {
        res.status(400).send('Sua senha está indefinida!');
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);

                    res.json({
                        idUsuario: resultadoAutenticar[0].idUsuario,
                        email: resultadoAutenticar[0].email,
                        nome: resultadoAutenticar[0].nome,
                        senha: resultadoAutenticar[0].senha,
                    });

                } else if (resultadoAutenticar.length == 0) {
                    res.status(403).send('Email e/ou senha inválido(s)');
                } else {
                    res.status(403).send('Mais de um usuário com o mesmo login e senha!');
                }
            }
        ).catch(function (erro) {
                console.log(erro);
                console.log('\nHouve um erro ao realizar o login! Erro: ', erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

//Quiz

function pegarDescricao(req, res) {
    var idVariacao = req.params.idVariacao
    usuarioModel.pegarDescricao(idVariacao).then(function (resultado) {
        res.status(200).json(resultado)
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

function enviarDadosQuiz(req, res) {
    var fkVariacao = req.body.fkVariacaoServer
    var fkUsuario = req.body.fkUsuarioServer
    usuarioModel.enviarDadosQuiz(fkVariacao, fkUsuario).then(function (resultado) {
        res.status(200).send({ fkVariacao: fkVariacao, fkUsuario: fkUsuario })
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })

}

module.exports = {
    autenticar,
    cadastrar,
    pegarDescricao,
    enviarDadosQuiz
}