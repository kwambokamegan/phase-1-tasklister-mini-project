document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("create-task-form");
 const taskList = document.getElementById("task-list");

 form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskInput = document.getElementById("new-task-description")
  const task = taskInput.value;
  taskInput.value = "" ;

  const taskElement = document.createElement("div");
  taskElement.textContent = task;
  taskList.appendChild(taskElement);
 });
});
