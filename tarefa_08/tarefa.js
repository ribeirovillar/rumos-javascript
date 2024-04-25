/* 1. Cria um formulário com os campos:
- Nome
- Email
- Situação profissional (estudante, trabalhador, trabalhador / estudante, reformado)
- Hobbies (3 opções pelo menos, onde o utilizador pode escolher uma ou mais)
Os campos nome e email são obrigatórios.
Adicionar a validação de que se trata de um email válido.
Devem construir um objeto com toda a informação disponibilizada no formulário */
let formulario = document.getElementById('utilizador');

// mock
document.getElementById('nome').value = 'Joaquim';
document.getElementById('email').value = 'joaquim@google.com';
document.getElementById('situacao').value = 'trabalhador_estudante';
document.getElementById('viajar').checked = true;
document.getElementById('jogar').checked = true;

var utilizador = {};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome == undefined || nome === '' || email == undefined || email === '') {
        alert('Os campos nome e email são obrigatórios');
        event.preventDefault();
        return;
    }

    let situacao = document.getElementById('situacao').value;

    let hobbies = document.getElementsByName('hobbies');
    let hobbies_selecionados = [];
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            hobbies_selecionados.push(hobbies[i].value);
        }
    }

    utilizador = {
        nome: nome,
        email: email,
        situação: situacao,
        hobbies: hobbies_selecionados
    }
    console.log(utilizador);

});
