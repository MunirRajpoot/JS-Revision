//Block and Function Scope
// let name="Muneer";
// {
//     console.log(name);
// }

// {
//     let name="Muneer";
//     console.log(name);
// }

//Default Parameters

// const addTwoNum=(num1=2,num2=3)=>{
//     let result=num1*num2;
//     console.log(result);

// }

// (addTwoNum(undefined,4));

// Rest Parameters

// function print(...rest){
//     console.log(rest);

// }

// let message = ["hm","hello"]
// print('Muneer', message[3], 23, 34, 34, 'remainaing');

//Parameter Destructuring
// let person = {
//     name: 'Hassan',
//     age: 34,
//     country: 'Pakistan',
//     gender: 'Male',
//     running: function(){
//         console.log('running');
//     }
// }


// function printPersonDetails({name, age}){
//     console.log(name, age);
// }

// printPersonDetails(person)

//A Brief intro CallBack Functions


// function func1(){
//     console.log("I am Function 1");
// }
// function func2(func1){

//     console.log("I am Function 2");
//     func1();
// }

// func2(func1);

//Returning Functions

// function fun1(){
//     console.log("Hello Function 1");
// }
// function fun2(){
//     console.log("Hello Function 2");
//     return fun1();
// }
// console.log(fun2());

//Higher Order Functions

//Store Even Numbers in a new array

// let numbers = [3, 324, 34, 234, 23, 6576, 78, 34, 324];
// let evenNum = [];

// for (let i = 0; i < numbers.length; i++) {
//     isEven(numbers[i]);

// }

// function isEven(num) {
//     if (num % 2 == 0) {
//         evenNum.push(num)

//     }
// }
// console.log(evenNum);


//Stored Odd Numbers in a new Array

// let array = [23, 12, 45, 32, 67, 78];
// let oddNum = [];
// for (let i = 0; i < array.length; i++) {
// isOdd(array[i])
// }
// function isOdd(num) {
//       if (num%2 != 0) {
//         oddNum.push(num)
//       }
// }

// console.log(oddNum);

//Sort the Array in Ascending Order

// let numbers = [-23,-324,34,234,23,6576,78,34,324];

// for(let i=0;i<numbers.length;i++){
//     for(let j=0;j<numbers.length-i;i++){
//         if (numbers[i]>numbers[i+1]) {
//             let temp=numbers[i];
//             numbers[i]=numbers[i+1];
//             numbers[i+1]=temp;
//         }

//     }
// }
// console.log(numbers);

//Array Methods

// let numbers=[1,2,3,4];
// let sum=0;
// numbers.forEach(function(element,index){
// sum=sum+element;
// console.log(`Element ${element} Index: ${index} ${sum}`);
// })



