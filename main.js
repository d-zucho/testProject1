let todos = [];

let filters = {
  text: '',
};

let todosJSON = localStorage.getItem('todos');

checkStorage();

function renderTodos(todos, filters) {
  //***get incomplete todos**
  let incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
  });

  let filteredTodos = incompleteTodos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.text.toLowerCase());
  });

  createTodos(filteredTodos); // form functions.js
}

renderTodos(todos, filters);

//*** ADD NEW TODO IN FORM */ */
document.querySelector('#input-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // ? push new todo to todo list
  // const todoTextInput = e.target.elements.newInput.value;
  // todos.push({
  //   text: todoTextInput,
  //   completed: false,
  // });
  addTodo(e);

  saveTodos(todos);
  document.querySelector('#todos').innerHTML = '';
  renderTodos(todos, filters);
  e.target.elements.newInput.value = '';

  console.log(todos);
});
