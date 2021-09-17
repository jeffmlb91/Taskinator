// create variable to target the button element and the ul element
var buttonEL = document.querySelector("#save-task");
console.log(buttonEL);
var taskToDoEl = document.querySelector("#tasks-to-do");

// EVENT HANDLER

var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task";
  taskToDoEl.appendChild(listItemEl);
};

// Create a new task, style the new task, add text and append this element to the task list. EVENT LISTENER/
buttonEL.addEventListener("click", createTaskHandler);
