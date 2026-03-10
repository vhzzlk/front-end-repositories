// FOR - números de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// WHILE - números pares de 2 a 20
let i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// DO...WHILE - pede a senha até acertar
let senha;
do {
  senha = prompt('Digite a senha:');
} while (senha !== '1234');

console.log('Senha correta! Acesso liberado.');
