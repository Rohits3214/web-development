let todo = [];

let req = prompt("please enter your request");

while(true) {
    if (req == "quuit") {
        console.log("quitting app");
        break;
    }
    if(req == "list"){ 
       console.log("-----------------")
       for (let i=0; i<todo.length; i++) {
        console.log(task);
       }
       console.log("-----------------");

    }else if (req == "add") {
        let task = prompt ("please enter the tsk you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete") {
        let idx = prompt("please enter the task you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
 req = prompt("please enter your request");
   
}