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

const newProjectBtn = document.querySelector(".add-project");
newProjectBtn.addEventListener('click', () => {
    dialogProject.showModal();
    
})

formProject.addEventListener('submit', () => {
    let formdata = new FormData(formProject);
    addProject(formdata.get('title'));
})

const newTaskBtn = document.querySelector(".add-task");
newTaskBtn.addEventListener('click', () => {
    dialogTask.showModal();
})

formTask.addEventListener('submit', (e) => {
    let formdata = new FormData(formTask);
    addTask(state.currentProject, 
        formdata.get('title'),
        formdata.get('description'),
        formdata.get('date'),
        formdata.get('priority')
    );
    console.log("submitted");
})


