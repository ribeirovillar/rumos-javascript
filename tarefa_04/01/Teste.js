const Carro = require('./Carro.js');
const Mota = require('./Mota.js');

const carro = new Carro('Opel', 'Corsa', 2020);
carro.ligar();
carro.desligar();

const mota = new Mota('Honda', '600', 2021);
mota.ligar();
mota.desligar();