if (typeof window !== 'undefined') {
  const age = Number(prompt('Digite sua idade:'));
  const result = document.getElementById('resultado');

  if (Number.isNaN(age)) {
    result.textContent = 'Idade inválida.';
  } else if (age < 12) {
    result.textContent = 'Você é criança.';
  } else if (age <= 17) {
    result.textContent = 'Você é adolescente.';
  } else if (age <= 59) {
    result.textContent = 'Você é adulto.';
  } else {
    result.textContent = 'Você é idoso.';
  }
}

const month = 3;
let monthName;

switch (month) {
  case 1:
    monthName = 'Janeiro';
    break;
  case 2:
    monthName = 'Fevereiro';
    break;
  case 3:
    monthName = 'Março';
    break;
  case 4:
    monthName = 'Abril';
    break;
  case 5:
    monthName = 'Maio';
    break;
  case 6:
    monthName = 'Junho';
    break;
  case 7:
    monthName = 'Julho';
    break;
  case 8:
    monthName = 'Agosto';
    break;
  case 9:
    monthName = 'Setembro';
    break;
  case 10:
    monthName = 'Outubro';
    break;
  case 11:
    monthName = 'Novembro';
    break;
  case 12:
    monthName = 'Dezembro';
    break;
  default:
    monthName = 'Mês inválido';
}

console.log(`Mês ${month}: ${monthName}`);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite uma nota: ', inputGrade => {
  const grade = Number(inputGrade);

  if (Number.isNaN(grade)) {
    console.log('Nota inválida.');
  } else if (grade >= 9) {
    console.log('Excelente');
  } else if (grade >= 7) {
    console.log('Bom');
  } else if (grade >= 5) {
    console.log('Regular');
  } else {
    console.log('Reprovado');
  }

  rl.close();
});
