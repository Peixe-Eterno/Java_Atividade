
function classificacao() {

    var idade = parseInt(document.getElementById("idade").value);
    var recomendacao;

    switch (true) {
        case (idade >= 0 && idade <= 12):
            recomendacao = "Animação ou Aventura";
            break;
        case (idade >= 13 && idade <= 17):
            recomendacao = "Ação ou Drama";
            break;
        case (idade >= 18 && idade <= 64):
            recomendacao = "Comédia ou Suspense";
            break;
        case (idade >= 65 && idade <= 120):
            recomendacao = "Romance ou Documentário";
            break;
        default:
            recomendacao = "Número inválido";
            break;
    }

    document.getElementById("resultado").innerHTML = recomendacao;
}