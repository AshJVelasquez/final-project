//      to-do list functions

var list = document.getElementById('to-do-list');


//      Add/Create logic
    function addItem(){
        var item = document.createElement('p');
        //user input box
        var userInput = "1. Hello, this works"

        //creates element with that item
        
        //TODO if null => " "(or does adding nothing make more sense?) else "user input"
        list.appendChild(item);
        item.innerText= userInput;
    }
    console.log(list);

//      Delete logic


//      Complete task logic