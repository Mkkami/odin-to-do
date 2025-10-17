import { Todo, Project, Task, Priority } from "./structures";

export default function JsonToTodo(file) {
    let todo = new Todo();
    for (let p of file.projectList) {
        let project = new Project();
        project.name = p.name;
        for (let t of p.taskList) {
            let task = new Task(
                t.name,
                t.desc,
                t.dueDate,
                t.priority,
                t.isCompleted
            );
            project.addTask(task);
        }
        todo.addProject(project);
    }
    return todo;
}