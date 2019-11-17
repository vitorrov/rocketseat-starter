var div1 = document.getElementById('div1');

function criar() {
    let divCriada = document.createElement('div');
    divCriada.setAttribute('onmouseover', 'mudaCor()')
    divCriada.setAttribute('class', 'quadrado')
    divCriada.style.backgroundColor = "red";
    divCriada.style.width = '100px';
    divCriada.style.height = '100px';
    divCriada.style.marginLeft = '10px';
    divCriada.style.marginBottom = '10px';
    divCriada.style.float = "left";
    div1.appendChild(divCriada);
}


function getRandomColor() {
    let quadrado = document.getElementsByClassName('quadrado');
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(newColor);
    return color;
   }
   var newColor = getRandomColor(); 
   let quadrado = document.getElementsByClassName('quadrado');
   


   function mudaCor() {

    var quadrado, i;
    quadrado = document.querySelectorAll(".quadrado");
    for (i = 0; i < quadrado.length; i++) {
    quadrado[i].style.backgroundColor = newColor;
    }
   }
   
   