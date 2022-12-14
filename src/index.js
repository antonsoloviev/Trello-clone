import './modules/store.js';
// import './modules/todo.js';
import {renderTodo} from './modules/todo.js';
import {clockStart} from './modules/utils.js';

window.addEventListener('load', (event) => {
  clockStart();
  renderTodo(store.notes);
  // renderInProgress(store.notes);
  // renderDone(store.notes);
});



