function checkStorage() {
  if (localStorage.getItem('todos') !== null) {
    todos = JSON.parse(todosJSON);
  }
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(e) {
  const todoTextInput = e.target.elements.newInput.value;
  todos.push({
    text: todoTextInput,
    completed: false,
  });
}

function createTodos(filteredTodos) {
  filteredTodos.forEach(function (todo) {
    //*** Create individual todo lines */
    const individualTodoDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const deleteButton = document.createElement('button');

    //*** Create element attributes */
    todoText.setAttribute('id', 'todoSpan');
    checkbox.setAttribute('type', 'checkbox');
    todoText.textContent = ` ${todo.text} `;
    deleteButton.textContent = ' x ';

    //*** Append line together */
    individualTodoDiv.appendChild(checkbox);
    individualTodoDiv.appendChild(todoText);
    individualTodoDiv.appendChild(deleteButton);

    document.getElementById('todos').appendChild(individualTodoDiv);
  });
}
