//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
//e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    if (skills.indexOf('Javascript') != -1) {
        return true
    } else {
        return false
    }
   }

   var skills = ["Javascript", "ReactJS", "React Native"];
   console.log(temHabilidade(skills)); // true ou false
      