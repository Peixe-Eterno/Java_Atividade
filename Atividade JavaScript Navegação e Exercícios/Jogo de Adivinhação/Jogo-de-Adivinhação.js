
function verificarPalpite() {

    var palpiteUsuario = parseInt(document.getElementById("palpite").value);

    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (palpiteUsuario === numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Parabéns, você acertou! O número era " + numeroAleatorio;
    } else if (palpiteUsuario>10) {
        document.getElementById("resultado").innerHTML ="Você não sabe ler?!";
    } else {
        document.getElementById("resultado").innerHTML = "Tente novamente! O número era " + numeroAleatorio;
    }
}