const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText) return alert("Task cannot be empty!");
  createTaskElement(taskText, "todo");
  taskInput.value = "";
});

function createTaskElement(text, columnId) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("draggable", "true");
  task.innerHTML = `
    <span contenteditable="true">${text}</span>
    <button onclick="this.parentElement.remove()">×</button>
  `;

  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });

  document.getElementById(columnId).appendChild(task);
}

// Enable drag and drop
document.querySelectorAll(".task-list").forEach((list) => {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    if (dragging) list.appendChild(dragging);
  });
});
