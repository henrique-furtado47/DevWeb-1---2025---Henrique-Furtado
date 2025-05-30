let numeroSorteado = Math.floor(Math.random() * 10);
console.log(numeroSorteado);
let acertos = 0;
let tempoRestante = 30;
let velocidade = 1000;
let cronometro;

const relogio = document.getElementById("contador");
const mensagem = document.getElementById("variavel");
const botoes = document.querySelectorAll(".numero");
const botao_reiniciar = document.getElementById("restart");

const somHover = new Audio("src/audio/hover.wav");
const somAcerto = new Audio("src/audio/right.wav");
const somErro = new Audio("src/audio/wrong.mp3");
const somVitoria = new Audio("src/audio/victory.mp3");
const somDerrota = new Audio("src/audio/gameover.wav");
const somRestart = new Audio("src/audio/restart.mp3");

console.log(tempoRestante);

botoes.forEach((botao) => {
  botao.addEventListener("mouseenter", () => {
    somHover.cloneNode().play(); // toca hover
  });
  botao.addEventListener("click", () => {
    if (tempoRestante === 30) {
      inciarCronometro();
    }
    const numeroClicado = parseInt(botao.textContent);
    if (acertos < 3 && tempoRestante > 0) {
      document.getElementById("interrogacao").innerText = numeroClicado;
    }
    verificarTentativa(numeroClicado);
  });
});

botao_reiniciar.addEventListener("click", reiniciarJogo);

function verificarTentativa(numero) {
  if (acertos < 3 && tempoRestante > 0) {
    if (numero === numeroSorteado) {
      somAcerto.cloneNode().play();
      mensagem.innerText = "Você acertou o número!";
      acertos++;
      if (acertos >= 3) {
        somVitoria.cloneNode().play();
        mensagem.innerText = "Parabéns, você venceu!";
      } else {
        numeroSorteado = Math.floor(Math.random() * 10);
        console.log(numeroSorteado);
      }
    } else {
      somErro.cloneNode().play();
      velocidade -= 150;
      acelerarCronometro();
      if (numero > numeroSorteado) {
        mensagem.innerText = "O numéro é menor";
      }
      if (numero < numeroSorteado) {
        mensagem.innerText = "O número é maior";
      }
    }
  }
}

function inciarCronometro() {
  cronometro = setInterval(() => {
    if (tempoRestante > 0 && acertos < 3) {
      tempoRestante--;
      atualizarTempo();
      console.log(velocidade);
    } else {
      if (acertos < 3) {
        somDerrota.play();
        mensagem.innerText = "Você perdeu";
      } else {
        tempoRestante = tempoRestante;
      }
    }
  }, velocidade);
  console.log(velocidade);
}

function acelerarCronometro() {
  if (velocidade > 200) {
    velocidade -= 100;
    clearInterval(cronometro);
    inciarCronometro();
  }
}

function atualizarTempo() {
  if (tempoRestante >= 10) {
    relogio.innerText = tempoRestante;
  } else {
    relogio.innerText = "0" + tempoRestante;
  }
}

function reiniciarJogo() {
  somRestart.play();
  clearInterval(cronometro);
  acertos = 0;
  numeroSorteado = Math.floor(Math.random() * 10);
  tempoRestante = 30;
  velocidade = 1000;
  document.getElementById("interrogacao").innerText = "?";
  mensagem.innerText = "";
  atualizarTempo();
  iniciarCronometro();
}
