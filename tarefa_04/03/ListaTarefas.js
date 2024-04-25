class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }

    modificar(indice, tarefa) {
        this.tarefas[indice - 1] = tarefa;
    }

    listar() {
        for(let i = 0; i < this.tarefas.length; i++) {
            console.log(i+1 + ' - ' + this.tarefas[i].descricao);
        }
    }
}

module.exports = ListaTarefas;