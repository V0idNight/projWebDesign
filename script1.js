
function mostrarMensagem() {
  document.getElementById("mensagem").textContent = "Você clicou no botão!";
}

function mudarCor(cor) {
  document.getElementById("caixa").style.backgroundColor = cor;
}

function mostrarTexto() {
  const texto = document.getElementById("texto").value;
  document.getElementById("eco").textContent = "Você digitou: " + texto;
}


let contador = 0;

function adicionarItem() {
  contador++;
  const item = document.createElement("li");
  item.textContent = "Item " + contador;
  document.getElementById("lista").appendChild(item);
}

function removerItem() {
  const lista = document.getElementById("lista");
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  }
}

function trocarTitulo() {
  document.querySelector("h1").textContent = "Título alterado pelo JavaScript";
  document.title = "Título alterado";
}

let novaJanela = null;

function atualizarTamanho() {
  document.getElementById("tamanho").textContent =
    "Tamanho da janela: " + window.innerWidth + " x " + window.innerHeight;
}

window.addEventListener("resize", atualizarTamanho);
atualizarTamanho();

function abrirJanela() {
  novaJanela = window.open("", "_blank", "width=300,height=200");
  if (novaJanela) {
    novaJanela.document.write("<p>Esta é uma nova janela.</p>");
  }
}

function fecharJanela() {
  if (novaJanela) {
    novaJanela.close();
    novaJanela = null;
  }
}

function confirmarSaida() {
  const resposta = window.confirm("Deseja continuar na página?");
  alert(resposta ? "Você escolheu continuar." : "Você escolheu cancelar.");
}

function voltarAoTopo() {
  window.scrollTo(0, 0);
}