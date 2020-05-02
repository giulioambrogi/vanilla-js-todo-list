
var FormManager = function () {
  var form = document.querySelector('form#add-todo');

  var items = [];

  var itemsList = document.querySelector('ul')

  /**
   * Handle the submit and adds the item if the input field is non-empty
   * @param {DOMEvent} e 
   */
  function onSubmit(e) {
    e.preventDefault();
    var todoItemValue = e.target.querySelector('#item').value
    if (todoItemValue != null && todoItemValue.length > 0) {
      addTodoItem(todoItemValue)
    }
    console.log(e)
  }

  /**
   * Creates the DOM Element of the Delete button
   * @param {Number} itemIndex The index of the item used when deleting it 
   */
  function createDeleteButton(itemIndex) {
    var deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', (e) => deleteItem(itemIndex))
    deleteBtn.className = "btn btn-danger"
    deleteBtn.innerText = 'Delete'
    deleteBtn.style.float = 'right'
    return deleteBtn;
  }

  /**
   * Updates the list of items displayed on the page.
   */
  function refreshItemsList() {
    itemsList.innerHTML = null;
    items.forEach(function (item, index) {
      var text = document.createElement('span')
      text.innerText = item;

      var el = document.createElement('li')
      el.appendChild(text)
      el.appendChild(createDeleteButton(index))
      el.className = "list-group-item"

      itemsList.appendChild(el)
    })
  }

  function deleteItem(index) {
    items = [...items.slice(0, index), ...items.slice(index + 1, items.length)]
    refreshItemsList();
  }

  function addTodoItem(value) {
    items.push(value)
    refreshItemsList()
  }

  function setupInputEffects() {
    var inputField = form.querySelector('#item')
    var originalBorder = inputField.style.border
    inputField.addEventListener('mouseenter', e => {
      e.target.style.border = '4px solid black'
    })
    inputField.addEventListener('mouseleave', e => {
      e.target.style.border = originalBorder
    })
  }

  form.addEventListener('submit', onSubmit)
  setupInputEffects()
}

document.addEventListener("DOMContentLoaded", function () {
  new FormManager();
});
