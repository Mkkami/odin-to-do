import {Project, Task, Priority} from "./todo";
import { isInStorage, getFromStorage, createEmptyTodo, saveTodo } from "./storage";

function addTask(todo, project, name, desc, dueDate, priority) {
    let task = new Task(name, desc, dueDate, priority);
    project.addTask(task);
    //update view
    saveTodo(todo);
}

function removeTask(todo, project, id) {
    project.removeTask(id);
    saveTodo(todo);
}

function addProject(todo, name) {
    let project = new Project(name);
    todo.addProject(project);
    saveTodo(todo);
}

function removeProject(todo, id) {
    todo.removeProject(id);
    saveTodo(todo);
}

