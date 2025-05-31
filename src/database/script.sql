CREATE DATABASE IF NOT EXISTS ballet;
USE ballet;

CREATE TABLE IF NOT EXISTS usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(45) NOT NULL,
	email VARCHAR(45) NOT NULL,
	senha VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	startTime DATETIME,
	endTime DATETIME
);

CREATE TABLE IF NOT EXISTS variacao (
	idVariacao INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nomeVariacao VARCHAR(45) NOT NULL,
    nomeBalletDeRepertorio VARCHAR(45) NOT NULL,
    descricaoVariacao VARCHAR(1000) NOT NULL
);

CREATE TABLE IF NOT EXISTS resultado (
    idResultado INT AUTO_INCREMENT,
    fkQuiz INT,
    fkUsuario INT,
    fkVariacao INT,
    nomeVariacao VARCHAR(45),
    nomeBalletdeRepertorio VARCHAR(45),
    descricaoVariacao VARCHAR(1000),
    PRIMARY KEY (idResultado , fkQuiz , fkUsuario , fkVariacao),
    FOREIGN KEY (fkQuiz)
        REFERENCES quiz(idQuiz),
    FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario),
    FOREIGN KEY (fkVariacao)
        REFERENCES variacao (idVariacao)
);

INSERT INTO variacao (idVariacao, nomeVariacao, nomeBalletDeRepertorio, descricaoVariacao) VALUES
(1, 'Fada Açucarada', 'O Quebra-Nozes', 'A variação da Fada Açucarada é uma das danças mais icônicas do balé clássico, pertencente ao segundo ato do famoso balé O Quebra-Nozes, de Piotr Ilitch Tchaikovsky. Essa variação é conhecida por sua leveza e delicadeza, representando a magia do Reino dos Doces. A coreografia exige técnica refinada, com movimentos graciosos e saltos suaves, transmitindo a sensação de flutuar.'),
(2, 'Giselle Primeiro Ato', 'Giselle', 'A variação de Giselle é uma das mais emocionantes do balé clássico, pertencente ao primeiro ato do balé Giselle, criado em 1841 por Adolphe Adam, com libreto de Jules-Henri Vernoy de Saint-Georges e Théophile Gautier. Essa variação é interpretada pela protagonista, Giselle, uma jovem camponesa apaixonada por Albrecht, um nobre disfarçado de plebeu. A dança reflete sua alegria e inocência antes de descobrir a traição de Albrecht. A coreografia exige leveza, rapidez e grande controle técnico, com movimentos que expressam felicidade e entusiasmo.'),
(3, 'Giselle Segundo Ato', 'Giselle', 'O segundo ato de Giselle é um dos momentos mais icônicos do balé romântico. Após a morte de Giselle no primeiro ato, ela retorna como um espírito, tornando-se uma das Wilis, fantasmas de jovens que morreram antes do casamento. Essas entidades sobrenaturais têm o poder de forçar os homens a dançarem até a morte. Sua dança se torna etérea e melancólica, contrastando com a vivacidade do primeiro ato. Essa variação é um verdadeiro teste para bailarinas, pois exige não apenas técnica impecável, mas também uma interpretação emocional profunda.'),
(4, 'Peasant ou Paysant', 'Giselle', 'A coreografia é na verdade um grand pas de deux, ou seja: meninos e meninas podem escolher a variação que faz parte dele para dançar. Esta variação geralmente mostra um casal camponês em uma celebração de colheita ou festa, como a que ocorre na história original de Giselle.'),
(5, 'Cupido', 'Dom Quixote', 'Essa coreografia está no segundo ato do Ballet Don Quixote. É o ato do sonho, em que o Don Quixote sonha com a sua amada Dulcinéia e o Cupido está lá entre as Dríades. A dificuldade dessa variação está nos balances e na parte artística. E o “grand jeté” dela é pequeno, não é feito com as pernas em 180 graus. É um amorzinho de variação.'),
(6, 'Kitri', 'Dom Quixote', 'A variação de Kitri é uma das mais vibrantes e desafiadoras do balé clássico, pertencente ao balé Dom Quixote. Kitri é uma jovem determinada e cheia de energia, e sua variação reflete essa personalidade forte e alegre. A "Variação de Kitri" refere-se a uma coreografia solista, geralmente dançada por uma bailarina principal, que faz parte do ballet "Dom Quixote". É uma das variações mais populares e reconhecidas do repertório clássico de balé. Kitri é a personagem principal do ballet Dom Quixote, uma moça que se apaixona por um barbeiro, mas é forçada a se casar com um nobre rico, e sua história de amor é o cerne da narrativa do ballet. Essa variação é conhecida por seus saltos poderosos, giros rápidos e movimentos expressivos, exigindo grande técnica e presença de palco da bailarina.'),
(7, 'Odile', 'O Lago dos Cisnes', 'A variação de Odile (Cisne Negro) em "O Lago dos Cisnes" é a parte mais conhecida e técnica do ballet, com a bailarina a interpretar a personagem sedutora e enigmática Odile, que é a filha do feiticeiro Von Rothbart e aparece no terceiro ato do balé, disfarçada como Odette para enganar o príncipe Siegfried. Essa variação exige técnica impecável, força e presença de palco, sendo famosa pelos 32 fouettés, uma sequência de giros rápidos que demonstram o poder e a astúcia de Odile. Também é caracterizada pela sua dificuldade, pela dança rápida e pela sua natureza dramática. A música é intensa e dramática, refletindo a sedução e manipulação da personagem.'),
(8, 'Aurora', 'A Bela Adormecida', 'A variação Aurora, no balé "A Bela Adormecida", refere-se à dança solo da princesa Aurora no primeiro ato do balé, quando a princesa Aurora celebra seu aniversário de 16 anos e dança para seus pretendentes. Essa variação exige leveza, precisão e força, com movimentos graciosos e saltos controlados que refletem a juventude e a alegria da personagem. Um dos momentos mais icônicos dessa variação é a sequência de équilibres (sustentação em ponta), que exige grande controle e técnica da bailarina.'),
(9, 'Esmeralda', 'Esmeralda', 'A variação de Esmeralda pertence ao balé La Esmeralda, inspirado no romance Notre-Dame de Paris, de Victor Hugo. Essa variação é conhecida por sua força e expressividade, refletindo a personalidade vibrante da cigana Esmeralda. Um dos elementos mais icônicos dessa variação é o uso do pandeiro, que Esmeralda segura e toca durante a coreografia, adicionando um toque rítmico e característico à performance.'),
(10, 'Paquita', 'Paquita', 'A variação de Paquita pertence ao balé Paquita, um clássico do repertório romântico criado em 1846 por Joseph Mazilier e posteriormente adaptado por Marius Petipa. Paquita é uma jovem cigana que descobre sua verdadeira origem aristocrática ao longo da história. Sua variação no Grand Pas Classique é um dos momentos mais deslumbrantes do balé, exigindo precisão, equilíbrio e giros impecáveis.'),
(11, 'Raymonda', 'Raymonda', 'A variação de Raymonda pertence ao balé Raymonda, criado em 1898 por Marius Petipa. Esse balé é conhecido por sua riqueza coreográfica e musical, sendo um dos últimos grandes balés do período imperial russo. Raymonda é uma jovem nobre que se vê dividida entre dois pretendentes: Jean de Brienne, um cavaleiro das Cruzadas, e Abderam, um cavaleiro sarraceno. Sua variação é marcada por movimentos elegantes, giros precisos e uma presença majestosa, refletindo sua personalidade forte e determinada.'),
(12, 'Medora', 'Le Corsaire', 'Criado com música de Adolphe Adam e coreografia refinada de Marius Petipa, esse balé é inspirado no poema de Lord Byron e traz uma história cheia de aventura e romance. Na variação de Medora no balé Le Corsaire, Medora está demonstrando sua graça, força e técnica refinada em uma dança solo cheia de movimentos expressivos. Essa variação ocorre geralmente no segundo ato, quando Medora dança para Conrad, o líder dos corsários, mostrando sua alegria e paixão. Além disso, Medora frequentemente interage com o cenário, transmitindo a sensação de liberdade e aventura que permeia o balé.'),
(13, 'Gulnara', 'Le Corsaire', 'Gulnara é uma jovem escrava que, ao lado de Medora, desempenha um papel crucial na trama, envolvendo-se na fuga e nos desafios enfrentados pelos protagonistas. Essa variação exige leveza, precisão e controle técnico, com movimentos graciosos e giros fluidos que destacam a elegância da personagem.'),
(14, 'Nikiya Primeiro Ato', 'La Bayadère', 'Criado por Marius Petipa em 1877, esse balé conta a trágica história de Nikiya, uma devadasi (bailarina do templo) apaixonada pelo guerreiro Solor. A variação de Nikiya no primeiro ato é marcada por movimentos fluidos, braços delicados e uma interpretação profundamente emocional, refletindo seu amor e devoção por Solor.'),
(15, 'Nikiya Segundo Ato', 'La Bayadère', 'No segundo ato, após ser traída e envenenada, sua presença se torna etérea e melancólica, especialmente na famosa cena do Reino das Sombras, onde seu espírito aparece em uma sequência hipnotizante de bailarinas em arabesques.'),
(16, 'O Pássaro Azul', 'A Bela Adormecida', 'Essa variação faz parte do Grand Pas de Deux da Princesa Florine e do Pássaro Azul. É uma dança leve e aérea, com movimentos rápidos e saltos que simulam o voo gracioso de um pássaro. O Príncipe foi transformado em um pássaro azul por uma rainha má e todas as noites visita sua amada Princesa Florine, cantando para ela e tentando ensiná-la a voar para que possam fugir juntos.'),
(17, 'Petrouchka', 'Petrouchka', 'Petrouchka é um ballet de Igor Stravinsky que conta a história de um boneco de palha que ganha vida e desenvolve emoções. A variação de Petrouchka é marcada por movimentos angulares e expressivos, refletindo sua luta contra sua condição de marionete. Petrouchka ama a Bailarina, mas ela prefere o Mouro. Em um duelo, Petrouchka é morto pelo Mouro, e seu espírito paira sobre o teatro de bonecos.'),
(18, 'Spartacus', 'Spartacus', 'A variação de Spartacus é poderosa e dramática, cheia de saltos e movimentos vigorosos que representam a força e a luta do personagem contra a opressão romana. Espartaco é um gladiador que lidera uma revolta de escravos contra Roma. Sua variação é cheia de força e determinação, representando sua luta pela liberdade.'),
(19, 'Chamas de Paris', 'Chamas de Paris', 'Essa variação é vibrante e cheia de energia, com passos rápidos e saltos impressionantes. O ballet retrata a Revolução Francesa, e a dança reflete o espírito revolucionário. Durante a variação, os revolucionários invadem o palácio e lutam contra a monarquia, celebrando a vitória do povo.'),
(20, 'O Talismã', 'O Talismã', 'A variação masculina de O Talismã é cheia de técnica e virtuosismo, com giros rápidos e saltos elevados. O ballet tem um enredo fantástico e exótico, ambientado na Índia. Essa variação pertence a um ballet de temática exótica e fantástica, onde o personagem principal exibe sua destreza e força em um contexto mágico.'),
(21, 'Scherazade', 'Scherazade', 'A variação de Scherazade é sensual e misteriosa, com movimentos sinuosos e expressivos que evocam a atmosfera das Mil e Uma Noites. Inspirado nas Mil e Uma Noites, essa variação representa a sedução e o mistério do Oriente, com movimentos sinuosos e expressivos.'),
(22, 'Solor', 'La Bayadère', 'A variação de Solor é um dos momentos mais desafiadores do ballet. Ele executa saltos poderosos e giros precisos, demonstrando sua força e paixão por Nikiya. Solor, um guerreiro, está atormentado pelo remorso após a morte de sua amada Nikiya. Ele sonha com ela e os espíritos das bailarinas, em um momento de grande emoção.'),
(23, 'Basilio', 'Dom Quixote', 'A variação de Basilio é cheia de energia e virtuosismo, com piruetas rápidas e saltos impressionantes. Ele é um personagem espirituoso e apaixonado. Basilio finge sua própria morte para convencer o pai de Kitri a permitir seu casamento com ela. Quando Kitri aceita, ele "ressuscita" e celebra sua vitória.'),
(24, 'Príncipe Siegfried', 'O Lago dos Cisnes', 'A variação do Príncipe Siegfried é melancólica e elegante, refletindo sua busca por amor verdadeiro. Os movimentos são amplos e expressivos. Siegfried jura amor eterno a Odette, mas é enganado por Odile, a cisne negro. Ao perceber seu erro, ele corre para o lago para tentar salvar Odette.'),
(25, 'Príncipe Désiré', 'A Bela Adormecida', 'A variação do Príncipe Désiré é nobre e refinada, com saltos majestosos e giros controlados, representando sua jornada para despertar Aurora. Désiré encontra Aurora adormecida e, ao beijá-la, quebra o feitiço e desperta a princesa, trazendo alegria ao reino.'),
(26, 'Albrecht', 'Giselle', 'A variação de Albrecht no segundo ato é dramática e cheia de emoção, com saltos que expressam seu arrependimento e desespero. Albrecht, arrependido por enganar Giselle, é condenado pelas Willis a dançar até a morte. Giselle, mesmo traída, o protege e impede sua destruição.'),
(27, 'Jean de Brienne', 'Raymonda', 'A variação de Jean de Brienne é heroica e elegante, com movimentos que demonstram sua bravura e amor por Raymonda. Jean de Brienne retorna das Cruzadas e luta contra o cavaleiro sarraceno Abderakhman para salvar Raymonda e finalmente se casar com ela.'),
(28, 'Ali', 'Le Corsaire', 'A variação de Ali é uma das mais famosas do ballet clássico, com saltos espetaculares e giros rápidos que demonstram sua destreza. Ali, o escravo, exibe sua lealdade e destreza ao dançar para Medora e Conrad, mostrando sua habilidade e poder.'),
(29, 'Acteon', 'Diana e Acteon', 'A variação de Acteon é cheia de energia e técnica, com saltos altos e giros rápidos que representam sua força como caçador. Acteon, um caçador, vê Diana e suas ninfas se banhando. Como punição, Diana o transforma em um cervo, e ele é perseguido e morto por seus próprios cães.'),
(30, 'OCorsarie', 'Le Corsaire', 'A variação masculina no balé "O Corsário" é uma peça coreográfica individual que destaca a habilidade e a força dos bailarinos masculinos. É uma parte essencial da apresentação, mostrando a destreza e o virtuosismo do bailarino, geralmente associada ao personagem Conrad, o herói da história.');
