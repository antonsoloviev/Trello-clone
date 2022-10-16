import {generateRandomId, generateDate, clockStart} from './modules/utils.js';

window.addEventListener('load', (event) => {
  clockStart();
  renderTodo(window.store.notes);
});

const todoListElement = document.querySelector('.todo');
const modalAdd = document.querySelector('.dialog-add-new');

const buttonAdd = document.querySelector('.button-add');
buttonAdd.addEventListener('click', (event) => {modalAdd.showModal()} );

const buttonAddCancel = document.querySelector('.button-cancel');
buttonAddCancel.addEventListener('click', (event) => {modalAdd.close()} );

const buttonAddConfirm = document.querySelector('.button-add-confirm');
buttonAddConfirm.addEventListener('click', (event) => {
  const todoTitle = document.querySelector('.input-title');
  const todoDescription = document.querySelector('.input-text');
  const todoUser = document.querySelector('.select-users');

        if (todoTitle.value) {
          window.store.notes.push({
            id: generateRandomId(),
            title: todoTitle.value,
            description: todoDescription.value,
            user: todoUser.options[todoUser.selectedIndex].text,
            date: generateDate()
        });
        }
        modalAdd.close();
        renderTodo(store.notes);
        
        
} );

function renderTodo(notes) {
  todoListElement.innerHTML = '';
  todoListElement.append(...(notes.map(getTodoCard)));
}

function getTodoCard(item) {
  const template = document.querySelector('.template-todo-card').content.cloneNode(true);

  const title = template.querySelector('.card-title');
  const user = template.querySelector('.card-user');
  const date = template.querySelector('.card-date');

  title.textContent = item.title;
  user.textContent = item.user;
  date.textContent = item.date;

  return template;
}


