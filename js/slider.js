let tempo = 4000;
let indexDaImagem = 0;
let imagens = document.querySelectorAll(".slide");
let maximoDeImagens = imagens.length;

function nextImage() {

    imagens[indexDaImagem].classList.remove("selected");
    indexDaImagem++;
    if(indexDaImagem >= maximoDeImagens) {
        indexDaImagem = 0;
    }

    imagens[indexDaImagem].classList.add("selected");

}

function start() {
    setInterval(() => {
        //TROCA DE IMAGEM
        nextImage();
    }, tempo)
}

window.addEventListener("load", start)