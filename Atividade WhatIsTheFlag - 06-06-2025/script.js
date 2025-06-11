const paises = [
  {
    nome: "Chile",
    bandeira: "001-chile.png",
    idioma: "espanhol",
    moeda: "peso",
    continente: "América do Sul",
  },
  {
    nome: "Ireland",
    bandeira: "002-ireland.png",
    idioma: "inglês",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "Greece",
    bandeira: "003-greece.png",
    idioma: "grego",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "Norway",
    bandeira: "004-norway.png",
    idioma: "norueguês",
    moeda: "coroa",
    continente: "Europa",
  },
  {
    nome: "Israel",
    bandeira: "005-israel.png",
    idioma: "hebraico",
    moeda: "shekel",
    continente: "Ásia",
  },
  {
    nome: "Guatemala",
    bandeira: "006-guatemala.png",
    idioma: "espanhol",
    moeda: "moeda local",
    continente: "América Central",
  },
  {
    nome: "Cuba",
    bandeira: "007-cuba.png",
    idioma: "espanhol",
    moeda: "peso",
    continente: "América Central",
  },
  {
    nome: "Croatia",
    bandeira: "008-croatia.png",
    idioma: "croata",
    moeda: "moeda local",
    continente: "Europa",
  },
  {
    nome: "Panama",
    bandeira: "009-panama.png",
    idioma: "espanhol",
    moeda: "dólar americano",
    continente: "América Central",
  },
  {
    nome: "South Africa",
    bandeira: "010-south africa.png",
    idioma: "inglês",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Iran",
    bandeira: "011-iran.png",
    idioma: "persa",
    moeda: "rial",
    continente: "Ásia",
  },
  {
    nome: "Egypt",
    bandeira: "012-egypt.png",
    idioma: "árabe",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Morocco",
    bandeira: "013-morocco.png",
    idioma: "árabe",
    moeda: "dirham",
    continente: "África",
  },
  {
    nome: "Denmark",
    bandeira: "014-denmark.png",
    idioma: "dinamarquês",
    moeda: "coroa",
    continente: "Europa",
  },
  {
    nome: "Czech Republic",
    bandeira: "015-czech republic.png",
    idioma: "checo",
    moeda: "coroa",
    continente: "Europa",
  },
  {
    nome: "Finland",
    bandeira: "016-finland.png",
    idioma: "finlandês",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "Sweden",
    bandeira: "017-sweden.png",
    idioma: "sueco",
    moeda: "coroa",
    continente: "Europa",
  },
  {
    nome: "Philippines",
    bandeira: "018-philippines.png",
    idioma: "filipino",
    moeda: "peso",
    continente: "Ásia",
  },
  {
    nome: "England",
    bandeira: "019-england.png",
    idioma: "inglês",
    moeda: "libra esterlina",
    continente: "Europa",
  },
  {
    nome: "Switzerland",
    bandeira: "020-switzerland.png",
    idioma: "alemão",
    moeda: "franco suíço",
    continente: "Europa",
  },
  {
    nome: "Turkey",
    bandeira: "021-turkey.png",
    idioma: "turco",
    moeda: "lira",
    continente: "Ásia",
  },
  {
    nome: "Portugal",
    bandeira: "022-portugal.png",
    idioma: "português",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "United Kingdom",
    bandeira: "023-united kingdom.png",
    idioma: "inglês",
    moeda: "libra esterlina",
    continente: "Europa",
  },
  {
    nome: "Colombia",
    bandeira: "024-colombia.png",
    idioma: "espanhol",
    moeda: "peso",
    continente: "América do Sul",
  },
  {
    nome: "Argentina",
    bandeira: "025-argentina.png",
    idioma: "espanhol",
    moeda: "peso",
    continente: "América do Sul",
  },
  {
    nome: "India",
    bandeira: "026-india.png",
    idioma: "hindi",
    moeda: "rúpia",
    continente: "Ásia",
  },
  {
    nome: "United States Of America",
    bandeira: "027-united states of america.png",
    idioma: "inglês",
    moeda: "dólar americano",
    continente: "América do Norte",
  },
  {
    nome: "Thailand",
    bandeira: "028-thailand.png",
    idioma: "tailandês",
    moeda: "baht",
    continente: "Ásia",
  },
  {
    nome: "Canada",
    bandeira: "029-canada.png",
    idioma: "inglês",
    moeda: "dólar canadense",
    continente: "América do Norte",
  },
  {
    nome: "Mexico",
    bandeira: "030-mexico.png",
    idioma: "espanhol",
    moeda: "peso",
    continente: "América do Norte",
  },
  {
    nome: "Italy",
    bandeira: "031-italy.png",
    idioma: "italiano",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "Spain",
    bandeira: "032-spain.png",
    idioma: "espanhol",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "China",
    bandeira: "033-china.png",
    idioma: "chinês",
    moeda: "yuan",
    continente: "Ásia",
  },
  {
    nome: "Uruguay",
    bandeira: "034-uruguay.png",
    idioma: "espanhol",
    moeda: "peso",
    continente: "América do Sul",
  },
  {
    nome: "Germany",
    bandeira: "035-germany.png",
    idioma: "alemão",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "France",
    bandeira: "036-france.png",
    idioma: "francês",
    moeda: "euro",
    continente: "Europa",
  },
  {
    nome: "Japan",
    bandeira: "037-japan.png",
    idioma: "japonês",
    moeda: "iene",
    continente: "Ásia",
  },
  {
    nome: "South Korea",
    bandeira: "038-south korea.png",
    idioma: "coreano",
    moeda: "won",
    continente: "Ásia",
  },
  {
    nome: "North Korea",
    bandeira: "039-north korea.png",
    idioma: "coreano",
    moeda: "won",
    continente: "Ásia",
  },
  {
    nome: "Saudi Arabia",
    bandeira: "040-saudi arabia.png",
    idioma: "árabe",
    moeda: "rial",
    continente: "Ásia",
  },
  {
    nome: "Honduras",
    bandeira: "041-honduras.png",
    idioma: "espanhol",
    moeda: "moeda local",
    continente: "América Central",
  },
  {
    nome: "Curacao",
    bandeira: "042-curacao.png",
    idioma: "neerlandês",
    moeda: "florim",
    continente: "América Central",
  },
  {
    nome: "Equatorial Guinea",
    bandeira: "043-equatorial guinea.png",
    idioma: "espanhol",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Libya",
    bandeira: "044-libya.png",
    idioma: "árabe",
    moeda: "dinar",
    continente: "África",
  },
  {
    nome: "Sudan",
    bandeira: "045-sudan.png",
    idioma: "árabe",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Turkmenistan",
    bandeira: "046-turkmenistan.png",
    idioma: "árabe-turcomano",
    moeda: "moeda local",
    continente: "Ásia",
  },
  {
    nome: "Togo",
    bandeira: "047-togo.png",
    idioma: "togo",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Somalia",
    bandeira: "048-somalia.png",
    idioma: "somali",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Mauritius",
    bandeira: "049-mauritius.png",
    idioma: "francês",
    moeda: "moeda local",
    continente: "África",
  },
  {
    nome: "Montenegro",
    bandeira: "050-montenegro.png",
    idioma: "romeno",
    moeda: "euro",
    continente: "Europa",
  },
];

let perguntaAtual;
let acertos = 0;
let tempoRestante = 30;

const relogio = document.getElementById("contador");

function iniciarJogo() {
  tempoRestante = 30;
  document.querySelector(".tela.ativa").classList.remove("ativa");
  document.getElementById("tela-jogo").classList.add("ativa");
  novaPergunta();
  inciarCronometro();
}

function novaPergunta() {
  document.getElementById("acertos").textContent = acertos;

  const tipos = ["idioma", "moeda", "continente"];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];

  const paisCorreto = paises[Math.floor(Math.random() * paises.length)];
  const valorPergunta = paisCorreto[tipo];
  const paisesCorretos = paises.filter((p) => p[tipo] === valorPergunta);
  const paisesErrados = paises.filter((p) => p[tipo] !== valorPergunta);

  shuffleArray(paisesCorretos);
  shuffleArray(paisesErrados);

  const opcoes = [...paisesCorretos.slice(0, 1), ...paisesErrados.slice(0, 5)];
  shuffleArray(opcoes);

  // Atualiza texto da pergunta
  let textoPergunta = "";
  if (tipo === "idioma") {
    textoPergunta = `Qual país fala "${valorPergunta}"?`;
  } else if (tipo === "moeda") {
    textoPergunta = `Qual país usa a moeda "${valorPergunta}"?`;
  } else {
    textoPergunta = `Qual país fica na(o) "${valorPergunta}"?`;
  }
  document.getElementById("pergunta-texto").textContent = textoPergunta;

  // Monta as opções com imagens
  const container = document.getElementById("opcoes");
  container.innerHTML = "";
  const corretosSelecionados = paisesCorretos.slice(0, 3).map((p) => p.nome);

  opcoes.forEach((pais) => {
    const img = document.createElement("img");
    img.src = `src/img/${pais.bandeira}`;
    img.alt = pais.nome;
    img.className = "opcao-img";
    img.onclick = () => verificarResposta(pais, corretosSelecionados);
    container.appendChild(img);
  });
}

function verificarResposta(pais, corretos) {
  if (corretos.includes(pais.nome) && acertos < 2) {
    acertos++;
    document.getElementById("acertos").textContent = acertos;
    novaPergunta();
  } else if (acertos >= 2) {
    document.getElementById("tela-jogo").classList.remove("ativa");
    document.getElementById("tela-vitoria").classList.add("ativa");
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function atualizarTempo() {
  if (tempoRestante >= 10) {
    relogio.innerText = tempoRestante;
  } else {
    relogio.innerText = "0" + tempoRestante;
  }
  if (tempoRestante <= 0 && acertos < 3) {
    document.getElementById("tela-jogo").classList.remove("ativa");
    document.getElementById("tela-derrota").classList.add("ativa");
  }
}

function inciarCronometro() {
  cronometro = setInterval(() => {
    if (tempoRestante > 0 && acertos < 3) {
      tempoRestante--;
      atualizarTempo();
      console.log(1000);
    } else {
      if (acertos < 3) {
        somDerrota.play();
        mensagem.innerText = "Você perdeu";
      } else {
        tempoRestante = tempoRestante;
      }
    }
  }, 1000);
  console.log(1000);
}
