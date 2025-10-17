import "./style.css"

import { createTask } from "./task";
import { Todo, Project, Task, Priority } from "./todo";
import { isInStorage, getFromStorage, createEmptyTodo, saveTodo } from "./storage";

let todo;

if (isInStorage()) {
    todo = getFromStorage();
} else {
    todo = createEmptyTodo();
}

console.log(todo);

window.todo = todo;
window.Project = Project;
window.Task = Task;
window.Priority = Priority;
// console.log(`siema: ${currentProject}`);