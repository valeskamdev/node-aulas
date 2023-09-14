// import soma from './modules/funcoes.mjs';  (importando um único recurso)
import { soma, multiplica, divide, subtrai } from './modules/funcoes.mjs';

let resultadoSoma = soma(5, 50);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDivide = divide(25, 6);
let resultadoSubtrai = subtrai(6, 50);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);
console.log(`Subtração: ${resultadoSubtrai}`);