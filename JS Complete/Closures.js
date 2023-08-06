//A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical Environment).
//In other words,a closure gives you access to an outer function's scope form an inner function.
//In javaScript,closure are created every time a function is created,at functioon creation time.

//Example
// function outerFunction(){
//     const outerVariable="I am from the outer function.";
//     function innerFunction(){
//         console.log(outerVariable);
//         //Inner Function has access to variable.
//     }
//     return innerFunction;
// }
// const closureExample=outerFunction();
// closureExample();

// let c=2;
// function outer(){
//     let b=3;
//     function inner(){
//         let a=4;
//         return a+b+c;
//     }
//     return inner;
// }
// let innerFunc=outer();
// console.log(innerFunc());

//Basic Closure

// let num1=5;
// function outerFunction(){
//     let num2=2;
//     console.log("Something going on..");
//     function innerFunction(){
//         console.log(`num: ${num1+num2}`);
//     }
//     return innerFunction;
// }
// let innerFunc=outerFunction();
// innerFunc();

//Loop Closure
// function print(i){
//     return function(){
//         console.log(i);
//     }
// }
// let printFunctions=[];
// for(let index=0;index<5;index++){
//     printFunctions.push(print(index))
// }
// printFunctions[0]();
// printFunctions[1]();
// printFunctions[2]();
// printFunctions[3]();
// printFunctions[4]();


//closures in a loop
// function createCounter(){
//     let count=0;
//     return function(){
//         return ++count;
//     }
// }
// const counter1=createCounter();
// console.log(counter1());
// console.log(counter1());

// const counter2=createCounter();
// console.log(counter2());
// console.log(counter2());


//Private variable Using closures

// function createPerson(name) {
//     let PrivateName = name;

//     return {
//         getName: function () {
//             return PrivateName;
//         },
//         setName: function (newName) {
//             PrivateName = newName;

//         }
//     };
// }
// const person=createPerson("Muneer");
// console.log(person.getName());
// person.setName("Rajpoot");
// console.log(person.getName());


//CallBacks and Closures

// function greet(name){
//     console.log(`Hello! I am ${name}`);
// }
// function greetWithDelay(name,delay){
//     setTimeout(()=>{
//         greet(name);
//     },delay);
// }

// greetWithDelay("Muneer",2000)

//Currying using Closures

// function curryAdd(x){
//     return function(y){
//         return x+y;
//     }
// }
// const add5=curryAdd(5);
// console.log(add5(3));              //Output is: 8
// console.log(add5(7));              //Output is: 12

