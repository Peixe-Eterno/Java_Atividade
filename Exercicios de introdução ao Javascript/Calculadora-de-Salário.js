
prompt = require("prompt-sync")();

let horasTrabalhadas = parseInt(prompt(' Quantas horas de trabalho por semana: '));
let horasValor = parseFloat(prompt('Qual o valor das suas horas trabalhadas: '));

const valorSalarialSemanal = horasTrabalhadas * horasValor;
const valorSalarialMensal = horasTrabalhadas * 4 * horasValor;

console.log(" Trabalhando por " + horasTrabalhadas + " semanais com um valor de " + horasValor + " por hora, seu salario semanal sera " + valorSalarialSemanal + " e o mensal sera " + valorSalarialMensal );