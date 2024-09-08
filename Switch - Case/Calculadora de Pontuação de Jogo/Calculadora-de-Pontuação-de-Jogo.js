
function classificacao() {

    var pontuacao = parseInt(document.getElementById("pontos").value);
    var nivel;

    switch (true) {
        case (pontuacao >= 0 && pontuacao <= 199):
            nivel = "Iniciante";
            break;
        case (pontuacao >= 200 && pontuacao <= 499):
            nivel = "Intermediário";
            break;
        case (pontuacao >= 500 && pontuacao <= 999):
            nivel = "Avançado";
            break;
        case (pontuacao >= 1000):
            nivel = "Mestre";
            break;
        default:
            nivel= "Número inválido";
            break;
    }

    document.getElementById("resultado").innerHTML = "Seu nível de jogo é "+nivel;
}