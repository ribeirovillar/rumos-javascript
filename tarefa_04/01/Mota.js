const Veiculo = require('./Veiculo.js');

class Mota extends Veiculo {
    ligar() {
        console.log('Ligando o mota...');
    }
    desligar() {
        console.log('Desligando o mota...');
    }
}

module.exports = Mota;