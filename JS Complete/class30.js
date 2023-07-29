//Iterables

// let str="Muneer";
// for(let char of str){
//     console.log(char);
// }

// const person = {
//     name: "Muneer",
//     age: 19,
//     education: "undergraduate"
// }

// for (let key in person) {
//     console.log(key , person[key]);
// }


//Sets

// const arr=[1,2,34,3,5,5,4];

// Optional chaining


const person = {
    name: 'anas',
    age: 23,
    university: 'Riphah',
    hobbies: ['sleeping', 'sleeping', 'sleeping'],
    skillType:{
        technical: ['python', 'java'],
        nonTechnical: ['presentation', 'communication']
    }
}

console.log(person?.skillType?.technical);
