"use strict";
function TodoController($scope) {  
  const controller = this;




controller.todoList = [
   {task: 'walk the dog', 
completed: false, 
},
{task:'Go to the store',
completed: false 
},
{task: 'get gas',
completed: false,
},
{task: 'wash the car',
completed: false,
},
];


controller.addTask = function(task) {
  let newTask = {};
  newTask.task = task;
  newTask.completed = false;
  controller.todoList.push(newTask);
}

controller.removeTask = function(removed) {    
  controller.todoList.splice(removed, 1);
}

controller.completeTask = function(completed) {
  controller.todoList[completed].completed = true;
}


}

angular
.module("todoApp")
.controller("TodoController", TodoController);