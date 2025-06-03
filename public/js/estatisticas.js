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
    variacaoMaisEscolhida();
    kpiTempoDeConclusao(sessionStorage.ID_USUARIO)
    kpiQtdVezesFem(sessionStorage.ID_USUARIO)
    kpiQtdVezesMasc(sessionStorage.ID_USUARIO)
}

function variacaoMaisEscolhida() {
    fetch(`/dashboard/variacaoMaisEscolhida`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    plotarGrafico(resposta);
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



let GraficoFem = null;
let GraficoMasc = null;

function plotarGrafico(resposta) {
    const label_masc_mais = []
    const data_masc_mais = {
        labels: label_masc_mais,
        datasets: [{
            label: 'Variacao Masculina mais escolhida',
            data: [],
            fill: false,
            borderColor: '#551c36',
            backgroundColor: '#ADD8E6',
            tension: 0.1
        },
        ]
    };



    const label_fem_mais = []
    const data_fem_mais = {
        labels: label_fem_mais,
        datasets: [{
            label: 'Variacao Feminina mais escolhida',
            data: [],
            fill: false,
            borderColor: '#551c36',
            backgroundColor: '#551c36',
            tension: 0.1,
            backgroundColor: '#e0668c',
        },
        ],
    };
    var res_fem_index = resposta.resultadoFem.length;
    var res_fem = resposta.resultadoFem;

    console.log()
    for (let i = 0; i < res_fem_index; i++) {
        var registro = res_fem[i];
        console.log(registro)
        label_fem_mais.push(registro.nomeVariacao);
        data_fem_mais.datasets[0].data.push(registro.total);

    }
    var res_masc_index = resposta.resultadoMasc.length;
    var res_masc = resposta.resultadoMasc;
    console.log('data_masc_mais' + JSON.stringify(data_masc_mais))
    for (let i = 0; i < res_masc_index; i++) {
        var registro = res_masc[i];
        console.log(registro)
        label_masc_mais.push(registro.nomeVariacao);
        data_masc_mais.datasets[0].data.push(registro.total);

    }
    const config_fem_mais = {
        type: 'bar',
        data: data_fem_mais,
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
    };
    const config_masc_mais = {
        type: 'bar',
        data: data_masc_mais,
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

    };
    const ctx_fem_mais = document.getElementById('variacaoFemMaisEscolhida').getContext('2d');
    let GraficoFem = new Chart(ctx_fem_mais, config_fem_mais);
    const ctx_masc_mais = document.getElementById('variacaoMascMaisEscolhida').getContext('2d');
    let GraficoMasc = new Chart(ctx_masc_mais, config_masc_mais);
}
