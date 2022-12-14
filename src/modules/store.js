
window.store = {
  notes: [
    
  ]
}

window.addEventListener('visibilitychange', () => {
  const notesJSON = JSON.stringify(window.store.notes);
  localStorage.setItem('notes', notesJSON);
});

window.addEventListener('load', () => {
  const notesJSON = localStorage.getItem('notes') || '[]';
  store.notes = JSON.parse(notesJSON);
  // renderTodo(store.notes);
});