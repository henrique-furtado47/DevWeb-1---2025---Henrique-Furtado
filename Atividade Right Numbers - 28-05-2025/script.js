let numeroSorteado = Math.floor(Math.random() * 10);
console.log(numeroSorteado);
let acertos = 0;
let tempoRestante = 30;
let velocidade = 1000;
let cronometro;

const relogio = document.getElementById("contador");
const mensagem = document.getElementById("variavel");
const botoes = document.querySelectorAll(".numero");

console.log(tempoRestante);

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (tempoRestante === 30) {
      inciarCronometro(velocidade);
    }
    const numeroClicado = parseInt(botao.textContent);
    verificarTentativa(numeroClicado);
    document.getElementById("interrogacao").innerText = numeroClicado;
  });
});

function verificarTentativa(numero) {
  if (numero === numeroSorteado) {
    mensagem.innerText = "Você acertou o número!";
    acertos++;
    if (acertos === 3) {
      mensagem.innerText = "Parabéns, você venceu!";
    } else {
      numeroSorteado = Math.floor(Math.random() * 10);
      console.log(numeroSorteado);
    }
  } else {
    if (numero > numeroSorteado) {
      mensagem.innerText = "O numéro é menor";
      velocidade -= 150;
      acelerarCronometro();
    }
    if (numero < numeroSorteado) {
      mensagem.innerText = "O número é maior";
      velocidade -= 150;
      acelerarCronometro();
    }
  }
}

function inciarCronometro() {
  cronometro = setInterval(() => {
    if (tempoRestante > 0) {
      tempoRestante--;
      atualizarTempo();
      console.log(velocidade);
    } else {
      if (acertos < 3) {
        mensagem.innerText = "Você perdeu";
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
