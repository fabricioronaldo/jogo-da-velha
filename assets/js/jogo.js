let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogador = 0;
let simbolo = ['o', 'x'];

let fimJogo = false;
let estadoVitoria = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function movimento(posicao) {

    if (fimJogo) {
        return;
    }

    if (tabuleiro[posicao] == '') {

        tabuleiro[posicao] = simbolo[jogador];

        fimJogo = vencedor();

        if (fimJogo == false) {

            if (jogador == 0) {
                jogador = 1;
            } else {
                jogador = 0;
            }
        }

    }

    return fimJogo;

}


function vencedor() {



    for (let i = 0; i < estadoVitoria.length; i++) {

        let sequencia = estadoVitoria[i];

        let pos1 = sequencia[0];
        let pos2 = sequencia[1];
        let pos3 = sequencia[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != '') {

            return true;

        }
    }

    return false;

}

function restart() {
    let tabuleiro = ['', '', '', '', '', '', '', '', ''];
    let jogador = 0;
    let fimJogo = false;
}

console.log(tabuleiro);