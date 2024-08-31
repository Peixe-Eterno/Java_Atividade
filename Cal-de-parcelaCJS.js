
prompt = require("prompt-sync")();

let produtoValor = parseFloat(prompt('Valor do produto: '));
let jurosMensal = parseFloat(prompt('Valor de juros: '));
let parcelasQuantidade = parseInt(prompt('Quantidade de parcelas: '));

let valorTotalJuros = produtoValor * (jurosMensal/100) * parcelasQuantidade + produtoValor;
let valorParcelas = valorTotalJuros / parcelasQuantidade;

console.log(" O produto com valor de " + produtoValor + " em " + parcelasQuantidade + " vezes com juros de " + jurosMensal + ", tendo cada parcela o valor de " + valorParcelas + " com total de " + valorTotalJuros);