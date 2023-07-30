//Cocurrency
//Synchronous:Blocking Behaviour
//Asynchronous:Non Blocking Behaviour

//CallBacks
//  This is just like a function that passes as argument to another function


// function doSomething(callBack) {
// callBack();
// }
// function sayHi(){
//     console.log(`Say Hi...`);
// }
// doSomething(sayHi);

function greet(name){
    console.log(`Hello! ${name("Muneer")}`);
}
function fullName(name){
return name;
}
greet(fullName);

















