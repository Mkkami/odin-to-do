import "./style.css"

import { createTask } from "./task";

console.log("Hello there");

if (!localStorage.getItem("todo")) {
    const todo = {projects: []};
    const project = {};
    project.name = "Project 1";
    project.tasks = [];

    const task = {};
    task.title = "TASK 1";
    task.desc = "DESCRIPTIONNEN";

    console.log(project);

    project.tasks.push(task);

    todo.projects.push(project);

    localStorage.setItem("todo", JSON.stringify(todo));

    createTask(project, task.title, task.desc);
} else {
    const dd = localStorage.getItem("todo");
    console.log(dd);
}

createTask("", "TASK1", "desc");