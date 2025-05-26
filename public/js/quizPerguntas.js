
const perguntasMasculinas = [
    {
        frase: 'Qual dessas qualidades mais te define?',
        respostas: [
            { alternativa: 'Força e paixão', variacao: 'Solor' },
            { alternativa: 'Espírito aventureiro e charme', variacao: 'Basilio' },
            { alternativa: 'Nobreza e fidelidade', variacao: 'Príncipe Désiré' },
            { alternativa: 'Tristeza e arrependimento', variacao: 'Albrecht' },
        ],
    },
    {
        frase: 'O que melhor representa sua motivação?',
        respostas: [
            { alternativa: 'Proteger quem amo, mesmo com risco', variacao: 'Jean de Brienne' },
            { alternativa: 'Lutar contra o destino por amor', variacao: 'Príncipe Siegfried' },
            { alternativa: 'Demonstrar lealdade com talento', variacao: 'Ali' },
            { alternativa: 'Coragem diante das consequências', variacao: 'Acteon' },
        ],
    },
    {
        frase: 'Qual dessas cenas mais te emociona?',
        respostas: [
            { alternativa: 'Sonhar com quem perdeu', variacao: 'Solor' },
            { alternativa: 'Fingir a morte por amor', variacao: 'Basilio' },
            { alternativa: 'Despertar alguém com um beijo', variacao: 'Príncipe Désiré' },
            { alternativa: 'Ser salvo por quem magoou', variacao: 'Albrecht' },
        ],
    },
    {
        frase: 'Como você lida com desafios?',
        respostas: [
            { alternativa: 'Com heroísmo e bravura', variacao: 'Jean de Brienne' },
            { alternativa: 'Com intensidade emocional', variacao: 'Príncipe Siegfried' },
            { alternativa: 'Com virtuosismo e habilidade', variacao: 'Ali' },
            { alternativa: 'Com coragem, mesmo sem saída', variacao: 'Acteon' },
        ],
    },
    {
        frase: 'Qual dessas palavras mais ressoa com você?',
        respostas: [
            { alternativa: 'Redenção', variacao: 'Albrecht' },
            { alternativa: 'Aventura', variacao: 'Basilio' },
            { alternativa: 'Devoção', variacao: 'Solor' },
            { alternativa: 'Destino', variacao: 'Príncipe Siegfried' },
        ],
    },
    {
        frase: 'Você prefere ser reconhecido por...',
        respostas: [
            { alternativa: 'Sua bravura em batalha', variacao: 'Jean de Brienne' },
            { alternativa: 'Sua elegância e nobreza', variacao: 'Príncipe Désiré' },
            { alternativa: 'Sua ousadia e astúcia', variacao: 'Basilio' },
            { alternativa: 'Sua técnica impecável', variacao: 'Ali' },
        ],
    },
    {
        frase: 'O que mais te atrai em uma história?',
        respostas: [
            { alternativa: 'Sacrifício por amor', variacao: 'Solor' },
            { alternativa: 'Triunfo com humor', variacao: 'Basilio' },
            { alternativa: 'Ilusões e reviravoltas', variacao: 'Príncipe Siegfried' },
            { alternativa: 'Tragédia e perdão', variacao: 'Albrecht' },
        ],
    },
    {
        frase: 'Como você descreveria sua energia?',
        respostas: [
            { alternativa: 'Explosiva e intensa', variacao: 'Ali' },
            { alternativa: 'Contida, mas poderosa', variacao: 'Príncipe Siegfried' },
            { alternativa: 'Alegre e despreocupada', variacao: 'Basilio' },
            { alternativa: 'Serena e heroica', variacao: 'Jean de Brienne' },
        ],
    },
    {
        frase: 'Em uma situação crítica, você...',
        respostas: [
            { alternativa: 'Luta até o fim, mesmo com medo', variacao: 'Acteon' },
            { alternativa: 'Segue seu coração, custe o que custar', variacao: 'Solor' },
            { alternativa: 'Tenta proteger os outros antes de si', variacao: 'Jean de Brienne' },
            { alternativa: 'Recorre à esperteza para sair da situação', variacao: 'Basilio' },
        ],
    },
    {
        frase: 'Se pudesse escolher um destino, seria...',
        respostas: [
            { alternativa: 'A redenção após o erro', variacao: 'Albrecht' },
            { alternativa: 'O reencontro com o verdadeiro amor', variacao: 'Príncipe Siegfried' },
            { alternativa: 'A liberdade conquistada com coragem', variacao: 'Ali' },
            { alternativa: 'A vitória sobre um grande inimigo', variacao: 'Jean de Brienne' },
        ],
    },
];

const perguntasFemininas = [
   {
        frase: 'Qual dessas qualidades você mais valoriza em si?',
        respostas: [
            { alternativa: 'Delicadeza e graça', variacao: 'Fada Açucarada' },
            { alternativa: 'Alegria e vivacidade', variacao: 'Giselle Primeiro Ato' },
            { alternativa: 'Tristeza e beleza etérea', variacao: 'Giselle Segundo Ato' },
            { alternativa: 'Força e independência', variacao: 'Kitri' },
        ],
    },
    {
        frase: 'Em um momento de crise, o que você faz?',
        respostas: [
            { alternativa: 'Mantém a esperança com ternura', variacao: 'Aurora' },
            { alternativa: 'Reage com inteligência e audácia', variacao: 'Esmeralda' },
            { alternativa: 'Expressa sentimentos com intensidade', variacao: 'Odile' },
            { alternativa: 'Age com leveza, buscando harmonia', variacao: 'Cupido' },
        ],
    },
    {
        frase: 'Como você lida com o amor?',
        respostas: [
            { alternativa: 'Com devoção, mesmo diante do sofrimento', variacao: 'Nikiya Primeiro Ato' },
            { alternativa: 'Com mistério e sedução', variacao: 'Scherazade' },
            { alternativa: 'Com paixão alegre e determinada', variacao: 'Kitri' },
            { alternativa: 'Com leveza e idealismo', variacao: 'Fada Açucarada' },
        ],
    },
    {
        frase: 'O que mais te atrai em uma apresentação de balé?',
        respostas: [
            { alternativa: 'Elegância e precisão técnica', variacao: 'Paquita' },
            { alternativa: 'Energia e empolgação', variacao: 'Chamas de Paris' },
            { alternativa: 'Espiritualidade e lirismo', variacao: 'Nikiya Segundo Ato' },
            { alternativa: 'Movimentos leves e fantasiosos', variacao: 'O Pássaro Azul' },
        ],
    },
    {
        frase: 'Qual dessas frases te representa melhor?',
        respostas: [
            { alternativa: 'Sou como um espírito que protege quem amo', variacao: 'Giselle Segundo Ato' },
            { alternativa: 'Minha alegria é contagiante', variacao: 'Giselle Primeiro Ato' },
            { alternativa: 'Uso charme como minha arma', variacao: 'Odile' },
            { alternativa: 'Tenho uma força que poucos enxergam', variacao: 'Esmeralda' },
        ],
    },
    {
        frase: 'Escolha uma ambientação que mais te atrai:',
        respostas: [
            { alternativa: 'Um reino encantado feito de doces', variacao: 'Fada Açucarada' },
            { alternativa: 'Uma floresta mágica cheia de seres místicos', variacao: 'Cupido' },
            { alternativa: 'Uma cidade vibrante durante uma revolução', variacao: 'Chamas de Paris' },
            { alternativa: 'Uma praia exótica em meio a aventuras de piratas', variacao: 'Medora' },
        ],
    },
    {
        frase: 'Quando está em público, você tende a...',
        respostas: [
            { alternativa: 'Encantar com charme e carisma', variacao: 'Paquita' },
            { alternativa: 'Impressionar com intensidade dramática', variacao: 'Odile' },
            { alternativa: 'Cativar pela sutileza e elegância', variacao: 'Aurora' },
            { alternativa: 'Animar o ambiente com alegria', variacao: 'Kitri' },
        ],
    },
    {
        frase: 'Qual dessas figuras históricas ou literárias você mais se identifica?',
        respostas: [
            { alternativa: 'Uma cigana rebelde e livre', variacao: 'Esmeralda' },
            { alternativa: 'Uma princesa destinada a grandes feitos', variacao: 'Raymonda' },
            { alternativa: 'Uma sacerdotisa apaixonada e trágica', variacao: 'Nikiya Primeiro Ato' },
            { alternativa: 'Uma heroína romântica e leal', variacao: 'Giselle Segundo Ato' },
        ],
    },
    {
        frase: 'Como você gostaria de ser lembrada?',
        respostas: [
            { alternativa: 'Por minha leveza e delicadeza', variacao: 'Fada Açucarada' },
            { alternativa: 'Por minha coragem e intensidade', variacao: 'Scherazade' },
            { alternativa: 'Por minha nobreza e elegância', variacao: 'Raymonda' },
            { alternativa: 'Por minha paixão e força', variacao: 'Kitri' },
        ],
    },
    {
        frase: 'Como você age quando está apaixonado?',
        respostas: [
            { alternativa: 'Com doçura e admiração', variacao: 'Giselle Primeiro Ato' },
            { alternativa: 'Com intensidade e entrega', variacao: 'Nikiya Primeiro Ato' },
            { alternativa: 'Com sedução e mistério', variacao: 'Scherazade' },
            { alternativa: 'Com proteção e coragem', variacao: 'Gulnara' },
        ],
    },
    {
        frase: 'Qual dessas características é mais você?',
        respostas: [
            { alternativa: 'Majestosa e decidida', variacao: 'Raymonda' },
            { alternativa: 'Romântica e doce', variacao: 'Aurora' },
            { alternativa: 'Brincalhona e amorosa', variacao: 'Cupido' },
            { alternativa: 'Energética e rebelde', variacao: 'Chamas de Paris' },
        ],
    },
    {
        frase: 'Se fosse uma personagem de conto de fadas, seria...',
        respostas: [
            { alternativa: 'A fada encantada que guia os outros', variacao: 'Fada Açucarada' },
            { alternativa: 'A princesa que supera desafios', variacao: 'Aurora' },
            { alternativa: 'A heroína que luta por justiça', variacao: 'Esmeralda' },
            { alternativa: 'A mulher misteriosa que guarda um segredo', variacao: 'Scherazade' },
        ],
    },
    {
        frase: 'Qual desses temas mais te inspira?',
        respostas: [
            { alternativa: 'Redenção e perdão', variacao: 'Giselle Segundo Ato' },
            { alternativa: 'Liberdade e aventura', variacao: 'Medora' },
            { alternativa: 'Elegância e tradição', variacao: 'Paquita' },
            { alternativa: 'Sedução e engano', variacao: 'Odile' },
        ],
    },
    {
        frase: 'Qual dessas situações você prefere viver?',
        respostas: [
            { alternativa: 'Dançar sob a luz das estrelas como um espírito livre', variacao: 'Nikiya Segundo Ato' },
            { alternativa: 'Ser o centro de uma celebração real', variacao: 'Aurora' },
            { alternativa: 'Viver no coração da revolução', variacao: 'Chamas de Paris' },
            { alternativa: 'Flutuar como uma ave mágica pelos céus', variacao: 'O Pássaro Azul' },
        ],
    },
];

const pontuacao = {
    FadaAcucarada: 0,
    GisellePrimeiroAto: 0,
    GiselleSegundoAto: 0,
    Peasant: 0,
    Cupido: 0,
    Kitri: 0,
    Odile: 0,
    Aurora: 0,
    Esmeralda: 0,
    Paquita: 0,
    Raymonda: 0,
    Medora: 0,
    Gulnara: 0,
    NikiyaPrimeiroAto: 0,
    NikiyaSegundoAto: 0,
    OPássaroAzul: 0,
    Petrouchka: 0,
    Spartacus: 0,
    ChamasdeParis: 0,
    OTalismã: 0,
    Scherazade: 0,
    Solor: 0,
    Basilio: 0,
    PríncipeSiegfried: 0,
    PríncipeDésiré: 0,
    Albrecht: 0,
    JeandeBrienne: 0,
    Ali: 0,
    Acteon: 0,
};

let indicePergunta = 0;
button_iniciar = document.getElementById('quiz-button-start');
div_quiz = document.getElementById('quiz-main-container');
pergunta_quiz = document.getElementById('quiz-descricao');
titulo_quiz = document.getElementById('quiz-titulo');

const dataHoraMomento = () => {
    const date = new Date();
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');

    const dataHoraFormatada = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    return dataHoraFormatada;
};

var idUsuarioQuiz = sessionStorage.ID_USUARIO;

const iniciarQuiz = (startTime, idUsuario) => {
    console.log('DATA DE INICIO: ', startTime);

    fetch('/quiz/inicio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            dataHoraInicioServer: dataHoraInicio,
            idUsuarioServer: idUsuario,
        }),
    })
        .then((resposta) => {
            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.DATA_INICIO = json.dataHoraInicio;
                    sessionStorage.ID_USUARIO_INICIO = json.idUsuario;
                });
            } else {
                console.log('Houve um erro ao captar a data e hora de inicio!');
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch((erro) => {
            console.log(erro);
        });

    return false;
};

const finalizarQuiz = (dataHoraInicioFinal, dataHoraFinal, idUsuario, idVariaca0) => {
    console.log('DATA DE FINALIZACAO: ', dataHoraFinal);

    fetch('/quiz/final', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            dataHoraInicioFinalServer: dataHoraInicioFinal,
            dataHoraFinalServer: dataHoraFinal,
            idUsuarioServer: idUsuario,
            idVariaca0Server: idVariaca0,
        }),
    })
        .then((resposta) => {
            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.DATA_INICIO_FINAL = json.dataHoraInicioFinal;
                    sessionStorage.DATA_FINAL = json.dataHoraFinal;
                    sessionStorage.ID_USUARIO_FINAL = json.idUsuario;
                    sessionStorage.ID_VARIACAO = json.idResultado;
                });
            } else {
                console.log('Houve um erro ao captar a data e hora de finzalização!');
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch((erro) => {
            console.log(erro);
        });
    resultado();

    return false;
};

button_iniciar.addEventListener('click', () => {
    iniciarQuiz(dataHoraMomento(), idUsuarioQuiz);
    button_iniciar.style.display = 'none';
    pergunta_quiz.style.marginTop = '0.5%';
    pergunta_quiz.style.marginBottom = '3%';
    mostrarPergunta();
});

const mostrarPergunta = () => {

    if (!quizIniciado) {
        titulo_quiz.innerHTML = 'Escolha';
        pergunta_quiz.innerHTML = perguntaGenero.frase;

        div_quiz.innerHTML = `
			<div class="perguntas-cima">
				<div class="pergunta" onclick="selecionarGenero('masculino')">Masculinas</div>
				<div class="pergunta" onclick="selecionarGenero('feminino')">Femininas</div>
			</div>
		`;
        return; // para aqui e espera o usuário clicar em uma opção
    }

    const pergunta = arrayPerguntas[indicePergunta];
    titulo_quiz.innerHTML = `${indicePergunta + 1}ª pergunta`;

    pergunta_quiz.innerHTML = pergunta.frase;

    div_quiz.innerHTML = `
  <div class="perguntas-cima">
    <div class="pergunta" onclick="responder(0)">	
      ${pergunta.respostas[0].alternativa}
    </div>
    <div class="pergunta" onclick="responder(1)">
    ${pergunta.respostas[1].alternativa}
    </div>
  </div>

  <div class="perguntas-baixo">
    <div class="pergunta" onclick="responder(2)">
    ${pergunta.respostas[2].alternativa}
    </div>
    <div class="pergunta" onclick="responder(3)">
    ${pergunta.respostas[3].alternativa}
    </div>
  </div>
  `;
};

const selecionarGenero = (genero) => {
    generoSelecionado = genero;
    arrayPerguntasAtual = genero == 'masculino' ? perguntasMasculinas : perguntasFemininas;
    quizIniciado = true;
    iniciarQuiz(dataHoraMomento(), idUsuarioQuiz);
    mostrarPergunta(); // chama a primeira pergunta real
};


const verificarResultado = () => {
    let personagem = '';
    let pontPersonagem = 0;

    for (let p in pontuacao) {
        if (pontuacao[p] > pontPersonagem) {
            pontPersonagem = pontuacao[p];
            personagem = p;
        }
    }

    return personagem;
};

const idPersonagem = () => {
    let nomeVariacao = verificarResultado();

    if (nomeVariaca0 == 'FadaAcucarada') return 0;
    else if (nomeVriacao == 'GisellePrimeiroAto') return 1;
    else if (nomeVariacao == 'GiselleSegundoAto') return 2;
    else if (nomeVariacao == 'Peasant') return 3;
    else if (nomeVariacao == 'Cupido') return 4;
    else if (nomeVariacao == 'Kitri') return 5;
    else if (nomeVariacao == 'Odile') return 6;
    else if (nomeVariacao == 'Aurora') return 7;
    else if (nomeVariacao == 'Esmeralda') return 8;
    else if (nomeVariacao == 'Paquita') return 9;
    else if (nomeVariacao == 'Raymonda') return 10;
    else if (nomeVariacao == 'Medora') return 11;
    else if (nomeVariacao == 'Gulnara') return 12;
    else if (nomeVariacao == 'NikiyaPrimeiroAto') return 13;
    else if (nomeVariacao == 'NikiyaSegundoAto') return 14;
    else if (nomeVariacao == 'OPássaroAzul') return 15;
    else if (nomeVariacao == 'Petrouchka') return 16;
    else if (nomeVariacao == 'Spartacus') return 17;
    else if (nomeVariacao == 'ChamasdeParis') return 18;
    else if (nomeVariacao == 'OTalismã') return 19;
    else if (nomeVariacao == 'Scherazade') return 20;
    else if (nomeVariacao == 'Solor') return 21;
    else if (nomeVariacao == 'Basilio') return 22;
    else if (nomeVariacao == 'PríncipeSiegfried') return 23;
    else if (nomeVariacao == 'PríncipeDésiré') return 24;
    else if (nomeVariacao == 'Albrecht') return 25;
    else if (nomeVariacao == 'JeandeBrienne') return 26;
    else if (nomeVariacao == 'Ali') return 27;
    else if (nomeVariacao == 'Acteon') return 28;
    else return 29;

};

const responder = (indiceOpcao) => {
    const personagem = arrayPerguntas[indicePergunta].respostas[indiceOpcao].personagem;
    pontuacao[personagem]++;

    indicePergunta++;

    if (indicePergunta < arrayPerguntas.length) {
        mostrarPergunta();
    } else {
        let dataHoraInicioFinal = sessionStorage.DATA_INICIO;
        let idPersonagemResultado = idPersonagem();
        finalizarQuiz(dataHoraInicioFinal, dataHoraMomento(), idUsuarioQuiz, idPersonagemResultado);
    }
};

const resultado = () => {
    pergunta_quiz.innerHTML = '';

    let personagemEscolhido = verificarResultado();

    mostrarResultado(personagemEscolhido);
};

const mostrarResultado = (personagemEscolhido) => {
    titulo_quiz.innerHTML = 'Resultado';
    if (pergunta_quiz) {
        pergunta_quiz.remove();
    }

    div_quiz.innerHTML = `
    <div class="quiz-page-resultado">
    <p>Seu personagem é: <span class="quiz-page-txt-yellow">${personagemEscolhido}</span></p>
    <img src="img/resultado/${personagemEscolhido}-resultado.gif" class="quiz-page-img-resultado" id="img-resultado">
    <p class="quiz-page-text-desc-resultado">Confira a descrição do personagem e dados sobre o quiz no seu <a href="perfil.html" class="quiz-final-link"><span class="quiz-page-txt-yellow">perfil</span></a>!</p>
    </div>
    
  `;

    const img_resultado = document.getElementById('img-resultado');
    const quiz_container = document.getElementById('quiz-container');

    switch (personagemEscolhido) {
        default:
            quiz_container.style.marginTop = '0';
            break;
    }

    if (personagemEscolhido == 'Luffy' || personagemEscolhido == 'Brook') img_resultado.style.width = '100%';
    else if (personagemEscolhido == 'Jinbe' || personagemEscolhido == 'Usopp') img_resultado.style.width = '90%';
    else if (personagemEscolhido == 'Sanji') img_resultado.style.width = '80%';
    else if (personagemEscolhido == 'Zoro' || personagemEscolhido == 'Robin') img_resultado.style.width = '70%';
    else if (personagemEscolhido == 'Nami') img_resultado.style.width = '60%';
    else img_resultado.style.width = '50%';
};

window.onload = () => {
    if (sessionStorage.ID_PERSONAGEM != undefined) {
        pergunta_quiz.innerHTML =
            '<p>Você já realizou o quiz! Vá até o seu <a href="perfil.html" class="quiz-final-link"><span class="quiz-page-txt-yellow">perfil</span></a> e veja a descrição do seu personagem!</p>';
        button_iniciar.style.display = 'none';
    }
};
