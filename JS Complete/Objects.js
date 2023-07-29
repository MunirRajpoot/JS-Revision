//Objects
//Access Properties
// let person = {
//     name: "Muneer Rajpoot",
//     age: 19,
//     occupation:"Frontend Developer"

// }
//Using Dot Notations
// console.log(person.name);
// console.log(person.age);
// console.log(person.occupation);

//Using Square Bracket Notations
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["occupation"]);

//Modifying Object Properties

// using Dot and square bracket notataion
// let person = {
//     name: "Muneer Rajpoot",
//     age: 19,
//     occupation:"Frontend Developer"

// }
//Using Dot notation
// person.name="Hello World";

//Using Bracket Notation
// person["age"]=20;

// console.log(person);

//Adding new Properties

// let person={
//     name:"Muneer Rajpoot",
//     city:"Faisalabad"
// }
// person.skillType="Front-End Developer";
// console.log(person.skillType);
// console.log(person);

//Remove Object Properties

// let person={
//     name:"Muneer Rajpoot",
//     city:"Faisalabad",
//     age:19
// }

// delete person.age;
// console.log(person);


//Object Methods

//1.Object.assign()
//This method is used to copy the values of all enumerable properties of one or more source objects to a target object.It returns the target object.
//Syntax
// Object.assign(target,...source)

// const source={name:"Muneer Rajpoot",age:19};
// const target={};

// Object.assign(target,source);
// console.log(target);                 //Output is:{ name: 'Muneer Rajpoot', age: 19 }

