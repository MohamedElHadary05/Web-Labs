const addButton = document.querySelector('#add-todo-btn');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

const showAllBtn = document.querySelector('#show-all-btn');
const showActiveBtn = document.querySelector('#show-active-btn');
const showCompletedBtn = document.querySelector('#show-completed-btn');
const clearCompletedBtn = document.querySelector('#clear-completed-btn');

let todoArray = [];
let filter = 'all';

addButton.addEventListener('click', addTodo);
showAllBtn.addEventListener('click', function() {
    filter = 'all';
    display();
});
showActiveBtn.addEventListener('click', function() {
    filter = 'active';
    display();
});
showCompletedBtn.addEventListener('click', function() {
    filter = 'completed';
    display();
});
clearCompletedBtn.addEventListener('click', function() {
    todoArray = todoArray.filter(item => !item.completed);
    display();
});

function addTodo() {
    const text = input.value.trim();

    todoArray.push({ text: text, completed: false });
    input.value = '';
    display();
}

function toggleStatus(index) {
    todoArray[index].completed = !todoArray[index].completed;
    display();
}

function deleteTodo(index) {
    todoArray.splice(index, 1);
    display();
}

function display() {
    list.innerHTML = '';

    for (let i = 0; i < todoArray.length; i++) {
        const item = todoArray[i];

        if (filter === 'active' && item.completed) continue;
        if (filter === 'completed' && !item.completed) continue;

        const li = document.createElement('li');
        li.textContent = item.text + ' ';

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = item.completed ? 'Completed' : 'Active';
        toggleBtn.addEventListener('click', function() {
            toggleStatus(i);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            deleteTodo(i);
        });

        li.appendChild(toggleBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
}

display();
