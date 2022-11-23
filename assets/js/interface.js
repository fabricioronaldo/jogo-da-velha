document.addEventListener('DOMContentLoaded', () => {

    let tabuleiro = document.querySelectorAll(".tabuleiro__posicao");

    tabuleiro.forEach(posicao => {
        posicao.addEventListener('click', estadoClick);
    })

})

function estadoClick(evento) {

    let tabuleiro = evento.target;
    let posicao = tabuleiro.id;

    movimento(posicao);
    atualizaTabuleiro();

}

function atualizaTabuleiro(){
    let tabuleiro = document.querySelectorAll(".tabuleiro__posicao");

    tabuleiro.forEach((p) =>{
        let posicao = p.id;
        let simbolo = tabuleiro[posicao];

        if(simbolo != '') {
            tabuleiro.innerHTML = `<div class='${simbolo}'></div>`
        }

    })
}

console.log(simbolo);