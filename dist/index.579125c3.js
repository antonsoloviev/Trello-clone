window.addEventListener("load", (event)=>{
    clockStart();
});
const todoListElement = document.querySelector(".todo");
const modalAdd = document.querySelector(".dialog-add-new");
const buttonAdd = document.querySelector(".button-add");
buttonAdd.addEventListener("click", (event)=>{
    modalAdd.showModal();
});
const buttonAddCancel = document.querySelector(".button-cancel");
buttonAddCancel.addEventListener("click", (event)=>{
    modalAdd.close();
});
function renderTodoCard(item) {
    const template = document.querySelector(".template-card").content.cloneNode(true);
    const title = template.querySelector(".card-title");
    const user = template.querySelector(".card-user");
    const date = template.querySelector(".card-date");
    title.textContent = item.title;
    user.textContent = item.user;
    date.textContent = item.date;
    return template;
}
const cardsList = store.notes.map(renderTodoCard);
todoListElement.append(...cardsList);

//# sourceMappingURL=index.579125c3.js.map
