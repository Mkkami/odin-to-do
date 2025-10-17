
export class Todo {
    constructor() {
        this.projectList = [];
    }

    addProject(project) {
        this.projectList.push(project);
    }

    removeProject(id) {
        let project = this.projectList.find(p => p.id == id);
        this.projectList.remove(project);
    }

    getProject(id) {
        return this.projectList.find(p => p.id == id);
    }

    getFirstProject() {
        return this.projectList[0];
    }
}

export class Project {
    constructor(name) {
        this.id = self.crypto.randomUUID();
        this.name = name;
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }

    remove(id) {
        let task = this.taskList.find(t => t.id == id);
        this.taskList.remove(task);
    }

    getTask(id) {
        return this.taskList.find(t => t.id == id);
    }
}

export class Task {
    constructor(name, desc, dueDate, priority) {
        this.id = self.crypto.randomUUID();
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = false;
    }

    changeCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}

export const Priority = {
    High: "High",
    Medium: "Medium",
    Low: "Low"
}