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

  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.text.toLowerCase());
  });

  createTodos(filteredTodos); // form functions.js
}

//*** ADD NEW TODO IN FORM */ */
document.querySelector('#input-form').addEventListener('submit', function (e) {
  e.preventDefault();

  addTodo(e);

  saveTodos(todos);

  document.querySelector('#todos').innerHTML = '';
  renderTodos(todos, filters);
  e.target.elements.newInput.value = '';

  console.log(todos);
});

//*** ADD FILTER INPUT *** */
document.querySelector('#filterInput').addEventListener('input', function (e) {
  console.log(e.target.value);
  filters.text = e.target.value;
  document.querySelector('#todos').innerHTML = '';
  renderTodos(todos, filters);
});

//*** TOGGLE CHECKBOX FOR COMPLETED *** */

renderTodos(todos, filters);
