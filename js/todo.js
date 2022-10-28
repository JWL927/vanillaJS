const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
};

const paintToDo = (newToDo) => {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "done";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    if(toDos.length === 7) {
        return alert("To many things to do today...");
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}