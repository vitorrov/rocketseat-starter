//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
    let i;
    for (i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
   }

  pares(10, 40);
