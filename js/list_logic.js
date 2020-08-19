//      to-do list functions

var list = document.getElementById("to-do-list");
var item = "";
var message = "error: unknown";

//      Add/Create logic
function removeUserInput() {
  //getting rid of user inputs
  var garbo = document.querySelector("form");
  list.removeChild(garbo);
}

function addItem(value) {
  //adding item
  var taskSection = document.createElement('div');
  var listItem = document.createElement("span");
  var bubble = document.createElement("span");

  //adding classed to new items
  listItem.classList.add("task"); //HAHAHAHAHAHAHAH
  bubble.classList.add("bubble");
  taskSection.classList.add("userTask");

  taskSection.appendChild(bubble);
  taskSection.appendChild(listItem);

  list.appendChild(taskSection);

  //need to determine 
  listItem.innerText = value;
  bubble.innerText="O";
  bubble.style.visibility="hidden";
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

//      Delete logic -- we want to check if there are any elements to delete, then delete

var instruction = document.getElementById("interaction");

function helperText() {
  var helpText = document.createElement("p");
  helpText.style = "background-color:lightgreen;";
  instruction.appendChild(helpText);
  helpText.innerText =
    "Hello! Please click on the value you want to get rid of.";

    //all tasks will have the "bubbles" appear
    var tasks = document.querySelectorAll(".bubble");
    tasks.forEach(element => {
        element.style.visibility="visible";
    });
}

function determineTaskToDelete() {
  //then figure out what task to delete
  helperText();
  
}

function isThereTasks() {
  var test = list.children;
  if (test.length <= 2) {
    message = "no task here";
  } else {
    determineTaskToDelete();
  }
}

function deleteItem() {
  isThereTasks();
  //alert(message);
}

//      Complete task logic
function checkTask() {
  //when user completes a task they can toggle it here
}

function unCheckTask() {
  //when use unchecks their task
}
