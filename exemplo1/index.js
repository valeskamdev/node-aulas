let aluno = 'Zezin';
let nota1 = 4;
let nota2 = 6.4;

let media = (nota1 + nota2) / 2;

console.log(media);
console.log('----------------------------');

let dados = {
  nome: 'Agatha Giovanna',
  idade: 16,
  signo: "Touro"
};

console.log(dados.signo);
console.table(dados);
console.log('----------------------------');

if (media >= 7) {
  console.log(`O aluno ${aluno} está aprovado! :) `);
} else {
  console.log(`O aluno ${aluno} não está aprovado! :( `);
}