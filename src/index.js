document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

 
 const taskForm = document.getElementById("create-task-form")
 const inputField = document.getElementById("new-task-description");
 
 const listTasks = document.getElementById("tasks");

 taskForm.addEventListener("submit", function(event) {
     event.preventDefault();
     const newTask = document.createElement("li");
     newTask.innerHTML = inputField.value;
     listTasks.appendChild(newTask);
     event.target.reset();
   }, false);
});