// 1. Criar um objeto chamado contacto que é constituído por nome, telefone e email.
console.log('1. Criar um objeto chamado contacto que é constituído por nome, telefone e email.');
const contacto = {
    nome: 'Demostenis',
    telefone: '999999999',
    email: 'demostenis@me.com'};
console.log(contacto);

// 2. Criar uma função que adicione um contacto a uma lista de contactos.
console.log('\n2. Criar uma função que adicione um contacto a uma lista de contactos.');
const contactos = [];
function adicionarContacto(contacto) {
    contactos.push(contacto);
}
adicionarContacto(contacto);
console.log(contactos);

// 3. Crie um objeto chamado calculadora que tenha métodos para adição, subtração, multiplicação e divisão de dois números.
console.log('\n3. Crie um objeto chamado calculadora que tenha métodos para adição, subtração, multiplicação e divisão de dois números.');
const calculadora = {
    adicionar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) =>a * b,
    dividir: (a, b) => a / b
};
console.log(calculadora.adicionar(2,3));

// 4. Crie um objeto conversor de temperatura que tenha métodos para converter de Celsius para
// Fahrenheit e vice-versa.
console.log('\n4. Crie um objeto conversor de temperatura que tenha métodos para converter de Celsius para Fahrenheit e vice-versa.');
const conversor = {
     fromFanheitToCelsius: function(fanheit) {
        return (fanheit - 32) / 1.8;
    },

    fromCelsiusToFahrenheit: function(celsius) {
        return (celsius * 1.8) + 32;
    }
}

console.log(`0º Celsius em Fahrenheit: ${conversor.fromCelsiusToFahrenheit(0)}`);

// Extra: Crie um objeto lista de contactos que permita adicionar, remover e procurar contactos
// Cada contacto deve ter nome, telefone e email (usar o objeto criado na alínea 1).
console.log('\nExtra: Crie um objeto lista de contactos que permita adicionar, remover e procurar contactos');
const listaDeContactos = {
    contactos: [],
    adicionar: function(contacto) {
        this.contactos.push(contacto);
    },
    remover: function(indice) {
        this.contactos.splice(indice, 1);
    },
    procurar: function(contacto) {
        for(let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i].nome === contacto.nome && this.contactos[i].telefone === contacto.telefone && this.contactos[i].email === contacto.email) {
                return i;
            }
        };
    }
};

// Vamos adicionar alguns contatos para teste
listaDeContactos.adicionar(contacto);
listaDeContactos.adicionar({
    nome: 'Ana',
    telefone: '123456789',
    email: 'ana@example.com'
});

listaDeContactos.adicionar({
    nome: 'Roberto',
    telefone: '999999999',
    email: 'roberto@me.com'
});

// Exibir a lista de contatos
console.log(listaDeContactos.contactos);

// Vamos remover o primeiro contato
listaDeContactos.remover(0);

// Exibir a lista de contatos após a remoção
console.log(listaDeContactos.contactos);

// Procurar um contato
listaDeContactos.adicionar({
    nome: 'Ana',
    telefone: '123456789',
    email: 'ana@example.com'
});
console.log(listaDeContactos.contactos);
const indice = listaDeContactos.procurar({
    nome: 'Roberto',
    telefone: '999999999',
    email: 'roberto@me.com'
});
console.log("Índice do contato encontrado:", indice);