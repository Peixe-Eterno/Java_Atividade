
prompt = require("prompt-sync")();

let num1 = parseFloat (prompt ('Digite um numero: '));
let num2 = parseFloat (prompt ('Digite um numero: '));

let diferença = Math.abs ( num1 - num2 );

console.log(diferença);