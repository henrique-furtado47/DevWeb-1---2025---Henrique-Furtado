let reserva = document.getElementById("reserva");
let checkout = document.getElementById("checkout");
let checkin = document.getElementById("checkin");
let hospedes = document.getElementById("hospede");

checkout.addEventListener("change", calcular);
checkin.addEventListener("change", calcular);
hospedes.addEventListener("change", calcular);

function calcular() {
  let data_saida = new Date(document.getElementById("checkout").value);
  let data_entrada = new Date(document.getElementById("checkin").value);
  let diarias = (data_saida - data_entrada) / 86400000;
  let subtotal = document.getElementById("subtotal");
  let hospedes = document.getElementById("hospede").value;

  let noite = document.getElementById("valor_noite");
  let valor_noite = parseFloat(noite.innerText.substring(2));

  subtotal.innerText =
    "R$" + valor_noite.toFixed(2) + " X " + diarias + " noites";

  let valorsub = valor_noite * diarias + (hospedes - 1) * 0.2;
  let taxa_servico = valorsub * 0.15;

  let taxa_servicohtml = document.getElementById("taxa_servico");
  taxa_servicohtml.innerText = "R$" + taxa_servico.toFixed(2);

  let taxa_limpeza = document.getElementById("taxa_limpeza");
  let valor_limpeza = parseFloat(taxa_limpeza.innerText.substring(2));

  let valorsubhtml = document.getElementById("valorsub");
  valorsubhtml.innerText = "R$" + valorsub.toFixed(2);

  let total = valorsub + valor_limpeza + taxa_servico;
  let totalhtml = document.getElementById("total");
  totalhtml.innerText = "R$" + total.toFixed(2);
}
