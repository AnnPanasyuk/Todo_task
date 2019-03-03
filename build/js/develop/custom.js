'use strict';

let form = document.getElementById('todo-form');
let formTitle = document.getElementById('form-title');
let formDescription = document.getElementById('form-description');
let close = document.getElementsByClassName("close");

function createTask() {
  let todoList = document.getElementById('todo-list');
  let todoItem = document.createElement('li');
  let inputTitleValue = formTitle.value;
  let inputDescriptionValue = formDescription.value;
  let titleValue = document.createTextNode(inputTitleValue);
  let descriptionValue = document.createTextNode(inputDescriptionValue);
  todoItem.appendChild(titleValue);
  todoItem.appendChild(descriptionValue);
  if (inputTitleValue === '') {
    alert("You must write something!");
  } else {
    todoList.appendChild(todoItem);
  }
  formTitle.value = '';

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
