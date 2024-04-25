class Tarefa {
    constructor(descricao, prioridade, concluida) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.concluida = concluida;
    }
}

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

const tarefa1 = new Tarefa('Fazer compras', 'alta', false);
const tarefa2 = new Tarefa('Estudar', 'baixa', true);
const tarefa3 = new Tarefa('Viajar', 'alta', false);
const tarefa4 = new Tarefa('Ler', 'alta', true);

const listaTarefas = new ListaTarefas();
listaTarefas.adicionar(tarefa1);
listaTarefas.adicionar(tarefa2);
listaTarefas.adicionar(tarefa3);
listaTarefas.adicionar(tarefa4);
listaTarefas.listar();
const tarefa5 = new Tarefa('Churrasco', 'alta', false);
listaTarefas.modificar(3, tarefa5);
listaTarefas.listar();