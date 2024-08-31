
prompt = require("prompt-sync")();

let n = prompt("Digite um numero: ");

if(n % 2 == 0)
    console.log(n + " e um numero Par");

else
    console.log(n + " e um numero Impar");

