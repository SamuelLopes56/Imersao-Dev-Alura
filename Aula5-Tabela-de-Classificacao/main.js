let paulo = {
    nome: 'Paulo',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

let rafa = {
    nome: 'Rafa',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

let gui = {
    nome: 'Gui',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

let renata = {
    nome: 'Renata',
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

const elementoTabela = document.getElementById('tabelaJogadores');

exibirNaTabela();

function exibirNaTabela(){
    elementoTabela.innerHTML = `
    <tr>
    <td>${paulo.nome}</td>
    <td>${paulo.vitorias}</td>
    <td>${paulo.empates}</td>
    <td>${paulo.derrotas}</td>
    <td>${paulo.pontos}</td>
    <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
    <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
    </tr>
    `;
};

function adicionarVitoria(jogador){
    jogador.vitorias++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTabela();
};
function adicionarEmpate(jogador){
    jogador.empates++;
    jogador.pontos++;
    exibirNaTabela();
};
function adicionarDerrota(jogador){
    jogador.derrotas++;
    exibirNaTabela();
};