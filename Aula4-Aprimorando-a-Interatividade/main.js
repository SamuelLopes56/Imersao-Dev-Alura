function adicionarFilme(){
    let filmeFavorito = document.getElementById('filme').value;
    let elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML += `<img src="${filmeFavorito}" alt="Filme Favorito">`;
    document.getElementById('filme').value = '';
};