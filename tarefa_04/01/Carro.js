 const Veiculo = require('./Veiculo.js');
 
 class Carro extends Veiculo {
    ligar() {
        console.log('Ligando o carro...');
    }
    desligar() {
        console.log('Desligando o carro...');
    }
}

module.exports = Carro;