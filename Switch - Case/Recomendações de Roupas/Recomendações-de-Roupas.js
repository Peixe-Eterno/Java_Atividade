
function recomendacao() {

    var graus = parseInt(document.getElementById("graus").value);
    var recomendacao;

    switch (true) {
        case (graus<15):
            recomendacao = "Casaco e Luvas";
            break;
        case (graus>=15 && graus<=25):
            recomendacao = "Jaqueta e Cachecol";
            break;
        case (graus>25):
            recomendacao = "Camiseta e chapéu";
            break;
        default:
            recomendacao = "Insira um valor válido"
    }

    document.getElementById("resultado").innerHTML = recomendacao;
}