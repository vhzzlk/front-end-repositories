// Função tradicional que recebe nome e idade e retorna uma frase personalizada
function saudacao(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}

// Função anônima que recebe um número e retorna o dobro
const dobro = function (num) {
  return num * 2;
};

// Arrow function que recebe dois números e retorna a soma
const soma = (a, b) => a + b;

// Função que recebe um número e retorna se ele é par ou ímpar
function parOuImpar(num) {
  return num % 2 === 0 ? 'par' : 'ímpar';
}

// Testes
console.log(saudacao('João', 25));
console.log('Dobro de 5:', dobro(5));
console.log('Soma de 3 + 4:', soma(3, 4));
console.log('5 é', parOuImpar(5));
console.log('10 é', parOuImpar(10));
