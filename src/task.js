import removeImg from './img/trash-can-outline.svg';

export function createTaskDiv(title, desc) {
    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("div");
    
    const titleP = document.createElement("p");
    titleP.textContent = title;
    const descP = document.createElement("p");
    descP.textContent = desc;

    text.appendChild(titleP);
    text.appendChild(descP);

    const remove = document.createElement("button");

    const img = document.createElement("img");
    // img.src = removeImg;
    img.alt="trash";

    remove.appendChild(img);

    task.appendChild(checkbox);
    task.appendChild(text);
    task.appendChild(remove);

    return task;

}

export function createTask(project, title, desc) {
    const task = createTaskDiv(title, desc);
    const taskbox = document.querySelector(".taskbox");
    taskbox.appendChild(task);
}

// function createTest(project, title, desc) {
//     const todo = {}
//     const p = {}
//     const task = {}
//     task.title = title;
//     task.desc = desc;
//     p.add(task)
//     todo.add(task)
//     localStorage.setItem("todo", todo);
// }