//Dot vs Bracket Notation
// const person = {
//     name: 'Muneer',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
// };
// person.name="Saif";
// console.log(person);

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }


// const person = {
//     name: 'Muneer',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
// };

// console.log(person['hobbies']);
// console.log(person.hobbies);

// let key = 'email';
// let value = 'anas@gmail.com';

// let user = {
//     [key]: value,
// }
// console.log(user);

// itrate objcts
// const person = {
//     name: 'Anas',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
//     i: 'test'
// };

// for(let i in person){
//     console.log( i,person[i]);
// }

//Spread Operators in Array Revise
// let cars=["Mehran","Civic","Alto"];
// let bikes=["Yamaha","Honda","YBR"];
// let vehicles=[...cars,...bikes];
// console.log(vehicles);

// let laptop={
//     company:"HP",
//     ram:4,
//     rom:1000
// }
// let mobile={
//     company1:"Qmobile",
//     ram1:2,
//     rom1:16
// }
// let gadgets={
//     ...laptop,
//     ...mobile,
//     company2:"abc"
// }
// console.log(gadgets);


//Destructuring

// let fruits=["Mango","Apple","Orange","PineApple","Banana"];
// let [fruit1,fruit2,...remainingFruits]=fruits;
// console.log(remainingFruits);
// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit1,fruit2,remainingFruits);

// let person={
//     name:"Muneer",
//     education:"Undergraduate",
//     age:19,
//     city:"Faisalabad",
//     hobbies:["Sleeping","Gardening"]
// }

// let {name:newName,age,hobbies}=person;
// console.log(newName,age,hobbies[1]);

let array=[
    {
        uid: 1,
        title: 'learn python in 5 minutes',
        thumbnail: 'https://',
        video: 'askldsljd',
    },
    {
        uid: 2,
        title: 'learn python in 5 minutes',
        thumbnail: 'https://',
        video: 'askldsljd',
    },
    {
        uid: 3,
        title: 'learn python in 5 minutes',
        thumbnail: 'https://',
        video: 'askldsljd',
    }
]
let [{video}, ,{uid}]=array;
console.log(uid,video);