const BIBLE_API_ROOT = "https://bible-api.com/data";
const bibleTranslations = [
  { id: "almeida", name: "Almeida · Português" }
];
const dailyWelcomeArtworks = [
  { title: "A criação e a luz", icon: "🌎", left: "✨", right: "🌱" },
  { title: "A arca de Noé", icon: "🛶", left: "🌧️", right: "🕊️" },
  { title: "A promessa do arco-íris", icon: "🌈", left: "☁️", right: "🕊️" },
  { title: "A jornada de Abraão", icon: "🐪", left: "⭐", right: "🌙" },
  { title: "As estrelas da promessa", icon: "🌟", left: "✨", right: "🌌" },
  { title: "O sonho de Jacó", icon: "🪜", left: "☁️", right: "✨" },
  { title: "A sarça ardente", icon: "🔥", left: "🌿", right: "✨" },
  { title: "A travessia do mar", icon: "🌊", left: "🐟", right: "🕊️" },
  { title: "As tábuas da lei", icon: "📜", left: "⛰️", right: "✨" },
  { title: "O maná no deserto", icon: "🍞", left: "🏜️", right: "☀️" },
  { title: "As muralhas de Jericó", icon: "🏰", left: "📯", right: "✨" },
  { title: "Rute e as espigas", icon: "🌾", left: "🌻", right: "🤍" },
  { title: "A harpa de Davi", icon: "🎼", left: "👑", right: "⭐" },
  { title: "O pastor e suas ovelhas", icon: "🐑", left: "🌿", right: "💚" },
  { title: "Elias e os corvos", icon: "🐦‍⬛", left: "☁️", right: "🍞" },
  { title: "A coragem de Ester", icon: "👑", left: "🌸", right: "✨" },
  { title: "Jonas e o grande peixe", icon: "🐳", left: "🌊", right: "🐟" },
  { title: "A estrela de Belém", icon: "⭐", left: "🌙", right: "✨" },
  { title: "O nascimento de Jesus", icon: "🕊️", left: "🌟", right: "🌿" },
  { title: "Os pastores e os anjos", icon: "👼", left: "🐑", right: "⭐" },
  { title: "Os sábios do Oriente", icon: "🎁", left: "🐪", right: "🌟" },
  { title: "O batismo de Jesus", icon: "🕊️", left: "💧", right: "✨" },
  { title: "Água transformada em vinho", icon: "🏺", left: "🍇", right: "✨" },
  { title: "O chamado dos pescadores", icon: "🎣", left: "🐟", right: "🌊" },
  { title: "Jesus acalma a tempestade", icon: "⛵", left: "🌧️", right: "🌤️" },
  { title: "A semente de mostarda", icon: "🌱", left: "🌳", right: "✨" },
  { title: "O bom samaritano", icon: "🫶", left: "🩹", right: "🌿" },
  { title: "A ovelha encontrada", icon: "🐑", left: "🔎", right: "💚" },
  { title: "O filho que voltou para casa", icon: "🏡", left: "🤗", right: "🌅" },
  { title: "Os lírios do campo", icon: "🌷", left: "🌼", right: "🦋" },
  { title: "Pães e peixes para todos", icon: "🍞", left: "🐟", right: "🧺" },
  { title: "O amor de Jesus", icon: "❤️", left: "✝️", right: "✨" },
  { title: "A manhã da ressurreição", icon: "🌅", left: "🕊️", right: "🌷" },
  { title: "O caminho de Emaús", icon: "🚶", left: "🌄", right: "✨" },
  { title: "O vento de Pentecostes", icon: "🔥", left: "🕊️", right: "🌬️" },
  { title: "A comunidade reunida", icon: "🤝", left: "💜", right: "🕊️" },
  { title: "A balança da justiça", icon: "⚖️", left: "💙", right: "🌿" },
  { title: "A boa semente", icon: "🌾", left: "🌱", right: "☀️" },
  { title: "A luz que guia", icon: "🏮", left: "🌙", right: "⭐" },
  { title: "A videira e os ramos", icon: "🍇", left: "🌿", right: "💚" },
  { title: "A armadura da fé", icon: "🛡️", left: "✨", right: "💜" },
  { title: "A Palavra aberta", icon: "📖", left: "🪶", right: "✨" },
  { title: "Um momento de oração", icon: "🙏", left: "🕯️", right: "🌿" },
  { title: "Mãos que ajudam", icon: "🤲", left: "💛", right: "🌱" },
  { title: "A esperança que floresce", icon: "🌸", left: "🌱", right: "✨" },
  { title: "A pomba da paz", icon: "🕊️", left: "☁️", right: "💙" },
  { title: "O ramo de oliveira", icon: "🫒", left: "🕊️", right: "🌿" },
  { title: "O brilho da Palavra", icon: "💡", left: "📖", right: "✨" },
  { title: "Florescendo na fé", icon: "🌻", left: "📖", right: "🦋" },
  { title: "Um novo amanhecer", icon: "🌄", left: "🕊️", right: "🌱" }
];
const STORAGE_KEY = "florescer-bible-app-v1";
const CACHE_LIMIT = 20;

const foundationalReadingPlans = [
  {
    id: "gratidao",
    title: "Um coração grato",
    duration: 7,
    description: "Encontre motivos para agradecer em cada novo dia.",
    introduction: "Gratidão não é ignorar os desafios: é aprender a perceber o cuidado e a esperança também no meio deles.",
    days: [
      { title: "Comece com gratidão", reference: "Salmos 100:1-5", theme: "Um convite para agradecer", lesson: "O salmo apresenta a gratidão como uma resposta a quem Deus é: bom, fiel e cuidador. A alegria aqui não depende de um dia perfeito.", reflection: "O que você agradece hoje? Como lembrar da fidelidade pode mudar sua forma de olhar para uma dificuldade?", practice: "Anote três coisas simples pelas quais você é grato." },
      { title: "Reconheça o cuidado", reference: "Salmos 23:1-6", theme: "Deus caminha com você", lesson: "A imagem do pastor fala de direção, provisão e companhia. O vale não desaparece, mas o salmo destaca que não precisamos atravessá-lo sozinhos.", reflection: "Qual parte da sua vida precisa de direção ou descanso? Que imagem do salmo mais conversa com seu momento?", practice: "Separe alguns minutos de silêncio e nomeie uma preocupação que deseja entregar a Deus." },
      { title: "Agradeça pelas coisas simples", reference: "Mateus 6:25-34", theme: "Confiança para cada dia", lesson: "Jesus não diminui as necessidades da vida; ele convida seus ouvintes a não serem dominados pela ansiedade e a viverem um dia de cada vez.", reflection: "Que preocupação tem ocupado espaço demais? O que está ao seu alcance fazer hoje?", practice: "Escolha uma tarefa de hoje e faça-a com atenção, sem tentar resolver o mês inteiro de uma vez." },
      { title: "Lembre-se do amor", reference: "1 João 4:7-12", theme: "O amor que nos inspira", lesson: "Nesta passagem, o amor começa em Deus e se torna algo que podemos oferecer às pessoas. Receber amor também nos chama a praticá-lo.", reflection: "Como o amor recebido pode transformar sua forma de tratar alguém?", practice: "Demonstre cuidado por alguém com uma atitude concreta e sincera." },
      { title: "Encontre força", reference: "Filipenses 4:4-9", theme: "Paz em meio à rotina", lesson: "Paulo escreve sobre oração, gratidão e pensamentos que conduzem à paz. A passagem não promete ausência de problemas, mas aponta práticas para atravessá-los.", reflection: "Quais pensamentos têm alimentado sua preocupação? O que merece ocupar mais seus pensamentos?", practice: "Transforme uma preocupação em uma oração e pense em uma ação possível para lidar com ela." },
      { title: "Compartilhe o bem", reference: "Gálatas 6:7-10", theme: "Fazer o bem com alegria", lesson: "Paulo encoraja a perseverar no bem, mesmo quando os resultados não aparecem imediatamente. Pequenas escolhas também fazem parte de uma vida de fé.", reflection: "Onde você tem vontade de desistir de fazer o bem? Quem pode se beneficiar de uma atitude sua?", practice: "Faça hoje algo bom por alguém sem esperar reconhecimento." },
      { title: "Celebre a esperança", reference: "Romanos 15:8-13", theme: "Uma esperança que transborda", lesson: "Paulo relaciona esperança com confiança, alegria e paz. A esperança bíblica não é apenas desejar que tudo dê certo; é continuar caminhando com confiança.", reflection: "Que esperança você gostaria de carregar para a próxima semana?", practice: "Escreva uma frase de esperança para reler quando o dia ficar difícil." }
    ]
  },
  {
    id: "conhecendo-jesus",
    title: "Conhecendo Jesus",
    duration: 14,
    description: "Acompanhe momentos da vida e dos ensinamentos de Jesus.",
    introduction: "Uma jornada pelos Evangelhos para observar como Jesus acolhe, ensina, serve e renova a esperança.",
    days: [
      { title: "Uma promessa e uma escolha", reference: "Lucas 1:26-38", theme: "Maria recebe uma notícia inesperada", lesson: "O anúncio do nascimento de Jesus chega em meio a dúvidas e surpresa. Maria escuta, pergunta e responde com disposição.", reflection: "Como você reage quando algo foge dos seus planos? O que significa ouvir antes de responder?", practice: "Reserve um momento para refletir sobre uma decisão que precisa tomar." },
      { title: "Boas notícias para todos", reference: "Lucas 2:1-20", theme: "O nascimento de Jesus", lesson: "O anúncio do nascimento é feito primeiro a pastores, pessoas comuns. A narrativa destaca uma boa notícia que não fica restrita aos poderosos ou importantes.", reflection: "O que a escolha dos primeiros ouvintes ensina sobre quem é incluído nessa história?", practice: "Inclua alguém que costuma ficar de fora de uma conversa ou atividade." },
      { title: "Um começo com propósito", reference: "Marcos 1:9-15", theme: "Batismo e início da missão", lesson: "Depois do batismo, Jesus inicia sua missão anunciando boas notícias e convidando à mudança de vida. Arrependimento, aqui, é também reorientar o caminho.", reflection: "Que direção na sua vida precisa ser revista?", practice: "Escolha um hábito pequeno que aproxime suas ações dos seus valores." },
      { title: "Um convite para caminhar", reference: "Marcos 1:16-20", theme: "Os primeiros discípulos", lesson: "O chamado de Jesus acontece no cotidiano de trabalhadores. Segui-lo implica aprender uma nova maneira de viver em comunidade e servir.", reflection: "O que pode significar seguir Jesus nas suas rotinas de hoje?", practice: "Faça uma tarefa cotidiana com intenção de servir alguém." },
      { title: "Jesus vê quem sofre", reference: "Marcos 2:1-12", theme: "O homem levado por seus amigos", lesson: "Os amigos do homem paralítico persistem até conseguir levá-lo a Jesus. A narrativa mostra uma comunidade que carrega junto e a autoridade de Jesus para restaurar.", reflection: "Quem tem sido apoio para você? Quem pode precisar do seu apoio?", practice: "Ofereça ajuda prática a alguém, respeitando o que essa pessoa realmente precisa." },
      { title: "Confiança no meio da tempestade", reference: "Marcos 4:35-41", theme: "Jesus acalma o mar", lesson: "Os discípulos sentem medo durante a tempestade. O texto não trata o medo como sinal de que eles não tinham problemas, mas abre espaço para conversar sobre confiança em meio ao caos.", reflection: "O que costuma parecer uma tempestade para você? O que ajuda a recuperar a calma?", practice: "Quando a ansiedade vier, pare, respire devagar e procure alguém de confiança." },
      { title: "Cuidado que acolhe", reference: "Marcos 5:21-43", theme: "Duas histórias de cura", lesson: "Marcos entrelaça duas histórias de pessoas em sofrimento e destaca a atenção de Jesus a quem pede ajuda, inclusive quando a espera parece longa.", reflection: "O que essas histórias ensinam sobre atenção e dignidade?", practice: "Escute alguém sem interromper e sem apressar uma solução." },
      { title: "Uma conversa que atravessa barreiras", reference: "João 4:1-26", theme: "Jesus conversa com a samaritana", lesson: "Jesus inicia uma conversa com uma mulher samaritana, atravessando divisões sociais e religiosas. A conversa revela dignidade e abre espaço para perguntas sinceras.", reflection: "Que barreiras podem impedir você de conhecer melhor alguém?", practice: "Inicie uma conversa respeitosa com alguém de uma realidade diferente da sua." },
      { title: "Acolher os pequenos", reference: "Marcos 10:13-16", theme: "Jesus recebe as crianças", lesson: "Quando tentam afastar as crianças, Jesus as recebe e as abençoa. O episódio questiona quem é considerado importante e quem merece atenção.", reflection: "Quem costuma ser ignorado ou tratado como menos importante?", practice: "Dê atenção genuína a alguém que normalmente não recebe espaço." },
      { title: "O próximo é quem age com compaixão", reference: "Lucas 10:25-37", theme: "A parábola do bom samaritano", lesson: "Na parábola, a compaixão aparece em ações concretas e atravessa divisões entre grupos. Jesus desloca a pergunta de quem merece ajuda para como podemos nos tornar próximos.", reflection: "O que torna difícil ajudar alguém? Como agir com cuidado sem ultrapassar limites?", practice: "Faça uma ação de cuidado possível e segura na sua comunidade." },
      { title: "Esperança diante da perda", reference: "João 11:17-27", theme: "Jesus encontra Marta", lesson: "Marta conversa com Jesus em meio ao luto e expressa tanto sua dor como sua fé. O texto dá espaço para perguntas difíceis em vez de exigir respostas fáceis.", reflection: "O que ajuda você a acompanhar alguém que está de luto?", practice: "Se alguém estiver passando por uma perda, ofereça presença e escuta, sem tentar apressar o sofrimento." },
      { title: "Uma mesa de comunhão", reference: "Lucas 22:14-23", theme: "A última ceia", lesson: "Na refeição com os discípulos, Jesus compartilha pão e cálice e fala de memória e aliança. A mesa se torna um sinal de comunhão e entrega.", reflection: "Que significado têm as refeições compartilhadas na sua vida?", practice: "Compartilhe uma refeição ou um momento de conversa com alguém." },
      { title: "Amor que se entrega", reference: "João 19:16-30", theme: "A crucificação", lesson: "A narrativa da cruz é central para a fé cristã e fala de sofrimento, injustiça e entrega. Leia com respeito e sem reduzir a dor do texto a uma resposta simples.", reflection: "Que sentimentos surgem ao ler esta passagem? Que perguntas você gostaria de levar adiante?", practice: "Faça uma pausa para acolher o que sentiu e, se desejar, converse com alguém de confiança." },
      { title: "Uma esperança que recomeça", reference: "Lucas 24:1-12", theme: "O túmulo vazio", lesson: "As mulheres vão ao túmulo e recebem a notícia da ressurreição. O final abre uma nova possibilidade depois da dor e muda o rumo da história.", reflection: "O que essa narrativa de recomeço significa para você?", practice: "Identifique um pequeno recomeço possível nesta semana." }
    ]
  },
  {
    id: "fundamentos",
    title: "Fundamentos da fé",
    duration: 14,
    description: "Explore temas centrais da Bíblia: criação, justiça, graça e esperança.",
    introduction: "Leia passagens conhecidas em contexto e construa uma visão geral dos temas que atravessam a história bíblica.",
    days: [
      { title: "O começo da história", reference: "Gênesis 1:1-5", theme: "Criação e propósito", lesson: "O primeiro capítulo de Gênesis apresenta a criação como ordenada e boa. A passagem convida a refletir sobre a vida como algo que merece cuidado.", reflection: "Como a ideia de criação influencia a maneira de tratar o mundo e as pessoas?", practice: "Cuide de um espaço compartilhado ou de algo da natureza ao seu redor." },
      { title: "Ruptura e responsabilidade", reference: "Gênesis 3:1-13", theme: "Escolhas e consequências", lesson: "A narrativa descreve desconfiança, escolha e tentativa de esconder o erro. Ela abre a discussão sobre responsabilidade e sobre como nossas decisões afetam relações.", reflection: "O que ajuda você a reconhecer um erro sem fugir da responsabilidade?", practice: "Se necessário, admita um erro e pense em um passo concreto para repará-lo." },
      { title: "Uma jornada de confiança", reference: "Gênesis 12:1-9", theme: "O chamado de Abraão", lesson: "Abraão é chamado a deixar o conhecido e começa uma jornada sem saber todos os detalhes. A passagem trata de confiança como caminho, não como certeza sobre cada etapa.", reflection: "Quando você precisou dar um passo sem conhecer todo o caminho?", practice: "Divida uma decisão grande em um primeiro passo pequeno e possível." },
      { title: "Deus ouve o clamor", reference: "Êxodo 3:1-15", theme: "O chamado de Moisés", lesson: "Na sarça ardente, Deus se apresenta como atento ao sofrimento do povo e chama Moisés para agir. A passagem une espiritualidade e responsabilidade diante da opressão.", reflection: "Que sofrimentos ao seu redor precisam ser ouvidos com mais atenção?", practice: "Informe-se sobre uma necessidade da sua comunidade e descubra como apoiar com responsabilidade." },
      { title: "Libertação e caminho", reference: "Êxodo 14:10-22", theme: "A travessia do mar", lesson: "O relato da travessia é parte da memória de libertação de Israel. O povo enfrenta medo e incerteza enquanto deixa uma situação de escravidão.", reflection: "Por que comunidades precisam preservar histórias de libertação?", practice: "Aprenda e compartilhe uma história de coragem ou superação da sua família ou comunidade." },
      { title: "Amar a Deus no cotidiano", reference: "Deuteronômio 6:4-9", theme: "Fé ensinada no dia a dia", lesson: "A instrução associa amor a Deus com memória e ensino na rotina familiar. A fé não fica limitada a um momento religioso: ela conversa com o cotidiano.", reflection: "Que valores você gostaria de transmitir pelas suas atitudes?", practice: "Converse com alguém próximo sobre um valor importante para vocês." },
      { title: "Escolhas que criam raízes", reference: "Salmos 1:1-6", theme: "O caminho que escolhemos", lesson: "O salmo usa a imagem de uma árvore junto à água para falar de raízes e escolhas. O contraste convida a pensar no que alimenta nossa vida.", reflection: "Que hábitos ou influências ajudam você a crescer? Quais drenam sua energia?", practice: "Escolha um conteúdo ou hábito saudável para cultivar nesta semana." },
      { title: "Cuidado nos vales", reference: "Salmos 23:1-6", theme: "Confiança e cuidado", lesson: "A imagem do pastor comunica provisão e companhia. A segurança descrita não elimina os vales, mas fala de presença durante a travessia.", reflection: "O que pode ser uma fonte de apoio em períodos difíceis?", practice: "Peça ajuda a alguém confiável se estiver enfrentando uma situação pesada." },
      { title: "O que é praticar a justiça?", reference: "Miquéias 6:6-8", theme: "Justiça, misericórdia e humildade", lesson: "Miquéias resume uma vida fiel em agir com justiça, amar a misericórdia e caminhar com humildade. A passagem desloca o foco de gestos religiosos para uma vida coerente.", reflection: "Como justiça e misericórdia podem aparecer juntas numa decisão?", practice: "Escolha uma situação cotidiana em que possa agir com mais justiça e gentileza." },
      { title: "A felicidade segundo Jesus", reference: "Mateus 5:1-12", theme: "As bem-aventuranças", lesson: "No início do Sermão do Monte, Jesus chama de bem-aventuradas pessoas que o mundo nem sempre considera vencedoras, incluindo as que promovem a paz e buscam justiça.", reflection: "Que ideia de sucesso é questionada por esta passagem?", practice: "Promova a paz em uma conversa, sem ignorar a verdade ou o respeito." },
      { title: "Aprender a orar", reference: "Mateus 6:9-13", theme: "A oração ensinada por Jesus", lesson: "A oração reúne reverência, pedido pelo necessário, perdão e busca por direção. Ela é uma estrutura para conversar com Deus, não uma fórmula mágica.", reflection: "Qual parte da oração mais se conecta com o que você vive hoje?", practice: "Use cada frase como ponto de partida para uma oração com suas próprias palavras." },
      { title: "Graça e reconciliação", reference: "Romanos 3:21-26", theme: "Justiça e graça", lesson: "Paulo apresenta a justiça de Deus em relação à graça e à fé em Cristo. É uma passagem teológica densa: leia devagar e observe como graça não é algo que se compra por mérito.", reflection: "Como receber graça pode mudar a forma de olhar para si e para os outros?", practice: "Pratique a honestidade consigo mesmo e ofereça a outra pessoa a mesma dignidade que deseja receber." },
      { title: "Salvos para uma vida de boas obras", reference: "Efésios 2:1-10", theme: "Graça que transforma", lesson: "O texto enfatiza que a salvação é dom da graça, não conquista pessoal, e relaciona esse dom a uma vida que pratica o bem.", reflection: "Qual é a diferença entre fazer o bem para merecer aceitação e fazer o bem como resposta à graça?", practice: "Faça uma boa ação sem usá-la para buscar aprovação." },
      { title: "A esperança de um mundo renovado", reference: "Apocalipse 21:1-5", theme: "Deus faz novas todas as coisas", lesson: "A visão de Apocalipse fala de consolo, justiça e renovação diante do sofrimento. É uma imagem de esperança que encoraja a imaginar e buscar um mundo sem dor e opressão.", reflection: "Que sinais de renovação você deseja ver na sua comunidade?", practice: "Contribua com uma ação concreta, mesmo pequena, para tornar seu entorno mais acolhedor." }
    ]
  },
  {
    id: "vida-com-jesus",
    title: "Vivendo os ensinamentos de Jesus",
    duration: 14,
    description: "Pratique oração, compaixão, perdão, coragem e serviço.",
    introduction: "Um percurso prático pelos ensinamentos de Jesus, com perguntas e atitudes para levar a leitura para a vida.",
    days: [
      { title: "Uma vida com propósito", reference: "Mateus 5:13-16", theme: "Sal e luz", lesson: "Jesus usa imagens cotidianas para falar de uma fé que influencia o mundo pelo bem. A luz não existe para chamar atenção para si, mas para iluminar.", reflection: "Que tipo de influência suas atitudes exercem nas pessoas ao seu redor?", practice: "Faça algo que contribua com sua comunidade sem buscar reconhecimento." },
      { title: "Reconciliação começa com responsabilidade", reference: "Mateus 5:21-26", theme: "Cuidar das relações", lesson: "Jesus amplia a conversa sobre violência para incluir palavras e relações feridas. A reconciliação começa com responsabilidade, mas não exige que alguém permaneça em uma situação insegura.", reflection: "Existe uma conversa que você precisa ter com respeito e segurança?", practice: "Se for seguro e apropriado, dê um primeiro passo para reparar uma relação." },
      { title: "Orar com sinceridade", reference: "Mateus 6:5-8", theme: "Uma oração sem espetáculo", lesson: "Jesus critica a oração feita para impressionar os outros e valoriza a sinceridade diante de Deus. A prática espiritual não precisa de plateia.", reflection: "O que ajuda você a falar com sinceridade, sem tentar parecer perfeito?", practice: "Faça uma oração breve e honesta sobre o que realmente sente." },
      { title: "Perdoar sem negar a dor", reference: "Mateus 18:21-35", theme: "A parábola do servo impiedoso", lesson: "A parábola confronta a falta de misericórdia. Perdoar não significa negar o dano, abandonar limites ou dispensar responsabilidade; pode ser um processo que exige apoio.", reflection: "Que diferença existe entre perdoar e permitir que alguém continue machucando?", practice: "Reflita sobre um limite saudável que você precisa estabelecer ou manter." },
      { title: "Amar o próximo com atitude", reference: "Lucas 10:25-37", theme: "Compaixão em ação", lesson: "O samaritano interrompe seu caminho para cuidar de uma pessoa ferida. Jesus apresenta o próximo como alguém de quem nos aproximamos com compaixão.", reflection: "Quem está fora do seu círculo habitual e pode precisar de cuidado?", practice: "Procure uma forma segura e respeitosa de ajudar alguém." },
      { title: "Servir com humildade", reference: "João 13:1-17", theme: "Jesus lava os pés dos discípulos", lesson: "Jesus assume o papel de servo e transforma uma tarefa humilde em exemplo para seus discípulos. Liderar, na passagem, envolve cuidar, não dominar.", reflection: "Como humildade pode aparecer em uma posição de liderança?", practice: "Assuma uma tarefa útil que costuma ficar para outra pessoa." },
      { title: "Ansiedade e cuidado diário", reference: "Mateus 6:25-34", theme: "Viver um dia de cada vez", lesson: "Jesus convida a olhar para as necessidades sem deixar que a ansiedade governe toda a vida. A passagem não substitui cuidados práticos ou profissionais quando são necessários.", reflection: "Que preocupação pode ser dividida em um passo que você consiga dar hoje?", practice: "Escreva uma ação possível para hoje e deixe o que não pode controlar para depois." },
      { title: "Uma comunidade que compartilha", reference: "Atos 2:42-47", theme: "Aprender e cuidar juntos", lesson: "A comunidade descrita em Atos combina ensino, convivência, oração e partilha. O retrato destaca práticas coletivas, não apenas a fé individual.", reflection: "O que faz uma comunidade ser acolhedora e justa?", practice: "Participe ou ajude a criar um momento de convivência com pessoas de confiança." },
      { title: "Coragem para atravessar desafios", reference: "Tiago 1:2-8", theme: "Perseverança e sabedoria", lesson: "Tiago fala sobre perseverança diante das provações e sobre pedir sabedoria. Não significa que sofrimento seja bom ou que alguém deva enfrentá-lo sozinho.", reflection: "Que tipo de apoio ou sabedoria você precisa pedir agora?", practice: "Procure orientação de alguém confiável para um desafio que esteja enfrentando." },
      { title: "Palavras que constroem", reference: "Efésios 4:25-32", theme: "Falar com verdade e bondade", lesson: "A passagem relaciona honestidade com cuidado na fala, perdão e atitudes que edificam. A forma de falar pode ferir ou ajudar a reparar relações.", reflection: "Que diferença faz escolher o momento e o tom para uma conversa difícil?", practice: "Antes de responder em uma conversa tensa, faça uma pausa e escolha palavras honestas e respeitosas." },
      { title: "Generosidade com propósito", reference: "2 Coríntios 9:6-11", theme: "Dar com alegria", lesson: "Paulo fala de generosidade voluntária e não forçada. O foco não é enriquecer quem dá, mas compartilhar para que haja cuidado e gratidão.", reflection: "Que recursos — tempo, atenção ou bens — você pode compartilhar sem se prejudicar?", practice: "Compartilhe algo que possa oferecer livremente, respeitando seus limites." },
      { title: "Fé que se traduz em cuidado", reference: "Tiago 2:14-18", theme: "A fé e as obras", lesson: "Tiago questiona uma fé que não se traduz em cuidado concreto. A passagem chama a perceber necessidades reais, não apenas oferecer palavras.", reflection: "Como equilibrar boas intenções com ajuda que realmente atende à necessidade?", practice: "Pergunte a alguém do que precisa antes de decidir como ajudar." },
      { title: "Perseverar no bem", reference: "Gálatas 6:7-10", theme: "Não desistir de fazer o bem", lesson: "Paulo encoraja a persistência e a responsabilidade com o próximo. Fazer o bem exige constância, mas também sabedoria para reconhecer limites.", reflection: "Em que área você precisa de perseverança? Onde é importante pedir ajuda?", practice: "Escolha uma ação sustentável de cuidado para repetir nesta semana." },
      { title: "Uma vida marcada pelo amor", reference: "1 Coríntios 13:1-7", theme: "O amor em atitudes", lesson: "Paulo descreve o amor por meio de atitudes — paciência, bondade e compromisso com a verdade — em uma carta que trata de conflitos numa comunidade.", reflection: "Qual dessas atitudes é mais desafiadora para você? Como praticá-la sem abrir mão de limites saudáveis?", practice: "Escolha uma atitude descrita no texto e pratique-a em uma relação nesta semana." }
    ]
  }
];

const adultStudyData = [
  ["O princípio e a criação", "Gênesis 1:1-5", "Hebraico bíblico", "בְּרֵאשִׁית", "bereshit", "“No princípio”; introduz o começo da narrativa, sem precisar resolver sozinho todas as questões sobre a origem do tempo.", "Gênesis abre a Bíblia com uma narrativa de criação em um mundo antigo que também conhecia histórias sobre a origem do cosmos.", "A ordem e a bondade da criação contrastam com o caos; o texto convida à confiança no Deus que dá forma e propósito."],
  ["Imagem e dignidade", "Gênesis 1:26-31", "Hebraico bíblico", "צֶלֶם", "tselem", "“Imagem” ou representação; no contexto, expressa a dignidade e a responsabilidade humanas diante de Deus e da criação.", "A linguagem de imagem também era usada no antigo Oriente Próximo para representar autoridade; aqui ela é atribuída à humanidade.", "A dignidade humana não é privilégio de poucos: homens e mulheres recebem valor e responsabilidade no relato."],
  ["Cultivar e guardar", "Gênesis 2:15-17", "Hebraico bíblico", "עָבַד / שָׁמַר", "avad / shamar", "“Trabalhar/servir” e “guardar/cuidar”; os verbos descrevem a tarefa humana no jardim.", "O jardim é retratado como espaço de vida confiado ao ser humano, antes da narrativa da ruptura.", "Trabalho e cuidado aparecem juntos; domínio não significa licença para explorar."],
  ["A aliança com Noé", "Gênesis 9:8-17", "Hebraico bíblico", "בְּרִית", "berit", "“Aliança”; termo para compromisso solene, cujo alcance nesta passagem inclui Noé, seus descendentes e os seres vivos.", "Após o dilúvio na narrativa, o arco aparece como sinal de uma promessa dirigida a toda a vida.", "A aliança destaca a iniciativa divina e amplia o horizonte do cuidado para além dos humanos."],
  ["Partir pela promessa", "Gênesis 12:1-9", "Hebraico bíblico", "לֶךְ־לְךָ", "lekh-lekha", "Expressão de chamado para partir; o sentido exato da forma é discutido, portanto não convém reduzi-la a uma tradução única.", "A narrativa apresenta Abrão deixando sua terra e parentesco para seguir uma promessa em Canaã.", "A fé de Abrão envolve deslocamento e confiança, não controle antecipado de todos os resultados."],
  ["Contado como justiça", "Gênesis 15:1-6", "Hebraico bíblico", "צְדָקָה", "tsedaqah", "“Justiça” ou retidão; aqui descreve a confiança de Abrão reconhecida no relacionamento com Deus.", "A promessa de descendência é narrada em diálogo com a vulnerabilidade e as perguntas de Abrão.", "A passagem não silencia a dúvida: ela a coloca dentro de uma conversa de confiança."],
  ["O Deus que vê", "Gênesis 16:7-14", "Hebraico bíblico", "רָאָה", "ra'ah", "“Ver”; a narrativa usa o verbo para expressar que Hagar não passa despercebida em sua aflição.", "Hagar, estrangeira e serva grávida, encontra-se vulnerável após fugir de uma situação de conflito.", "A história dá atenção a alguém socialmente vulnerável e lembra que sua experiência merece ser ouvida."],
  ["Um riso que muda", "Gênesis 18:1-15", "Hebraico bíblico", "יִצְחָק", "Yitschaq", "Nome associado a “rir”; o jogo de palavras acompanha reações diferentes à promessa de um filho.", "A cena de hospitalidade junto às tendas de Abraão situa a promessa em uma vida familiar concreta.", "Riso, surpresa e dúvida convivem com a promessa; a narrativa não apresenta a fé como ausência de perguntas."],
  ["O Deus que provê", "Gênesis 22:1-14", "Hebraico bíblico", "יִרְאֶה", "yir'eh", "Forma ligada a “ver/prover”; o jogo de sentidos aparece no nome dado ao lugar na narrativa.", "A passagem pertence a uma narrativa difícil sobre Abraão e Isaque; sua leitura exige cuidado e não deve justificar violência contra crianças.", "O desfecho interrompe o sacrifício de Isaque; não use o texto para legitimar abuso ou coerção."],
  ["Encontro junto ao poço", "Gênesis 24:10-27", "Hebraico bíblico", "חֶסֶד", "chesed", "“Lealdade”, “bondade” ou amor comprometido; a nuance depende da relação e do contexto.", "Poços eram pontos essenciais de água e encontro no cotidiano do antigo Oriente Próximo.", "A hospitalidade e a bondade prática são percebidas em ações concretas, não apenas em intenções."],
  ["A presença no caminho", "Gênesis 28:10-22", "Hebraico bíblico", "מָקוֹם", "maqom", "“Lugar”; a repetição do termo marca o espaço comum que Jacó passa a perceber como lugar de encontro com Deus.", "Jacó está viajando e dorme ao relento em uma etapa de sua fuga e deslocamento.", "A experiência de Jacó associa presença divina a um caminho incerto, não a um espaço controlado."],
  ["Reconciliação com Esaú", "Gênesis 33:1-11", "Hebraico bíblico", "פָּנִים", "panim", "“Rosto/presença”; a repetição da palavra organiza a cena do reencontro entre os irmãos.", "Depois de anos separados e de um conflito familiar, Jacó se prepara para encontrar Esaú.", "A reconciliação começa com aproximação e humildade, mas não apaga a história nem dispensa prudência."],
  ["Deus ouve o clamor", "Êxodo 2:23-25", "Hebraico bíblico", "זָעַק", "za'aq", "“Clamar” por ajuda; descreve o grito de pessoas oprimidas, não uma oração silenciosa e abstrata.", "A narrativa situa Israel sob trabalho forçado no Egito e apresenta o sofrimento coletivo.", "O texto nomeia a opressão e o clamor; fé não exige chamar sofrimento de algo bom."],
  ["Eu serei quem serei", "Êxodo 3:1-15", "Hebraico bíblico", "אֶהְיֶה", "ehyeh", "Forma verbal de “ser/estar”; sua tradução e relação com o nome divino são debatidas entre estudiosos.", "Moisés encontra a sarça no deserto e recebe uma missão ligada à libertação de Israel.", "A resposta divina está ligada à presença e à missão; a passagem não deve ser reduzida a uma fórmula filosófica."],
  ["Memória da libertação", "Êxodo 12:1-14", "Hebraico bíblico", "פֶּסַח", "pesach", "“Páscoa”; nome da celebração que recorda a libertação de Israel no relato do Êxodo.", "A refeição é apresentada em contexto de partida urgente e de memória comunitária.", "Lembrar a libertação é uma prática coletiva; o texto liga memória, identidade e esperança."],
  ["Atravessar o mar", "Êxodo 14:10-31", "Hebraico bíblico", "יָשַׁע", "yasha", "“Salvar/libertar”; o campo de sentido inclui resgate de perigo e não apenas uma ideia abstrata.", "Israel se vê encurralado entre o mar e o exército egípcio na narrativa de saída do Egito.", "A cena celebra libertação, sem transformar pessoas em culpadas por sentirem medo diante do perigo."],
  ["Pão para cada dia", "Êxodo 16:1-18", "Hebraico bíblico", "מָן", "man", "“Maná”; o próprio relato associa o nome à pergunta sobre o que era aquilo.", "No deserto, a comunidade recém-liberta enfrenta fome e aprende uma rotina de provisão diária.", "A narrativa valoriza dependência e partilha; recolher mais do que se necessita não é apresentado como segurança."],
  ["Uma comunidade responsável", "Êxodo 18:13-24", "Hebraico bíblico", "עָצָה", "atsah", "“Aconselhar”; descreve o conselho de Jetro para distribuir o trabalho de julgar.", "Moisés tenta resolver sozinho as demandas do povo até receber uma orientação de seu sogro.", "Liderança saudável aceita limites e compartilha responsabilidades."],
  ["Liberdade e compromisso", "Êxodo 20:1-17", "Hebraico bíblico", "תּוֹרָה", "torah", "“Instrução/ensino”; embora usada para a lei, a palavra não se limita à ideia moderna de código legal.", "Os mandamentos são apresentados depois da libertação do Egito, como orientação para uma comunidade livre.", "A instrução dá forma à vida comum e protege relações; não é apresentada como mecanismo para comprar libertação."],
  ["Justiça para o estrangeiro", "Êxodo 22:21-27", "Hebraico bíblico", "גֵּר", "ger", "“Residente estrangeiro”; alguém vivendo entre o povo sem a mesma rede de parentesco e proteção.", "As leis da aliança lembram a experiência de Israel como estrangeiro no Egito.", "A memória da própria vulnerabilidade deve influenciar a maneira de tratar quem tem menos proteção."],
  ["Presença que acompanha", "Êxodo 33:12-17", "Hebraico bíblico", "פָּנִים", "panim", "“Rosto/presença”; a expressão indica proximidade e acompanhamento na jornada.", "Moisés conversa com Deus após a crise do bezerro de ouro e antes da continuação da viagem.", "A presença divina é apresentada como companhia necessária, não como atalho que elimina todas as dificuldades."],
  ["O caráter compassivo", "Êxodo 34:5-9", "Hebraico bíblico", "רַחוּם", "rachum", "“Compassivo”; descreve uma qualidade atribuída a Deus junto a paciência e lealdade.", "A declaração vem depois da ruptura da aliança e da intercessão de Moisés.", "Misericórdia e justiça aparecem juntas; compaixão não significa chamar o mal de bem."],
  ["Santo no cotidiano", "Levítico 19:9-18", "Hebraico bíblico", "קָדוֹשׁ", "qadosh", "“Santo/separado”; neste capítulo, a santidade se expressa também em justiça social e cuidado.", "A coleção de instruções inclui colheita, honestidade, salários e relações com o próximo.", "A vida espiritual inclui práticas econômicas e relacionais que protegem a dignidade alheia."],
  ["Amar o próximo", "Levítico 19:17-18", "Hebraico bíblico", "אָהַב", "ahav", "“Amar”; no contexto do mandamento, implica uma postura ética diante do próximo.", "O mandamento encerra instruções sobre conflitos, vingança e cuidado comunitário.", "Amor bíblico não é apenas sentimento: envolve responsabilidade e recusa da vingança."],
  ["Bênção compartilhada", "Números 6:22-27", "Hebraico bíblico", "בָּרַךְ", "barakh", "“Abençoar”; a fórmula pede cuidado, favor e paz para a comunidade.", "A bênção sacerdotal é dada a Israel durante a jornada pelo deserto.", "A bênção é pronunciada sobre um povo, lembrando que esperança pode ser compartilhada."],
  ["Escolher a vida", "Deuteronômio 30:11-20", "Hebraico bíblico", "חַיִּים", "chayim", "“Vida”; aparece em contraste com morte e destruição na escolha proposta ao povo.", "Moisés fala ao povo às portas da terra prometida, revendo aliança e consequências das escolhas.", "Escolher a vida inclui lealdade a Deus e práticas que sustentam a comunidade."],
  ["Ouvir com atenção", "Deuteronômio 6:4-9", "Hebraico bíblico", "שְׁמַע", "shema", "“Ouve!”; funciona como chamado a escutar e responder, não apenas a receber sons.", "O Shemá é uma confissão central de Israel, transmitida também no ambiente familiar.", "A fé é ensinada por repetição, conversa e prática cotidiana entre gerações."],
  ["Coragem para atravessar", "Josué 1:1-9", "Hebraico bíblico", "חָזַק", "chazaq", "“Ser forte/firmar-se”; o chamado à coragem está ligado à tarefa e à presença divina.", "Josué assume a liderança após a morte de Moisés, em um momento de transição coletiva.", "Coragem não é ausência de medo; o texto a relaciona com responsabilidade e orientação."],
  ["Fidelidade no cotidiano", "Rute 1:15-18", "Hebraico bíblico", "חֶסֶד", "chesed", "“Lealdade/bondade comprometida”; descreve a relação de Rute com Noemi em circunstâncias difíceis.", "Rute, uma moabita viúva, decide acompanhar Noemi em vez de retornar à sua família de origem.", "A lealdade de Rute é concreta, custosa e exercida entre mulheres em situação vulnerável."],
  ["Um coração que escuta", "1 Samuel 3:1-10", "Hebraico bíblico", "שָׁמַע", "shama", "“Ouvir/atender”; a resposta de Samuel inclui disponibilidade para escutar.", "A narrativa ocorre quando a palavra profética era rara e Samuel ainda era jovem no santuário.", "Discernimento pode começar com atenção e também precisa de orientação de pessoas confiáveis."],
  ["Deus vê o coração", "1 Samuel 16:1-13", "Hebraico bíblico", "לֵבָב", "levav", "“Coração”; na Bíblia hebraica, pode incluir pensamento, intenção e vontade, não só emoção.", "Samuel é enviado à casa de Jessé para ungir um novo rei, contrariando aparências e expectativas.", "A passagem questiona julgamentos baseados apenas em aparência, sem prometer que toda escolha humana será infalível."],
  ["Coragem diante do gigante", "1 Samuel 17:32-50", "Hebraico bíblico", "בָּטַח", "batach", "“Confiar”; expressa confiança de Davi em Deus diante de um adversário armado.", "O relato contrasta a armadura e a experiência militar de Golias com a juventude de Davi.", "A coragem de Davi é narrada dentro de sua confiança; não é uma garantia de vitória em todo conflito."],
  ["Amizade leal", "1 Samuel 20:12-17", "Hebraico bíblico", "חֶסֶד", "chesed", "“Lealdade/bondade”; Jonatas pede que Davi mantenha a bondade para com sua casa.", "A aliança entre Jonatas e Davi se forma em meio à hostilidade de Saul contra Davi.", "Amizade fiel pode exigir coragem, proteção mútua e decisões que desafiam interesses familiares."],
  ["Uma casa para Deus", "2 Samuel 7:8-16", "Hebraico bíblico", "בַּיִת", "bayit", "“Casa”; a palavra pode significar moradia, templo ou dinastia, e o texto explora essa amplitude.", "Davi deseja construir um templo, mas a promessa profética fala também de uma casa dinástica.", "A narrativa muda a iniciativa de Davi: a promessa não é algo que ele controla ou constrói sozinho."],
  ["Sabedoria para governar", "1 Reis 3:5-14", "Hebraico bíblico", "לֵב שֹׁמֵעַ", "lev shomea", "“Coração que ouve”; Salomão pede discernimento para governar e julgar o povo.", "O pedido acontece no início do reinado de Salomão, diante da responsabilidade de governar.", "Sabedoria bíblica envolve escuta e justiça, não apenas acúmulo de informação."],
  ["O sussurro no monte", "1 Reis 19:9-13", "Hebraico bíblico", "קוֹל דְּמָמָה דַקָּה", "qol demamah daqqah", "Expressão traduzida de formas variadas, como “som suave” ou “silêncio sutil”; a nuance é discutida.", "Elias chega ao Horebe exausto e assustado após ameaças e conflitos.", "A passagem encontra Elias em sua exaustão; não prescreve uma única forma de experiência espiritual."],
  ["Justiça e misericórdia", "Miqueias 6:6-8", "Hebraico bíblico", "מִשְׁפָּט", "mishpat", "“Justiça/julgamento”; ao lado de lealdade e humildade, descreve uma vida responsável diante de Deus.", "O profeta critica a separação entre culto e conduta pública em Judá.", "O texto não rejeita toda adoração; denuncia uma religião que ignora a justiça e a misericórdia."],
  ["Esperança em meio à perda", "Jó 1:20-22", "Hebraico bíblico", "בָּרַךְ", "barakh", "“Abençoar”; a palavra aparece em uma formulação difícil que pode ser um eufemismo reverente.", "Jó reage à perda devastadora de bens e filhos; o livro não oferece respostas simplistas ao sofrimento.", "Lamento e perplexidade fazem parte do livro; não use esta cena para culpabilizar quem sofre."],
  ["A palavra que orienta", "Salmos 1:1-6", "Hebraico bíblico", "תּוֹרָה", "torah", "“Instrução”; o salmo descreve a pessoa que medita na orientação de Deus.", "O salmo funciona como abertura do Saltério e contrasta dois caminhos de vida.", "Meditar é uma prática contínua; a imagem da árvore fala de perseverança, não de sucesso material automático."],
  ["O Senhor como pastor", "Salmos 23:1-6", "Hebraico bíblico", "רֹעֶה", "ro'eh", "“Pastor”; imagem de quem conduz e cuida, aplicada a Deus no salmo.", "A metáfora pastoral era familiar em uma sociedade com criação de rebanhos e também podia descrever governantes.", "O vale não some do poema; a confiança está na presença durante a travessia."],
  ["Abrigo em tempos difíceis", "Salmos 46:1-11", "Hebraico bíblico", "מַחֲסֶה", "machaseh", "“Refúgio/abrigo”; descreve proteção em meio a instabilidade e ameaça.", "O poema imagina convulsões da natureza e conflitos entre povos.", "A confiança do salmo não nega a turbulência; oferece uma linguagem para enfrentá-la."],
  ["Ensina-nos a contar os dias", "Salmos 90:1-12", "Hebraico bíblico", "חָכְמָה", "chokhmah", "“Sabedoria”; o salmo pede um coração sábio para reconhecer os limites da vida.", "Tradicionalmente associado a Moisés, o poema reflete sobre mortalidade e a permanência de Deus.", "Reconhecer limites pode trazer atenção ao presente, sem transformar a brevidade da vida em desespero."],
  ["Firmeza na adversidade", "Salmos 121:1-8", "Hebraico bíblico", "שָׁמַר", "shamar", "“Guardar/proteger”; o verbo se repete para afirmar o cuidado de Deus na jornada.", "O salmo pertence à coleção de cânticos de peregrinação, ligados à subida a Jerusalém.", "A proteção cantada acompanha a saída e a chegada; não é promessa de ausência de todo perigo."],
  ["Esperança que espera", "Salmos 130:1-8", "Hebraico bíblico", "קָוָה", "qavah", "“Esperar com expectativa”; o salmista aguarda a resposta como quem espera a manhã.", "Um cântico de subida que começa no clamor profundo e se abre à esperança comunitária.", "Esperar não apaga a dor; o salmo transforma o clamor individual em esperança compartilhada."],
  ["A sabedoria começa com reverência", "Provérbios 1:1-7", "Hebraico bíblico", "יִרְאָה", "yir'ah", "“Temor/reverência”; neste provérbio, aponta para respeito e reconhecimento de Deus, não simples pânico.", "A abertura apresenta uma coleção de instruções de sabedoria para formar leitores.", "Reverência é ponto de partida para aprender, não licença para intimidar ou controlar outras pessoas."],
  ["Confiar de todo o coração", "Provérbios 3:1-8", "Hebraico bíblico", "בָּטַח", "batach", "“Confiar”; o provérbio contrasta confiança em Deus com autossuficiência.", "A instrução sapiencial aconselha uma pessoa jovem sobre caminhos e decisões.", "Confiança não dispensa reflexão: o próprio texto fala de reconhecer Deus nos caminhos."],
  ["Palavras que curam", "Provérbios 15:1-4", "Hebraico bíblico", "לָשׁוֹן", "lashon", "“Língua”; metonímia comum para a fala e seus efeitos nas relações.", "A coleção de provérbios compara respostas, conhecimento e impacto das palavras.", "Uma resposta branda pode reduzir tensão, mas não significa silenciar diante de injustiça ou abuso."],
  ["Há tempo para cada estação", "Eclesiastes 3:1-11", "Hebraico bíblico", "עֵת", "et", "“Tempo/momento”; a repetição organiza pares de experiências humanas distintas.", "O poema aparece em uma reflexão sapiencial sobre os ritmos e limites da vida.", "Nem tudo está sob nosso controle; reconhecer estações pode ajudar a viver o presente com honestidade."],
  ["A dignidade de quem sofre", "Isaías 1:16-20", "Hebraico bíblico", "מִשְׁפָּט", "mishpat", "“Justiça”; o profeta a associa à defesa do órfão e à causa da viúva.", "Isaías critica uma prática religiosa que convive com violência e negligência social em Judá.", "A passagem relaciona adoração e cuidado público dos vulneráveis, sem separar espiritualidade e responsabilidade."],
  ["Consolo para um povo cansado", "Isaías 40:27-31", "Hebraico bíblico", "קָוָה", "qavah", "“Esperar/confiar”; descreve a expectativa paciente de quem recebe novas forças.", "O capítulo fala a um povo exilado, cansado e tentado a pensar que foi esquecido.", "A imagem de renovar forças oferece consolo; não culpa quem sente cansaço físico ou emocional."],
  ["Chamado antes de nascer", "Jeremias 1:4-10", "Hebraico bíblico", "נָבִיא", "navi", "“Profeta”; alguém chamado a falar, neste caso a povos e reinos, em nome de Deus.", "Jeremias recebe sua comissão em um período de crise política para Judá.", "O chamado de Jeremias é específico; não deve ser usado para impor a alguém uma missão que não escolheu."],
  ["Esperança para o exílio", "Jeremias 29:4-14", "Hebraico bíblico", "שָׁלוֹם", "shalom", "“Paz/bem-estar”; inclui vida íntegra e bem da comunidade, não apenas ausência de conflito.", "A carta é dirigida a exilados na Babilônia e os orienta a construir uma vida ali durante a espera.", "A promessa é para uma comunidade em seu contexto histórico; não é fórmula de prosperidade individual imediata."],
  ["Misericórdias renovadas", "Lamentações 3:19-33", "Hebraico bíblico", "חֶסֶד", "chesed", "“Amor leal/misericórdia”; o poema fala de sua renovação em meio à devastação.", "Lamentações expressa o trauma da queda de Jerusalém e a dor de uma comunidade.", "Esperança aparece dentro do lamento, não como negação da destruição vivida."],
  ["Um coração novo", "Ezequiel 36:24-28", "Hebraico bíblico", "לֵב חָדָשׁ", "lev chadash", "“Coração novo”; imagem de renovação interior e de disposição para viver de outro modo.", "Ezequiel fala a exilados depois da queda de Jerusalém e anuncia restauração comunitária.", "A promessa não é autocorreção por força de vontade: o texto atribui a renovação à ação de Deus."],
  ["A fidelidade na cova", "Daniel 6:10-23", "Aramaico bíblico", "אֱלָהּ", "elah", "“Deus”; a palavra aramaica ocorre em trechos de Daniel escritos nessa língua.", "A narrativa situa Daniel a serviço de governantes estrangeiros e sob uma ordem que ameaça sua prática religiosa.", "A coragem de Daniel aparece como fidelidade sob pressão; não promete que toda pessoa será poupada do perigo."],
  ["A misericórdia desejada", "Oséias 6:4-6", "Hebraico bíblico", "חֶסֶד", "chesed", "“Lealdade/misericórdia”; aqui é preferida a rituais sem compromisso com Deus.", "O profeta critica a lealdade passageira de Israel e Judá, comparando-a à neblina da manhã.", "O texto denuncia uma piedade sem constância; misericórdia não é desculpa para ignorar justiça."],
  ["Derramarei meu Espírito", "Joel 2:28-32", "Hebraico bíblico", "רוּחַ", "ruach", "“Espírito/vento/sopro”; o sentido depende do contexto; aqui o texto fala da ação de Deus sobre pessoas.", "A promessa inclui filhos e filhas, jovens e idosos, servos e servas.", "A visão amplia quem pode receber o Espírito e falar; não restringe a voz profética a uma elite."],
  ["Justiça como correnteza", "Amós 5:21-24", "Hebraico bíblico", "מִשְׁפָּט", "mishpat", "“Justiça”; o profeta a quer fluindo como água junto à retidão.", "Amós denuncia desigualdade e culto formal no reino do norte durante um período de prosperidade.", "A linguagem profética exige coerência entre culto e justiça praticada, especialmente nas relações sociais."],
  ["O Senhor está contigo", "Sofonias 3:14-17", "Hebraico bíblico", "גִּבּוֹר", "gibbor", "“Guerreiro/poderoso”; imagem usada para descrever Deus como aquele que salva.", "O trecho de restauração encerra um livro que também denuncia violência e injustiça em Judá.", "A imagem de poder aparece orientada à salvação e à alegria, não à legitimação de violência humana."],
  ["O Verbo se fez carne", "João 1:1-14", "Grego koiné", "λόγος", "logos", "“Palavra/discurso/razão”; João emprega o termo em diálogo com tradições judaicas e o apresenta ligado à criação e a Jesus.", "O prólogo do Evangelho apresenta Jesus por meio de linguagem que ecoa a criação e a tradição da Palavra de Deus.", "“Carne” enfatiza a vida humana concreta de Jesus; a passagem não descreve uma salvação distante da experiência humana."],
  ["Nascer do alto", "João 3:1-8", "Grego koiné", "ἄνωθεν", "anōthen", "Pode significar “de novo” ou “do alto”; o duplo sentido sustenta o diálogo entre Jesus e Nicodemos.", "Nicodemos, um mestre de Israel, conversa com Jesus à noite e entende a expressão de modo literal.", "O mal-entendido abre espaço para aprofundar a metáfora; não é um teste para ridicularizar perguntas sinceras."],
  ["Adorar em espírito e verdade", "João 4:19-26", "Grego koiné", "πνεῦμα", "pneuma", "“Espírito/sopro”; no diálogo, a expressão aponta para adoração ligada à ação de Deus, não a um lugar exclusivo.", "Jesus conversa com uma mulher samaritana em meio a antigas disputas sobre o lugar correto de adoração.", "A conversa desloca a disputa geográfica e reconhece a dignidade da interlocutora como parceira teológica."],
  ["A vida em abundância", "João 10:7-18", "Grego koiné", "περισσός", "perissos", "“Abundante/pleno”; descreve a vida que Jesus oferece no contraste com o ladrão que destrói.", "A metáfora do pastor fala de cuidado e liderança em um contexto de conflito com autoridades.", "Vida abundante não é promessa de riqueza material; o próprio texto destaca cuidado e entrega."],
  ["Permaneçam em mim", "João 15:1-11", "Grego koiné", "μένω", "menō", "“Permanecer”; verbo repetido para falar de vínculo contínuo entre Jesus, discípulos e seus ensinamentos.", "O discurso de despedida prepara os discípulos para a separação e para a vida comunitária.", "Permanecer inclui amor e fruto; não significa passividade nem sucesso medido por números."],
  ["O caminho, a verdade e a vida", "João 14:1-11", "Grego koiné", "ὁδός", "hodos", "“Caminho”; imagem de acesso e direção usada na resposta de Jesus a discípulos preocupados.", "Jesus consola os discípulos durante o discurso de despedida antes de sua prisão.", "A afirmação é relacional dentro do diálogo; deve ser lida junto ao consolo e ao serviço do mesmo discurso."],
  ["Água viva", "João 7:37-39", "Grego koiné", "ὕδωρ ζῶν", "hydōr zōn", "“Água viva”; podia indicar água corrente e, no texto, é associada pelo narrador ao Espírito.", "A fala ocorre durante uma festa judaica em Jerusalém, em um momento de grande simbolismo ritual.", "A imagem combina sede humana e a promessa do Espírito; não é uma fórmula para prometer facilidade."],
  ["Servir como Jesus", "Marcos 10:42-45", "Grego koiné", "διάκονος", "diakonos", "“Servo/ministro”; Jesus contrasta serviço com o exercício dominador do poder.", "Os discípulos discutem grandeza enquanto Jesus caminha para Jerusalém.", "A liderança é redefinida como serviço; a passagem não exige tolerar exploração ou abuso."],
  ["Arrepender-se e crer", "Marcos 1:14-20", "Grego koiné", "μετανοέω", "metanoeō", "“Mudar de mente/voltar-se”; no anúncio de Jesus, indica reorientar a vida diante do Reino.", "Marcos situa o anúncio depois da prisão de João e no início do ministério público de Jesus.", "Arrependimento é mudança de direção, não vergonha sem saída nem condenação de quem busca ajuda."],
  ["A semente que cresce", "Marcos 4:26-32", "Grego koiné", "αὐτομάτη", "automátē", "“Por si mesma”; descreve o crescimento da semente que o agricultor não consegue explicar nem controlar.", "As parábolas do Reino usam imagens agrícolas familiares aos ouvintes de Jesus.", "A parábola reconhece limites humanos no crescimento; não transforma passividade em virtude."],
  ["A compaixão de Jesus", "Marcos 6:30-44", "Grego koiné", "σπλαγχνίζομαι", "splanchnizomai", "“Sentir compaixão”; expressão intensa que liga a reação de Jesus ao cuidado concreto.", "Uma multidão segue Jesus a um lugar deserto e está sem alimento.", "A compaixão da narrativa se traduz em ensinar e alimentar; percebe necessidades concretas."],
  ["A fé e a perseverança", "Marcos 9:14-29", "Grego koiné", "πιστεύω", "pisteuō", "“Crer/confiar”; o pai expressa confiança e também sua luta para crer.", "Um pai busca ajuda para o filho em sofrimento e pede auxílio aos discípulos.", "A frase do pai acolhe fé e dúvida juntas; sofrimento não deve ser atribuído à falta de fé."],
  ["O maior é quem serve", "Lucas 22:24-27", "Grego koiné", "διακονέω", "diakoneō", "“Servir/atender”; Jesus se apresenta como aquele que serve à mesa.", "A disputa por posição ocorre durante a última refeição de Jesus com os discípulos.", "O serviço questiona hierarquias de prestígio, sem glorificar a exploração de quem serve."],
  ["Hoje a salvação chegou", "Lucas 19:1-10", "Grego koiné", "σωτηρία", "sōtēria", "“Salvação/resgate”; Jesus relaciona a palavra à chegada do Reino e à mudança observável de Zaqueu.", "Zaqueu é chefe de cobradores de impostos em Jericó, cidade importante na rota comercial.", "A mudança de Zaqueu inclui reparação econômica; reconciliação tem consequências concretas."],
  ["O bom samaritano", "Lucas 10:25-37", "Grego koiné", "πλησίον", "plēsion", "“Próximo”; a parábola desloca a pergunta de quem merece ser próximo para quem age com misericórdia.", "Judeus e samaritanos viviam sob antigas tensões religiosas e sociais.", "Jesus usa um samaritano como exemplo; compaixão atravessa fronteiras e se expressa em cuidado real."],
  ["O filho que volta", "Lucas 15:11-32", "Grego koiné", "σπλαγχνίζομαι", "splanchnizomai", "“Sentir compaixão”; descreve a reação do pai ao ver o filho retornar.", "A parábola responde a críticas contra Jesus por acolher pessoas consideradas pecadoras.", "O acolhimento do pai confronta ressentimento; a história também deixa em aberto o irmão mais velho."],
  ["A alegria de encontrar", "Lucas 15:1-10", "Grego koiné", "χαρά", "chara", "“Alegria”; repete-se nas parábolas da ovelha e da moeda encontradas.", "Jesus conta as parábolas a pessoas que criticam sua convivência com marginalizados.", "A alegria é comunitária e acompanha a busca pelo que se perdeu, não o desprezo de quem se afastou."],
  ["O Espírito e a missão", "Atos 1:6-11", "Grego koiné", "μάρτυς", "martys", "“Testemunha”; descreve quem dá testemunho, antes de a palavra adquirir o uso posterior de mártir.", "Lucas abre Atos com os discípulos aguardando o Espírito e se preparando para testemunhar.", "Testemunhar envolve falar e viver; o termo neste contexto não ordena buscar sofrimento ou perseguição."],
  ["Uma comunidade generosa", "Atos 2:42-47", "Grego koiné", "κοινωνία", "koinōnia", "“Comunhão/participação”; descreve vida compartilhada, não apenas uma reunião social.", "O retrato da comunidade de Jerusalém reúne ensino, refeições, oração e partilha.", "A comunhão narrada inclui recursos materiais; generosidade não deve ser coagida por líderes."],
  ["A graça que acolhe", "Atos 10:34-48", "Grego koiné", "προσωπολήμπτης", "prosōpolēmptēs", "“Parcial”; Pedro conclui que Deus não favorece pessoas com base em origem ou posição.", "Pedro encontra Cornélio, um gentio, e reconhece que sua compreensão está sendo ampliada.", "A passagem narra uma fronteira sendo atravessada e exige revisão de preconceitos comunitários."],
  ["Fé e graça", "Romanos 3:21-28", "Grego koiné", "χάρις", "charis", "“Graça/favor”; Paulo a relaciona à iniciativa de Deus, não a uma conquista humana.", "Paulo argumenta sobre pecado e justificação em uma carta dirigida a comunidades diversas em Roma.", "A graça desfaz vanglória e distinções de mérito; a passagem não reduz justiça a indiferença ética."],
  ["A paz com Deus", "Romanos 5:1-5", "Grego koiné", "εἰρήνη", "eirēnē", "“Paz”; em continuidade com o hebraico shalom, pode envolver reconciliação e bem-estar.", "Paulo explica consequências da justificação e fala de esperança em meio a aflições.", "Esperança não nega o sofrimento; Paulo reconhece aflição sem chamar violência ou dor de boas."],
  ["Uma nova maneira de viver", "Romanos 12:1-2", "Grego koiné", "μεταμορφόω", "metamorphoō", "“Transformar”; descreve renovação que afeta a mente e o discernimento.", "Após desenvolver sua argumentação teológica, Paulo passa a exortações para a vida comunitária.", "Transformação inclui discernimento crítico, não conformidade automática a expectativas de poder."],
  ["Dons diferentes, um corpo", "1 Coríntios 12:12-27", "Grego koiné", "σῶμα", "sōma", "“Corpo”; metáfora que Paulo usa para interdependência e dignidade entre os membros da comunidade.", "A comunidade de Corinto enfrenta competição e desigualdade no uso dos dons.", "Nenhum membro é dispensável; diversidade não justifica hierarquia de valor."],
  ["O amor paciente", "1 Coríntios 13:1-7", "Grego koiné", "ἀγάπη", "agapē", "“Amor”; Paulo descreve suas ações e limites em vez de oferecer apenas uma definição abstrata.", "O poema está inserido em uma discussão sobre dons e conflitos na igreja de Corinto.", "A descrição do amor não deve servir para exigir que alguém permaneça em uma relação abusiva."],
  ["Uma generosidade livre", "2 Coríntios 9:6-11", "Grego koiné", "ἱλαρός", "hilaros", "“Alegre/pronto”; caracteriza a generosidade livre, não constrangida.", "Paulo organiza uma coleta de ajuda para cristãos necessitados em Jerusalém.", "A oferta é voluntária e voltada à partilha; o texto não promete enriquecimento financeiro a quem doa."],
  ["Liberdade que serve", "Gálatas 5:13-26", "Grego koiné", "ἐλευθερία", "eleutheria", "“Liberdade”; Paulo a vincula ao amor e ao serviço mútuo.", "A carta debate a identidade dos gentios e a vida das comunidades da Galácia.", "Liberdade cristã não é licença para dominar; Paulo a contrapõe à exploração do próximo."],
  ["Reconciliação em Cristo", "Efésios 2:11-22", "Grego koiné", "εἰρήνη", "eirēnē", "“Paz”; o texto a associa à superação da hostilidade e à formação de uma comunidade.", "O autor aborda a divisão entre gentios e judeus dentro da comunidade cristã.", "A reconciliação tem dimensão social; não significa apagar diferenças ou silenciar injustiças."],
  ["Humildade e serviço", "Filipenses 2:1-11", "Grego koiné", "κενόω", "kenoō", "“Esvaziar”; o hino descreve a descida e a entrega de Cristo, em linguagem teológica complexa.", "Paulo exorta a comunidade a abandonar rivalidade e buscar o bem comum.", "A humildade de Cristo não é uma ordem para aceitar abuso; a passagem critica a ambição egoísta."],
  ["A paz que guarda", "Filipenses 4:4-9", "Grego koiné", "φρουρέω", "phroureō", "“Guardar/proteger”; termo usado para a paz de Deus que guarda coração e mente.", "Paulo escreve da prisão e orienta uma comunidade a lidar com ansiedade e conflitos.", "A oração pode apoiar a vida, mas não substitui cuidado clínico ou ajuda concreta quando necessários."],
  ["Revestir-se de compaixão", "Colossenses 3:12-17", "Grego koiné", "σπλάγχνα οἰκτιρμοῦ", "splanchna oiktirmou", "Expressão de “profunda compaixão”; literalmente ligada às entranhas como sede das emoções.", "O texto orienta uma comunidade a cultivar perdão, amor e gratidão em conjunto.", "As virtudes são práticas comunitárias; perdão não exige abandonar limites ou segurança."],
  ["Trabalho e esperança", "1 Tessalonicenses 4:9-12", "Grego koiné", "φιλαδελφία", "philadelphia", "“Amor fraternal”; descreve o cuidado mútuo entre membros da comunidade.", "Paulo escreve a uma comunidade recente que enfrenta dúvidas e pressão social.", "O cuidado inclui viver com responsabilidade e respeitar a vida cotidiana de outras pessoas."],
  ["A Escritura e o ensino", "2 Timóteo 3:14-17", "Grego koiné", "θεόπνευστος", "theopneustos", "“Inspirada por Deus” ou “soprada por Deus”; há debate sobre a melhor nuance da palavra.", "A carta encoraja Timóteo a persistir no ensino recebido em meio a dificuldades.", "O próprio texto orienta a Escritura para ensinar e formar, não para justificar dano ou manipulação."],
  ["A fé que trabalha pelo amor", "Tiago 2:14-18", "Grego koiné", "ἔργον", "ergon", "“Obra/ação”; Tiago questiona uma afirmação de fé que não responde às necessidades concretas.", "A carta confronta favoritismo e negligência de pessoas pobres na assembleia.", "A ajuda deve responder à necessidade real; palavras religiosas sem cuidado são insuficientes."],
  ["Sabedoria que vem do alto", "Tiago 3:13-18", "Grego koiné", "πραΰτης", "prautēs", "“Mansidão”; não é fraqueza, mas uma postura não arrogante ligada à sabedoria.", "Tiago contrasta ciúme e ambição com uma sabedoria marcada por paz e misericórdia.", "A sabedoria se reconhece por frutos de paz e justiça, não por discursos impositivos."],
  ["Esperança viva", "1 Pedro 1:3-9", "Grego koiné", "ἐλπίς", "elpis", "“Esperança”; aparece como expectativa sustentada pela ressurreição, em meio a provações.", "A carta é dirigida a comunidades dispersas que enfrentam pressões sociais.", "A esperança não minimiza provações nem exige que pessoas escondam sua dor."],
  ["Amor que acolhe", "1 Pedro 4:8-11", "Grego koiné", "φιλοξενία", "philoxenia", "“Hospitalidade”; literalmente amor ao estrangeiro ou ao hóspede.", "A instrução prepara comunidades para praticarem hospitalidade e serviço em tempos difíceis.", "A hospitalidade pode ser simples e segura; ela deve respeitar os limites de quem acolhe."],
  ["Deus é amor", "1 João 4:7-12", "Grego koiné", "ἀγάπη", "agapē", "“Amor”; a carta relaciona o amor de Deus com ações concretas entre pessoas.", "A comunidade enfrenta conflitos sobre identidade e conduta; o autor usa a linguagem do amor como critério.", "A afirmação teológica ganha forma no cuidado mútuo, sem legitimar relações que ferem."],
  ["Viver na luz", "1 João 1:5-10", "Grego koiné", "κοινωνία", "koinōnia", "“Comunhão/participação”; o texto relaciona caminhar na luz a vínculos honestos.", "A carta usa imagens de luz e trevas para tratar de verdade e vida comunitária.", "Caminhar na luz inclui admitir erros; confissão pode ser parte de reparação, não humilhação."],
  ["A esperança da ressurreição", "1 Coríntios 15:12-26", "Grego koiné", "ἀνάστασις", "anastasis", "“Ressurreição”; a palavra aponta para levantar-se e é central ao argumento de Paulo.", "Paulo responde a dúvidas sobre a ressurreição entre os cristãos de Corinto.", "A esperança cristã inclui a vida corporal e a derrota da morte, não o desprezo pelo corpo."],
  ["A nova criação", "2 Coríntios 5:14-21", "Grego koiné", "καταλλαγή", "katallagē", "“Reconciliação”; Paulo usa a palavra para falar de restauração de relações com Deus e do ministério comunitário.", "A carta trata de tensões entre Paulo e a comunidade, chamando a uma mudança de perspectiva.", "Reconciliação é trabalho confiado à comunidade; não elimina a responsabilidade por reparar danos."],
].map(([title, reference, language, original, transliteration, sense, context, insight]) => ({
  title,
  reference,
  theme: `Estudo ${language.toLowerCase()} · ${transliteration}`,
  context,
  word: `${original} (${transliteration}) — ${language}: ${sense}`,
  meaning: sense,
  lesson: insight,
  reflection: `O que a passagem revela sobre “${title.toLowerCase()}”? Que detalhe desafia ou consola você?`,
  practice: "Registre uma resposta concreta e possível ao que leu, respeitando seus limites e sua realidade."
}));

const adultJourneyTitles = [
  "Criação, dignidade e promessa",
  "Famílias, encontros e reconciliação",
  "Libertação, cuidado e aliança",
  "Instrução, justiça e vida comunitária",
  "Chamado, amizade e liderança",
  "Sabedoria, crise e confiança",
  "Oração, esperança e consolo",
  "Profetas, justiça e restauração",
  "Jesus, a Palavra e a nova vida",
  "O Reino, a fé e a compaixão",
  "Serviço, perdão e acolhimento",
  "Espírito, missão e comunidade",
  "Graça, transformação e unidade",
  "Amor, ressurreição e nova criação"
];

function getReferenceBook(reference) {
  const match = reference.match(/^(.+?)\s+\d+:/);
  return match ? normalized(match[1]) : "";
}

function getReferenceChapter(reference) {
  const match = reference.match(/\s(\d+):/);
  return match ? Number(match[1]) : 0;
}

function getTestament(book) {
  const oldTestament = new Set([
    "genesis", "exodo", "levitico", "numeros", "deuteronomio", "josue", "juizes", "rute",
    "1 samuel", "2 samuel", "1 reis", "2 reis", "1 cronicas", "2 cronicas", "esdras",
    "neemias", "ester", "jo", "salmos", "proverbios", "eclesiastes", "cantico dos cantares",
    "isaias", "jeremias", "lamentacoes", "ezequiel", "daniel", "oseias", "joel", "amos",
    "obadias", "jonas", "miqueias", "naum", "habacuque", "sofonias", "ageu", "zacarias", "malaquias"
  ]);
  return oldTestament.has(book) ? "hebraico" : "grego";
}

const topicalLexicon = [
  {
    id: "amor",
    terms: ["amor", "amar", "amado", "amiga", "amizade", "compaix", "bondade", "cuidado", "miseric", "próximo", "proximo", "hospitalidade", "acolh"],
    words: [
      { original: "אָהַב", transliteration: "ahav", language: "Hebraico bíblico", meaning: "amar, afeição ou compromisso relacional; o alcance depende dos vínculos descritos.", context: "Verbo comum na Bíblia Hebraica para relações familiares, comunitárias e amor a Deus; não é um termo técnico com um único tipo de amor.", purpose: "No tema do estudo, ajuda a observar o amor como vínculo que se demonstra em atitudes.", reference: "Deuteronômio 6:5" },
      { original: "חֶסֶד", transliteration: "chesed", language: "Hebraico bíblico", meaning: "bondade leal, misericórdia ou amor comprometido; a tradução varia conforme a relação.", context: "Usado em narrativas e orações para descrever lealdade concreta dentro de uma aliança ou relação.", purpose: "Destaca a constância e o cuidado prático como dimensões do amor bíblico.", reference: "Rute 1:8; Salmos 136:1" },
      { original: "ἀγάπη", transliteration: "agapē", language: "Grego koiné", meaning: "amor ou afeição; seu sentido vem do contexto, não de uma escala fixa de tipos de amor.", context: "No Novo Testamento, aparece em ensinamentos sobre amor a Deus e ao próximo e nas relações da comunidade cristã.", purpose: "Em João 3:16, nomeia o amor de Deus que dá origem à ação descrita no versículo.", reference: "João 3:16; 1 Coríntios 13:4-7" }
    ]
  },
  {
    id: "fe",
    terms: ["fé", "fe ", "crer", "confian", "acreditar", "fiel", "fidelidade", "dúvida", "duvida"],
    words: [
      { original: "בָּטַח", transliteration: "batach", language: "Hebraico bíblico", meaning: "confiar ou sentir-se seguro; o objeto e a situação definem a nuance.", context: "Usado em poesia e narrativas para confiança em Deus ou em outras pessoas, especialmente diante de ameaça.", purpose: "Ajuda a ler confiança como relação e postura diante de uma situação concreta.", reference: "Provérbios 3:5; Salmos 56:3" },
      { original: "אֱמוּנָה", transliteration: "emunah", language: "Hebraico bíblico", meaning: "firmeza, confiabilidade ou fidelidade; em certos contextos, fé.", context: "Pertence à família de palavras ligada a firmeza e confiança, aplicada a pessoas e a Deus.", purpose: "Amplia a reflexão da fé para lealdade e perseverança, sem reduzi-la a concordar com ideias.", reference: "Habacuque 2:4" },
      { original: "πίστις", transliteration: "pistis", language: "Grego koiné", meaning: "fé, confiança ou fidelidade; a tradução depende da construção e do argumento.", context: "Usada em cartas e narrativas para confiança, lealdade e convicção em relações humanas e religiosas.", purpose: "No tema do estudo, ajuda a perguntar como a confiança se manifesta na resposta da pessoa.", reference: "Romanos 1:17; Tiago 2:17" }
    ]
  },
  {
    id: "justica",
    terms: ["justiça", "justica", "justo", "retidão", "retidao", "dignidade", "oprim", "estrangeiro", "pobre", "direito", "equidade"],
    words: [
      { original: "מִשְׁפָּט", transliteration: "mishpat", language: "Hebraico bíblico", meaning: "justiça, decisão ou julgamento; refere-se à aplicação justa de direitos e responsabilidades.", context: "Presente em leis e denúncias proféticas sobre tribunais, relações sociais e proteção de vulneráveis.", purpose: "No estudo, convida a observar quem recebe justiça e quem corre risco de ser ignorado.", reference: "Miqueias 6:8; Amós 5:24" },
      { original: "צְדָקָה", transliteration: "tsedaqah", language: "Hebraico bíblico", meaning: "retidão ou justiça relacional; pode descrever conduta correta e relações justas.", context: "Aparece em textos legais, sapienciais e proféticos para falar de agir com retidão.", purpose: "Liga a reflexão moral à maneira como as pessoas tratam umas às outras.", reference: "Gênesis 15:6; Isaías 1:17" },
      { original: "δικαιοσύνη", transliteration: "dikaiosynē", language: "Grego koiné", meaning: "justiça ou retidão; o sentido é definido pelo argumento do texto.", context: "Usada nos Evangelhos e cartas em discussões sobre vida justa, Reino de Deus e relações comunitárias.", purpose: "Ajuda a ler justiça como prática e compromisso, não apenas como ideia abstrata.", reference: "Mateus 5:6; Romanos 14:17" }
    ]
  },
  {
    id: "esperanca",
    terms: ["esperança", "esperanca", "consolo", "futuro", "ressurrei", "renova", "aguardar", "exílio", "exilio"],
    words: [
      { original: "תִּקְוָה", transliteration: "tiqvah", language: "Hebraico bíblico", meaning: "esperança ou expectativa; em alguns contextos, também pode significar corda.", context: "Usada em poemas e narrativas para expressar expectativa por um futuro ou livramento.", purpose: "Mostra a esperança como expectativa concreta, não como negação do sofrimento presente.", reference: "Jeremias 29:11; Rute 1:12" },
      { original: "יָחַל", transliteration: "yachal", language: "Hebraico bíblico", meaning: "esperar ou aguardar com expectativa.", context: "Comum em salmos de lamento e confiança, em que a espera convive com aflição.", purpose: "Ajuda a perceber que esperança bíblica pode incluir espera paciente e clamor.", reference: "Salmos 130:5" },
      { original: "ἐλπίς", transliteration: "elpis", language: "Grego koiné", meaning: "esperança ou expectativa; a base dessa expectativa é indicada pelo texto.", context: "Nas cartas do Novo Testamento, ligada à ressurreição, à promessa e à perseverança comunitária.", purpose: "Aponta para uma expectativa sustentada por uma promessa, não para otimismo automático.", reference: "Romanos 5:2-5; 1 Pedro 1:3" }
    ]
  },
  {
    id: "presenca",
    terms: ["presença", "presenca", "caminho", "viajem", "viajar", "viagem", "deserto", "sonho", "lugar", "encontro com deus", "deus comigo"],
    words: [
      { original: "מָקוֹם", transliteration: "maqom", language: "Hebraico bíblico", meaning: "lugar ou espaço; o contexto define sua importância narrativa.", context: "Em Gênesis 28, a repetição de “lugar” marca o local onde Jacó tem o sonho e reconhece a presença de Deus.", purpose: "A palavra acompanha a mudança de percepção de Jacó sobre um local comum durante sua viagem.", reference: "Gênesis 28:10-22" },
      { original: "סֻלָּם", transliteration: "sullam", language: "Hebraico bíblico", meaning: "escada ou estrutura de subida; a forma ocorre em Gênesis 28 e sua tradução exata é discutida.", context: "No sonho de Jacó, a estrutura liga a terra ao céu e anjos sobem e descem por ela.", purpose: "A imagem articula a cena de comunicação entre céu e terra, sem exigir uma identificação arqueológica específica.", reference: "Gênesis 28:12" },
      { original: "מַצֵּבָה", transliteration: "matstsebah", language: "Hebraico bíblico", meaning: "pedra erguida ou coluna memorial.", context: "Jacó ergue uma pedra como marco e derrama óleo sobre ela ao recordar o sonho.", purpose: "O gesto transforma a lembrança da experiência em um marco visível no caminho.", reference: "Gênesis 28:18-22" }
    ]
  },
  {
    id: "oracao",
    terms: ["oração", "oracao", "orar", "clamar", "pedir", "buscar a deus", "louvor", "adorar"],
    words: [
      { original: "תְּפִלָּה", transliteration: "tefillah", language: "Hebraico bíblico", meaning: "oração ou súplica.", context: "Usada em títulos e textos de oração, incluindo pedidos individuais e intercessões públicas.", purpose: "Ajuda a reconhecer oração como fala dirigida a Deus, que pode conter pedido, louvor ou lamento.", reference: "1 Reis 8:28; Salmos 4:1" },
      { original: "זָעַק", transliteration: "za'aq", language: "Hebraico bíblico", meaning: "gritar ou clamar por socorro, especialmente em situação de aflição.", context: "Aparece em narrativas de opressão e em pedidos urgentes por justiça ou libertação.", purpose: "Preserva a dimensão de urgência e sofrimento presente em algumas orações bíblicas.", reference: "Êxodo 2:23; Salmos 22:5" },
      { original: "προσεύχομαι", transliteration: "proseuchomai", language: "Grego koiné", meaning: "orar ou dirigir uma oração.", context: "Usada nos Evangelhos e cartas para práticas pessoais e comunitárias de oração.", purpose: "Situa a oração como prática de relação com Deus, não como fórmula para controlar resultados.", reference: "Mateus 6:6; Filipenses 4:6" }
    ]
  },
  {
    id: "sabedoria",
    terms: ["sabedoria", "discernimento", "decisão", "decidir", "conselho", "ensino", "aprender", "orientação", "orientacao"],
    words: [
      { original: "חָכְמָה", transliteration: "chokhmah", language: "Hebraico bíblico", meaning: "sabedoria ou habilidade competente, prática e moral.", context: "Usada em literatura sapiencial e narrativas sobre artesãos e liderança.", purpose: "Mostra sabedoria como capacidade de viver e agir bem, não apenas possuir informação.", reference: "Provérbios 1:7; Êxodo 31:3" },
      { original: "בִּינָה", transliteration: "binah", language: "Hebraico bíblico", meaning: "entendimento ou discernimento.", context: "Frequentemente aparece junto à sabedoria para descrever compreensão que avalia situações.", purpose: "Ajuda a destacar o processo de perceber diferenças e escolher com responsabilidade.", reference: "Provérbios 2:3-6" },
      { original: "σοφία", transliteration: "sophia", language: "Grego koiné", meaning: "sabedoria; discernimento aplicado à vida e às decisões.", context: "Usada em ensinamentos de Jesus, cartas e textos judaicos em grego.", purpose: "No estudo, chama a avaliar as escolhas pelos frutos e pelo cuidado com o próximo.", reference: "Tiago 3:13-17" }
    ]
  },
  {
    id: "servico",
    terms: ["servir", "serviço", "servico", "servo", "liderança", "lideranca", "humildade", "trabalho", "cuidar"],
    words: [
      { original: "עָבַד", transliteration: "avad", language: "Hebraico bíblico", meaning: "trabalhar, servir ou prestar serviço; também pode descrever o cultivo da terra.", context: "Usada para trabalho cotidiano e serviço, inclusive em contextos religiosos.", purpose: "Conecta serviço a trabalho concreto e responsabilidade, conforme o trecho.", reference: "Gênesis 2:15; Deuteronômio 10:12" },
      { original: "διάκονος", transliteration: "diakonos", language: "Grego koiné", meaning: "servo, ajudante ou ministro; o contexto define a função.", context: "Usada para pessoas que prestam serviço e, em cartas, para funções de liderança comunitária.", purpose: "Ajuda a ler liderança pelo cuidado prestado, e não apenas pelo status.", reference: "Marcos 10:43; Romanos 16:1" },
      { original: "δουλεύω", transliteration: "douleuō", language: "Grego koiné", meaning: "servir ou estar a serviço; em alguns contextos, servir como escravo.", context: "O termo tem uma história social ligada à escravidão antiga; sua aplicação figurada deve ser lida com cuidado.", purpose: "Em exortações cristãs, pode descrever serviço mútuo, sem legitimar escravidão ou exploração.", reference: "Gálatas 5:13" }
    ]
  },
  {
    id: "perdao",
    terms: ["perdão", "perdao", "perdoar", "reconcilia", "culpa", "conflito", "erro", "arrepend", "ressentimento"],
    words: [
      { original: "סָלַח", transliteration: "salach", language: "Hebraico bíblico", meaning: "perdoar; na Bíblia Hebraica, aparece frequentemente para o perdão atribuído a Deus.", context: "Usada em súplicas e textos sobre culpa, aliança e restauração.", purpose: "Ajuda a tratar perdão como resposta à ruptura, sem apagar a necessidade de justiça.", reference: "Salmos 103:3; Números 14:19" },
      { original: "נָשָׂא", transliteration: "nasa", language: "Hebraico bíblico", meaning: "levantar ou carregar; em certos contextos, levar/remover culpa.", context: "Verbo de muitos sentidos, cuja nuance depende da construção e do contexto.", purpose: "Quando relacionado à culpa, oferece a imagem de removê-la ou carregá-la; não é a única nuance possível.", reference: "Êxodo 34:7; Salmos 32:1" },
      { original: "ἀφίημι", transliteration: "aphiēmi", language: "Grego koiné", meaning: "deixar ir, liberar ou perdoar; também pode significar abandonar ou permitir.", context: "Nos Evangelhos, usado em cenas de perdão e em metáforas de dívidas.", purpose: "Na parábola de Mateus 18, a imagem da dívida ajuda a discutir perdão e responsabilidade.", reference: "Mateus 6:12; 18:27" }
    ]
  },
  {
    id: "paz",
    terms: ["paz", "ansiedade", "ansioso", "descanso", "medo", "tempestade", "preocup", "calma"],
    words: [
      { original: "שָׁלוֹם", transliteration: "shalom", language: "Hebraico bíblico", meaning: "paz, integridade ou bem-estar; não se limita à ausência de conflito.", context: "Usada em saudações, bênçãos e visões de vida comunitária íntegra.", purpose: "Amplia paz para incluir segurança, relações e condições de vida.", reference: "Números 6:26; Jeremias 29:7" },
      { original: "εἰρήνη", transliteration: "eirēnē", language: "Grego koiné", meaning: "paz; em traduções bíblicas pode carregar sentidos próximos de shalom.", context: "Usada em saudações e exortações sobre reconciliação e vida comunitária.", purpose: "Convida a ler paz também como relações restauradas, sem prometer vida sem problemas.", reference: "João 14:27; Romanos 5:1" },
      { original: "μέριμνα", transliteration: "merimna", language: "Grego koiné", meaning: "preocupação ou ansiedade; o contexto define se a preocupação é legítima ou prejudicial.", context: "Usada em ensinamentos sobre as preocupações da vida e em advertências sobre distrações.", purpose: "Ajuda a nomear preocupações reais e a refletir sobre cuidado e confiança, sem culpar quem sente ansiedade.", reference: "Mateus 6:25; 1 Pedro 5:7" }
    ]
  },
  {
    id: "criacao",
    terms: ["criação", "criacao", "criar", "jardim", "natureza", "terra", "imagem de deus", "cuidar da criação"],
    words: [
      { original: "בָּרָא", transliteration: "bara", language: "Hebraico bíblico", meaning: "criar; aparece com Deus como sujeito em diversos textos, mas não descreve sozinho todo o processo da criação.", context: "Usado em relatos de criação e em imagens proféticas de renovação.", purpose: "No estudo, destaca a ação criadora de Deus no contexto específico do texto.", reference: "Gênesis 1:1; Isaías 40:26" },
      { original: "צֶלֶם", transliteration: "tselem", language: "Hebraico bíblico", meaning: "imagem ou representação.", context: "No antigo Oriente Próximo, imagens podiam representar autoridade; Gênesis atribui essa dignidade a toda a humanidade.", purpose: "Sustenta a reflexão sobre valor humano e responsabilidade pela criação.", reference: "Gênesis 1:26-27" },
      { original: "שָׁמַר", transliteration: "shamar", language: "Hebraico bíblico", meaning: "guardar, observar ou cuidar; a nuance depende da tarefa descrita.", context: "Usado para guardar algo, cumprir instruções ou cuidar de um espaço confiado.", purpose: "Em Gênesis 2, junto a trabalhar/servir, descreve a responsabilidade pelo jardim.", reference: "Gênesis 2:15" }
    ]
  },
  {
    id: "alianca",
    terms: ["aliança", "alianca", "promessa", "pacto", "fidelidade de deus", "compromisso"],
    words: [
      { original: "בְּרִית", transliteration: "berit", language: "Hebraico bíblico", meaning: "aliança ou compromisso formal; os termos variam entre as narrativas.", context: "Usada em acordos entre pessoas e em compromissos entre Deus e o povo.", purpose: "Ajuda a observar as responsabilidades, promessas e sinais presentes na passagem.", reference: "Gênesis 9:8-17; Êxodo 19:5" },
      { original: "חֶסֶד", transliteration: "chesed", language: "Hebraico bíblico", meaning: "bondade leal ou amor comprometido; tradução contextual.", context: "Associada a relações de aliança e a atos de lealdade nas narrativas e orações.", purpose: "Destaca a dimensão relacional da promessa e da fidelidade.", reference: "Êxodo 34:6; Salmos 136:1" },
      { original: "διαθήκη", transliteration: "diathēkē", language: "Grego koiné", meaning: "aliança ou disposição testamentária; o contexto determina a nuance.", context: "Usada na tradução grega das Escrituras Hebraicas e no Novo Testamento para falar de aliança.", purpose: "Ajuda a acompanhar como os autores cristãos retomam a linguagem da aliança.", reference: "Lucas 22:20; Hebreus 8:6" }
    ]
  },
  {
    id: "coragem",
    terms: ["coragem", "medo", "persever", "provação", "desafio", "dificuldade", "persist", "força"],
    words: [
      { original: "חָזַק", transliteration: "chazaq", language: "Hebraico bíblico", meaning: "ser forte, firme ou fortalecer; não implica ausência de medo.", context: "Usado em narrativas de liderança, encorajamento e preparação para tarefas difíceis.", purpose: "No estudo, liga coragem a uma tarefa e à perseverança, não a invulnerabilidade.", reference: "Josué 1:6-9" },
      { original: "קָוָה", transliteration: "qavah", language: "Hebraico bíblico", meaning: "esperar com expectativa; também tem sentidos concretos em outros contextos.", context: "Usado em poesia para espera confiante, inclusive durante dificuldades.", purpose: "Apresenta perseverança como esperança ativa durante a espera.", reference: "Salmos 27:14; Isaías 40:31" },
      { original: "ὑπομονή", transliteration: "hypomonē", language: "Grego koiné", meaning: "perseverança ou firmeza sob pressão.", context: "Usada em cartas para persistência em aflições e na prática do bem.", purpose: "Ajuda a discutir constância sem romantizar sofrimento ou recomendar que alguém enfrente perigo sozinho.", reference: "Tiago 1:3-4; Romanos 5:3-4" }
    ]
  },
  {
    id: "gratidao",
    terms: ["gratidão", "gratidao", "agrade", "louvor", "benção", "bênção", "celebrar"],
    words: [
      { original: "תּוֹדָה", transliteration: "todah", language: "Hebraico bíblico", meaning: "agradecimento, louvor ou ação de graças.", context: "Usada em salmos e práticas comunitárias de gratidão.", purpose: "Mostra gratidão como reconhecimento expresso, individual ou coletivo.", reference: "Salmos 100:4; 107:22" },
      { original: "יָדָה", transliteration: "yadah", language: "Hebraico bíblico", meaning: "dar graças ou louvar; também pode significar confessar conforme a forma e o contexto.", context: "Aparece em orações e narrativas de reconhecimento público.", purpose: "Ajuda a perceber gratidão como resposta que pode ser verbal e comunitária.", reference: "Salmos 9:1; 118:1" },
      { original: "εὐχαριστία", transliteration: "eucharistia", language: "Grego koiné", meaning: "gratidão ou ação de graças.", context: "Usada em cartas e narrativas para agradecer a Deus, inclusive em oração.", purpose: "Liga gratidão a uma prática de reconhecimento, não à negação de dificuldades.", reference: "Filipenses 4:6; Colossenses 3:17" }
    ]
  },
  {
    id: "comunidade",
    terms: ["comunidade", "igreja", "unidade", "compartilh", "grupo", "corpo", "acolh", "vizin"],
    words: [
      { original: "קָהָל", transliteration: "qahal", language: "Hebraico bíblico", meaning: "assembleia ou reunião do povo.", context: "Usado para reuniões do povo de Israel em contextos de culto, instrução e decisões coletivas.", purpose: "Ajuda a observar a dimensão coletiva da fé e da responsabilidade.", reference: "Deuteronômio 9:10; Joel 2:16" },
      { original: "κοινωνία", transliteration: "koinōnia", language: "Grego koiné", meaning: "comunhão, participação ou compartilhamento.", context: "Usada em Atos e nas cartas para vínculos e participação na vida comunitária.", purpose: "Mostra que comunhão inclui relações, cuidado e, às vezes, partilha de recursos.", reference: "Atos 2:42; Filipenses 2:1" },
      { original: "ἀλλήλων", transliteration: "allēlōn", language: "Grego koiné", meaning: "uns aos outros; pronome que marca reciprocidade.", context: "Muito usado nas instruções das cartas sobre relações entre membros da comunidade.", purpose: "Destaca que cuidado e serviço cristãos são mútuos, não responsabilidade unilateral de uma pessoa.", reference: "Gálatas 5:13; Efésios 4:32" }
    ]
  },
  {
    id: "reino",
    terms: ["reino", "discípulo", "discipulo", "seguir jesus", "jesus", "evangelho", "missão", "missao"],
    words: [
      { original: "מַלְכוּת", transliteration: "malkhut", language: "Hebraico bíblico", meaning: "realeza, reinado ou reino; pode apontar para governo e autoridade.", context: "Usado em textos sobre o governo de reis e, em poesia, sobre o reinado de Deus.", purpose: "Ajuda a ler Reino como ação e governo, não apenas como localização.", reference: "Salmos 103:19; Daniel 4:3" },
      { original: "βασιλεία", transliteration: "basileia", language: "Grego koiné", meaning: "reinado, governo ou reino; o contexto define se enfatiza autoridade ou domínio.", context: "Central nos Evangelhos para o anúncio do Reino de Deus.", purpose: "No ensino de Jesus, dirige a atenção aos valores e à ação do reinado de Deus.", reference: "Marcos 1:15; Mateus 6:33" },
      { original: "μαθητής", transliteration: "mathētēs", language: "Grego koiné", meaning: "discípulo ou aprendiz.", context: "Usado para alunos ligados a um mestre, inclusive os seguidores de Jesus.", purpose: "Lembra que seguir Jesus envolve aprender e praticar, não apenas receber um título.", reference: "Mateus 28:19; Marcos 3:14" }
    ]
  },
  {
    id: "vida",
    terms: ["vida", "ressurrei", "morte", "cura", "restaura", "renascer", "novo nascimento"],
    words: [
      { original: "חַיִּים", transliteration: "chayim", language: "Hebraico bíblico", meaning: "vida; pode referir-se à existência, ao bem-estar ou à vida plena.", context: "Usada em narrativas, leis e poemas sobre escolhas, sobrevivência e bênção.", purpose: "Ajuda a perguntar que tipo de vida o texto protege ou anuncia.", reference: "Deuteronômio 30:19; Salmos 16:11" },
      { original: "ζωή", transliteration: "zōē", language: "Grego koiné", meaning: "vida; nos Evangelhos pode receber sentido teológico conforme o contexto.", context: "Usada em falas sobre vida presente e vida associada a Jesus.", purpose: "Em João, permite discutir vida como dádiva e relação, sem reduzi-la a duração biológica.", reference: "João 10:10; 17:3" },
      { original: "ἀνάστασις", transliteration: "anastasis", language: "Grego koiné", meaning: "ressurreição ou levantar-se.", context: "Usada em debates judaicos do período e no anúncio cristão da ressurreição.", purpose: "Sustenta a esperança de que a morte não tem a palavra final na fé cristã.", reference: "João 11:25; 1 Coríntios 15:12" }
    ]
  }
];

function getTopicForStudy(day) {
  const text = normalized([
    day.title,
    day.theme,
    day.context,
    day.lesson,
    day.reflection,
    day.practice,
    day.word
  ].filter(Boolean).join(" "));
  let bestTopic = null;
  let bestScore = 0;
  for (const topic of topicalLexicon) {
    const score = topic.terms.reduce((total, term) => total + (text.includes(normalized(term)) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }
  return { topic: bestTopic, matched: bestScore > 0 };
}

function getRelatedKeywordStudies(day) {
  if (/joao\s+3:16\b/.test(normalized(day.reference))) {
    return [
      { word: "ἀγαπάω (agapaō; forma no versículo: ἠγάπησεν)", meaning: "Amar; em João 3:16, a forma verbal descreve o amor de Deus como ação.", context: "O verbo grego koiné ἀγαπάω assume nuances conforme o contexto; não é uma palavra técnica que, por si só, signifique sempre um amor superior a outros.", insight: "Liga o amor de Deus ao ato de dar o Filho, que é o movimento central do versículo.", reference: "João 3:16", isDirect: true },
      { word: "μονογενής (monogenēs; forma no versículo: μονογενῆ)", meaning: "Único ou singular; tradicionalmente traduzido como “unigênito”.", context: "Adjetivo grego usado para filho único em alguns contextos e, no Evangelho de João, para destacar a singularidade do Filho; a nuance exata é debatida.", insight: "Qualifica o Filho no argumento do versículo e destaca sua relação singular com Deus.", reference: "João 3:16; João 1:14, 18", isDirect: true },
      { word: "πιστεύω (pisteuō; forma no versículo: πιστεύων)", meaning: "Crer, confiar ou depositar confiança; a construção e o contexto orientam a tradução.", context: "O particípio presente πιστεύων descreve “quem crê”/“quem confia”; não se limita necessariamente a concordar intelectualmente.", insight: "Apresenta a confiança em Jesus como resposta à dádiva descrita no versículo.", reference: "João 3:16; João 20:31", isDirect: true }
    ].map((keyword) => ({
      ...keyword,
      topicNotice: "Termo presente no texto grego de João 3:16; a forma entre parênteses é a forma flexionada do versículo."
    }));
  }
  const { topic, matched } = getTopicForStudy(day);
  const adultStudy = adultStudyData.find((study) => study.reference === day.reference && study.title === day.title);
  const directKeyword = adultStudy && adultStudy.word
    ? {
      word: adultStudy.word,
      meaning: adultStudy.meaning,
      context: adultStudy.context,
      insight: adultStudy.lesson,
      reference: adultStudy.reference,
      isDirect: true
    }
    : null;
  const thematicKeywords = (topic ? topic.words : [])
    .filter((word) => !directKeyword || !normalized(directKeyword.word).includes(normalized(word.transliteration)))
    .map((word) => ({
      word: `${word.original} (${word.transliteration}) · ${word.language}`,
      meaning: word.meaning,
      context: word.context,
      insight: word.purpose,
      reference: word.reference,
      isDirect: false
    }));

  const selected = directKeyword
    ? [directKeyword, ...thematicKeywords.slice(0, 2)]
    : thematicKeywords.slice(0, 3);
  return selected.map((keyword) => ({
    ...keyword,
    topicNotice: keyword.isDirect
      ? "Palavra-chave principal deste estudo; observe a forma usada na passagem."
      : matched
        ? `Palavra temática ligada a “${topic.id}”; não é afirmação de que o termo apareça literalmente em ${day.reference}.`
        : "Não foi possível selecionar três termos temáticos com segurança para este encontro."
  }));
}

function createJourneyPlan(plan, weekIndex, days, sourceStartIndex) {
  const isAdultLibrary = plan.id === "estudos-adultos";
  const id = isAdultLibrary
    ? `estudos-adultos${weekIndex ? `-${String(weekIndex + 1).padStart(2, "0")}` : ""}`
    : `${plan.id}${weekIndex ? `-semana-${weekIndex + 1}` : ""}`;
  const title = isAdultLibrary
    ? `Jornada ${weekIndex + 1} · ${adultJourneyTitles[weekIndex]}`
    : weekIndex
      ? `${plan.title} · Jornada ${weekIndex + 1}`
      : plan.title;
  return {
    ...plan,
    id,
    title,
    sourceStartIndex,
    duration: days.length,
    description: isAdultLibrary
      ? `Jornada de ${days.length} encontros com leituras, contexto e palavras-chave nos idiomas originais.`
      : plan.description,
    introduction: isAdultLibrary
      ? "Faça um encontro por dia ou siga no seu ritmo. Cada encontro traz o texto bíblico dentro do estudo, contexto e três palavras-chave explicadas. As referências de cada palavra indicam de qual leitura da jornada ela vem."
      : plan.introduction,
    days: days.map((day) => ({
      ...day,
      lexicalStudies: getRelatedKeywordStudies(day)
    }))
  };
}

function splitIntoJourneys(plan) {
  const journeys = [];
  for (let start = 0; start < plan.days.length; start += 7) {
    journeys.push(createJourneyPlan(plan, journeys.length, plan.days.slice(start, start + 7), start));
  }
  return journeys;
}

function splitAdultStudiesIntoJourneys(plan) {
  const journeys = [];
  for (let start = 0; start < plan.days.length;) {
    const duration = start < 84 ? 7 : 8;
    journeys.push(createJourneyPlan(plan, journeys.length, plan.days.slice(start, start + duration), start));
    start += duration;
  }
  return journeys;
}

const adultStudyPlan = {
  id: "estudos-adultos",
  title: "Biblioteca de estudos profundos",
  duration: adultStudyData.length,
  description: "100 encontros bíblicos organizados em jornadas de até sete dias.",
  introduction: "",
  days: adultStudyData
};

const adultStudyPlans = splitAdultStudiesIntoJourneys(adultStudyPlan);
const readingPlans = [
  ...foundationalReadingPlans.flatMap(splitIntoJourneys),
  ...adultStudyPlans
];

const kidsStudyData = [
  ["Gênesis 1:1-5", "Deus cria a luz", "A primeira página da Bíblia conta que Deus criou a luz e chamou a luz de dia. A criação é apresentada como algo que merece cuidado.", "O que você gosta de ver na natureza?", "Observe o céu hoje e desenhe algo bonito que você viu.", "O que Deus criou primeiro nesta passagem?", ["A luz", "Uma cidade", "Um barco"], 0, "Isso! A passagem começa com a criação da luz."],
  ["Gênesis 2:4-9", "Um jardim para cuidar", "A história apresenta um jardim cheio de vida e uma tarefa de cuidar dele. Cuidar da natureza também é uma forma de responsabilidade.", "Que parte da natureza perto de você precisa de cuidado?", "Regue uma planta ou recolha um papel do chão com um adulto.", "Qual era o trabalho dado no jardim?", ["Cuidar dele", "Construir um navio", "Contar estrelas"], 0, "Muito bem! O jardim precisava ser cuidado."],
  ["Gênesis 3:1-13", "Escolhas e responsabilidade", "Nesta história, as pessoas fazem uma escolha e depois tentam esconder o que aconteceu. Podemos aprender a falar a verdade e pedir ajuda quando erramos.", "Por que pode ser difícil contar a verdade?", "Se você errar, converse com um adulto de confiança e pense em como consertar.", "O que é melhor fazer depois de cometer um erro?", ["Esconder para sempre", "Contar a verdade e buscar ajuda", "Culpar outra pessoa"], 1, "Isso! Falar a verdade ajuda a encontrar um caminho para reparar."],
  ["Gênesis 6:9-22", "Noé prepara a arca", "Noé recebe uma tarefa grande e trabalha com cuidado. A história também lembra que proteger vidas e ajudar os outros são coisas importantes.", "Que tarefa você consegue fazer com paciência?", "Escolha uma pequena tarefa para ajudar em casa.", "O que Noé construiu?", ["Uma arca", "Um palácio", "Uma torre"], 0, "Isso mesmo! Noé construiu uma arca."],
  ["Gênesis 9:8-17", "O arco-íris da promessa", "O arco-íris aparece como sinal de uma promessa na história de Noé. Promessas nos lembram da importância de cumprir o que dizemos.", "Como você se sente quando alguém cumpre uma promessa?", "Escolha uma promessa pequena que possa cumprir hoje.", "Qual sinal aparece no céu nesta história?", ["Um arco-íris", "Uma estrela cadente", "Uma nuvem escura"], 0, "Acertou! A história fala do arco-íris."],
  ["Gênesis 11:1-9", "A torre de Babel", "As pessoas da história querem construir uma torre muito alta. A narrativa nos lembra que orgulho e falta de escuta podem atrapalhar o trabalho em conjunto.", "O que ajuda um grupo a trabalhar bem junto?", "Ouça a ideia de outra pessoa antes de decidir em grupo.", "O que ajuda as pessoas a trabalharem juntas?", ["Ouvir e cooperar", "Gritar mais alto", "Não dividir tarefas"], 0, "Isso mesmo! Ouvir e cooperar ajuda o grupo."],
  ["Gênesis 12:1-9", "Abraão começa uma viagem", "Abraão parte para uma terra nova sem conhecer todos os detalhes. A história fala de coragem para começar e de pedir orientação quando precisamos.", "Você já começou algo novo com um pouco de medo?", "Pense em um novo desafio e peça apoio a alguém de confiança.", "O que Abraão começou?", ["Uma viagem para uma nova terra", "Uma corrida de barcos", "Uma escola"], 0, "Boa! Abraão começou uma viagem para uma nova terra."],
  ["Gênesis 15:1-6", "Uma promessa para Abraão", "Abraão conversa com Deus sobre suas perguntas e recebe uma promessa. Podemos fazer perguntas e falar com sinceridade sobre o que sentimos.", "Que pergunta você gostaria de fazer a um adulto?", "Converse com alguém sobre uma dúvida que você tem.", "Abraão escondeu suas dúvidas ou conversou sobre elas?", ["Conversou sobre elas", "Nunca falou", "Foi embora sem dizer nada"], 0, "Isso! A história mostra Abraão conversando com sinceridade."],
  ["Gênesis 21:1-7", "Nasce Isaque", "Sara e Abraão ficam felizes com o nascimento de Isaque. A história fala da alegria de uma família e de como cada criança é recebida com carinho.", "Que momento feliz você lembra da sua família?", "Compartilhe uma lembrança feliz com alguém da família.", "Qual é o nome do filho de Abraão e Sara?", ["Isaque", "Jacó", "José"], 0, "Isso! O filho deles se chama Isaque."],
  ["Gênesis 37:3-11", "José e seus sonhos", "José conta seus sonhos aos irmãos, mas a família já tinha conflitos. A história nos ensina a respeitar os sentimentos dos outros e a conversar sem provocar.", "Como você pode contar uma novidade sem magoar alguém?", "Pense antes de falar e escolha palavras gentis.", "O que José contou à família?", ["Seus sonhos", "Uma receita", "Uma canção"], 0, "Muito bem! José contou seus sonhos."],
  ["Gênesis 45:1-8", "José perdoa seus irmãos", "José encontra os irmãos depois de muitos anos e conversa com eles. A reconciliação pode levar tempo, e pedir apoio de adultos é importante quando alguém foi machucado.", "O que pode ajudar duas pessoas a voltarem a conversar?", "Se houver um conflito, peça ajuda a um adulto de confiança.", "Quem José reencontrou no Egito?", ["Seus irmãos", "Seus professores", "Seus vizinhos"], 0, "Isso mesmo! José reencontrou seus irmãos."],
  ["Êxodo 2:1-10", "Moisés é encontrado no rio", "A família de Moisés e a filha do faraó ajudam a proteger um bebê. A história destaca como o cuidado de várias pessoas pode proteger uma vida.", "Quem cuida de você quando precisa?", "Agradeça a uma pessoa que cuida de você.", "Quem encontrou o bebê Moisés?", ["A filha do faraó", "Um pescador", "Um soldado"], 0, "Isso! A filha do faraó encontrou Moisés."],
  ["Êxodo 3:1-12", "Deus chama Moisés", "Moisés recebe uma missão difícil e conta que está preocupado. A história lembra que podemos falar de nossos medos e procurar apoio para fazer o que é certo.", "O que você faz quando uma tarefa parece grande demais?", "Divida uma tarefa em passos e peça ajuda se precisar.", "Moisés se sentiu totalmente seguro para começar?", ["Não, ele tinha dúvidas", "Sim, nunca teve perguntas", "Ele nem ouviu a missão"], 0, "Isso! Moisés tinha dúvidas e conversou sobre elas."],
  ["Êxodo 12:21-28", "Uma noite importante", "As famílias de Israel seguem instruções para celebrar a Páscoa. A história mostra como contar lembranças importantes ajuda uma comunidade a não esquecer sua história.", "Que história importante sua família conta?", "Peça a alguém mais velho para compartilhar uma lembrança da família.", "O que as famílias celebravam nesta história?", ["A Páscoa", "Um aniversário do faraó", "Uma colheita de uvas"], 0, "Muito bem! Era a celebração da Páscoa."],
  ["Êxodo 14:10-16", "O povo atravessa o mar", "O povo sente medo diante de um grande desafio. Moisés encoraja as pessoas a seguirem em frente. Quando estamos com medo, podemos parar e procurar ajuda segura.", "Quem pode ajudar você quando algo dá medo?", "Converse com um adulto de confiança sobre um medo seu.", "Como o povo se sentia diante do mar?", ["Com medo", "Com sono", "Com vontade de brincar"], 0, "Isso! O povo estava com medo."],
  ["Êxodo 16:11-18", "O alimento no deserto", "Durante a viagem, o povo recebe alimento para aquele dia. A narrativa fala de compartilhar e usar apenas o necessário, sem deixar ninguém para trás.", "Como você pode dividir algo de maneira justa?", "Divida uma atividade ou lanche com alguém, com permissão de um adulto.", "O que o povo precisava recolher?", ["Alimento para comer", "Pedras para construir uma torre", "Conchas do mar"], 0, "Isso mesmo! O povo recolhia alimento."],
  ["Êxodo 20:1-17", "Dez orientações para viver bem", "As orientações dadas a Israel falam de respeito a Deus, à família e ao próximo. Regras cuidadosas ajudam as pessoas a viver juntas com mais segurança.", "Que regra da sua casa ajuda todos a ficarem seguros?", "Converse com um adulto sobre por que uma regra importante existe.", "Para que servem regras cuidadosas?", ["Para proteger e respeitar as pessoas", "Para deixar todos tristes", "Para ninguém conversar"], 0, "Boa! Regras cuidadosas ajudam a proteger e respeitar."],
  ["Levítico 19:9-18", "Amar e respeitar o próximo", "A passagem ensina a tratar as pessoas com justiça, não espalhar fofocas e amar o próximo. Bondade também aparece nas pequenas atitudes.", "Como suas palavras podem ajudar alguém?", "Elogie uma atitude boa que você viu em alguém.", "O que a passagem ensina sobre o próximo?", ["Amar e tratar com justiça", "Falar mal dele", "Nunca ajudar"], 0, "Isso! A passagem ensina a amar e tratar com justiça."],
  ["Números 13:25-33", "Os exploradores voltam", "Um grupo volta de uma viagem com relatos diferentes. Quando sentimos medo, vale ouvir com calma, conferir informações e conversar com pessoas confiáveis.", "Como você confere se uma informação é verdadeira?", "Antes de compartilhar uma notícia, mostre-a a um adulto de confiança.", "Quantos exploradores foram enviados para observar a terra?", ["Doze", "Dois", "Cem"], 0, "Isso! Foram enviados doze exploradores."],
  ["Deuteronômio 6:4-9", "Aprender em família", "O texto fala de ensinar valores importantes em diferentes momentos do dia. Aprendemos com conversas, exemplos e atitudes de quem está perto.", "O que você aprendeu observando alguém da sua família?", "Converse em casa sobre uma coisa boa que aprenderam juntos.", "Quando podemos conversar sobre valores importantes?", ["Em diferentes momentos do dia", "Somente uma vez na vida", "Nunca"], 0, "Isso! Podemos aprender juntos no dia a dia."],
  ["Josué 1:6-9", "Josué encontra coragem", "Josué recebe incentivo para ser forte e corajoso. Coragem não significa fazer algo perigoso sozinho: significa buscar apoio e dar passos seguros.", "Em que situação você precisa de coragem?", "Escolha um passo seguro para enfrentar um desafio com ajuda de um adulto.", "O que Josué foi encorajado a ter?", ["Coragem", "Pressa", "Vergonha"], 0, "Muito bem! Josué foi encorajado a ter coragem."],
  ["Josué 2:1-14", "Raabe ajuda os visitantes", "Raabe acolhe os visitantes e pede proteção para sua família. A história destaca coragem e cuidado com as pessoas, inclusive em momentos difíceis.", "Como você pode acolher alguém novo?", "Convide um colega novo para participar de uma brincadeira segura.", "O que Raabe fez pelos visitantes?", ["Ajudou e acolheu", "Fechou a porta e foi embora", "Escondeu a cidade"], 0, "Isso! Raabe ajudou os visitantes."],
  ["Josué 6:12-20", "O povo em Jericó", "A história de Jericó conta uma estratégia incomum e a conquista da cidade. Ao ler histórias de guerra na Bíblia, converse com um adulto e lembre que hoje devemos procurar resolver conflitos sem violência.", "O que pode ajudar a resolver um desentendimento sem briga?", "Treine dizer o que sente com calma e pedir ajuda.", "Que escolha é melhor para resolver conflitos hoje?", ["Conversar e buscar ajuda", "Machucar alguém", "Quebrar coisas"], 0, "Isso! Conversar e buscar ajuda é um caminho seguro."],
  ["Juízes 4:4-10", "Débora lidera com sabedoria", "Débora é apresentada como uma líder que escuta e ajuda o povo. Meninas e meninos podem aprender, pensar e contribuir com coragem.", "Quem ajuda você a tomar uma boa decisão?", "Peça conselho a um adulto de confiança sobre uma escolha.", "Quem era Débora?", ["Uma juíza e líder", "Uma rainha do Egito", "Uma pescadora"], 0, "Isso! Débora era uma juíza e líder."],
  ["Juízes 6:11-16", "Gideão recebe encorajamento", "Gideão se sente pequeno diante de uma missão, mas recebe encorajamento. Às vezes precisamos que alguém nos lembre de nossas capacidades e nos acompanhe.", "Quem costuma encorajar você?", "Encoraje um amigo que esteja aprendendo algo novo.", "Como Gideão se sentia no começo?", ["Inseguro", "O mais forte de todos", "Sem nenhuma preocupação"], 0, "Isso! Gideão se sentia inseguro."],
  ["Rute 1:14-18", "Rute escolhe acompanhar Noemi", "Rute decide ficar ao lado de Noemi em uma fase difícil. A amizade e a lealdade podem aparecer quando acompanhamos alguém com carinho.", "Como você pode apoiar um amigo que está triste?", "Pergunte se seu amigo quer conversar ou brincar junto.", "Com quem Rute decidiu ficar?", ["Noemi", "Ester", "Débora"], 0, "Muito bem! Rute acompanhou Noemi."],
  ["Rute 2:8-12", "Boaz trata Rute com bondade", "Boaz percebe Rute e faz com que ela possa trabalhar com segurança. A história inspira atitudes de respeito e proteção para quem precisa.", "Como você pode fazer alguém se sentir seguro e incluído?", "Chame um adulto se vir alguém sendo excluído ou maltratado.", "Como Boaz tratou Rute?", ["Com respeito e cuidado", "Com deboche", "Sem deixá-la beber água"], 0, "Isso! Boaz tratou Rute com cuidado."],
  ["1 Samuel 3:1-10", "Samuel aprende a escutar", "Samuel ouve seu nome e aprende a responder com atenção. Escutar com cuidado ajuda a entender o que as pessoas precisam dizer.", "Como você mostra que está escutando alguém?", "Deixe a pessoa terminar de falar antes de responder.", "Quem ajudou Samuel a entender o que estava acontecendo?", ["Eli", "Saul", "Davi"], 0, "Isso! Eli ajudou Samuel."],
  ["1 Samuel 16:1-13", "Davi é escolhido", "Davi era o mais novo entre seus irmãos, mas foi escolhido para uma tarefa importante. A história lembra que o valor de alguém não depende de sua aparência ou tamanho.", "O que você admira em uma pessoa além da aparência?", "Elogie alguém por uma atitude ou qualidade.", "O que a história ensina sobre as pessoas?", ["O valor vai além da aparência", "Só os mais altos são importantes", "A roupa é o que importa"], 0, "Boa! O valor das pessoas vai além da aparência."],
  ["1 Samuel 17:32-50", "Davi enfrenta Golias", "Davi enfrenta um desafio assustador usando coragem e aquilo que sabia fazer. Ele não precisou fingir ser outra pessoa.", "O que ajuda você quando algo parece difícil?", "Converse com um adulto de confiança sobre um desafio.", "Quem venceu Golias?", ["Davi", "Saul", "Jonas"], 0, "Isso mesmo! Davi venceu Golias."],
  ["1 Samuel 18:1-4", "Davi e Jônatas são amigos", "Davi e Jônatas constroem uma amizade marcada por lealdade. Bons amigos torcem um pelo outro e conversam com respeito.", "O que faz uma amizade ser boa?", "Diga a um amigo algo de que você gosta na amizade de vocês.", "Como bons amigos se tratam?", ["Com lealdade e respeito", "Com mentiras", "Com competição o tempo todo"], 0, "Isso! Uma boa amizade tem respeito e lealdade."],
  ["2 Samuel 9:1-7", "Davi recebe Mefibosete", "Davi convida Mefibosete para estar à mesa e cuida dele. A história fala de acolhimento e de dar lugar às pessoas.", "Quem você pode incluir em uma atividade?", "Convide alguém para participar de um jogo, sem pressionar.", "O que Davi fez por Mefibosete?", ["Recebeu-o e cuidou dele", "Mandou-o embora", "Escondeu sua comida"], 0, "Muito bem! Davi recebeu e cuidou de Mefibosete."],
  ["1 Reis 3:5-12", "Salomão pede sabedoria", "Salomão pede sabedoria para cuidar bem do povo, em vez de pedir riquezas. Sabedoria ajuda a escolher o que é justo e bom.", "Em que situação você gostaria de tomar uma decisão sábia?", "Peça conselho antes de decidir algo importante.", "O que Salomão pediu?", ["Sabedoria", "Um castelo de ouro", "Um exército"], 0, "Isso! Salomão pediu sabedoria."],
  ["1 Reis 17:8-16", "A viúva compartilha seu alimento", "Uma viúva compartilha o pouco que tem com Elias. A história fala de generosidade e cuidado, mas nunca devemos compartilhar algo sem a autorização de um adulto responsável.", "O que você pode compartilhar com segurança?", "Divida um brinquedo ou uma atividade com permissão de um adulto.", "O que a viúva compartilhou?", ["Alimento", "Uma coroa", "Um barco"], 0, "Isso mesmo! Ela compartilhou alimento."],
  ["2 Reis 5:1-14", "Naamã aprende a ouvir", "Naamã precisa ouvir conselhos e seguir uma orientação simples. Às vezes, aprender começa quando deixamos o orgulho de lado e escutamos.", "Quem pode ajudar você a aprender uma coisa nova?", "Agradeça a alguém que ensinou algo a você.", "Quem ajudou Naamã com um conselho?", ["Uma menina israelita", "Um soldado romano", "Um comerciante"], 0, "Boa! Uma menina israelita contou sobre o profeta."],
  ["2 Reis 22:8-13", "Um livro é encontrado", "Um livro importante é encontrado durante uma reforma. O rei escuta a leitura e percebe que precisa aprender mais. Ler e fazer perguntas nos ajuda a crescer.", "Qual livro ou história você gosta de ouvir?", "Leia uma passagem com um adulto e faça uma pergunta sobre ela.", "O que as pessoas fizeram quando encontraram o livro?", ["Leram e prestaram atenção", "Jogaram fora", "Esconderam para sempre"], 0, "Isso! Elas leram e prestaram atenção."],
  ["Ester 4:10-16", "Ester encontra coragem", "Ester precisa tomar uma decisão corajosa para ajudar seu povo. Ela conversa com outras pessoas e se prepara antes de agir.", "Como pedir ajuda pode tornar uma atitude corajosa mais segura?", "Converse com um adulto antes de tentar resolver um problema grande.", "Por que Ester precisava de coragem?", ["Para ajudar seu povo", "Para vencer uma corrida", "Para construir um barco"], 0, "Isso! Ester queria ajudar seu povo."],
  ["Jó 1:20-22", "Jó conversa em um momento difícil", "Jó passa por muita tristeza. A história não diz que é fácil nem que devemos esconder a dor. Quando estamos tristes, podemos contar a alguém seguro.", "Quem é um adulto com quem você pode conversar quando está triste?", "Conte a alguém de confiança como você se sente.", "O que podemos fazer quando estamos sofrendo?", ["Conversar e procurar apoio", "Esconder todo sentimento", "Ficar sem ajuda"], 0, "Isso! Procurar apoio é importante."],
  ["Salmos 23:1-4", "Deus como pastor cuidadoso", "O salmo usa a imagem de um pastor que guia e cuida. É uma poesia sobre confiança e companhia nos momentos bons e difíceis.", "O que ajuda você a se sentir cuidado?", "Desenhe um lugar onde você se sente seguro.", "Que animal aparece como imagem de cuidado no salmo?", ["Ovelha", "Leão", "Cavalo"], 0, "A imagem do pastor e das ovelhas ajuda a falar de cuidado."],
  ["Salmos 100:1-5", "Um salmo de alegria e gratidão", "O salmo convida as pessoas a agradecer e celebrar. Podemos encontrar gratidão em coisas grandes e também nas pequenas.", "Por qual coisa pequena você agradece hoje?", "Diga três coisas pelas quais você é grato.", "O que o salmo convida as pessoas a fazer?", ["Agradecer e celebrar", "Brigar", "Esconder a alegria"], 0, "Isso! O salmo é um convite para agradecer."],
  ["Salmos 139:1-6", "Você é conhecido e importante", "O salmo fala de ser conhecido por Deus. Você tem valor e pode conversar com adultos de confiança quando tiver dúvidas ou preocupações.", "O que faz você se sentir conhecido e amado?", "Converse com alguém que você ama sobre algo que gosta em você.", "Como o salmo descreve Deus?", ["Como alguém que conhece as pessoas", "Como alguém que nunca escuta", "Como alguém distante de tudo"], 0, "Isso! O salmo fala de ser conhecido por Deus."],
  ["Provérbios 3:5-6", "Pedir orientação", "O provérbio ensina a buscar orientação e não pensar que sabemos tudo sozinhos. Conversar com adultos confiáveis ajuda a tomar decisões.", "Quem são as pessoas seguras a quem você pode pedir conselho?", "Peça ajuda para uma decisão que esteja deixando você em dúvida.", "O que podemos fazer quando precisamos de direção?", ["Pedir orientação", "Decidir sem pensar", "Não ouvir ninguém"], 0, "Isso! Pedir orientação pode nos ajudar."],
  ["Provérbios 15:1-4", "Palavras gentis", "O provérbio mostra que a maneira de falar pode acalmar ou piorar uma situação. Palavras gentis não escondem a verdade, mas cuidam de como ela é dita.", "Como você se sente quando alguém fala com gentileza?", "Use palavras respeitosas na próxima conversa difícil.", "O que uma resposta calma pode fazer?", ["Ajudar a acalmar", "Deixar tudo pior", "Apagar a conversa"], 0, "Muito bem! Uma resposta calma pode ajudar."],
  ["Provérbios 17:17", "Amigos que ajudam", "O provérbio fala de amizade que permanece nos momentos difíceis. Um bom amigo escuta, respeita e procura um adulto quando alguém precisa de ajuda.", "Como você pode apoiar um amigo sem tentar resolver tudo sozinho?", "Ofereça companhia e peça ajuda a um adulto se necessário.", "O que um bom amigo faz?", ["Apoia com carinho", "Espalha segredos", "Faz piada da tristeza"], 0, "Isso! Bons amigos apoiam com carinho."],
  ["Eclesiastes 3:1-8", "Há um tempo para cada coisa", "A poesia fala dos diferentes momentos da vida. Algumas coisas levam tempo, e podemos pedir ajuda quando não sabemos lidar com uma mudança.", "Que mudança foi difícil para você?", "Converse com alguém sobre uma mudança que está vivendo.", "O texto fala de quantos tipos de momentos?", ["Diferentes momentos", "Somente momentos felizes", "Nenhum momento"], 0, "Isso! A poesia fala de diferentes momentos."],
  ["Isaías 9:2-6", "Uma luz de esperança", "Isaías usa a imagem de uma luz para falar de esperança em um tempo difícil. Uma palavra amiga também pode ajudar alguém a encontrar ânimo.", "Que pessoa traz alegria ou esperança para você?", "Envie uma mensagem gentil para alguém.", "Qual imagem de esperança aparece no texto?", ["Uma luz", "Uma muralha", "Um barco"], 0, "Isso! A passagem fala de uma grande luz."],
  ["Isaías 40:28-31", "Encontrar forças para continuar", "Isaías fala de renovar as forças. Descansar, pedir ajuda e tentar novamente são maneiras saudáveis de continuar.", "O que você faz para descansar quando está cansado?", "Faça uma pausa e conte a um adulto se estiver muito cansado.", "O que a passagem diz que pode ser renovado?", ["As forças", "As roupas", "Os brinquedos"], 0, "Isso! A passagem fala de renovar as forças."],
  ["Jeremias 18:1-6", "O oleiro e o barro", "Jeremias observa um oleiro trabalhando com barro. A imagem ajuda a pensar que aprender e mudar é um processo feito com paciência.", "Que coisa você aprendeu aos poucos?", "Pratique por alguns minutos uma habilidade que deseja aprender.", "O que Jeremias observou?", ["Um oleiro trabalhando", "Um pastor contando ovelhas", "Um marinheiro no mar"], 0, "Isso! Jeremias observou um oleiro."],
  ["Daniel 1:8-17", "Daniel escolhe com cuidado", "Daniel e seus amigos fazem uma escolha que consideram importante. Para crianças, decisões sobre comida e saúde devem sempre ser conversadas com os responsáveis.", "Quem ajuda você a tomar decisões seguras?", "Converse com sua família sobre uma escolha saudável.", "Quem eram os amigos de Daniel?", ["Hananias, Misael e Azarias", "Pedro, Tiago e João", "Moisés, Arão e Josué"], 0, "Boa! Hananias, Misael e Azarias eram amigos de Daniel."],
  ["Daniel 3:16-28", "Os amigos de Daniel permanecem unidos", "Os amigos de Daniel se apoiam diante de uma situação assustadora. A história fala de coragem e amizade, mas nunca se coloque em perigo: procure um adulto seguro.", "Quem pode ajudar você quando se sente pressionado?", "Lembre-se de um adulto de confiança a quem pode pedir ajuda.", "O que os amigos de Daniel fizeram?", ["Apoiaram uns aos outros", "Deixaram de ser amigos", "Foram embora sem conversar"], 0, "Isso! Eles permaneceram unidos."],
  ["Daniel 6:16-23", "Daniel na cova dos leões", "Daniel passa por uma situação perigosa e recebe ajuda. A história mostra coragem, mas na vida real, se você estiver em perigo, procure imediatamente um adulto de confiança.", "A quem você deve contar se estiver em perigo?", "Decore o nome de um adulto seguro para procurar.", "Que animais estavam na cova?", ["Leões", "Elefantes", "Camelos"], 0, "Isso! A história fala de leões."],
  ["Jonas 1:1-17", "Jonas foge da missão", "Jonas tenta fugir de uma tarefa e enfrenta as consequências de sua escolha. Quando erramos, podemos parar, contar a verdade e pedir ajuda para recomeçar.", "O que você pode fazer quando evita uma tarefa importante?", "Converse com um adulto e combine um primeiro passo para cumprir a tarefa.", "Para qual cidade Jonas deveria ir?", ["Nínive", "Belém", "Roma"], 0, "Isso! Jonas deveria ir a Nínive."],
  ["Jonas 3:1-10", "Nínive muda de atitude", "As pessoas de Nínive escutam o aviso e mudam seu comportamento. Aprender com um erro significa fazer escolhas diferentes depois.", "Como podemos mostrar que aprendemos com um erro?", "Escolha uma atitude para melhorar hoje.", "O que as pessoas de Nínive fizeram ao ouvir o aviso?", ["Mudaram de atitude", "Foram embora sem ouvir", "Construíram uma arca"], 0, "Isso mesmo! As pessoas mudaram de atitude."],
  ["Miqueias 6:6-8", "Praticar justiça e bondade", "Miqueias resume uma vida boa em agir com justiça, amar a bondade e caminhar com humildade. São valores que podemos praticar todos os dias.", "Como você pode ser justo em uma brincadeira?", "Inclua todos e siga as regras combinadas.", "Quais atitudes a passagem destaca?", ["Justiça, bondade e humildade", "Pressa, orgulho e briga", "Silêncio, medo e disputa"], 0, "Isso! A passagem destaca justiça, bondade e humildade."],
  ["Mateus 1:18-25", "Um nome especial", "Mateus conta que José recebe uma mensagem em sonho e acolhe Maria e o bebê. A história começa com cuidado e uma família se preparando para uma grande mudança.", "O que pode ajudar uma família quando algo novo está para acontecer?", "Ajude em uma preparação simples em casa.", "Qual nome foi dado ao bebê?", ["Jesus", "Davi", "João"], 0, "Isso! O bebê recebeu o nome de Jesus."],
  ["Mateus 2:1-12", "Visitantes seguem uma estrela", "Visitantes de longe observam uma estrela e viajam para encontrar Jesus. A história fala de curiosidade, busca e alegria ao encontrar algo importante.", "O que você gostaria de aprender sobre o céu?", "Observe as estrelas com um adulto em uma noite segura.", "O que os visitantes seguiram?", ["Uma estrela", "Um rio", "Uma estrada de pedras"], 0, "Isso! Eles seguiram uma estrela."],
  ["Mateus 3:13-17", "Jesus é batizado", "Jesus é batizado por João. A cena marca o início de uma nova etapa em sua missão e lembra que momentos importantes podem ser celebrados em comunidade.", "Quem participa de momentos especiais na sua vida?", "Agradeça a alguém que acompanha seu crescimento.", "Quem batizou Jesus?", ["João", "Pedro", "Paulo"], 0, "Isso! João batizou Jesus."],
  ["Mateus 4:18-22", "Jesus chama pescadores", "Jesus convida pescadores para caminhar com ele e aprender. Eles deixam o trabalho por um momento para começar uma nova jornada juntos.", "O que você gostaria de aprender com um grupo?", "Participe de uma atividade em equipe e ajude alguém.", "Qual era o trabalho de Pedro e André?", ["Pescadores", "Carpinteiros", "Agricultores"], 0, "Isso! Pedro e André eram pescadores."],
  ["Mateus 5:14-16", "Brilhe fazendo o bem", "Jesus compara seus seguidores à luz. Fazer o bem pode inspirar outras pessoas, sem precisar se exibir ou buscar aplausos.", "Que coisa boa você pode fazer sem esperar prêmio?", "Ajude alguém numa tarefa simples e não se gabe disso.", "Com o que Jesus compara seus seguidores?", ["A luz", "Uma tempestade", "Um deserto"], 0, "Isso! Jesus usa a imagem da luz."],
  ["Mateus 6:9-13", "Jesus ensina uma oração", "Jesus ensina uma oração que fala de Deus, do alimento de cada dia, do perdão e de pedir ajuda para escolher o bem.", "Por qual coisa você gostaria de agradecer ou pedir ajuda?", "Faça uma oração com suas próprias palavras, se desejar.", "O que a oração pede para cada dia?", ["O pão de cada dia", "Um castelo", "Uma viagem"], 0, "Isso! A oração fala do pão de cada dia."],
  ["Mateus 7:24-27", "Construir sobre uma base firme", "Jesus conta a história de duas casas para ensinar sobre escutar e praticar bons ensinamentos. Uma base firme ajuda a enfrentar dificuldades.", "Que ensinamento bom você tenta praticar?", "Escolha uma atitude gentil e pratique hoje.", "Qual casa ficou firme na história?", ["A que tinha uma base firme", "A que foi feita de papel", "A casa sem porta"], 0, "Isso! A casa com base firme permaneceu."],
  ["Mateus 13:1-9", "A parábola do semeador", "Jesus conta de sementes que caem em lugares diferentes. Aprender precisa de atenção, tempo e cuidado, como uma plantinha crescendo.", "O que ajuda você a aprender uma coisa nova?", "Escolha um assunto e estude um pouco por dia.", "O que o semeador espalhou?", ["Sementes", "Conchas", "Moedas"], 0, "Isso! O semeador espalhou sementes."],
  ["Mateus 18:10-14", "A ovelha que se perdeu", "Jesus conta de um pastor que procura uma ovelha perdida. Cada pessoa importa, e pedir ajuda quando nos perdemos é muito importante.", "O que você faria se se separasse de quem está cuidando de você?", "Combine com sua família um adulto seguro para procurar em um lugar público.", "O que o pastor fez?", ["Procurou a ovelha", "Esqueceu dela", "Vendeu o rebanho"], 0, "Isso! O pastor foi procurar a ovelha."],
  ["Mateus 19:13-15", "Jesus acolhe as crianças", "Jesus recebe as crianças e mostra que elas são importantes. Toda criança merece ser ouvida, protegida e tratada com respeito.", "O que faz você se sentir ouvido?", "Escute com atenção quando outra criança quiser contar algo.", "Como Jesus tratou as crianças?", ["Recebeu-as com carinho", "Mandou-as embora", "Não deixou ninguém falar"], 0, "Isso! Jesus recebeu as crianças com carinho."],
  ["Marcos 1:40-45", "Jesus escuta um homem doente", "Um homem pede ajuda a Jesus, que o trata com compaixão. Pessoas doentes precisam de cuidado e respeito, nunca de zombaria.", "Como podemos tratar alguém que está doente?", "Deseje melhoras e peça a um adulto para ajudar essa pessoa.", "Como Jesus respondeu ao homem?", ["Com compaixão", "Com deboche", "Sem escutá-lo"], 0, "Isso! Jesus respondeu com compaixão."],
  ["Marcos 2:1-12", "Amigos ajudam um amigo", "Quatro amigos encontram um jeito de levar um homem até Jesus. Bons amigos ajudam e também procuram adultos quando a situação é difícil.", "Como você pode ajudar um amigo sem colocá-lo em risco?", "Pergunte a um adulto como apoiar um colega que precisa de ajuda.", "O que os amigos fizeram?", ["Levaram o homem até Jesus", "Deixaram o amigo sozinho", "Fizeram uma corrida"], 0, "Isso! Os amigos levaram o homem até Jesus."],
  ["Marcos 4:35-41", "A tempestade no lago", "Os discípulos ficam assustados com uma tempestade e chamam Jesus. Sentir medo acontece; falar sobre isso e buscar ajuda pode trazer segurança.", "O que ajuda você a se acalmar quando está assustado?", "Respire devagar e conte a um adulto o que está sentindo.", "O que os discípulos fizeram quando sentiram medo?", ["Chamaram Jesus", "Pularam do barco", "Fingiram que não havia tempestade"], 0, "Isso! Eles chamaram Jesus."],
  ["Marcos 5:21-24,35-43", "Jairo pede ajuda", "Jairo está preocupado com sua filha e procura Jesus. A história mostra que podemos pedir ajuda quando alguém que amamos precisa de cuidado.", "A quem sua família pede ajuda em uma emergência?", "Pergunte a um responsável como agir numa emergência.", "Por quem Jairo estava preocupado?", ["Sua filha", "Seu vizinho", "Seu cavalo"], 0, "Isso! Jairo estava preocupado com sua filha."],
  ["Marcos 10:13-16", "As crianças têm lugar", "Jesus pede que deixem as crianças se aproximarem. Crianças têm ideias, sentimentos e perguntas que merecem atenção.", "Qual pergunta sobre a Bíblia você gostaria de fazer?", "Converse com um adulto sobre uma pergunta que você tem.", "O que Jesus fez quando as crianças chegaram?", ["Recebeu e abençoou", "Mandou-as para longe", "Escondeu-se"], 0, "Isso mesmo! Jesus recebeu as crianças."],
  ["Marcos 12:41-44", "A oferta da viúva", "Jesus observa uma viúva oferecer duas pequenas moedas. O valor de uma atitude não é medido apenas pela quantidade; generosidade precisa ser livre e segura.", "Que tipo de ajuda você pode oferecer sem se prejudicar?", "Ofereça seu tempo para ajudar em uma tarefa simples.", "Quantas moedas a viúva colocou?", ["Duas", "Dez", "Nenhuma"], 0, "Isso! A viúva colocou duas moedas."],
  ["Marcos 14:22-25", "Uma refeição para lembrar", "Jesus compartilha pão e cálice com os discípulos. A refeição se torna um momento de memória, amizade e comunhão.", "Que refeição especial você compartilha com sua família?", "Ajude a preparar a mesa com autorização de um adulto.", "O que Jesus compartilhou com os discípulos?", ["Pão e cálice", "Frutas e brinquedos", "Livros e moedas"], 0, "Isso! Jesus compartilhou pão e cálice."],
  ["Marcos 16:1-8", "A notícia da ressurreição", "As mulheres vão ao túmulo e recebem uma notícia inesperada: Jesus ressuscitou. A história cristã fala de esperança depois de um momento muito triste.", "Que notícia boa já surpreendeu você?", "Compartilhe uma notícia alegre com alguém querido.", "Quem foi ao túmulo bem cedo?", ["Algumas mulheres", "Um grupo de soldados romanos", "Os pescadores"], 0, "Isso! Algumas mulheres foram ao túmulo."],
  ["Lucas 1:26-38", "Maria recebe uma notícia", "Maria recebe uma notícia surpreendente e faz perguntas. Ter dúvidas não é errado; podemos perguntar a pessoas confiáveis quando algo é novo.", "Que novidade já deixou você com perguntas?", "Escreva ou conte uma pergunta a um adulto de confiança.", "Quem recebeu a visita do anjo?", ["Maria", "Marta", "Ester"], 0, "Isso! Maria recebeu a visita do anjo."],
  ["Lucas 2:1-7", "Jesus nasce em Belém", "Lucas conta que Jesus nasceu em Belém e foi colocado numa manjedoura. A história começa de modo simples e mostra que o amor não depende de coisas caras.", "Que momento simples deixa você feliz?", "Faça um cartão ou desenho para alguém que você ama.", "Onde Jesus nasceu?", ["Belém", "Roma", "Jericó"], 0, "Isso! Jesus nasceu em Belém."],
  ["Lucas 2:8-20", "Os pastores recebem uma boa notícia", "Pastores recebem a notícia do nascimento de Jesus e vão visitá-lo. Depois, contam a outros o que aconteceu.", "Que boa notícia você gosta de compartilhar?", "Conte a alguém uma coisa boa que aconteceu hoje.", "Quem ouviu a notícia durante a noite?", ["Pastores", "Pescadores", "Reis de Roma"], 0, "Isso! Os pastores ouviram a notícia."],
  ["Lucas 10:25-37", "O bom samaritano", "Na história de Jesus, um samaritano para para ajudar um homem ferido. Se alguém estiver machucado, uma criança deve chamar um adulto em vez de tentar cuidar sozinha.", "Como você pode ser gentil com alguém que precisa?", "Chame um adulto e ofereça companhia a alguém que esteja triste.", "Quem parou para ajudar o homem?", ["Um samaritano", "Um viajante que passou correndo", "Um vendedor"], 0, "Isso! O samaritano parou e ajudou."],
  ["Lucas 15:3-7", "A ovelha encontrada", "Jesus conta de um pastor que procura uma ovelha até encontrá-la. A história fala de alegria e de como cada pessoa é importante.", "Quem procura você quando sente sua falta?", "Agradeça a alguém que cuida de você.", "Quantas ovelhas se perderam?", ["Uma", "Dez", "Todas"], 0, "Isso! Uma ovelha se perdeu."],
  ["Lucas 15:11-24", "O filho que voltou para casa", "Um filho vai embora, erra e depois volta para casa. Seu pai o recebe. A parábola fala de arrependimento, perdão e recomeço.", "O que ajuda você a pedir desculpas?", "Se magoou alguém, converse com um adulto sobre como reparar.", "Como o pai recebeu o filho?", ["Com alegria e acolhimento", "Sem deixá-lo entrar", "Mandando-o trabalhar longe"], 0, "Isso! O pai recebeu o filho com alegria."],
  ["Lucas 19:1-10", "Zaqueu encontra Jesus", "Zaqueu queria ver Jesus e sobe numa árvore. Depois da conversa, ele decide corrigir algumas atitudes. Aprender pode nos ajudar a reparar o que fizemos.", "Como podemos consertar algo que fizemos de errado?", "Peça ajuda a um adulto para pensar em uma reparação justa.", "Onde Zaqueu subiu para ver Jesus?", ["Numa árvore", "Num barco", "Num telhado"], 0, "Isso! Zaqueu subiu numa árvore."],
  ["Lucas 22:14-20", "Jesus compartilha a ceia", "Jesus divide uma refeição com seus amigos e pede que se lembrem daquele momento. Comer juntos pode ser uma oportunidade de conversar e cuidar uns dos outros.", "Com quem você gosta de compartilhar uma refeição?", "Faça uma pergunta gentil a alguém durante uma refeição em família.", "O que Jesus compartilhou na ceia?", ["Pão e cálice", "Uma coroa", "Uma rede de pesca"], 0, "Isso! Jesus compartilhou pão e cálice."],
  ["Lucas 24:13-35", "Uma caminhada e uma conversa", "Dois amigos caminham conversando sobre o que aconteceu. Jesus se aproxima e os escuta. Conversar e escutar pode ajudar quando estamos confusos.", "Quem escuta você quando precisa conversar?", "Escute com atenção alguém da sua família hoje.", "O que os dois amigos estavam fazendo?", ["Caminhando e conversando", "Construindo uma casa", "Navegando no mar"], 0, "Isso! Eles caminhavam e conversavam."],
  ["João 1:1-5", "A luz que brilha", "João começa seu Evangelho usando as imagens da Palavra e da luz. A luz ajuda a enxergar o caminho; pessoas cuidadosas também podem nos orientar.", "Quem ajuda você a encontrar um bom caminho?", "Agradeça a alguém que ensina e orienta você.", "Qual imagem aparece nesta passagem?", ["A luz", "Uma montanha de ouro", "Um barco"], 0, "Isso! João fala da luz que brilha."],
  ["João 2:1-11", "A festa de casamento", "Jesus participa de uma festa de casamento e ajuda quando algo dá errado. A história mostra atenção às necessidades das pessoas e alegria compartilhada.", "Como você pode ajudar quando um plano muda?", "Se algo der errado, respire e pergunte a um adulto como ajudar.", "Em que tipo de festa Jesus estava?", ["Num casamento", "Num aniversário de rei", "Numa corrida"], 0, "Isso! Era uma festa de casamento."],
  ["João 4:5-14", "Uma conversa junto ao poço", "Jesus conversa com uma mulher samaritana e a trata com respeito. A conversa atravessa diferenças e mostra que todos merecem ser ouvidos.", "Como você pode conhecer alguém diferente de você com respeito?", "Faça uma pergunta gentil e escute a resposta sem interromper.", "Onde Jesus conversou com a mulher?", ["Junto a um poço", "Num palácio", "Num barco"], 0, "Isso! Eles conversaram perto de um poço."],
  ["João 6:1-13", "Cinco pães e dois peixes", "Um menino compartilha seu lanche e Jesus alimenta a multidão. A narrativa destaca generosidade e cuidado com quem tem fome.", "O que você pode dividir de maneira segura?", "Compartilhe um brinquedo ou um momento de brincadeira com permissão.", "O que o menino ofereceu?", ["Cinco pães e dois peixes", "Uma cesta de maçãs", "Duas moedas"], 0, "Isso! O menino ofereceu cinco pães e dois peixes."],
  ["João 11:32-44", "Jesus chora com os amigos", "Jesus chora quando encontra pessoas tristes pela morte de Lázaro. A história mostra que chorar é uma resposta humana e que podemos acompanhar alguém em sua tristeza.", "Como você pode mostrar carinho a alguém que está triste?", "Esteja por perto e avise um adulto se alguém precisar de ajuda.", "O que Jesus fez ao ver a tristeza dos amigos?", ["Chorou com eles", "Riu deles", "Foi embora sem falar"], 0, "Isso! Jesus chorou com os amigos."],
  ["João 13:3-15", "Jesus serve seus amigos", "Jesus lava os pés dos discípulos, fazendo uma tarefa humilde para cuidar deles. Servir é ajudar com respeito, sem pensar que alguém é inferior.", "Que tarefa você pode fazer para ajudar alguém?", "Ajude a arrumar algo em casa sem esperar elogio.", "O que Jesus fez pelos discípulos?", ["Lavou os pés deles", "Pediu que o carregassem", "Escondeu a comida"], 0, "Isso mesmo! Jesus lavou os pés dos discípulos."],
  ["João 20:24-29", "Tomé faz perguntas", "Tomé tem dúvidas sobre o que aconteceu e quer compreender. A história lembra que podemos fazer perguntas com sinceridade e aprender aos poucos.", "Que pergunta você gostaria de fazer sobre uma história bíblica?", "Escolha uma pergunta e converse com um adulto de confiança.", "Qual discípulo queria compreender o que aconteceu?", ["Tomé", "André", "Filipe"], 0, "Isso! Tomé queria compreender."],
  ["Atos 2:42-47", "Uma comunidade que compartilha", "Os primeiros cristãos aprendem juntos, fazem refeições e ajudam quem precisa. Uma comunidade fica mais forte quando as pessoas cuidam umas das outras.", "Como você pode ajudar alguém do seu grupo?", "Convide alguém para participar e divida materiais numa atividade.", "O que as pessoas faziam juntas?", ["Aprendiam e compartilhavam", "Nunca se encontravam", "Guardavam tudo só para si"], 0, "Isso! Elas aprendiam e compartilhavam."],
  ["Atos 9:1-18", "Saulo muda de caminho", "Saulo tem uma experiência que transforma seu caminho e depois passa a ser conhecido como Paulo. Pessoas podem aprender, mudar de ideia e escolher fazer o bem.", "Que coisa boa você aprendeu recentemente?", "Conte a alguém uma coisa que mudou para melhor depois que você aprendeu.", "Qual nome Saulo passou a usar?", ["Paulo", "Pedro", "Tiago"], 0, "Isso! Saulo passou a ser conhecido como Paulo."],
  ["Atos 16:25-34", "Paulo e Silas cantam na prisão", "Paulo e Silas estão presos, mas cantam e conversam. O texto mostra como a esperança e o apoio mútuo podem ajudar em momentos difíceis; prisão e injustiça são coisas sérias.", "O que ajuda você a ter esperança num dia difícil?", "Faça uma atividade que ajude você a se acalmar e procure alguém de confiança.", "O que Paulo e Silas faziam na prisão?", ["Cantavam e oravam", "Construíam um navio", "Preparavam uma festa"], 0, "Isso! Eles cantavam e oravam."],
  ["Atos 27:21-25", "Coragem durante a viagem", "Paulo encoraja as pessoas durante uma viagem perigosa de navio. Em situações de risco, crianças devem seguir as instruções dos adultos responsáveis.", "Quem orienta você em uma situação de emergência?", "Pergunte à sua família quais são os combinados de segurança.", "Em que tipo de viagem Paulo estava?", ["De navio", "De avião", "De trem"], 0, "Isso! Paulo estava numa viagem de navio."],
  ["Romanos 12:9-18", "Amor que aparece nas atitudes", "Paulo fala de amor sincero, respeito e paz. O amor pode aparecer em pequenas escolhas, como escutar e dividir.", "Que atitude mostra respeito por um colega?", "Faça uma gentileza e inclua alguém numa atividade.", "O que Paulo incentiva as pessoas a buscar?", ["Paz e amor sincero", "Brigas e orgulho", "Vencer a qualquer custo"], 0, "Isso! A passagem incentiva amor sincero e paz."],
  ["1 Coríntios 13:4-7", "Como é o amor?", "Paulo descreve o amor como paciente e bondoso. Amor não é aceitar que alguém machuque você: conte sempre a um adulto seguro se algo estiver errado.", "Qual atitude de amor você pode praticar hoje?", "Seja paciente numa brincadeira e respeite os limites de todos.", "Qual qualidade do amor aparece na passagem?", ["Bondade", "Deboche", "Impaciência"], 0, "Isso! A bondade é uma qualidade do amor."],
  ["Gálatas 5:22-23", "Frutos de uma vida boa", "Paulo compara qualidades como amor, alegria, paciência e bondade a frutos. Elas podem crescer quando praticamos boas atitudes.", "Qual dessas qualidades você gostaria de praticar mais?", "Escolha uma qualidade e procure praticá-la durante o dia.", "Qual destas é uma qualidade citada?", ["Paciência", "Inveja", "Crueldade"], 0, "Isso! Paciência é uma das qualidades citadas."],
  ["Efésios 6:10-17", "A armadura de Deus", "Paulo usa a imagem de uma armadura para falar de verdade, justiça, paz e fé. São imagens para atitudes, não para brigar ou machucar alguém.", "Como a verdade pode proteger uma amizade?", "Fale com honestidade e respeito com um amigo.", "A armadura da passagem é uma imagem para quê?", ["Atitudes de fé e justiça", "Uma roupa para uma batalha real", "Um brinquedo de metal"], 0, "Isso! É uma imagem para atitudes de fé e justiça."],
  ["Filipenses 4:4-9", "Pensar no que é bom", "Paulo incentiva a buscar a paz e pensar no que é verdadeiro e bom. Quando a preocupação fica grande, conte a um adulto de confiança.", "O que ajuda sua mente a descansar?", "Lembre-se de uma coisa boa do seu dia e converse se estiver preocupado.", "Em que tipo de coisas Paulo ensina a pensar?", ["No que é verdadeiro e bom", "Em como assustar os outros", "Em problemas o dia todo"], 0, "Isso! Paulo fala de pensar no que é verdadeiro e bom."],
  ["Tiago 1:19-22", "Ouvir antes de responder", "Tiago ensina a ouvir com atenção e pensar antes de falar com raiva. Uma pausa pode evitar que uma conversa vire uma briga.", "Como você pode mostrar que está ouvindo?", "Espere a outra pessoa terminar antes de responder.", "O que devemos fazer primeiro?", ["Ouvir com atenção", "Gritar mais alto", "Sair correndo"], 0, "Muito bem! Ouvir com atenção é importante."],
  ["1 João 4:7-12", "Amar e cuidar das pessoas", "A carta ensina que o amor deve aparecer na maneira como tratamos as pessoas. Cuidar inclui respeitar limites e procurar ajuda quando necessário.", "Como você mostra carinho de um jeito respeitoso?", "Pergunte se a pessoa quer ajuda antes de fazer algo por ela.", "Como o amor pode aparecer?", ["Em atitudes de cuidado", "Em zombarias", "Em obrigar alguém a aceitar ajuda"], 0, "Isso! O amor aparece em atitudes de cuidado."],
  ["Apocalipse 21:1-5", "Uma esperança de mundo renovado", "Apocalipse termina com uma visão de renovação, consolo e esperança. A história bíblica termina olhando para um futuro sem sofrimento.", "O que você gostaria que fosse melhor no mundo?", "Faça uma pequena ação de cuidado pela sua casa, escola ou bairro.", "Que imagem de esperança aparece no final?", ["Um mundo renovado", "Uma cidade sem pessoas", "Uma noite sem fim"], 0, "Isso! A passagem fala de um mundo renovado."]
];

const kidsStories = kidsStudyData.map(([reference, title, lesson, think, practice, question, options, answer, explanation], index) => ({
  id: `kids-${String(index + 1).padStart(3, "0")}`,
  reference,
  title,
  lesson,
  think,
  practice,
  question,
  options,
  answer,
  explanation
}));

function makeQuizOptions(correctOption, candidates) {
  const distractors = [];
  for (const candidate of candidates) {
    if (typeof candidate !== "string" || !candidate.trim()) continue;
    if (normalized(correctOption) === normalized(candidate) || distractors.some((option) => normalized(option) === normalized(candidate))) continue;
    distractors.push(candidate);
    if (distractors.length === 3) break;
  }
  if (distractors.length !== 3) throw new Error("Não foi possível montar quatro alternativas para uma pergunta do desafio.");
  const correctIndex = [...correctOption].reduce((total, character) => total + character.codePointAt(0), 0) % 4;
  const options = [...distractors];
  options.splice(correctIndex, 0, correctOption);
  return { options, answer: correctIndex };
}

const kidsQuizQuestions = kidsStories.map((story) => {
  const correctOption = story.options[story.answer];
  const distractors = kidsStories.flatMap((candidate) => candidate.options).filter((option) => option !== correctOption);
  const choices = makeQuizOptions(correctOption, distractors);
  return {
    question: story.question,
    reference: story.reference,
    explanation: story.explanation,
    ...choices
  };
});

const adultMeanings = adultStudyData.map((study) => study.meaning);
const adultQuizQuestions = adultStudyData.map((study) => {
  const correctOption = study.meaning;
  const choices = makeQuizOptions(correctOption, adultMeanings.filter((candidate) => candidate !== correctOption));
  const term = study.word.match(/^(.+?) \(([^)]+)\)/);
  return {
    question: `No estudo “${study.title}”, o termo ${term ? `${term[1]} (${term[2]})` : study.theme} está relacionado a qual significado?`,
    reference: study.reference,
    explanation: `A explicação contextualizada é: ${study.meaning}`,
    ...choices
  };
});

const quizQuestions = [...kidsQuizQuestions, ...adultQuizQuestions];
if (quizQuestions.length !== 200 || quizQuestions.some((item) => item.options.length !== 4 || item.answer < 0 || item.answer >= item.options.length)) {
  throw new Error("O desafio bíblico precisa conter exatamente 200 perguntas válidas.");
}

const defaultState = {
  favorites: [],
  activePlanId: "gratidao",
  activeDayByPlan: {},
  completedByPlan: {},
  planTextCache: {},
  dailyReminderEnabled: false,
  dailyReminderLastSentDate: null,
  studyNotes: {},
  kidsProgressVersion: 2,
  completedKidsStories: [],
  kidsReadStudies: [],
  kidsAnswers: {},
  kidsTextCache: {},
  visitDates: [],
  quizBest: 0,
  dailyVerse: null,
  theme: "dark",
  translation: "almeida",
  currentBookId: "JHN",
  currentChapter: 3,
  books: [],
  chaptersByBook: {},
  cachedChapters: {}
};

let storageError = null;
let state = loadState();
let activeNoteReference = "";
let toastTimer;
let dailyReminderTimer = null;
let nextDailyReminderAt = 0;
const planTextLoading = new Set();
const planTextErrors = {};
let readerRequestId = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let openKidsStudyId = "kids-001";
let kidsTextErrors = {};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...defaultState };
    const parsed = JSON.parse(saved);
    const completedByPlan = parsed.completedByPlan && typeof parsed.completedByPlan === "object"
      ? parsed.completedByPlan
      : { gratidao: Array.isArray(parsed.completedDays) ? parsed.completedDays : [] };
    const studyNotes = parsed.studyNotes && typeof parsed.studyNotes === "object" ? { ...parsed.studyNotes } : {};
    for (const oldPlanId of [...foundationalReadingPlans.map((plan) => plan.id), "estudos-adultos"]) {
      const oldProgress = Array.isArray(completedByPlan[oldPlanId]) ? completedByPlan[oldPlanId] : [];
      const oldNotes = studyNotes[oldPlanId] && typeof studyNotes[oldPlanId] === "object" ? studyNotes[oldPlanId] : {};
      const journeys = readingPlans.filter((plan) => plan.id === oldPlanId || plan.id.startsWith(`${oldPlanId}-`));
      for (const journey of journeys) {
        const journeyStart = journey.sourceStartIndex;
        const completedInJourney = oldProgress
          .filter((dayIndex) => Number.isInteger(dayIndex) && dayIndex >= journeyStart && dayIndex < journeyStart + journey.days.length)
          .map((dayIndex) => dayIndex - journeyStart);
        if (completedInJourney.length || journey.id === oldPlanId) completedByPlan[journey.id] = completedInJourney;
        const notesInJourney = Object.fromEntries(Object.entries(oldNotes)
          .filter(([dayIndex]) => Number.isInteger(Number(dayIndex)) && Number(dayIndex) >= journeyStart && Number(dayIndex) < journeyStart + journey.days.length)
          .map(([dayIndex, note]) => [String(Number(dayIndex) - journeyStart), note]));
        if (Object.keys(notesInJourney).length || journey.id === oldPlanId) studyNotes[journey.id] = notesInJourney;
      }
      if (!journeys.some((journey) => journey.id === oldPlanId)) {
        delete completedByPlan[oldPlanId];
        delete studyNotes[oldPlanId];
      }
    }
    const kidsProgressIsCurrent = parsed.kidsProgressVersion === defaultState.kidsProgressVersion;
    const kidsAnswers = kidsProgressIsCurrent && parsed.kidsAnswers && typeof parsed.kidsAnswers === "object"
      ? Object.fromEntries(Object.entries(parsed.kidsAnswers).filter(([id, answer]) => kidsStories.some((story) => story.id === id) && Number.isInteger(answer) && answer >= 0 && answer < 3))
      : {};
    const kidsReadStudies = kidsProgressIsCurrent && Array.isArray(parsed.kidsReadStudies)
      ? parsed.kidsReadStudies.filter((id) => kidsStories.some((story) => story.id === id))
      : [];
    const validCompletedKidsStories = kidsProgressIsCurrent && Array.isArray(parsed.completedKidsStories)
      ? new Set(parsed.completedKidsStories.filter((id) => kidsStories.some((story) => story.id === id)))
      : new Set();
    const completedKidsStories = [];
    for (const story of kidsStories) {
      if (!validCompletedKidsStories.has(story.id) || !kidsReadStudies.includes(story.id) || kidsAnswers[story.id] !== story.answer) break;
      completedKidsStories.push(story.id);
    }
    const cachedChapters = parsed.cachedChapters && typeof parsed.cachedChapters === "object" ? { ...parsed.cachedChapters } : {};
    for (const [key, chapter] of Object.entries(cachedChapters)) {
      if (!key.includes(":")) {
        cachedChapters[`almeida:${key}`] = chapter;
        delete cachedChapters[key];
      }
    }
    return {
      ...defaultState,
      ...parsed,
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      activePlanId: readingPlans.some((plan) => plan.id === parsed.activePlanId) ? parsed.activePlanId : "gratidao",
      activeDayByPlan: parsed.activeDayByPlan && typeof parsed.activeDayByPlan === "object" ? parsed.activeDayByPlan : {},
      completedByPlan,
      planTextCache: parsed.planTextCache && typeof parsed.planTextCache === "object" ? parsed.planTextCache : {},
      dailyReminderEnabled: parsed.dailyReminderEnabled === true,
      dailyReminderLastSentDate: typeof parsed.dailyReminderLastSentDate === "string" ? parsed.dailyReminderLastSentDate : null,
      studyNotes,
      completedKidsStories,
      kidsProgressVersion: defaultState.kidsProgressVersion,
      kidsReadStudies,
      kidsAnswers,
      kidsTextCache: kidsProgressIsCurrent && parsed.kidsTextCache && typeof parsed.kidsTextCache === "object" ? parsed.kidsTextCache : {},
      visitDates: Array.isArray(parsed.visitDates) ? parsed.visitDates : [],
      theme: "dark",
      translation: bibleTranslations.some((translation) => translation.id === parsed.translation) ? parsed.translation : "almeida",
      books: Array.isArray(parsed.books) ? parsed.books : [],
      chaptersByBook: parsed.chaptersByBook && typeof parsed.chaptersByBook === "object" ? parsed.chaptersByBook : {},
      cachedChapters
    };
  } catch (error) {
    storageError = error;
    return { ...defaultState };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Não foi possível salvar seus dados neste navegador.", error);
    showToast("Não foi possível salvar. Verifique o espaço disponível no navegador.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function bibleApiBase() {
  return `${BIBLE_API_ROOT}/${state.translation}`;
}

function translationLabel(translationId = state.translation) {
  return bibleTranslations.find((translation) => translation.id === translationId)?.name || "Almeida · Português";
}

function normalized(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2800);
}

async function fetchJson(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error("Não foi possível conectar à API bíblica. Confira sua conexão e tente novamente.");
  }
  if (!response.ok) {
    throw new Error(`A API bíblica respondeu com erro (${response.status}). Tente novamente em instantes.`);
  }
  try {
    return await response.json();
  } catch (error) {
    throw new Error("A resposta da API bíblica não pôde ser lida.");
  }
}

function referenceFor(verse) {
  return `${verse.book} ${verse.chapter}:${verse.verse}`;
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function renderDailyWelcomeArt(date = new Date()) {
  const dayOfYear = Math.floor(
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 1)) / 86400000
  );
  const index = dayOfYear % dailyWelcomeArtworks.length;
  const artwork = dailyWelcomeArtworks[index];
  const art = document.getElementById("welcome-art");
  art.dataset.palette = String(index % 10);
  art.setAttribute("aria-label", `Ilustração do dia ${index + 1} de 50: ${artwork.title}`);
  document.getElementById("daily-art-icon").textContent = artwork.icon;
  document.getElementById("daily-art-accent-one").textContent = artwork.left;
  document.getElementById("daily-art-accent-two").textContent = artwork.right;
  document.getElementById("daily-art-count").textContent = `${String(index + 1).padStart(2, "0")} / 50`;
}

function renderDailyReminder() {
  const button = document.getElementById("reminder-toggle");
  const status = document.getElementById("reminder-status");
  if (!("Notification" in window)) {
    button.disabled = true;
    button.textContent = "Notificações indisponíveis";
    status.textContent = "Este navegador não oferece suporte a notificações.";
    return;
  }

  button.disabled = Notification.permission === "denied";
  if (Notification.permission === "denied") {
    button.textContent = "Permissão bloqueada";
    status.textContent = "As notificações estão bloqueadas nas configurações do navegador. Altere a permissão do site para ativar o lembrete.";
  } else if (state.dailyReminderEnabled && Notification.permission === "granted") {
    button.textContent = "Desativar lembrete";
    status.textContent = "Ativo: você receberá um lembrete todos os dias às 8h, no horário local, enquanto o app estiver aberto.";
  } else {
    button.textContent = "Ativar lembrete das 8h";
    status.textContent = Notification.permission === "granted"
      ? "Permissão autorizada. Ative para receber um lembrete diário às 8h."
      : "Ative para receber um lembrete às 8h. O app precisa estar aberto para enviá-lo.";
  }
}

function scheduleDailyReminder() {
  clearTimeout(dailyReminderTimer);
  dailyReminderTimer = null;
  nextDailyReminderAt = 0;
  if (!state.dailyReminderEnabled || !("Notification" in window) || Notification.permission !== "granted") return;

  const now = new Date();
  const nextReminder = new Date(now);
  nextReminder.setHours(8, 0, 0, 0);
  const isEightAmNow = now.getHours() === 8 && now.getMinutes() === 0;
  if (nextReminder.getTime() <= now.getTime()
    && (!isEightAmNow || state.dailyReminderLastSentDate === localDateKey(now))) {
    nextReminder.setDate(nextReminder.getDate() + 1);
  }
  nextDailyReminderAt = nextReminder.getTime();
  dailyReminderTimer = setTimeout(deliverDailyReminder, Math.max(0, nextDailyReminderAt - Date.now()));
}

function deliverDailyReminder() {
  const dueAt = nextDailyReminderAt;
  const today = localDateKey();
  const dueDate = dueAt ? localDateKey(new Date(dueAt)) : "";
  const now = Date.now();
  if (state.dailyReminderEnabled
    && "Notification" in window
    && Notification.permission === "granted"
    && dueDate === today
    && now >= dueAt
    && state.dailyReminderLastSentDate !== today) {
    try {
      const notification = new Notification("Hora de Palavra Viva", {
        body: "Reserve um momento para seu estudo bíblico e suas orações.",
        tag: "palavra-viva-lembrete-diario"
      });
      notification.onclick = () => {
        window.focus();
        navigateTo("plano");
        notification.close();
      };
      state.dailyReminderLastSentDate = today;
      saveState();
    } catch (error) {
      console.error("Não foi possível mostrar o lembrete diário.", error);
      showToast("Não foi possível mostrar a notificação. Confira as permissões do navegador.");
    }
  }
  scheduleDailyReminder();
}

async function toggleDailyReminder() {
  if (!("Notification" in window)) {
    showToast("Este navegador não oferece suporte a notificações.");
    return;
  }
  if (state.dailyReminderEnabled) {
    state.dailyReminderEnabled = false;
    scheduleDailyReminder();
    saveState();
    renderDailyReminder();
    showToast("Lembrete diário desativado.");
    return;
  }

  let permission = Notification.permission;
  if (permission === "default") {
    try {
      permission = await Notification.requestPermission();
    } catch (error) {
      console.error("Não foi possível solicitar permissão para notificações.", error);
      showToast("Não foi possível solicitar a permissão. Confira as configurações do navegador.");
      return;
    }
  }
  if (permission !== "granted") {
    renderDailyReminder();
    showToast(permission === "denied"
      ? "Permita notificações nas configurações do navegador para ativar o lembrete."
      : "A permissão para notificações não foi concedida.");
    return;
  }

  state.dailyReminderEnabled = true;
  saveState();
  renderDailyReminder();
  scheduleDailyReminder();
  showToast("Lembrete diário ativado para as 8h.");
}

function getFavorite(reference) {
  return state.favorites.find((favorite) => favorite.reference === reference);
}

function saveVerse(verse) {
  const reference = referenceFor(verse);
  const existing = getFavorite(reference);
  if (existing) {
    state.favorites = state.favorites.filter((favorite) => favorite.reference !== reference);
    showToast("Passagem removida dos favoritos.");
  } else {
    state.favorites.unshift({ reference, text: verse.text.trim(), note: "", highlight: "" });
    showToast("Passagem salva nos favoritos.");
  }
  saveState();
  updateStats();
  renderFavorites();
  renderReader();
  renderDailyFavorite();
}

function saveHighlight(verse, color) {
  const reference = referenceFor(verse);
  const existing = getFavorite(reference);
  if (existing) {
    existing.highlight = existing.highlight === color ? "" : color;
  } else {
    state.favorites.unshift({ reference, text: verse.text.trim(), note: "", highlight: color });
  }
  saveState();
  renderReader();
  renderFavorites();
  showToast(color ? "Marca-texto atualizado." : "Marca-texto removido.");
}

function openNote(verse) {
  const reference = referenceFor(verse);
  const favorite = getFavorite(reference);
  activeNoteReference = reference;
  document.getElementById("note-reference").textContent = reference;
  document.getElementById("note-text").value = favorite ? favorite.note : "";
  document.getElementById("note-dialog").showModal();
}

function renderDailyFavorite() {
  const button = document.getElementById("daily-favorite");
  if (!state.dailyVerse || !button) return;
  const favorite = getFavorite(state.dailyVerse.reference);
  button.innerHTML = favorite ? "♥ <span>Salvo</span>" : "♡ <span>Salvar</span>";
  button.setAttribute("aria-label", favorite ? "Remover versículo dos favoritos" : "Salvar versículo nos favoritos");
}

async function loadDailyVerse() {
  const todayKey = localDateKey();
  if (state.dailyVerse && state.dailyVerse.date === todayKey && state.dailyVerse.translation === state.translation) {
    displayDailyVerse(state.dailyVerse);
    return;
  }
  const translation = state.translation;
  const verseElement = document.getElementById("daily-verse");
  verseElement.textContent = "Buscando uma palavra para o seu dia...";
  try {
    const data = await fetchJson(`${BIBLE_API_ROOT}/${translation}/random/NT`);
    if (translation !== state.translation) return;
    const verse = data.random_verse;
    if (!verse || !verse.text || !verse.book) throw new Error("A API não retornou um versículo válido.");
    state.dailyVerse = {
      date: todayKey,
      reference: referenceFor(verse),
      text: verse.text.trim(),
      translation
    };
    saveState();
    displayDailyVerse(state.dailyVerse);
  } catch (error) {
    if (translation !== state.translation) return;
    verseElement.textContent = error.message;
    document.getElementById("daily-reference").textContent = "Fonte: API bible-api.com";
    console.error("Falha ao carregar o versículo do dia.", error);
  }
}

function displayDailyVerse(verse) {
  document.getElementById("daily-verse").textContent = `“${verse.text}”`;
  document.getElementById("daily-reference").textContent = verse.reference;
  document.getElementById("daily-reflection").textContent = dailyVerseReflection(verse.text);
  renderDailyFavorite();
}

function dailyVerseReflection(text) {
  const verse = normalized(text);
  const reflections = [
    { terms: ["love", "amor", "amou", "amado", "caridade"], text: "O amor aparece neste trecho como algo que pode ser recebido e demonstrado. Que atitude concreta de cuidado você pode praticar hoje?" },
    { terms: ["faith", "fe", "crer", "creu", "believe", "trust", "confiar", "confianca"], text: "Este trecho toca no tema da confiança. O que ele diz e qual pequeno passo de confiança faz sentido para você hoje?" },
    { terms: ["hope", "esperanca", "hopeful", "esperar"], text: "A esperança pode ajudar a olhar para o futuro sem negar o que é difícil agora. Que palavra deste trecho você gostaria de guardar?" },
    { terms: ["peace", "paz", "descanso", "rest"], text: "A paz é o tema que se destaca neste trecho. O que pode ajudar você a encontrar um momento de calma e cuidado hoje?" },
    { terms: ["forgive", "perdao", "perdoar", "misericordia"], text: "O trecho menciona perdão ou misericórdia. Que significado essas palavras têm no contexto lido, sem ignorar limites e a necessidade de segurança?" },
    { terms: ["pray", "oracao", "orar", "prayeth"], text: "A oração aparece neste trecho. Que sentimento, pergunta ou agradecimento você gostaria de expressar com sinceridade?" },
    { terms: ["serve", "servir", "serve", "ajudar", "help"], text: "O cuidado com outras pessoas está em destaque. Como oferecer ajuda respeitosa, perguntando do que a pessoa realmente precisa?" }
  ];
  const reflection = reflections.find((item) => item.terms.some((term) => {
    const normalizedTerm = normalized(term);
    if (normalizedTerm.includes(" ")) return verse.includes(normalizedTerm);
    return verse.split(/[^a-z0-9]+/).some((word) =>
      word === normalizedTerm || (normalizedTerm.length >= 4 && word.startsWith(normalizedTerm))
    );
  }));
  return reflection ? reflection.text : "Leia o trecho mais uma vez e observe o que ele comunica sobre Deus e as pessoas. Qual ideia merece acompanhar suas escolhas hoje?";
}

async function loadBooks() {
  if (state.books.length) return state.books;
  const translation = state.translation;
  const data = await fetchJson(`${BIBLE_API_ROOT}/${translation}`);
  if (translation !== state.translation) return loadBooks();
  if (!Array.isArray(data.books) || !data.books.length) throw new Error("A API não retornou a lista de livros.");
  state.books = data.books;
  saveState();
  return state.books;
}

async function loadBookChapters(bookId) {
  if (Array.isArray(state.chaptersByBook[bookId])) return state.chaptersByBook[bookId];
  const translation = state.translation;
  const data = await fetchJson(`${BIBLE_API_ROOT}/${translation}/${encodeURIComponent(bookId)}`);
  if (translation !== state.translation) return loadBookChapters(bookId);
  if (!Array.isArray(data.chapters) || !data.chapters.length) throw new Error("Não foi possível encontrar os capítulos deste livro.");
  state.chaptersByBook[bookId] = data.chapters.map((chapter) => chapter.chapter);
  saveState();
  return state.chaptersByBook[bookId];
}

function setReaderMessage(message, isError = false) {
  const list = document.getElementById("scripture-list");
  list.innerHTML = `<div class="reader-empty">${escapeHtml(message)}${isError ? '<br><button class="secondary-button retry-reader" type="button">Tentar novamente</button>' : ""}</div>`;
}

async function initializeReader() {
  const translation = state.translation;
  try {
    const books = await loadBooks();
    if (translation !== state.translation) return;
    const select = document.getElementById("book-select");
    select.innerHTML = books.map((book) => `<option value="${escapeHtml(book.id)}">${escapeHtml(book.name)}</option>`).join("");
    if (!books.some((book) => book.id === state.currentBookId)) state.currentBookId = "JHN";
    select.value = state.currentBookId;
    await updateChapterOptions(state.currentBookId, state.currentChapter);
    if (translation !== state.translation) return;
    await loadReaderChapter();
  } catch (error) {
    if (translation !== state.translation) return;
    setReaderMessage(error.message, true);
    console.error("Falha ao iniciar o leitor bíblico.", error);
  }
}

function populateTranslationSelectors() {
  const options = bibleTranslations.map((translation) =>
    `<option value="${translation.id}">${escapeHtml(translation.name)}</option>`
  ).join("");
  document.getElementById("daily-translation").innerHTML = options;
  document.getElementById("reader-translation").innerHTML = options;
  document.getElementById("daily-translation").value = state.translation;
  document.getElementById("reader-translation").value = state.translation;
  const source = document.getElementById("bible-source-label");
  if (source) source.textContent = `Fonte: API pública bible-api.com · ${translationLabel()}.`;
  const dailySource = document.getElementById("daily-source-label");
  if (dailySource) dailySource.textContent = `Texto fornecido pela API pública bible-api.com · ${translationLabel()}. É necessária conexão com a internet para carregar novas passagens.`;
}

function changeTranslation(translationId) {
  if (!bibleTranslations.some((translation) => translation.id === translationId) || translationId === state.translation) return;
  state.translation = translationId;
  readerRequestId += 1;
  state.books = [];
  state.chaptersByBook = {};
  state.dailyVerse = null;
  saveState();
  populateTranslationSelectors();
  loadDailyVerse();
  initializeReader();
}

async function updateChapterOptions(bookId, requestedChapter = 1) {
  const chapters = await loadBookChapters(bookId);
  const chapterSelect = document.getElementById("chapter-select");
  chapterSelect.innerHTML = chapters.map((chapter) => `<option value="${chapter}">${chapter}</option>`).join("");
  const selectedChapter = chapters.includes(Number(requestedChapter)) ? Number(requestedChapter) : chapters[0];
  chapterSelect.value = String(selectedChapter);
  state.currentBookId = bookId;
  state.currentChapter = selectedChapter;
  saveState();
}

async function loadReaderChapter() {
  const requestId = ++readerRequestId;
  const bookId = document.getElementById("book-select").value || state.currentBookId;
  const chapter = Number(document.getElementById("chapter-select").value || state.currentChapter);
  const book = state.books.find((item) => item.id === bookId);
  state.currentBookId = bookId;
  state.currentChapter = chapter;
  saveState();
  document.getElementById("chapter-heading").textContent = `${book ? book.name : "Bíblia"} ${chapter}`;
  setReaderMessage("Carregando passagem...");

  const cacheKey = `${state.translation}:${bookId}.${chapter}`;
  try {
    let data = state.cachedChapters[cacheKey];
    if (!data) {
      data = await fetchJson(`${bibleApiBase()}/${encodeURIComponent(bookId)}/${chapter}`);
      if (!Array.isArray(data.verses)) throw new Error("A API não retornou os versículos deste capítulo.");
      state.cachedChapters[cacheKey] = data;
      const cacheKeys = Object.keys(state.cachedChapters);
      if (cacheKeys.length > CACHE_LIMIT) delete state.cachedChapters[cacheKeys[0]];
      saveState();
    }
    if (requestId !== readerRequestId) return;
    renderReader(data.verses);
  } catch (error) {
    if (requestId !== readerRequestId) return;
    setReaderMessage(error.message, true);
    console.error("Falha ao carregar capítulo bíblico.", error);
  }
}

function verseToolbar(verse) {
  const reference = referenceFor(verse);
  const favorite = getFavorite(reference);
  const favoriteLabel = favorite ? "♥ Salvo" : "♡ Salvar";
  const buttons = [
    `<button class="verse-tool" type="button" data-action="favorite" data-ref="${escapeHtml(reference)}">${favoriteLabel}</button>`,
    `<button class="verse-tool" type="button" data-action="note" data-ref="${escapeHtml(reference)}">✎ Anotar</button>`,
    `<button class="highlight-choice yellow" type="button" aria-label="Marcar em amarelo" title="Marcar em amarelo" data-action="highlight" data-color="yellow" data-ref="${escapeHtml(reference)}"></button>`,
    `<button class="highlight-choice pink" type="button" aria-label="Marcar em rosa" title="Marcar em rosa" data-action="highlight" data-color="pink" data-ref="${escapeHtml(reference)}"></button>`,
    `<button class="highlight-choice green" type="button" aria-label="Marcar em verde" title="Marcar em verde" data-action="highlight" data-color="green" data-ref="${escapeHtml(reference)}"></button>`
  ];
  return `<div class="verse-toolbar">${buttons.join("")}</div>`;
}

function renderReader(verses) {
  if (!Array.isArray(verses)) {
    const cached = state.cachedChapters[`${state.translation}:${state.currentBookId}.${state.currentChapter}`];
    verses = cached && cached.verses;
  }
  const list = document.getElementById("scripture-list");
  if (!verses || !verses.length) {
    setReaderMessage("Este capítulo não trouxe versículos. Tente outro capítulo.");
    return;
  }
  list.innerHTML = verses.map((verse) => {
    const reference = referenceFor(verse);
    const favorite = getFavorite(reference);
    const highlight = favorite && favorite.highlight ? ` highlight-${escapeHtml(favorite.highlight)}` : "";
    return `<article class="scripture-verse${highlight}"><span class="verse-number">${verse.verse}</span><div class="verse-content">${escapeHtml(verse.text.trim())}${verseToolbar(verse)}</div></article>`;
  }).join("");
}

function findVerse(reference) {
  for (const data of Object.values(state.cachedChapters)) {
    const verse = data.verses && data.verses.find((item) => referenceFor(item) === reference);
    if (verse) return verse;
  }
  const favorite = getFavorite(reference);
  if (!favorite) return null;
  const match = reference.match(/^(.*)\s+(\d+):(\d+)$/);
  if (!match) return null;
  return { book: match[1], chapter: Number(match[2]), verse: Number(match[3]), text: favorite.text };
}

function renderFavorites() {
  const list = document.getElementById("favorites-list");
  const count = document.getElementById("favorite-count");
  count.textContent = state.favorites.length;
  if (!state.favorites.length) {
    list.innerHTML = '<div class="empty-state"><span class="empty-emoji">🌱</span>Suas passagens favoritas e anotações vão aparecer aqui.<br>Abra a Bíblia e toque em “Salvar” para começar.</div>';
    return;
  }
  list.innerHTML = state.favorites.map((favorite) => `
    <article class="favorite-item">
      <div class="result-reference"><span>${escapeHtml(favorite.reference)}</span><button class="favorite-delete" type="button" aria-label="Remover favorito" data-action="favorite" data-ref="${escapeHtml(favorite.reference)}">×</button></div>
      <p>${escapeHtml(favorite.text)}</p>
      ${favorite.note ? `<div class="favorite-note">${escapeHtml(favorite.note)}</div>` : ""}
      <div class="result-actions"><button type="button" data-action="note" data-ref="${escapeHtml(favorite.reference)}">✎ ${favorite.note ? "Editar anotação" : "Adicionar anotação"}</button><button type="button" data-action="open-reference" data-ref="${escapeHtml(favorite.reference)}">Ler passagem →</button></div>
    </article>`).join("");
}

function getActivePlan() {
  return readingPlans.find((plan) => plan.id === state.activePlanId) || readingPlans[0];
}

function getPlanProgress(planId = state.activePlanId) {
  const completed = state.completedByPlan[planId];
  return Array.isArray(completed) ? completed : [];
}

function getPlanTextKey(planId, index) {
  return `${planId}:${index}`;
}

function findPlanStudy(key) {
  return [...document.querySelectorAll(".day-study")].find((study) => study.dataset.planStudy === key);
}

function renderPlanScripture(planId, index, reference) {
  const key = getPlanTextKey(planId, index);
  const cachedText = state.planTextCache[key];
  if (cachedText && Array.isArray(cachedText.verses)) {
    return `<p class="plan-scripture-translation">Texto bíblico · Almeida · bible-api.com</p>
      <div class="plan-scripture">${cachedText.verses.map((verse) => `<p><sup>${escapeHtml(verse.verse)}</sup>${escapeHtml(verse.text.trim())}</p>`).join("")}</div>`;
  }
  if (planTextLoading.has(key)) {
    return `<p class="plan-scripture-status">Carregando o texto bíblico de ${escapeHtml(reference)}...</p>`;
  }
  const error = planTextErrors[key];
  return `<p class="plan-scripture-status">${error ? escapeHtml(error) : `O texto completo de ${escapeHtml(reference)} aparecerá aqui.`}</p>
    <button class="plan-scripture-retry" type="button" data-action="load-plan-text" data-plan="${escapeHtml(planId)}" data-day="${index}">${error ? "Tentar carregar novamente" : "Carregar texto bíblico"}</button>`;
}

async function loadPlanText(planId, index) {
  const plan = readingPlans.find((item) => item.id === planId);
  const day = plan && plan.days[index];
  if (!day) return;
  const key = getPlanTextKey(planId, index);
  if (state.planTextCache[key] || planTextLoading.has(key)) return;

  delete planTextErrors[key];
  planTextLoading.add(key);
  const study = findPlanStudy(key);
  const scripture = study && study.querySelector(".plan-scripture-content");
  if (scripture) scripture.innerHTML = renderPlanScripture(planId, index, day.reference);

  try {
    const url = `https://bible-api.com/${encodeURIComponent(day.reference)}?translation=almeida`;
    const data = await fetchJson(url);
    if (!Array.isArray(data.verses) || !data.verses.length) {
      throw new Error("A API não encontrou o texto dessa passagem.");
    }
    state.planTextCache[key] = {
      reference: day.reference,
      verses: data.verses.map((verse) => ({ verse: verse.verse, text: verse.text }))
    };
    const cacheIds = Object.keys(state.planTextCache);
    if (cacheIds.length > 20) delete state.planTextCache[cacheIds[0]];
    saveState();
  } catch (error) {
    planTextErrors[key] = error.message;
    console.error(`Falha ao carregar o texto do plano ${planId}, item ${index + 1}.`, error);
  } finally {
    planTextLoading.delete(key);
    const updatedStudy = findPlanStudy(key);
    const updatedScripture = updatedStudy && updatedStudy.querySelector(".plan-scripture-content");
    if (updatedScripture) updatedScripture.innerHTML = renderPlanScripture(planId, index, day.reference);
  }
}

function renderPlan() {
  const plan = getActivePlan();
  const completedDays = getPlanProgress(plan.id);
  const list = document.getElementById("plan-days");
  const savedDay = Number(state.activeDayByPlan[plan.id]);
  const activeDay = Number.isInteger(savedDay) && savedDay >= 0 && savedDay < plan.days.length ? savedDay : 0;
  state.activeDayByPlan[plan.id] = activeDay;
  const day = plan.days[activeDay];
  const done = completedDays.includes(activeDay);
  const isAdultLibrary = plan.id.startsWith("estudos-adultos");
  const unitLabel = isAdultLibrary ? "Estudo" : "Dia";
  document.getElementById("plan-select").innerHTML = readingPlans.map((item) =>
    `<option value="${escapeHtml(item.id)}">${escapeHtml(item.title)} · ${item.duration} dias</option>`
  ).join("");
  document.getElementById("plan-select").value = plan.id;
  document.getElementById("plan-duration").textContent = isAdultLibrary ? `BIBLIOTECA · ${plan.duration} ESTUDOS` : `PLANO DE ${plan.duration} DIAS`;
  document.getElementById("plan-title").textContent = plan.title;
  document.getElementById("plan-description").textContent = plan.description;
  document.getElementById("plan-introduction").textContent = isAdultLibrary
    ? `${plan.introduction} Marque os encontros concluídos e anote o que Deus falou com você; suas notas são salvas neste dispositivo.`
    : `${plan.introduction} Cada etapa traz o texto bíblico e palavras-chave relacionadas ao tema, sem sair do plano.`;
  document.getElementById("home-plan-title").textContent = plan.title;
  document.getElementById("home-plan-description").textContent = plan.description;
  const savedThought = isAdultLibrary && state.studyNotes[plan.id] ? state.studyNotes[plan.id][activeDay] || "" : "";
  const lexicalStudies = (day.lexicalStudies || []).map((keyword) => `<article class="study-word">
      <strong>${escapeHtml(keyword.word)}</strong>
      <p><b>Sentido no contexto:</b> ${escapeHtml(keyword.meaning)}</p>
      <p><b>Contexto histórico e uso:</b> ${escapeHtml(keyword.context)}</p>
      <p class="study-word-purpose"><b>Relação com o estudo:</b> ${escapeHtml(keyword.insight)}</p>
      <span class="study-word-label">${escapeHtml(keyword.topicNotice)}</span>
      <span>Leitura de referência: ${escapeHtml(keyword.reference)}</span>
    </article>`).join("");
  list.innerHTML = `<article class="plan-day${done ? " done" : ""} day-study" data-plan-study="${escapeHtml(getPlanTextKey(plan.id, activeDay))}">
      <header class="plan-card-head">
        <div class="day-copy"><span class="day-step">${unitLabel} ${activeDay + 1} de ${plan.days.length}</span><strong>${escapeHtml(day.title)}</strong><span>${escapeHtml(day.theme)}</span></div>
        <button class="day-check" type="button" aria-label="${done ? "Desmarcar" : "Marcar"} ${unitLabel.toLowerCase()} ${activeDay + 1} como concluído" aria-pressed="${done}" data-action="toggle-day" data-day="${activeDay}">${done ? "✓" : ""}</button>
      </header>
      <div class="study-content">
        <h3>Texto bíblico · ${escapeHtml(day.reference)}</h3>
        <div class="plan-scripture-content">${renderPlanScripture(plan.id, activeDay, day.reference)}</div>
        ${isAdultLibrary ? `<h3>Contexto histórico e literário</h3><p>${escapeHtml(day.context)}</p>` : ""}
        <h3>Três palavras-chave no contexto</h3>
        <p class="study-words-intro">A palavra principal vem do estudo quando disponível. As demais são conexões temáticas e podem não aparecer literalmente no trecho; cada referência mostra onde o termo é usado.</p>
        <div class="study-words">${lexicalStudies || "<p>As notas de vocabulário não estão disponíveis para este encontro.</p>"}</div>
        <h3>O que vamos aprender?</h3><p>${escapeHtml(day.lesson)}</p>
        <h3>Vamos refletir</h3><p>${escapeHtml(day.reflection)}</p>
        <h3>Para praticar</h3><p>${escapeHtml(day.practice)}</p>
        ${isAdultLibrary ? `<label class="study-note-label" for="study-note-${activeDay}">O que Deus falou com você?</label>
        <textarea id="study-note-${activeDay}" class="study-note" data-study-note="${activeDay}" rows="4" placeholder="Escreva seus pensamentos, dúvidas ou uma oração...">${escapeHtml(savedThought)}</textarea>
        <p class="study-note-help">Suas anotações ficam salvas neste dispositivo. Para marcar versículos, abra o texto acima e use o marca-texto.</p>` : ""}
      </div>
      <nav class="study-navigation" aria-label="Navegação dos estudos">
        <button type="button" data-action="plan-step" data-direction="-1" ${activeDay === 0 ? "disabled" : ""}>← Anterior</button>
        <span>Etapa ${activeDay + 1} de ${plan.days.length}</span>
        <button type="button" data-action="plan-step" data-direction="1" ${activeDay === plan.days.length - 1 ? "disabled" : ""}>Próximo →</button>
      </nav>
    </article>`;
  loadPlanText(plan.id, activeDay);
  saveState();
  const percent = Math.round(completedDays.length / plan.days.length * 100);
  document.getElementById("plan-progress-number").textContent = `${percent}%`;
  document.getElementById("plan-progress-bar").style.width = `${percent}%`;
  document.getElementById("home-progress-bar").style.width = `${percent}%`;
  document.getElementById("home-plan-progress").textContent = `${completedDays.length} de ${plan.days.length} ${isAdultLibrary ? "estudos" : "dias"}`;
  document.getElementById("plan-stat").textContent = `${percent}%`;
}

function renderKids() {
  const list = document.getElementById("kids-stories");
  if (state.completedKidsStories.includes(openKidsStudyId)) {
    const nextStudy = kidsStories.find((story) => !state.completedKidsStories.includes(story.id));
    openKidsStudyId = nextStudy ? nextStudy.id : kidsStories[kidsStories.length - 1].id;
  }
  list.innerHTML = kidsStories.map((story, index) => {
    const unlocked = index === 0 || state.completedKidsStories.includes(kidsStories[index - 1].id);
    const done = state.completedKidsStories.includes(story.id);
    const answer = state.kidsAnswers[story.id];
    const answered = Number.isInteger(answer);
    const cachedText = state.kidsTextCache[story.id];
    const textError = kidsTextErrors[story.id];
    const options = story.options.map((option, optionIndex) => {
      let stateClass = "";
      if (answered && optionIndex === story.answer) stateClass = " correct";
      else if (answered && optionIndex === answer) stateClass = " incorrect";
      return `<button class="kids-answer${stateClass}" type="button" data-action="kids-answer" data-story="${story.id}" data-answer="${optionIndex}" ${answered ? "disabled" : ""}>${escapeHtml(option)}</button>`;
    }).join("");
    const scripture = cachedText && Array.isArray(cachedText.verses)
      ? `<div class="kids-scripture">${cachedText.verses.map((verse) => `<p><sup>${verse.verse}</sup>${escapeHtml(verse.text.trim())}</p>`).join("")}</div>`
      : "";
    return `<details class="kids-study${done ? " completed" : ""}${unlocked ? "" : " locked"}" data-study-id="${story.id}" ${unlocked && openKidsStudyId === story.id ? "open" : ""}>
      <summary class="kids-study-summary" ${unlocked ? "" : 'aria-disabled="true" aria-label="Estudo bloqueado. Conclua a fase anterior." tabindex="-1"'}>
        <span class="kids-story-number">ESTUDO ${String(index + 1).padStart(3, "0")} DE 100</span>
        <strong>${escapeHtml(story.title)}</strong>
        <span class="kids-study-reference">${escapeHtml(story.reference)}</span>
        <span class="kids-done-label">${done ? "✓ Aprendido" : unlocked ? "＋ Abrir estudo" : "🔒 Estudo bloqueado"}</span>
      </summary>
      <div class="kids-study-content">
        <button class="kids-reference" type="button" data-action="kids-load-text" data-story="${story.id}">${cachedText ? "↻ Atualizar texto bíblico" : textError ? "↻ Tentar carregar o texto novamente" : "📖 Ler o texto bíblico"}</button>
        ${cachedText ? `<p class="kids-translation">Texto da tradução João Ferreira de Almeida · bible-api.com</p>${scripture}` : ""}
        ${textError ? `<p class="kids-text-error">${escapeHtml(textError)}</p>` : ""}
        ${!cachedText ? `<p class="kids-text-help">Conecte-se à internet para carregar a passagem completa.</p>` : ""}
        <div class="kids-teaching"><span aria-hidden="true">💡</span><div><h3>O que aprendemos?</h3><p>${escapeHtml(story.lesson)}</p></div></div>
        <div class="kids-think"><strong>🤔 Vamos pensar</strong><p>${escapeHtml(story.think)}</p><span>Desafio: ${escapeHtml(story.practice)}</span></div>
        <div class="kids-quiz"><h3>🎯 Perguntinha da história</h3><p>${escapeHtml(story.question)}</p><div class="kids-answers">${options}</div>
          ${answered ? `<p class="kids-feedback">${answer === story.answer ? "🎉 Isso mesmo! " : "🌱 Boa tentativa! "}${escapeHtml(story.explanation)}</p><button class="kids-retry" type="button" data-action="kids-retry" data-story="${story.id}">Tentar de novo</button>` : ""}
        </div>
        <p class="kids-gate-hint">${state.kidsReadStudies.includes(story.id) ? "✓ Leitura aberta" : "① Leia o texto"} · ${answer === story.answer ? "✓ Quiz correto" : "② Acerte o quiz"} · ③ Marque como aprendido</p>
        <button class="kids-complete" type="button" data-action="kids-complete" data-story="${story.id}" aria-pressed="${done}" ${done || !unlocked || !state.kidsReadStudies.includes(story.id) || answer !== story.answer ? "disabled" : ""}>${done ? "✓ Estudo aprendido" : "Marcar como aprendido"}</button>
      </div>
    </details>`;
  }).join("");
  list.querySelectorAll(".kids-study").forEach((study) => {
    const story = kidsStories.find((item) => item.id === study.dataset.studyId);
    const index = kidsStories.indexOf(story);
    const unlocked = index === 0 || state.completedKidsStories.includes(kidsStories[index - 1].id);
    const summary = study.querySelector(".kids-study-summary");
    summary.addEventListener("click", (event) => {
      if (!unlocked) {
        event.preventDefault();
        showToast("Complete o estudo anterior para liberar esta fase.");
      }
    });
    study.addEventListener("toggle", () => {
      if (!unlocked && study.open) {
        study.open = false;
        return;
      }
      if (study.open) {
        openKidsStudyId = study.dataset.studyId;
        list.querySelectorAll(".kids-study[open]").forEach((openStudy) => {
          if (openStudy !== study) openStudy.open = false;
        });
      }
    });
  });
  const completedCount = state.completedKidsStories.length;
  document.getElementById("kids-progress").textContent = `${completedCount} de ${kidsStories.length}`;
  document.getElementById("kids-progress-bar").style.width = `${Math.round(completedCount / kidsStories.length * 100)}%`;
}

async function loadKidsText(studyId) {
  const story = kidsStories.find((item) => item.id === studyId);
  if (!story) return;
  const index = kidsStories.indexOf(story);
  if (index > 0 && !state.completedKidsStories.includes(kidsStories[index - 1].id)) {
    showToast("Complete o estudo anterior para liberar esta fase.");
    return;
  }
  openKidsStudyId = story.id;
  delete kidsTextErrors[studyId];
  renderKids();
  const button = document.querySelector(`[data-action="kids-load-text"][data-story="${story.id}"]`);
  if (button) {
    button.disabled = true;
    button.textContent = "Carregando passagem...";
  }
  try {
    const url = `https://bible-api.com/${encodeURIComponent(story.reference)}?translation=almeida`;
    const data = await fetchJson(url);
    if (!Array.isArray(data.verses) || !data.verses.length) throw new Error("A API não encontrou o texto dessa passagem.");
    state.kidsReadStudies = [...new Set([...state.kidsReadStudies, story.id])];
    state.kidsTextCache[story.id] = { reference: story.reference, verses: data.verses.map((verse) => ({ verse: verse.verse, text: verse.text })) };
    const cacheIds = Object.keys(state.kidsTextCache);
    if (cacheIds.length > 20) delete state.kidsTextCache[cacheIds[0]];
    saveState();
    renderKids();
  } catch (error) {
    kidsTextErrors[studyId] = error.message;
    renderKids();
    console.error(`Falha ao carregar o texto do estudo ${studyId}.`, error);
  }
}

function updateStats() {
  document.getElementById("saved-stat").textContent = state.favorites.length;
  const visits = new Set(state.visitDates);
  let streak = 0;
  const date = new Date();
  while (visits.has(localDateKey(date))) {
    streak += 1;
    date.setDate(date.getDate() - 1);
  }
  document.getElementById("streak-stat").textContent = `${streak} ${streak === 1 ? "dia" : "dias"}`;
  document.getElementById("favorite-count").textContent = state.favorites.length;
  renderPlan();
  renderKids();
}

function renderQuiz() {
  const content = document.getElementById("quiz-content");
  if (quizIndex >= quizQuestions.length) {
    const best = Math.max(state.quizBest, quizScore);
    if (best !== state.quizBest) {
      state.quizBest = best;
      saveState();
    }
    document.getElementById("quiz-count").textContent = "Desafio concluído";
    const phrase = quizScore === quizQuestions.length ? "Que conhecimento lindo!" : "Cada descoberta é um novo aprendizado!";
    const resultEmoji = quizScore === quizQuestions.length ? "🏆" : quizScore >= quizQuestions.length / 2 ? "🌟" : "💛";
    content.innerHTML = `<div class="quiz-result"><span>${resultEmoji}</span><h2>${phrase}</h2><p>Você acertou <strong>${quizScore} de ${quizQuestions.length}</strong> perguntas.${state.quizBest ? ` Seu melhor resultado é ${state.quizBest}/${quizQuestions.length}.` : ""}</p><button class="primary-button" type="button" data-action="restart-quiz">Jogar novamente <span>↻</span></button></div>`;
    return;
  }
  const item = quizQuestions[quizIndex];
  document.getElementById("quiz-count").textContent = `Pergunta ${quizIndex + 1} de ${quizQuestions.length}`;
  content.innerHTML = `
    <h2 class="quiz-question">${escapeHtml(item.question)}</h2>
    <div class="quiz-options">${item.options.map((option, index) => {
      let stateClass = "";
      if (quizAnswered && index === item.answer) stateClass = " correct";
      else if (quizAnswered && index === item.selectedAnswer) stateClass = " incorrect";
      const optionEmoji = quizAnswered && index === item.answer ? "✅ " : quizAnswered && index === item.selectedAnswer ? "💛 " : "";
      return `<button class="quiz-option${stateClass}" type="button" data-action="quiz-answer" data-answer="${index}" ${quizAnswered ? "disabled" : ""}><span class="quiz-option-emoji">${optionEmoji}</span>${escapeHtml(option)}</button>`;
    }).join("")}</div>
    ${quizAnswered ? `<p class="quiz-feedback"><span>${item.selectedAnswer === item.answer ? "🎉" : "💛"}</span><strong>${item.selectedAnswer === item.answer ? "Isso mesmo!" : `Quase! A resposta certa é: ${escapeHtml(item.options[item.answer])}`}</strong><br>${escapeHtml(item.explanation || `Leia ${item.reference} para conhecer a passagem.`)} <span class="quiz-reference">Referência: ${escapeHtml(item.reference)}</span></p><button class="primary-button quiz-next" type="button" data-action="quiz-next">${quizIndex === quizQuestions.length - 1 ? "Ver resultado" : "Próxima pergunta"} <span>→</span></button>` : ""}`;
}

function navigateTo(view) {
  const target = document.getElementById(`view-${view}`);
  if (!target) return;
  document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel === target));
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  const titles = { inicio: "Início", biblia: "Minha Bíblia", favoritos: "Favoritos", plano: "Plano de leitura", louvores: "Louvores", kids: "Espaço Kids", quiz: "Desafio bíblico" };
  document.getElementById("page-label").textContent = titles[view] || "Minha jornada";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let deferredInstallPrompt = null;

function installInstructions() {
  const userAgent = navigator.userAgent;
  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return "No Safari, toque em Compartilhar e escolha “Adicionar à Tela de Início”.";
  }
  if (/android/i.test(userAgent)) {
    return `No menu do navegador, escolha “Instalar app” ou “Adicionar à tela inicial”. ${installSecureOriginNote()}`;
  }
  return `No Chrome ou Edge, use o ícone de instalação na barra de endereço ou abra o menu e escolha “Instalar Palavra Viva”. ${installSecureOriginNote()}`;
}

function installSecureOriginNote() {
  return "A instalação exige que o app esteja publicado em um endereço HTTPS.";
}

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}

function updateInstallWall() {
  const wall = document.getElementById("install-wall");
  if (isStandalone()) {
    document.body.classList.add("app-installed");
    wall.hidden = true;
    return;
  }
  document.body.classList.remove("app-installed");
  wall.hidden = false;
  document.getElementById("install-wall-instructions").textContent =
    /iphone|ipad|ipod/i.test(navigator.userAgent)
      ? "No Safari, toque em Compartilhar e escolha “Adicionar à Tela de Início”. Depois, abra o Palavra Viva pelo ícone instalado. " + installSecureOriginNote()
      : `${installInstructions()} Depois, abra o Palavra Viva pelo ícone instalado.`;
}

async function installApp() {
  if (!deferredInstallPrompt) {
    if (!document.body.classList.contains("app-installed")) {
      updateInstallWall();
      return;
    }
    document.getElementById("install-instructions").textContent = installInstructions();
    document.getElementById("install-dialog").showModal();
    return;
  }
  const prompt = deferredInstallPrompt;
  deferredInstallPrompt = null;
  try {
    await prompt.prompt();
    const choice = await prompt.userChoice;
    if (choice.outcome === "accepted") {
      document.getElementById("install-button").hidden = true;
      showToast("Palavra Viva instalado.");
    }
  } catch (error) {
    console.error("Não foi possível iniciar a instalação do app.", error);
    showToast("Não foi possível iniciar a instalação. Tente pelo menu do navegador.");
  }
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") return;
  try {
    await navigator.serviceWorker.register("./service-worker.js");
  } catch (error) {
    console.error("Não foi possível registrar o modo instalável do app.", error);
  }
}

async function openReference(reference) {
  const match = reference.match(/^(.*)\s+(\d+)(?::[\d,-]+)?$/);
  if (!match) {
    showToast("Não foi possível abrir esta referência.");
    return;
  }
  try {
    if (!state.books.length) await loadBooks();
  } catch (error) {
    showToast(error.message);
    console.error("Falha ao carregar os livros para abrir a referência.", error);
    return;
  }
  const book = state.books.find((item) => normalized(item.name) === normalized(match[1]));
  if (!book) {
    showToast(`O livro "${match[1]}" não foi encontrado na tradução disponível.`);
    return;
  }
  navigateTo("biblia");
  const bookSelect = document.getElementById("book-select");
  bookSelect.value = book.id;
  updateChapterOptions(book.id, Number(match[2]))
    .then(() => loadReaderChapter())
    .catch((error) => {
      setReaderMessage(error.message, true);
      console.error("Falha ao abrir a referência.", error);
    });
}

function handleAction(button) {
  const action = button.dataset.action;
  if (action === "plan-step") {
    const plan = getActivePlan();
    const currentDay = Number(state.activeDayByPlan[plan.id]) || 0;
    const nextDay = currentDay + Number(button.dataset.direction);
    if (nextDay < 0 || nextDay >= plan.days.length) return;
    state.activeDayByPlan[plan.id] = nextDay;
    saveState();
    renderPlan();
    return;
  }
  if (action === "load-plan-text") {
    loadPlanText(button.dataset.plan, Number(button.dataset.day));
    return;
  }
  if (action === "toggle-day") {
    const day = Number(button.dataset.day);
    const completedDays = getPlanProgress();
    state.completedByPlan[state.activePlanId] = completedDays.includes(day)
      ? completedDays.filter((item) => item !== day)
      : [...completedDays, day];
    saveState();
    updateStats();
    return;
  }
  if (action === "kids-answer") {
    const story = button.dataset.story;
    const answer = Number(button.dataset.answer);
    const study = kidsStories.find((item) => item.id === story);
    if (!study) return;
    const index = kidsStories.indexOf(study);
    const unlocked = index === 0 || state.completedKidsStories.includes(kidsStories[index - 1].id);
    if (!unlocked || state.completedKidsStories.includes(story) || !Number.isInteger(answer) || answer < 0 || answer >= study.options.length) return;
    state.kidsAnswers[story] = answer;
    saveState();
    renderKids();
    return;
  }
  if (action === "kids-load-text") {
    loadKidsText(button.dataset.story);
    return;
  }
  if (action === "kids-retry") {
    const storyId = button.dataset.story;
    if (state.completedKidsStories.includes(storyId)) return;
    delete state.kidsAnswers[storyId];
    saveState();
    renderKids();
    return;
  }
  if (action === "kids-complete") {
    const story = button.dataset.story;
    const index = kidsStories.findIndex((item) => item.id === story);
    if (index < 0) return;
    const canComplete = (index === 0 || state.completedKidsStories.includes(kidsStories[index - 1].id))
      && state.kidsReadStudies.includes(story)
      && state.kidsAnswers[story] === kidsStories[index].answer;
    if (!canComplete || state.completedKidsStories.includes(story)) {
      showToast("Para passar de fase, leia o texto, acerte o quiz e marque o estudo como aprendido.");
      return;
    }
    state.completedKidsStories.push(story);
    openKidsStudyId = kidsStories[index + 1] ? kidsStories[index + 1].id : story;
    saveState();
    renderKids();
    if (kidsStories[index + 1]) {
      const nextStudy = document.querySelector(`[data-study-id="${kidsStories[index + 1].id}"]`);
      if (nextStudy) nextStudy.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast(`Fase ${index + 2} desbloqueada!`);
    } else {
      showToast("Parabéns! Você concluiu a maratona de 100 estudos!");
    }
    return;
  }
  if (action === "restart-quiz") {
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    quizQuestions.forEach((question) => delete question.selectedAnswer);
    renderQuiz();
    return;
  }
  if (action === "quiz-answer") {
    if (quizAnswered) return;
    const question = quizQuestions[quizIndex];
    question.selectedAnswer = Number(button.dataset.answer);
    if (question.selectedAnswer === question.answer) quizScore += 1;
    quizAnswered = true;
    renderQuiz();
    return;
  }
  if (action === "quiz-next") {
    quizIndex += 1;
    quizAnswered = false;
    renderQuiz();
    return;
  }

  const reference = button.dataset.ref;
  if (action === "open-reference") {
    openReference(reference);
    return;
  }
  const verse = findVerse(reference);
  if (!verse) {
    showToast("Abra o capítulo novamente para editar esta passagem.");
    return;
  }
  if (action === "favorite") saveVerse(verse);
  if (action === "note") openNote(verse);
  if (action === "highlight") saveHighlight(verse, button.dataset.color);
}

function setTodayLabels() {
  const now = new Date();
  document.getElementById("today-label").textContent = now.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" });
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    navigateTo(viewButton.dataset.view);
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    handleAction(actionButton);
    return;
  }
  if (event.target.closest(".retry-reader")) loadReaderChapter();
});

document.getElementById("reminder-toggle").addEventListener("click", toggleDailyReminder);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (nextDailyReminderAt && Date.now() >= nextDailyReminderAt) deliverDailyReminder();
  else scheduleDailyReminder();
  renderDailyReminder();
});
window.addEventListener("focus", () => {
  if (nextDailyReminderAt && Date.now() >= nextDailyReminderAt) deliverDailyReminder();
  else scheduleDailyReminder();
  renderDailyReminder();
});

document.getElementById("book-select").addEventListener("change", async (event) => {
  try {
    await updateChapterOptions(event.target.value, 1);
    await loadReaderChapter();
  } catch (error) {
    setReaderMessage(error.message, true);
    console.error("Falha ao trocar de livro.", error);
  }
});

document.getElementById("chapter-select").addEventListener("change", loadReaderChapter);
function moveChapter(direction) {
  const select = document.getElementById("chapter-select");
  if (direction === "previous") {
    if (select.selectedIndex > 0) {
      select.selectedIndex -= 1;
      loadReaderChapter();
    } else {
      showToast("Este é o primeiro capítulo do livro.");
    }
    return;
  }
  if (select.selectedIndex < select.options.length - 1) {
    select.selectedIndex += 1;
    loadReaderChapter();
  } else {
    showToast("Este é o último capítulo do livro.");
  }
}

document.querySelectorAll("[data-chapter-navigation]").forEach((button) => {
  button.addEventListener("click", () => moveChapter(button.dataset.chapterNavigation));
});
document.getElementById("plan-select").addEventListener("change", (event) => {
  state.activePlanId = event.target.value;
  saveState();
  renderPlan();
});
document.getElementById("plan-days").addEventListener("input", (event) => {
  const noteField = event.target.closest("[data-study-note]");
  if (!noteField) return;
  const index = Number(noteField.dataset.studyNote);
  const activePlan = getActivePlan();
  if (!activePlan.id.startsWith("estudos-adultos") || !Number.isInteger(index) || index < 0 || index >= activePlan.days.length) return;
  if (!state.studyNotes[activePlan.id]) state.studyNotes[activePlan.id] = {};
  state.studyNotes[activePlan.id][index] = noteField.value;
  saveState();
});
document.getElementById("daily-translation").addEventListener("change", (event) => changeTranslation(event.target.value));
document.getElementById("reader-translation").addEventListener("change", (event) => changeTranslation(event.target.value));
document.getElementById("daily-favorite").addEventListener("click", () => {
  if (!state.dailyVerse) return;
  saveVerse({ book: state.dailyVerse.reference.replace(/\s+\d+:\d+$/, ""), chapter: Number(state.dailyVerse.reference.match(/\s(\d+):\d+$/)[1]), verse: Number(state.dailyVerse.reference.match(/:(\d+)$/)[1]), text: state.dailyVerse.text });
});
document.getElementById("copy-verse").addEventListener("click", async () => {
  if (!state.dailyVerse) return;
  try {
    await navigator.clipboard.writeText(`“${state.dailyVerse.text}” — ${state.dailyVerse.reference}`);
    showToast("Versículo copiado.");
  } catch (error) {
    showToast("Não foi possível copiar. Verifique a permissão do navegador.");
    console.error("Falha ao copiar o versículo.", error);
  }
});

document.getElementById("note-form").addEventListener("submit", (event) => {
  if (event.submitter && event.submitter.id === "save-note") {
    event.preventDefault();
    const note = document.getElementById("note-text").value.trim();
    let favorite = getFavorite(activeNoteReference);
    if (!favorite) {
      favorite = { reference: activeNoteReference, text: "", note: "", highlight: "" };
      const verse = findVerse(activeNoteReference);
      if (verse) favorite.text = verse.text.trim();
      state.favorites.unshift(favorite);
    }
    favorite.note = note;
    if (!favorite.note && !favorite.text && !favorite.highlight) {
      state.favorites = state.favorites.filter((item) => item !== favorite);
    }
    saveState();
    updateStats();
    renderFavorites();
    renderReader();
    document.getElementById("note-dialog").close();
    showToast(note ? "Anotação salva." : "Anotação removida.");
  }
});

document.getElementById("install-button").addEventListener("click", installApp);
document.getElementById("install-wall-button").addEventListener("click", installApp);
document.getElementById("close-install-dialog").addEventListener("click", () => {
  document.getElementById("install-dialog").close();
});
document.getElementById("install-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (!isStandalone()) {
    document.getElementById("install-wall-instructions").textContent = "Este dispositivo pode instalar o app. Toque no botão abaixo e, depois da instalação, abra-o pelo ícone do Palavra Viva.";
    document.getElementById("install-wall-button").textContent = "Instalar Palavra Viva";
  }
});
window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  document.getElementById("install-button").hidden = true;
  document.getElementById("install-wall-instructions").textContent = "Instalação concluída! Feche esta aba e abra o Palavra Viva pelo ícone instalado no seu dispositivo.";
  document.getElementById("install-wall-button").hidden = true;
});

function startApp() {
  registerServiceWorker();
  updateInstallWall();
  if (!isStandalone()) return;
  populateTranslationSelectors();
  document.getElementById("install-button").hidden = true;
  setTodayLabels();
  renderDailyWelcomeArt();
  renderDailyReminder();
  scheduleDailyReminder();
  const today = localDateKey();
  if (!state.visitDates.includes(today)) {
    state.visitDates.push(today);
    state.visitDates = state.visitDates.slice(-60);
    saveState();
  }
  document.body.classList.add("dark-mode");
  renderFavorites();
  updateStats();
  renderQuiz();
  if (storageError) showToast("Não foi possível ler os dados salvos. A sessão começará sem os dados anteriores.");
  loadDailyVerse();
  initializeReader();
}

startApp();
