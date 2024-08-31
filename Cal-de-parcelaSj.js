
prompt = require("prompt-sync")();

let valorCompraTotal = parseFloat(prompt('Digite o valor total da compra: R$'));
let parcelaQuantidade = parseInt(prompt('Digite o numero de paarcelas: '));

const valorParcela = valorCompraTotal / parcelaQuantidade;

console.log(" Sua compra no valor de R$" + valorCompraTotal + " sera parcelada em " + parcelaQuantidade + " vezes sem juros com cada parcela tendo o valor de R$" + valorParcela + " no total");