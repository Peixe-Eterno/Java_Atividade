
prompt = require("prompt-sync")();

let produto = prompt('Nome do produto: ');
let preço = parseFloat(prompt('valor do produto: '));
let quantidade = parseInt(prompt('Quantidadade: '));
const percentual = 0.18;

let valorapagar = preço * quantidade;
let imposto = valorapagar * percentual;
let total = valorapagar + imposto;

console.log(total);
