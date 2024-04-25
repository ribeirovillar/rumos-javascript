class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    ligar() {
        console.log('Ligando o veículo...')
    }
    desligar() {
        console.log('Desligando o veículo...')
    }
}