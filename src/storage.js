import {Todo, Project, Task, Priority} from "./structures"
import JsonToTodo from "./mapper";

export function isInStorage() {
    if (localStorage.getItem('todo')) {
        return true;
    }
    return false;
}

export function getFromStorage() {
    let storage = localStorage.getItem("todo");
    let parsedStorage = JSON.parse(storage);
    let todo = JsonToTodo(parsedStorage);
    return todo;
}

export function createEmptyTodo() {
    let todo = createDefaultTodo();
    localStorage.setItem('todo', JSON.stringify(todo));
    return todo;
}

export function saveTodo(todo) {
    localStorage.setItem('todo', JSON.stringify(todo));
}

function createDefaultTodo() {
    let todo = new Todo();
    let project = new Project("Default");
    
    let task = new Task("That's a task", "That's a description", new Date(), Priority.Low, false);
    project.addTask(task);
    todo.addProject(project);
    return todo;
}