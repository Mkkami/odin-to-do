import {Project, Task, Priority} from "./structures";
import { isInStorage, getFromStorage, createEmptyTodo, saveTodo } from "./storage";
import { createTaskDiv, createProjectItem, removeProjectItem } from "./view";


import { state } from "./index"

export function addTask(project, name, desc, dueDate, priority) {
    let task = new Task(name, desc, dueDate, priority);
    project.addTask(task);
    createTaskDiv(task);
    saveTodo(state.todo);
}

export function removeTask(id) {
    state.currentProject.removeTask(id);
    saveTodo(state.todo);
}

export function addProject(name) {
    let project = new Project(name);
    state.todo.addProject(project);
    createProjectItem(project);
    saveTodo(state.todo);
    return project;
}

export function removeProject(id) {
    if (id == 'default') {
        return;
    }
    state.todo.removeProject(id);
    removeProjectItem(id);
    saveTodo(state.todo);
}

export function switchProject(project) {
    state.currentProject = project;
    if (project.taskList.length == 0) {
        return;
    }
    for (let t of project.taskList) {
        createTaskDiv(t);
    }
}

export function createProjectBtns() {
    let pList = state.todo.projectList;
    if (pList.length == 0) {
        return;
    }
    for (let p of pList) {
        createProjectItem(p);
    }
}