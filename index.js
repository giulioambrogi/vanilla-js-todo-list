var FormManager = function () {
  var form = document.querySelector('form#add-todo');

  var items = [];

  var itemsList = document.querySelector('ul')

  var refreshItemsList = function () {
    itemsList.innerHTML = null;
    items.forEach(function (item, index) {
      var span = document.createElement('span')
      span.innerText = item;

      var deleteBtn = document.createElement('button')
      deleteBtn.addEventListener('click', deleteItem)
      deleteBtn.className = "btn btn-danger"
      deleteBtn.style.float = 'right'
      deleteBtn.innerText = 'Delete'

      var el = document.createElement('li')
      el.appendChild(span)
      el.appendChild(deleteBtn)
      el.className = "list-group-item"
      el.setAttribute('data-index', index)
      itemsList.appendChild(el)
    })
  }

  var deleteItem = function (e) {
    var index = e.target.getAttribute('data-index')
    items = items.slice(0, index).concat(items.slice(index + 1, items.length))
    refreshItemsList();
  }

  var addTodoItem = function (value) {
    items.push(value)
    refreshItemsList()
  }

  var onSubmit = function (e) {
    e.preventDefault();
    var todoItemValue = e.target.querySelector('#item').value
    if (todoItemValue != null && todoItemValue.length > 0) {
      addTodoItem(todoItemValue)
    }
    console.log(e)
  }

  form.addEventListener('submit', onSubmit)
  var inputField = form.querySelector('#item')

  var originalBorder = inputField.style.border
  inputField.addEventListener('mouseenter', e => {
    e.target.style.border = '4px solid black'
  })
  inputField.addEventListener('mouseleave', e => {
    e.target.style.border = originalBorder
  })
  return;
}

document.addEventListener("DOMContentLoaded", function () {
  new FormManager();
});
