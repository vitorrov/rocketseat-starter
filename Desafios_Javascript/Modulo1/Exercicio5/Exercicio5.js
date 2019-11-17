//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   
function pegaHabilidades() {
    habilidadesDiego = usuarios[0].habilidades.join();
    console.log(`O Diego possui as habilidades: ${habilidadesDiego}`)
    habilidadesGabriel = usuarios[1].habilidades.join();
    console.log(`O Gabriel possui as habilidades: ${habilidadesGabriel}`)
}

pegaHabilidades();