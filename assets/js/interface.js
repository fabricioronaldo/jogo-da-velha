document.addEventListener('DOMContentLoaded', () => {

    let quadrado = document.querySelectorAll(".tabuleiro__posicao");

    quadrado.forEach((quadrado) => {
        quadrado.addEventListener('click', estadoClick);
    })

})

function estadoClick(evento) {

    let quadrado = evento.target;
    let posicao = quadrado.id;

    movimento(posicao);
    atualizaQuadrado();

}

function atualizaQuadrado() {
    
    let quadrado = document.querySelectorAll(".tabuleiro__posicao");

    quadrado.forEach((quadrado) =>{
        let posicao = quadrado.id;
        let simbolo = tabuleiro[posicao];

        if(simbolo != '') {
            quadrado.innerHTML = `<div class='${simbolo}'></div>`;
        }

    })
}

console.log(simbolo);