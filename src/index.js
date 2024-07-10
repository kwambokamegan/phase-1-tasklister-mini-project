document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("task-list");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value.trim(); // Trim to remove whitespace
  
      if (taskDescription !== "") {
        const priority = document.getElementById("priority").value; // Get priority value
  
        // Create task item
        const taskItem = document.createElement("li");
  
        // Set task description
        const taskText = document.createElement("span");
        taskText.textContent = taskDescription;
        taskItem.appendChild(taskText);
  
        // Set priority color
        taskItem.classList.add(priority.toLowerCase());
  
        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          taskItem.remove(); // Remove task item on delete button click
        });
        taskItem.appendChild(deleteButton);
  
        // Add edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
          const newText = prompt("Edit task:", taskDescription);
          if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText.trim();
          }
        });
        taskItem.appendChild(editButton);
  
        // Append task item to task list
        taskList.appendChild(taskItem);
  
        // Clear input field
        taskInput.value = "";
      }
    });
  
    // Sort tasks based on priority
    const sortTasks = document.getElementById("sort-tasks");
    sortTasks.addEventListener("click", () => {
      const tasks = Array.from(taskList.getElementsByTagName("li"));
      tasks.sort((a, b) => {
        const priorityA = a.classList[0];
        const priorityB = b.classList[0];
        const priorityOrder = ["high", "medium", "low"];
        return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
      });
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
      tasks.forEach((task) => taskList.appendChild(task));
    });
  
    // Additional feature: Toggle completed state
    taskList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
      }
    });
  });
