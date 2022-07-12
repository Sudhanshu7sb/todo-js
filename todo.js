let form = document.querySelector(".task-input");

let taskInput = document.querySelector(".text-input");
let todos = document.querySelector(".todos");
let add = document.querySelector(".add");
let error = document.querySelector("small");
let sst = [];
window.load =createUI();

// event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("in")
    if (taskInput.value.length > 0) {
        error.innerText = "";
        // addTodo(taskInput);
        let todoInputedByUser = taskInput.value;
        let taskToDo = todoInputedByUser;
        //   update sst
        sst = [... sst,taskToDo];
        // localStorage.setItem("todos",JSON.stringify(sst));
        // createUI
        createUI();

    } else {
        error.innerText = "*Task cannot be empty";
    }

});


// createUI();
// functions
function createUI(data = sst, root = todos) {
    // let ls = localStorage.getItem("todos");
// console.log(ls,sst);
    data.forEach((singleTodo, index) => {
        console.log(singleTodo,"todo")
    let todo = document.createElement("div");
    let task = document.createElement("input");
    let checkBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");

    let checkIcon = document.createElement("i");
    let editIcon = document.createElement("i");
    let deleteIcon = document.createElement("i");
    todo.classList.add("todo");
    task.type = "text";
    task.setAttribute("readonly", "readonly");
    task.value = taskInput.value;

    checkIcon.classList.add("fa-solid", "fa-check");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");

    // completed task
    checkBtn.addEventListener("click", (e) => completedTask(task, todo, deleteBtn))
    // edit task
    editBtn.addEventListener("click", (e) => editTask(task, task.value, editBtn));
    // delete task
    deleteBtn.addEventListener("click", (e) => deleteTask(root, todo));


    checkBtn.append(checkIcon);
    editBtn.append(editIcon);
    deleteBtn.append(deleteIcon);

    todo.append(task, checkBtn,
        editBtn,
        deleteBtn);
    root.append(todo);
    // sst.push(todo);


    taskInput.value = "";
      })
// createUI();

}

createUI();

// function addTodo({ value }) {



// }

function completedTask(task, todo, del) {
    task.classList.add("strike");
    todo.style.pointerEvents = "none";
    task.style.opacity = "0.5";
    del.style.pointerEvents = "auto";
}

function editTask(task) {

    console.log(task)
    task.removeAttribute("readonly");
    task.focus();


}

function deleteTask(todos, todo) {
    console.log(todos, event)
    todos.removeChild(todo);
}

