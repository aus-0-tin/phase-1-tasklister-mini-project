document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;
n
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);

    taskInput.value = "";

  });

});

