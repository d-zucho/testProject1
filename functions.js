// DONE - TODO - add filter input-- DONE
// DONE - TODO - toggle todo function
// TODO - function to sort todos by, completed, date created, and alphabetical



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
    dateCreated: Date()
  });
}

/** Toggle Todo ***/
function toggleTodo (id) {
  let todo = todos.find(function (todo) {
    return todo.id === id
  })

  // If a todo is found, meaning todo.find did not
  // return undefined, toggle completed/incomplete
  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
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

    /*** Append Combined Elements To DOM */
    document.querySelector('#summary').innerHTML = ''
    document.querySelector('#summary').appendChild(summary)
    document.querySelector('#todos').appendChild(individualTodoDiv);


    /**Toggle ToDo Completed / Incomlete ***/
    checkbox.addEventListener('change', function (e) {
      toggleTodo(todo.id)
      saveTodos(todos)
      document.querySelector('#todos').innerHTML = ''
      renderTodos(todos, filters)
    })

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


//*** Sort Todos by user parameter */
function sortTodos(todos, sortParameter) {
  todos.sort(function (a, b) {
    if (sortParameter === 'incomplete') {
      if (a.completed < b.completed) {
        return -1
      } else if (b.completed < a.completed) {
        return 1
      } else {
        return 0
      }

  }
  } )
}