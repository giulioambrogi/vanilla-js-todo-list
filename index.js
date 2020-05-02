
var FormManager = function () {
  var form = document.querySelector('form#add-todo');

  var items = [];

  var itemsList = document.querySelector('ul')

  var createDeleteButton = function (itemIndex) {
    var deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', (e) => deleteItem(itemIndex))
    deleteBtn.className = "btn btn-danger"
    deleteBtn.innerText = 'Delete'
    deleteBtn.style.float = 'right'
    return deleteBtn;
  }

  var refreshItemsList = function () {
    itemsList.innerHTML = null;
    items.forEach(function (item, index) {
      var span = document.createElement('span')
      span.innerText = item;

      var deleteBtn = createDeleteButton(index)

      var el = document.createElement('li')
      el.appendChild(span)
      el.appendChild(deleteBtn)
      el.className = "list-group-item"
      itemsList.appendChild(el)
    })
  }

  var deleteItem = function (index) {
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
