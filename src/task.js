import removeImg from './img/trash-can-outline.svg';

import {Project, Task, Priority} from "./todo";

export function createTaskDiv(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("div");
    
    const titleP = document.createElement("p");
    titleP.textContent = task.name;
    const descP = document.createElement("p");
    descP.textContent = task.desc;

    text.appendChild(titleP);
    text.appendChild(descP);

    const remove = document.createElement("button");

    const img = document.createElement("img");
    // img.src = removeImg;
    img.alt="trash";

    remove.appendChild(img);

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(text);
    taskDiv.appendChild(remove);

    return taskDiv;

}