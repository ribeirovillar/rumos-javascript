// Nota: Para todos os exercícios as variáveis definidas são ao vosso critério.
// 1. Criar uma string e apresentar o número de caracteres presentes nessa string.
console.log('1. Criar uma string e apresentar o número de caracteres presentes nessa string.');
let nome = 'Demostenis';
let tamanho = nome.length;
console.log(`${nome} tem ${tamanho} caracteres.`);

// 2. Criar uma stringe apresentar em letras minúsculas, e em seguida a mesma palavra em le maiúsculas.
console.log('\n2. Criar uma stringe apresentar em letras minúsculas, e em seguida a mesma palavra em le maiúsculas.');
let palavra = 'Carro';
console.log(palavra.toLowerCase());
console.log(palavra.toUpperCase());

// 3. Criar uma frase e substitua todas as ocorrências da letra "e" por "€" na frase.
console.log('\n3. Criar uma frase e substitua todas as ocorrências da letra "e" por "€" na frase.');
let frase = 'Eu vou à praia no fim de semana';
frase = frase.toLowerCase().replace(/e/g, '€');
console.log(frase);

// 4. Criar duas strings distintas, e concatene-as numa terceira string.
console.log('\n4. Criar duas strings distintas, e concatene-as numa terceira string.');
let frase1 = 'Ola';
let frase2 = 'mundo';
let frase3 = frase1.concat(' ',frase2);
let frase3TemplateString = `${frase1} ${frase2}`;
console.log('Concat: ' + frase3);
console.log('Template String: ' + frase3);

// 5. Criar uma frase e identifique a palavra mais longa presente.
console.log('\n5. Criar uma frase e identifique a palavra mais longa presente.');
let fraseExercicioCinco = 'Criar uma frase e identifique a palavra mais longa presente.';
let arrayDePalavras = fraseExercicioCinco.split(' ');
let palavraMaisLonga = '';
for(let palavra of arrayDePalavras) {
    if (palavraMaisLonga.length < palavra.length) {
        palavraMaisLonga = palavra;
    }
}
console.log(palavraMaisLonga);

// 6. Criar uma frase, e apresentar os primeiros 5 caracteres dela.
console.log('\n6. Criar uma frase, e apresentar os primeiros 5 caracteres dela.');
let fraseExercicioSeis = 'Programar é muito bom';
let primeirosCaracteres = fraseExercicioSeis.substring(0,5);
console.log(`${fraseExercicioSeis} -> ${primeirosCaracteres}`);

// 7. Criar uma frase, e apresentar o número de palavras presentes nessa frase.
console.log('\n7. Criar uma frase, e apresentar o número de palavras presentes nessa frase.');
let fraseExercicioSete = 'Criar uma frase, e apresentar o número de palavras presentes nessa frase.';
let arrayFraseExercicioSete = fraseExercicioSete.split(' ');
let numeroDePalavras = arrayFraseExercicioSete.length;
console.log(`a frase '${fraseExercicioSete}' tem ${numeroDePalavras} palavras.`);

// 8. Criar uma frase com espaços em branco no início e no final, removê-los e apresentá-la.
console.log('\n8. Criar uma frase com espaços em branco no início e no final, removê-los e apresentá-la.');
let fraseExercicioOito = '    Clima Bom    ';
console.log(fraseExercicioOito.trim());

// Extra: Criar uma lista de nomes e verifique quais nomes terminam com "a".
// Apresentar os nomes que atendem a essa condicão.
console.log('\nExtra: Criar uma lista de nomes e verifique quais nomes terminam com "a".');

let arrayDeNomes = ["Demostenis", 'Marcos','Andre', 'Catarina', 'Roberto', 'Isadora', 'Rui', 'Carolina'];
console.log(`Array de nomes -> ${arrayDeNomes}`);
console.log('\nNomes filtrados: ')
for(let nome of arrayDeNomes) {
    if(nome.endsWith('a')){
        console.log(nome);
    }
}
