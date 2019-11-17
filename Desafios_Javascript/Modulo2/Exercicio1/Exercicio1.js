var div1 = document.getElementById('div1');

function criar() {
    let divCriada = document.createElement('div');
    divCriada.style.backgroundColor = "red";
    divCriada.style.width = '100px';
    divCriada.style.height = '100px';
    divCriada.style.marginLeft = '10px';
    divCriada.style.marginBottom = '10px';
    divCriada.style.float = "left";
    div1.appendChild(divCriada);
}