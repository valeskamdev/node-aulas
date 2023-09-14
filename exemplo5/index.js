import chalk from 'chalk'; // Importando o pacote Chalk, instalado via NPM (nativo)

console.log("Gerenciamento de Pacotes");

let aluno = 'José Gomes';
let idade = 12;

if (idade >= 18) {
  console.log(chalk.green.bgGreenBright.bold(`${aluno} é maior de idade.`));
} else {
  console.log(chalk.red.bgRedBright.bold(`${aluno} é menor de idade.`));
}