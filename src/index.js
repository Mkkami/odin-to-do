import "./style.css"

import { createTask } from "./view";
import { Todo, Project, Task, Priority } from "./structures";
import { isInStorage, getFromStorage, createEmptyTodo, saveTodo } from "./storage";
import { addProject, addTask, createProjectBtns } from "./controls";

export const state = {
    currentProject: null,
    todo: null
}

if (isInStorage()) {
    state.todo = getFromStorage();
    createProjectBtns();
    console.log("is in storage");
} else {
    state.todo = createEmptyTodo();
    state.currentProject = state.todo.getFirstProject();
    addTask(state.currentProject.getFirstTask());
    createProjectBtns();
}

console.log(state);

window.todo = state.todo;
window.Project = Project;
window.Task = Task;
window.Priority = Priority;


const dialogProject = document.querySelector("dialog#project");
const dialogTask = document.querySelector("dialog#task");

const formTask = dialogTask.firstElementChild;
const formProject = dialogProject.firstElementChild;

const cancelBtns = document.querySelectorAll(".cancel-btn");

for (let btn of cancelBtns) {
    btn.addEventListener('click', () => {
        dialogProject.close();
        dialogTask.close();
    })
}

const newProjectBtn = document.querySelector(".add-project");
newProjectBtn.addEventListener('click', () => {
    dialogProject.showModal();
    
})

formProject.addEventListener('submit', () => {
    let formdata = new FormData(formProject);
    addProject(formdata.get('title'));
    formProject.reset();
})

const newTaskBtn = document.querySelector(".add-task");
newTaskBtn.addEventListener('click', () => {
    if (state.currentProject == null) {
        alert("Select a project");
        return;
    }
    dialogTask.showModal();
})

formTask.addEventListener('submit', (e) => {
    let formdata = new FormData(formTask);
    if (state.currentProject == null) {
        alert("Select a project");
        return;
    }
    addTask(state.currentProject, 
        formdata.get('title'),
        formdata.get('description'),
        formdata.get('date'),
        formdata.get('priority')
    );
    formTask.reset();
})


