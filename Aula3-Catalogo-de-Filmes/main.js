const planetaDoTesouro = 'https://br.web.img3.acsta.net/pictures/14/10/10/20/36/282573.jpg';
const reiLeao = 'https://static.wikia.nocookie.net/disney/images/c/c7/Poster-rei-leao-full.jpeg/revision/latest?cb=20160925204728&path-prefix=pt-br';
const pirataDosCaribes = 'https://br.web.img3.acsta.net/medias/nmedia/18/94/12/24/20304627.jpg';

const filmes = [planetaDoTesouro, reiLeao, pirataDosCaribes];

for(let i = 0; i < filmes.length; i++){
    document.write(`<img src = "${filmes[i]}" alt = "Capa de Filme">`);
};