function addTask() {
    let task = document.getElementById("task").value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    span.onclick = function() {
        span.classList.toggle("completed");
    };

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("task").value = "";
}
