function addTask() {
    let text = document.getElementById('text').value;
    localStorage.setItem(localStorage.length + 1, text);
    document.location.reload(true);
}

for (let i = 0; i < localStorage.length; i++) {
    let taskid = document.createElement("div");
    taskid.innerText = `${i + 1}`;
    taskid.className = "task-id";

    let taskText = document.createElement("div");
    let text = document.createTextNode(localStorage.getItem(localStorage.key(i)));
    taskText.appendChild(text);
    taskText.className = 'task-text';

    let newTask = document.createElement("div");
    newTask.className = ("task");

    newTask.appendChild(taskid);
    newTask.appendChild(taskText);

    document.getElementById("tasks").appendChild(newTask);
}

function removeTasks() {
    localStorage.clear();
    document.location.reload(true);
}