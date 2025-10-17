
export class Todo {
    constructor() {
        this.projectList = [];
    }

    addProject(project) {
        this.projectList.push(project);
    }

    removeProject(project) {
        this.projectList.remove(project);
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.taskList = [];
    }

    add(task) {
        this.taskList.push(task);
    }

    remove(task) {
        this.taskList.remove(task);
    }
}

export class Task {
    constructor(name, desc, dueDate, priority) {
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export const Priority = {
    High: "High",
    Medium: "Medium",
    Low: "Low"
}