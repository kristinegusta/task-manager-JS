const prompt = require('prompt-sync')();
//Funtion to find index of an element
function findIndex(element,array){
    let index = -1;
    for(let i=0; i<array.length; i++){
        if(array[i]==element){
            index = i;
        }
        else {
            continue;
        }
    }
    return index;
}
/*
let array =["pizza","macaroni","tomato","mushroom"];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}
let remove = prompt("Enetr");
console.log(findIndex(remove,array));
let index = findIndex(remove,array);

for( var i = 0; i < array.length; i++){ 
    
    if ( array[i] == remove) { 

        array.splice(i, 1); 
    }
}
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}
*/

console.log("Welcome to Pizza flavor manager!");
console.log("Please choose your actions:");
console.log("1 - List all the pizza flavors");
console.log("2 - Add a new pizza flavor");
console.log("3 - Remove a pizza flavor");
console.log("4 - Exit this program");

let answer = parseInt(prompt("Enter your action's number:"));

let action;
let flavors = [];
let flavorRemove;
let indexToRemove;

/*do {
    
}
while(answer!=4)
*/
while(answer!=4) {
    if(answer==1){
        for(let i=0; i<flavors.length; i++){
            console.log(flavors[i]);
        }
        answer = parseInt(prompt("Enter your action's number:"));
    }
    else if(answer==2){
        flavors[flavors.length] = prompt("Enter your pizza flavor:");
        answer = parseInt(prompt("Enter your action's number:"));

        //use push
    }
    else if(answer==3){
        //Find the index of the given flavor
        flavorRemove = prompt("Enter your pizza flavor to remove:");
        indexToRemove = findIndex(flavorRemove,flavors);
        //remove the string from array
        for( var i = 0; i < flavors.length; i++){ 
    
            if ( i == indexToRemove) { 
        
                flavors.splice(i, 1); 
            }
        }
        answer = parseInt(prompt("Enter your action's number:"));
    }   
    else {
        console.log("No such action");
        answer = parseInt(prompt("Enter your action's number:"));
    }
}




function findIndex(element,array){
    let index = -1;
    for(let i=0; i<array.length; i++){
        if(array[i]==element){
            index = i;
        }
        else {
            continue;
        }
    }
    return index;
}
