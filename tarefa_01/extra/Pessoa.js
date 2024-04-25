class Pessoa {
    constructor (nome, idade, altura, peso) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
    }

    saudacao(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

    static calculaIMC(peso, altura){
        return peso / (altura * altura);
    }
}