
window.store = {
  notes: [
    {
      id: 'dsf435h5sdf',
      title: 'Помыть посуду',
      description: 'Помыть посуду и убрать за собой',
      user: 'Adam',
      date: '22.22.22'
    },
    {
      id: 'dfg3q4gea',
      title: 'Приготовить еду',
      description: 'Приготовить еду и съесть всё и убрать за собой',
      user: 'Adam',
      date: '22.22.22'
    },
  ]
}

window.addEventListener('visibilitychange', () => {
  const notesJSON = JSON.stringify(window.store.notes);
  localStorage.setItem('notes', notesJSON);
});

// window.addEventListener('load', () => {
//   const notesJSON = localStorage.getItem('notes') || '[]';
//   store.notes = JSON.parse(notesJSON);
//   renderTodo(store.notes);
// });