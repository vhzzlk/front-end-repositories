const itens = ['a', 'b', 'c'];
itens.push('d');
itens.pop();
itens.unshift('z');
itens.shift();
console.log('Itens:', itens);

const numeros = [5, 8, 2, 9, 3];
const pares = numeros.filter(n => n % 2 === 0);
console.log('Pares:', pares);

const quadrados = numeros.map(n => n * n);
console.log('Quadrados:', quadrados);

const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log('Soma:', soma);

const ordenados = [...numeros].sort((a, b) => a - b);
console.log('Ordenados:', ordenados);

const invertidos = [...ordenados].reverse();
console.log('Invertidos:', invertidos);

if (typeof document !== 'undefined') {
    document.body.innerHTML += `
        <p>Itens: ${itens.join(', ')}</p>
        <p>Pares: ${pares.join(', ')}</p>
        <p>Quadrados: ${quadrados.join(', ')}</p>
        <p>Soma: ${soma}</p>
        <p>Ordenados: ${ordenados.join(', ')}</p>
        <p>Invertidos: ${invertidos.join(', ')}</p>
    `;
}
