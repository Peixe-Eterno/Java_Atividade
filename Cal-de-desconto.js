
prompt = require("prompt-sync")();

let produtoNome = prompt ('Digite o nome do produto: ');
let produtoValor = parseFloat(prompt('Digite o preço do produto: '));
let produtoQuantidade = parseInt(prompt('Digite a quantidade do produto: '));
let porcentagemDesconto = parseFloat(prompt('Valor do desconto: '));

const calculoTotal = produtoValor * produtoQuantidade;
const calculoDesconto = calculoTotal / 100 * porcentagemDesconto;


let  descontoTotal = calculoTotal - calculoDesconto;

console.log(" Voçe comprou " + produtoQuantidade + " de " + produtoNome + " pelo preço de R$" + produtoValor + " com " + porcentagemDesconto + "% de desconto, tendo que pagar R$" + descontoTotal + " como preço final");