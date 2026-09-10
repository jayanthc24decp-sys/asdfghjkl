function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">
            ${task}
        </span>
        <button class="delete" onclick="deleteTask(this)">
            ❌
        </button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function completeTask(task) {
    task.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}
