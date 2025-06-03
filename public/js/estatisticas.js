// function getNomeVariacaoPorId(id) {
//     if (id == 1) return 'Fada Açucarada';
//     else if (id == 2) return 'Giselle Primeiro Ato';
//     else if (id == 3) return 'Giselle Segundo Ato';
//     else if (id == 4) return 'Peasant ou Paysant';
//     else if (id == 5) return 'Cupido';
//     else if (id == 6) return 'Kitri';
//     else if (id == 7) return 'Odile';
//     else if (id == 8) return 'Aurora';
//     else if (id == 9) return 'Esmeralda';
//     else if (id == 10) return 'Paquita';
//     else if (id == 11) return 'Raymonda';
//     else if (id == 12) return 'Medora';
//     else if (id == 13) return 'Gulnara';
//     else if (id == 14) return 'Nikiya Primeiro Ato';
//     else if (id == 15) return 'Nikiya Segundo Ato';
//     else if (id == 16) return 'O Pássaro Azul';
//     else if (id == 17) return 'Petrouchka';
//     else if (id == 18) return 'Spartacus';
//     else if (id == 19) return 'Chamas de Paris';
//     else if (id == 20) return 'O Talismã';
//     else if (id == 21) return 'Scherazade';
//     else if (id == 22) return 'Solor';
//     else if (id == 23) return 'Basilio';
//     else if (id == 24) return 'Príncipe Siegfried';
//     else if (id == 25) return 'Príncipe Désiré';
//     else if (id == 26) return 'Albrecht';
//     else if (id == 27) return 'Jean de Brienne';
//     else if (id == 28) return 'Ali';
//     else if (id == 29) return 'Acteon';
//     else return 'O Corsarie';
// }
window.onload = () => {
    variacaoMaisEscolhida('Masc');
    variacaoMaisEscolhida('Fem');
    kpiTempoDeConclusao(sessionStorage.ID_USUARIO)
    kpiQtdVezesFem(sessionStorage.ID_USUARIO)
    kpiQtdVezesMasc(sessionStorage.ID_USUARIO)
}

function variacaoMaisEscolhida(tipo) {
    fetch(`/dashboard/variacaoMaisEscolhida/${tipo}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    if (tipo == 'Masc') {
                        plotarGraficoMasc(resposta);
                    } else {
                        plotarGraficoFem(resposta)
                    }
                })
            } else {
                console.log('Erro ao enviar dados para o Banco de Dados!')
            }
        }).catch(function (erro) { console.log(erro) })
}

function kpiTempoDeConclusao(idUsuario) {
    fetch(`/kpi/tempoDeConclusao/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                var divKpiTempo = document.getElementById('kpiTempoDeConclusao')
                divKpiTempo.innerHTML = resposta[0]['Tempo de conclusão']
            })
        } else {
            console.log('Erro ao enviar dados para o banco de dados')
        }
    }).catch(function (erro) {
        console.log(erro)
    })
}

function kpiQtdVezesFem(idUsuario) {
    fetch(`/kpi/qtdVezesFem/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {

                var divKpiQtdFem = document.getElementById('kpiQtdVezesFem')
                divKpiQtdFem.innerHTML = resposta[0]['count(*)']
            })
        } else {
            console.log('Erro ao enviar dados para o banco de dados')
        }
    }).catch(function (erro) {
        console.log(erro)
    })
}


function kpiQtdVezesMasc(idUsuario) {
    fetch(`/kpi/qtdVezesMasc/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {

                var divKpiQtdMasc = document.getElementById('kpiQtdVezesMasc')
                divKpiQtdMasc.innerHTML = resposta[0]['count(*)']
            })
        } else {
            console.log('Erro ao enviar dados para o banco de dados')
        }
    }).catch(function (erro) {
        console.log(erro)
    })
}

function plotarGraficoMasc(resposta) {

    var labels_masc = []

    var data_grafico_masc = {
        labels: labels_masc,
        datasets: [{
            label: '',
            data: [],
            fill: false,
            borderColor: '#551c36',
            backgroundColor: '#ADD8E6',
            tension: 0.1
        }]
    }


    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels_masc.push(registro.nomeVariacao);
        data_grafico_masc.datasets[0].data.push(registro.total)

    }

    var config_grafico_masc = {
        type: 'bar',
        data: data_grafico_masc,
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    }

    var canvasGraficoMasc = document.getElementById('variacaoMascMaisEscolhida')

    new Chart(canvasGraficoMasc, config_grafico_masc)
}

function plotarGraficoFem(resposta) {

    var labels_Fem = []

    var data_grafico_Fem = {
        labels: labels_Fem,
        datasets: [{
            label: '',
            data: [],
            fill: false,
            borderColor: 'pink',
            backgroundColor: 'pink',
            tension: 0.1
        }]
    }


    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels_Fem.push(registro.nomeVariacao);
        data_grafico_Fem.datasets[0].data.push(registro.total)

    }

    var config_grafico_Fem = {
        type: 'bar',
        data: data_grafico_Fem,
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    }

    var canvasGraficoFem = document.getElementById('variacaoFemMaisEscolhida')

    new Chart(canvasGraficoFem, config_grafico_Fem)
}
