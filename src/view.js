import removeImg from './img/trash-can-outline.svg';

import {Project, Task, Priority} from "./structures";
import { switchProject, removeTask } from './controls';

export function createTaskDiv(task) {
    const taskbox = document.querySelector(".taskbox");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute('data-id', task.id);

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

    remove.addEventListener('click', () => {
        removeTask(task.id);
        taskDiv.remove();
    })

    const img = document.createElement("img");
    // img.src = removeImg;
    img.alt="trash";

    remove.appendChild(img);

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(text);
    taskDiv.appendChild(remove);

    // taskbox.appendChild(taskDiv);
    taskbox.insertBefore(taskDiv, taskbox.lastElementChild);
    console.log(task);
}

export function createProjectItem(project) {
    const sidebar = document.querySelector("#sidebar");

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project");
    projectBtn.setAttribute("data-id", project.id);
    projectBtn.textContent = project.name;
    
    projectBtn.addEventListener('click', () => {
        switchProject(project);
        clearButtonSelect();
        clearTaskbox();
        projectBtn.setAttribute('selected', '');
    })

    sidebar.insertBefore(projectBtn, sidebar.lastElementChild);
} 

export function clearTaskbox() {
    const taskbox = document.querySelector(".taskbox");
    for (let child of Array.from(taskbox.children)) {
        if (!child.classList.contains("add-task")) {
            taskbox.remove(child);
        }
    }
}

export function clearButtonSelect() {
    const sidebar = document.querySelector("#sidebar");
    for (let b of sidebar.children) {
        b.removeAttribute('selected');
    }
}