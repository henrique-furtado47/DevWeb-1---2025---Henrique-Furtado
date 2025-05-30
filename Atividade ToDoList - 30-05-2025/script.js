let botao = document.getElementById("add");

botao.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Foi");
  let campo = document.querySelector("input");
  let lista = document.querySelector("#lista");
  let item = document.createElement("li");
  lista.appendChild(item);
  item.innerHTML =
    "<span class='texto'>" +
    campo.value +
    "</span> <span class='remover'>Delete</span> <span class='editar'>Edit</span>";
  console.log(item);
});
