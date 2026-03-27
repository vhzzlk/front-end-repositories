// 1. Objeto pessoa com método apresentar
const pessoa = {
  nome: 'Ana',
  idade: 28,
  profissao: 'Desenvolvedora',
  apresentar: function () {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  },
};

console.log(pessoa.apresentar());

// 2. Objeto carro que imprime "Carro ligado"
const carro = {
  marca: 'Honda',
  modelo: 'Civic',
  ligar: function () {
    console.log('Carro ligado');
  },
};

carro.ligar();

// 3. Objeto loja e listagem de produtos com for...in
const loja = {
  notebook: 3500.0,
  mouse: 150.0,
  teclado: 250.0,
  monitor: 1200.0,
};

console.log('\nLista de produtos da loja (for...in):');
for (const produto in loja) {
  console.log(`${produto}: R$ ${loja[produto].toFixed(2)}`);
}

// Opcional: Usando Object.entries para o mesmo resultado
console.log('\nLista de produtos da loja (Object.entries):');
for (const [produto, preco] of Object.entries(loja)) {
  console.log(`${produto}: R$ ${preco.toFixed(2)}`);
}
