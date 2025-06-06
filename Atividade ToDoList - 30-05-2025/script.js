let botao = document.getElementById("add");
let lista = document.querySelector("#lista");

botao.addEventListener("click", function (evt) {
  evt.preventDefault();
  let campo = document.querySelector("input");
  let item = document.createElement("li");

  item.innerHTML = `
    <input type='checkbox' class='checkbox'>
    <span class='texto'>${campo.value}</span>
    <span class='remover'>Delete</span>
    <span class='editar'>Edit</span>
  `;

  lista.appendChild(item);
  campo.value = "";
});

lista.addEventListener("click", function (evt) {
  let elemento = evt.target;

  if (elemento.className === "remover") {
    elemento.parentElement.remove();
  } else if (elemento.className === "editar") {
    const texto = elemento.parentElement.querySelector(".texto");
    texto.contentEditable = true;
    texto.focus();
  } else if (elemento.className === "checkbox") {
    const texto = elemento.parentElement.querySelector(".texto");
    if (elemento.checked) {
      texto.classList.add("riscado");
    } else {
      texto.classList.remove("riscado");
    }
  }
});
