var nomes = ["Diego", "Gabriel", "Lucas"];
var lista = document.getElementById('lista');

for (let nome of nomes) {
    element = document.createElement('li');
    var elementText = document.createTextNode(nome);
    element.appendChild(elementText);
    lista.appendChild(element);
}