// 1. Crie um array com números inteiros. Apresentar a soma de todos os elementos.
console.log('1. Crie um array com números inteiros. Apresentar a soma de todos os elementos.');
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaNumeros = numeros.reduce((a, b) => a + b, 0);
console.log(`A soma dos ${numeros} é ${somaNumeros}.`);

// 2. Crie um array com números. Apresenta o maior número no array.
console.log('\n2. Crie um array com números. Apresenta o maior número no array.');
let arrayNumeros = [3, 50, 36, 5, 7, 9, 11, 13, 15, 17];
let maiorNumero = arrayNumeros[0];
for( let numero of arrayNumeros) {
    if (maiorNumero < numero) {
        maiorNumero = numero;
    }
}
console.log(`O maior número no array ${arrayNumeros} é ${maiorNumero}.`);

// 3. Crie um array com números inteiros. Apresente um novo array que contenha apenas os números pares do array original.
console.log('\n3. Crie um array com números inteiros. Apresente um novo array que contenha apenas os números pares do array original.');
let arrayNumerosPares = arrayNumeros.filter(n => n % 2 === 0);
console.log(`Os números pares do array ${arrayNumeros} são: ${arrayNumerosPares}.`);

// 4. Crie um array com notas de um teste. Apresente a média das notas.
console.log('\n4. Crie um array com notas de um teste. Apresente a média das notas.');
let arrayNotas = [10, 9, 8, 7, 6, 5, 7, 8, 6, 10];
let media = arrayNotas.reduce((a, b) => a + b, 0) / arrayNotas.length;
console.log(`A media das notas do array ${arrayNotas} é ${media}.`);

// 5. Crie um array com elementos repetidos. Remover os elementos duplicados e apresentar um novo array.
console.log('\n5. Crie um array com elementos repetidos. Remover os elementos duplicados e apresentar um novo array.');
let arrayRepetidos = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10];
let arraySemDuplicados = [...new Set(arrayRepetidos)];
console.log(`O array ${arrayRepetidos} sem duplicados é: ${arraySemDuplicados}.`);

// Extra: Resolver o exercício 3 sem recorrer à instrução if (dica: função filter).
