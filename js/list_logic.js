//      to-do list functions

var list = document.getElementById('to-do-list');
var item ="";

//      Add/Create logic
    function removeUserInput(){
        //getting rid of user inputs
        var garbo = document.querySelector("form");
        list.removeChild(garbo);
    }

    function addItem(value){
        //adding item
        var listItem=document.createElement('p');
        list.appendChild(listItem);
        listItem.innerText=value;
    }

    function askUserInput(){
        var input = document.createElement('form');
        input.innerHTML=
        "<input type='text' name='to-do-item' id ='userItem' placeholder='Insert To Do Item' onchange='checkValue(this.value)'> <button type='button' onclick='getItem()'>Add to List</button>";

        list.appendChild(input);
    }

    function getItem(){
        if(item==null || item=="Insert To Do Item" ||item==""){
            alert('No task added. Error: '+item);
        }
        else{
            addItem(item);
            removeUserInput();
        }
    }

    function checkValue(value){
            item=value;
    }


//      Delete logic


//      Complete task logic