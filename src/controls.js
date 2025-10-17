import {Project, Task, Priority} from "./structures";
import { isInStorage, getFromStorage, createEmptyTodo, saveTodo } from "./storage";
import { createTaskDiv, createProjectItem } from "./view";


import { state } from "./index"

export function addTask(project, name, desc, dueDate, priority) {
    let task = new Task(name, desc, dueDate, priority);
    project.addTask(task);
    createTaskDiv(task);
    saveTodo(todo);
}

export function removeTask(id) {
    state.currentProject.removeTask(id);
    saveTodo(todo);
}

export function addProject(name) {
    let project = new Project(name);
    todo.addProject(project);
    createProjectItem(project);
    saveTodo(todo);
    return project;
}

export function removeProject(id) {
    todo.removeProject(id);
    saveTodo(todo);
}

export function switchProject(project) {
    state.currentProject = project;

}