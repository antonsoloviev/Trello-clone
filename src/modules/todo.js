import {generateRandomId, generateDate} from './utils.js';

const todoListElement = document.querySelector('.todo');

todoListElement.addEventListener('click', (event) => {
  const element = event.target;
  const classNames = ['button-edit', 'button-del', 'button-move'];
  if (!classNames.some(className => element.classList.contains(className))) {
    return;
  }

  if (element.classList.contains('button-edit')) {
    const todoItem = element.closest('.todo-card');
    console.log('edit');
    const todoItemTitle = modalEdit.querySelector('.input-title');
    const todoItemDescription = modalEdit.querySelector('.input-text');
    const todoItemUser = modalEdit.querySelector('.select-users');
    const todoItemId = Number(todoItem.dataset.id);
    let todoItemNote = store.notes.find(item => item.id === todoItemId);

    todoItemTitle.value = todoItemNote.title;
    todoItemDescription.textContent = todoItemNote.description;
    todoItemUser.options[todoItemUser.selectedIndex].text = todoItemNote.user;
    modalEdit.showModal();
    // renderTodo(store.notes);
  }

  if (element.classList.contains('button-del')) {
    const todoItem = element.closest('.todo-card');
    console.log('del');
    const todoItemId = Number(todoItem.dataset.id);
    let index = store.notes.findIndex(item => item.id === todoItemId);
    store.notes.splice(index, 1);

    renderTodo(store.notes);
  }

  if (element.classList.contains('button-move')) {
    const todoItem = element.closest('.todo-card');
    console.log('move');

    // renderTodo(store.notes);
  }

})

const modalEdit = document.querySelector('.dialog-edit');

const buttonEditCancel = modalEdit.querySelector('.button-cancel');
buttonEditCancel.addEventListener('click', (event) => {modalEdit.close()} );

const modalAdd = document.querySelector('.dialog-add-new');

const buttonAdd = document.querySelector('.button-add');
buttonAdd.addEventListener('click', (event) => {modalAdd.showModal()} );

const buttonAddCancel = modalAdd.querySelector('.button-cancel');
buttonAddCancel.addEventListener('click', (event) => {modalAdd.close()} );

const buttonAddConfirm = modalAdd.querySelector('.button-add-confirm');
buttonAddConfirm.addEventListener('click', (event) => {
  const todoTitle = modalAdd.querySelector('.input-title');
  const todoDescription = modalAdd.querySelector('.input-text');
  const todoItemUser = modalAdd.querySelector('.select-users');

  if (todoTitle.value) {
    store.notes.push({
      id: generateRandomId(),
      title: todoTitle.value,
      description: todoDescription.value,
      user: todoItemUser.options[todoItemUser.selectedIndex].text,
      date: generateDate()
    });
  }

  renderTodo(store.notes);
  todoTitle.value = '';
  todoDescription.value = '';
  modalAdd.close();
} );

export function renderTodo(notes) {
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
  template.querySelector('.todo-card').setAttribute('data-id', item.id);

  return template;
}
