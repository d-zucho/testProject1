// TODO - add filter input
// TODO - toggle todo function
// TODO - function to sort todos by, completed, date created, and alphabetical
// 


function checkStorage() {
  if (localStorage.getItem('todos') !== null) {
    todos = JSON.parse(todosJSON);
  }
}
//*** Save todos ** */
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

//*** Add a todo **/
function addTodo(e) {
  const todoTextInput = e.target.elements.newInput.value;
  todos.push({
    id: uuidv4(),
    text: todoTextInput,
    completed: false,
  });
}



//*** Create all elements of the individual todo statement ** */
function createTodos(filteredTodos) {
  filteredTodos.forEach(function (todo) {
    //*** Create individual todo line elements */
    const individualTodoDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const deleteButton = document.createElement('button');

    //*** Create element attributes */
    todoText.setAttribute('id', 'todoSpan');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    checkbox.setAttribute('id', 'toggleCompleted');
    todoText.textContent = ` ${todo.text} `;
    deleteButton.textContent = ' x ';
    deleteButton.setAttribute('id', 'deleteButton');

    //*** Append line together */
    individualTodoDiv.appendChild(checkbox);
    individualTodoDiv.appendChild(todoText);
    individualTodoDiv.appendChild(deleteButton);

    //*** Create Summary Statement Element */
    const summary = document.createElement('h2')
    summary.setAttribute('id', 'summary-statement')
    summary.textContent = `You Have ${filteredTodos.length} ToDos Left!`

    document.getElementById('todos').appendChild(individualTodoDiv);



    //**Delete todo event listener*/
    deleteButton.addEventListener('click', function (e) {
      deleteTodo(todo.id);
      saveTodos(todos);
      document.querySelector('#todos').innerHTML = '';
      renderTodos(todos, filters);
    });
  });
}

// *** Delete todo *** //
function deleteTodo(id) {
  let index = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
}
