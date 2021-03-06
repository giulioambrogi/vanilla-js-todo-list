var FormManager = function () {
  var form = document.querySelector('form#add-todo');

  var items = [];

  var itemsList = document.querySelector('ul')

  /**
   * Handles the submit and adds the item if the input field is non-empty
   * @param {Event} e 
   */
  function onSubmit(e) {
    e.preventDefault();
    var todoItemValue = e.target.querySelector('#item-input').value
    if (todoItemValue != null && todoItemValue.length > 0) {
      addTodoItem(todoItemValue)
    }
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
    var inputField = form.querySelector('#item-input')
    var originalBorder = inputField.style.border
    inputField.addEventListener('mouseenter', e => {
      e.target.style.border = '4px solid black'
    })
    inputField.addEventListener('mouseleave', e => {
      e.target.style.border = originalBorder
    })
  }

  /* Attaches the handler function to the form onSubmit event */
  form.addEventListener('submit', onSubmit)

  /* Sets up some visual effect when hovering on the input */
  setupInputEffects()
}

document.addEventListener("DOMContentLoaded", function () {
  new FormManager();
});
