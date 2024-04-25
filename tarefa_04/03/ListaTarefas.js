export class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }

    remover(indice) {
        this.tarefas.splice(indice - 1, 1);
    }

    listar() {
        for(let i = 0; i < this.tarefas.length; i++) {
            console.log(i+1 + ' - ' + this.tarefas[i].descricao);
        }
    }
}