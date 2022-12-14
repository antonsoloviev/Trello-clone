window.store = {
    notes: []
};
window.addEventListener("visibilitychange", ()=>{
    const notesJSON = JSON.stringify(window.store.notes);
    localStorage.setItem("notes", notesJSON);
});
window.addEventListener("load", ()=>{
    const notesJSON = localStorage.getItem("notes") || "[]";
    store.notes = JSON.parse(notesJSON);
// renderTodo(store.notes);
});

//# sourceMappingURL=index.e850bde2.js.map
