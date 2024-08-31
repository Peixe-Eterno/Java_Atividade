
prompt = require("prompt-sync")();

let num1 = prompt ('digite seu numero: ');
let num2 = prompt ('digite seu numero: ');

let grnum1 = parseFloat (num1);
let grnum2 = parseFloat (num2);

let soma = grnum1 + grnum2;

console.log(soma);
