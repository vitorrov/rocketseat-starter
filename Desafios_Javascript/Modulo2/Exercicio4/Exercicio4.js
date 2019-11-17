var nomes = ["Diego", "Gabriel", "Lucas"];
var lista = document.getElementById('lista');
var botaoAdd = document.getElementById('add');
var novoNome = document.getElementById('novoNome');


function renderNames() {
    lista.innerHTML = "";
for (let nome of nomes) {
    element = document.createElement('li');
    var elementText = document.createTextNode(nome);
    element.appendChild(elementText);
    lista.appendChild(element);
  }
}

renderNames();

function adicionar() {
    var texto = novoNome.value;
    
    nomes.push(texto);
    novoNome.value = '';
    renderNames();
}

botaoAdd.onclick = adicionar;
