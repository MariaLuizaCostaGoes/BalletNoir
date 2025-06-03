var vtVariacao = [
    "card-OQuebraNozes",
    "card-Giselle",
    "card-DomQuixote",
    "card-OLagodosCisnes",
    "card-ABelaAdormecida",
    "card-Esmeralda",
    "card-Paquita",
    "card-Raymonda",
    "card-LeCorsaire",
    "card-LaBayadere",
    "card-Petrouchka",
    "card-Spartacus",
    "card-ChamasdeParis",
    "card-OTalisma",
    "card-Scherazade",
    "card-DianaeActeon"
];

function proximo() {
    const articles = document.querySelectorAll('.carrossel article');
    let anterior = articles[0].classList[1]; // Guarda a primeira classe personalizada

    for (let i = 0; i < articles.length - 1; i++) {
        articles[i].classList.replace(articles[i].classList[1], articles[i + 1].classList[1]);
    }

    // A última recebe a primeira
    articles[articles.length - 1].classList.replace(articles[articles.length - 1].classList[1], anterior);
}
