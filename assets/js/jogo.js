let tabuleiro = ['','','','','','','','',''];
let jogador = 0;
let simbolo = ['o','x'];


function movimento(posicao){
    tabuleiro[posicao] = simbolo[jogador];

    if (jogador == 0) {
        jogador = 1;
    } else {
        jogador = 0;
    }
}

