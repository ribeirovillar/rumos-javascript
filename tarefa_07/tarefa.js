function addTask() {
    let task = document.getElementById('task').value;
   
    if (task === '') {
        alert('Não pode ser vazia');
    } else {
        let list = document.getElementById('todo_list');

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerText = task;

        let deleteButton = document.createElement('input');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('value', 'Delete');
        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.remove();
        });
        deleteButton.className = 'button_delete';

        li.appendChild(span);
        li.appendChild(deleteButton);

        list.appendChild(li);
        document.getElementById('task').value = '';
    }
}