
function buscarRepos() {
    let user = document.getElementById('user').value;
    let api = `https://api.github.com/users/${user}/repos`
    
    axios.get(api)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
    }) 
}

