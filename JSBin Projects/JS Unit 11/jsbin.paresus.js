var addItem = function () {
  document.getElementsByTagName('button')[0].value;
  var newItemText = input.value;
  var newItem = document.createElement('li');
  newItem.innerHTML = newItemText;
  document.getElementByID('todo-list').appendChild(newItem);
  
};

document.getElementsByTagName('button')[0].addEventListener('click', addItem);