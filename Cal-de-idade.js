
prompt = require("prompt-sync")();

let anonacimento = parseInt (prompt('Digite o seu ano de nascimento: '));
let anoatual = new Date().getFullYear();

let idade = anoatual - anonacimento;

console.log(idade);
