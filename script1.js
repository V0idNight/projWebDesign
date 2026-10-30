function mostrarMensagem() {
  document.getElementById("mensagem").textContent = "Você clicou no botão!";
}

function mudarCor(corBack, corText) {
  document.getElementById("caixa").style.backgroundColor = corBack;
  document.getElementById("caixa").style.color = corText;
}

function mensagemPrompt() {
  const mensagem = prompt("Digite uma mensagem:");
  if (mensagem !== null) {
    document.getElementById("eco").innerHTML = "Sua mensagem: " + mensagem;
  }
}

const mouseOverOut = document.getElementById("mouseOverOut");
mouseOverOut.addEventListener("mouseover", function () {
  mouseOverOut.innerHTML = "O mouse está sobre o texto!";
});
mouseOverOut.addEventListener("mouseout", function () {
  mouseOverOut.innerHTML = "Passe o mouse aqui.";
});

const section = document.getElementsByTagName("Section");
for (let i = 0; i < section.length; i++) {
  section[i].style.backgroundColor = "black";
  section[i].style.color = "white";
  section[i].style.border = "3px solid red";
  section[i].style.padding = "12px 16px";
  section[i].style.marginBottom = "16px";
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
  document.querySelector("h1").innerText = "Recursos do Javacript (Alterado)";
  document.title = "Recursos do Javacript (Alterado)";
}

let novaJanela = null;

function atualizarTamanho() {
  document.getElementById("tamanho").textContent =
    "Tamanho da janela (Interna): " + window.innerWidth + " x " + window.innerHeight + "\nTamanho da janela (Externa): " + window.outerWidth + " x " + window.outerHeight;
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

let timeoutId = null;

function IniciarTimeout() {
  const tempo = document.getElementById("tempo");
  tempo.textContent = "Aguardando 5 segundos...";

  timeoutId = setTimeout(() => {
    tempo.textContent = "Executado às " + new Date().toLocaleString();
  }, 5000);
}

function cancelarTimeout() {
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
    timeoutId = null;
    document.getElementById("tempo").textContent = "Cancelado.";
  }
}

let intervalId = null;
let contadorInterval = 0;
function iniciarIntervalo() {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    contadorInterval++;
    document.getElementById("intervalo").textContent = "Contador: " + contadorInterval;
  }, 250);
}

function pararIntervalo() {
  clearInterval(intervalId);
  intervalId = null;
}

const buttonClick = document.getElementById("funcClick");
buttonClick.addEventListener("click", mostrarMensagem);

const buttonDBClick = document.getElementById("funcClick");
buttonDBClick.addEventListener("dblclick", function () {
  alert("Você deu um duplo clique no botão!");

});

//nao sei o que tem antes
// manipulaçao
const inputTexto = document.getElementById('input-texto');
const list = document.getElementById('minha-lista');

const btnCreateElement = document.getElementById('btn-create-element');
const btnCreateTextNode = document.getElementById('btn-create-textnode');
const btnAppend = document.getElementById('btn-append');
const btnPrepend = document.getElementById('btn-prepend');
const btnRemove = document.getElementById('btn-remove');
const btnReplace = document.getElementById('btn-replace');

//ajudante

function getTexto() {
  const texto = inputTexto.value.trim();
  return texto !== '' ? texto : 'Novo Item';
}

//mt1
btnCreateElement.addEventListener('click', () => {
    const novoElemento = document.createElement('li');
    novoElemento.textContent = getTexto();
    list.appendChild(novoElemento); 
    inputTexto.value = '';
});

btnCreateTextNode.addEventListener('click', () => {

  const novoElemento = document.createElement('li');
  const noDeTexto = document.createTextNode(getTexto());
  novoElemento.appendChild(noDeTexto);
  list.appendChild(novoElemento);
  inputTexto.value = '';
});

btnAppend.addEventListener('click', () => {
  const novoElemento = document.createElement('li');
  novoElemento.textContent = getTexto();
  list.append(novoElemento);
  inputTexto.value = '';
});


btnPrepend.addEventListener('click', () => {
  const novoElemento = document.createElement('li');
  novoElemento.textContent = getTexto();
  list.prepend(novoElemento);
  inputTexto.value = '';
});

btnRemove.addEventListener('click', () => {
  const itens = list.querySelectorAll('li');
  if (itens.length > 0) {
      itens[0].remove();
  } else {
      alert('A lista já está vazia!');
  }
});

btnReplace.addEventListener('click', () => {
  const itens = list.querySelectorAll('li');
  if (itens.length > 0) {
      const novoElemento = document.createElement('li');
      novoElemento.textContent = '[Substituído] ${getTexto()}';
      novoElemento.style.borderLeftColor = '#f39c12';   
      itens[0].replaceWith(novoElemento);
  } else {
      alert('Não há itens para substituir!');
  }
});
