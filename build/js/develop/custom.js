'use strict';

let form = document.getElementById('todo-form');
let formTitle = document.getElementById('form-title');
let formDescription = document.getElementById('form-description');
let close = document.getElementsByClassName("close");

function createTask() {
  let todoList = document.getElementById('todo-list');
  let todoItem = document.createElement('li');
  let itemCaption = document.createElement('p');
  let itemDescription = document.createElement('p');

  itemCaption.className = 'caption';
  itemDescription.className = 'description';

  let inputTitleValue = formTitle.value;
  let inputDescriptionValue = formDescription.value;

  let titleValue = document.createTextNode(inputTitleValue);
  let descriptionValue = document.createTextNode(inputDescriptionValue);

  itemCaption.appendChild(titleValue);
  itemDescription.appendChild(descriptionValue);

  todoItem.appendChild(itemCaption);
  todoItem.appendChild(itemDescription);

  if (inputTitleValue === '') {
    alert("You must write something!");
  } else {
    todoList.appendChild(todoItem);
  }

  formTitle.value = '';
  formDescription.value = '';

  let span = document.createElement("span");
  let closeIcon = document.createTextNode("\u00D7");
  span.className = 'close';
  span.appendChild(closeIcon);
  todoItem.appendChild(span);

}

function deleteTask() {
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

form.onsubmit = function () {
  createTask();
  deleteTask();
  return false;
};
