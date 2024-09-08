
function calcFrete() {
    var peso = parseFloat(document.getElementById("pesop").value);
    var regiao = document.querySelector("#lang").value;
    var frete;

    switch (true) {
        case (regiao==="n" && peso<=5):
            frete=15;
            break;
        case (regiao==="n" && peso>5):
            frete=25;
            break;
        case (regiao==="s" && peso<=5):
            frete=10;
            break;
        case (regiao==="s" && peso>5):
            frete=20;
            break;
        case (regiao==="co" && peso<=5):
            frete=12;
            break;
        case (regiao==="co" && peso>5):
            frete=22;
            break;
    }

    document.getElementById("resultado").innerHTML = "O valor do frete é R$ "+frete+",00"
}