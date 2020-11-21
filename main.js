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
  document.querySelector('#todos').innerHTML = ''
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
  // let filterInput = e.target.value
  // console.log(filterInput)
  filters.text = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#sort-by').addEventListener('change', function (e) {
  const sortOption = e.target.value
  console.log(sortOption)
  sortTodos(todos, sortOption)
  saveTodos(todos)
  document.querySelector('#todos').innerHTML = ''

  renderTodos(todos, filters)
})
renderTodos(todos, filters);
