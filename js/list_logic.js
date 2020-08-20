//      to-do list functions

var list = document.getElementById("to-do-list");
var item = "";
var message = "error: unknown";

//debugging tools////////////////////
function confirmWorks() {
  alert("hey, this works to call a function");
}
/////////////////////////////////////

//      Add/Create logic/////////////////////////////////////////////////////
function removeUserInput() {
  //getting rid of user inputs
  var garbo = document.querySelector("form");
  list.removeChild(garbo);
}

function addItem(value) {
  //adding item
  var taskSection = document.createElement("div");
  var listItem = document.createElement("span");
  var bubble = document.createElement("span");

  //adding classes to new items
  listItem.classList.add("task"); //HAHAHAHAHAHAHAH
  bubble.classList.add("bubble");
  taskSection.classList.add("userTask");

  //adding these spans to the new div tag [taskSecton]
  taskSection.appendChild(bubble);
  taskSection.appendChild(listItem);

  list.appendChild(taskSection);

  //adding inner text to new elements
  listItem.innerText = value;
  bubble.innerText = "O";
  //adding CSS and attributes to the bubble element
  bubble.style.visibility = "hidden";
}

function askUserInput() {
  var input = document.createElement("form");
  input.innerHTML =
    "<input type='text' name='to-do-item' id ='userItem' placeholder='Insert To Do Item' onchange='checkValue(this.value)'> <button type='button' onclick='getItem()'>Add to List</button>";

  list.appendChild(input);
}

function getItem() {
  if (item == null || item == "Insert To Do Item" || item == "") {
    alert("No task added. Error: " + item);
  } else {
    addItem(item);
    removeUserInput();
  }
}

function checkValue(value) {
  item = value;
}

//      Delete logic -- we want to check if there are any elements to delete, then delete//////////////////////////////////////

var instruction = document.getElementById("interaction");

function helperText() {
  var helpText = document.createElement("p");
  helpText.style = "background-color:lightgreen;";
  instruction.appendChild(helpText);
  helpText.innerText =
    "Hello! Please click on the value you want to get rid of.";

  //all tasks will have the "bubbles" appear
  var tasks = document.querySelectorAll(".bubble");
  tasks.forEach((element) => {
    element.style.visibility = "visible";
  });
}

function removeTask(task) {
  var parent = task.parentElement;
  task.remove();
  instruction.lastChild.remove();
}

function determineTaskToDelete() {
  //then figure out what task to delete
  helperText();
  var tasks = document.querySelectorAll(".userTask");
  tasks.forEach((element) => {
    element.onclick = function () {
      var task = element.children;
      task[0].innerText = "X";
      alert("deleted task: " + task[1].innerText);
      removeTask(element);
    };
  });
}

function isThereTasks() {
  var test = list.children;
  if (test.length <= 2) {
    alert("no task here to delete");
  } else {
    determineTaskToDelete();
  }
}

function deleteItem() {
  isThereTasks();
}

//      Complete task logic //////////////////////////////////
var completeBtn = document.getElementById("checkmark");

function noHelperText(){
  var helpText = document.querySelector(".user-check");
  helpText.remove();
}

function checkTask(elements) {
  //when user completes a task they can toggle it here
  elements[0].innerText = "/";
  var task = elements[1].innerText;
  elements[1].innerText = task + "--done";
}

function unCheckTask(elements) {
  //when use unchecks their task
  elements[0].innerText = "O";
  var task = elements[1].innerText;
  var wordList = task.split("--done");
  elements[1].innerText = wordList[0];
}

function helperText2() {
  var helpText = document.createElement("p");
  helpText.style = "background-color:lightgreen;";
  instruction.appendChild(helpText);
  helpText.classList.add("user-check");
  helpText.innerText =
    "Hello! Please click on the task you want to check/uncheck.";

  //all tasks will have the "bubbles" appear
  var tasks = document.querySelectorAll(".bubble");
  tasks.forEach((element) => {
    element.style.visibility = "visible";
  });
}

function determineTaskIsComplete(selection) {
  var elements = selection.children;
  console.log(elements);
  if (elements[0].innerText == "/") {
    unCheckTask(elements);
    noHelperText();
  } else {
    checkTask(elements);
    noHelperText();
  };
}

function userSelects() {
  var taskList = document.querySelectorAll(".userTask");
  taskList.forEach((element) => {
    element.onclick = function () {
      determineTaskIsComplete(element);
    };
  });
}
function isThereTasks2() {
  var test = list.children;
  if (test.length <= 2) {
    alert("no tasks here!");
  } else {
    helperText2();
    userSelects();
  }
}

function completeItem() {
  isThereTasks2();
}

/////////////////////////////////////////////////////////////////
