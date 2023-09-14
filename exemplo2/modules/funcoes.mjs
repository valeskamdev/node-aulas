const soma = (num1, num2) => num1 + num2;
const multiplica = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const subtrai = (num1, num2) => num1 - num2;

// export default some;  (para exportar um único arquivo)
export { soma, multiplica, divide, subtrai }; // para exportar diversos recursos

/*
* OU
*
* se deseja exportar de uma maneira que facilita a importação:
* const operacoes = { soma, multiplica, divide, subtrai };
*
* export default operações
* IMPORTANTE: se exportar desta maneira na hora de chamar o recurso, precisaremos a sintaxe
* operacoes.soma
* operacoes.multiplica...
*
* */