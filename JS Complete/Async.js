//Cocurrency
//Synchronous:Blocking Behaviour
//Asynchronous:Non Blocking Behaviour

const { log } = require("async");

//CallBacks
//  This is just like a function that passes as argument to another function


// function doSomething(callBack) {
// callBack();
// }
// function sayHi(){
//     console.log(`Say Hi...`);
// }
// doSomething(sayHi);

// function greet(name){
//     console.log(`Hello! ${name("Muneer")}`);
// }
// function fullName(name){
// return name;
// }
// greet(fullName);

//Promises


let prom=new Promise(function(resolved,rejected){
let a=false;
if(a===true){
    resolved(a);
}
rejected(a);
});
prom.then(function(value){
    console.log(`${value} is resolved.... `)
},
function(error){
    console.log(`${error} is rejected`);
},
);



















