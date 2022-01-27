// -------------------- BUGS TO BE FIXED ------------------------- //
// fix that after each time of adding a task , asks for action number. would be nice if it did it until user asks to stop.
// What is class and what is an object? 

const prompt = require('prompt-sync')();
const fs = require('fs');

const printManager = () => {
    console.log("Welcome to your task manager, Press:\n1. to see all your tasks\n2. to add a task\n3. to delete a task\n4. to mark a task as done\n5. to Exit the task manager");
}
printManager();

let taskArray = [];
let answer = parseInt(prompt("Enter your action's number:"));

while(answer!=5) {

    if(answer===1){
        console.log(taskArray);
        answer = parseInt(prompt("Enter your action's number:"));
    }
    else if(answer===2){
            //let task = new myTask();
            const task = {} ;
            task.action=prompt("Enter your task:");
            task.isDone=false;
            taskArray[taskArray.length]={task};
            //taskArray.push(task);
            answer = parseInt(prompt("Enter your action's number:"));
        
    }
    else if(answer===3){
        let indexOfTask = parseInt(prompt("Enter which task to delete (number):")); 
        taskArray.splice(indexOfTask,1);
        answer = parseInt(prompt("Enter your action's number:"));
    }
    else if(answer==4){
        let indexOfTask = parseInt(prompt("Which task to mark as done? (number):")); 
        taskArray[indexOfTask].task.isDone = true;
        answer = parseInt(prompt("Enter your action's number:"));
    }
    else {
        answer = parseInt(prompt("No such action. Enter your action's number:"));
    }
}

let data = JSON.stringify(taskArray);
fs.writeFileSync('data.json',data ,(err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

