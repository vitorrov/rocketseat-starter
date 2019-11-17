//Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
//segundos retornará se usuário é maior ou não que 18 anos. Se o usuário tiver mais que 18 anos de
//idade o resultado deve cair no .then, caso contrário, no .catch




function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (idade > 18) {
                resolve('Maior que 18') 
            } else {
                reject('Menor que 18')
            }
        }, 2000)
    })
}




   checaIdade(17)
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log(error);
    });