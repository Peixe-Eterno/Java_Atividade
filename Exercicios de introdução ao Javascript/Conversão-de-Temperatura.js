
prompt = require("prompt-sync")();

let C = parseFloat(prompt ('Qual a temperatura: '));
let F = C * 9/5 + 32;

console.log(F);
