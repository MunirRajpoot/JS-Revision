//For loop


// function printTable(number){
//     for (let index = 1; index <= 10; index++) {
//         console.log(`${number} x ${index} = ${number*index}`);
        
//     }
// }
// printTable(2)

// let length = 13;
// for (let i = 0; i <= length; i++) {

//         for (let j = 0; j < 5; j++) {
//             console.log("Hello");;
// //             // code
//         }
//     console.log(i);
// }

//Continue:Skip the statement
// for(let i = 0; i <= 10; i++) {
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

//Break:Exit the loop
// for(let i = 0; i <= 10; i++) {
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }


// const rows = 5;
// const columns = 10;

// for (let i = 0; i < rows; i++) {
//   let pattern = '';
//   for (let j = 0; j < columns; j++) {
//     pattern += '*';
//   }
//   console.log(pattern);
// }

//For in Loop
// let obj={
//     name:"Munir Rajpoot",
//     age:19,
//     Education:"Undergraduate",
//     city:"Faisalabad"
// }

// for(let key in obj){
//   console.log(`${key} : ${obj[key]}`);  
// }

//For Of Loop
// let fruitsArr=["Banana","Apple","Mango","Orange"];;
// for(let fruitsArray of fruitsArr ){
//     console.log(fruitsArray);
// }





// Arrays

// let age = [5];
// console.log(age[0]);
// age[0]=100;
// console.log(age[0]);

// let age=[5];
// age[13]=100;
// console.log(age);    //Output:[ 5, <12 empty items>, 100 ]

// let age=[12,13,14,15,16,17];
// for(let i=0;i<age.length;i++){
//     console.log(`${age[i]*2}`);
// }


//Maximun Number is find
// let age=[12,-342,23,65];
// let maximumNum=Number.MIN_SAFE_INTEGER;
// for(let i=0;i<age.length;i++){
//     if (maximumNum<age[i]) {
//         maximumNum=age[i];
//     }
// }
// console.log(maximumNum);

//Minimunm Number is Find

// let arr=[1,-3,54,97,-43];
// let miniNum=Number.MAX_SAFE_INTEGER;
// for(let i=0;i<arr.length;i++){
//     if(miniNum>arr[i]){
//         miniNum=arr[i];
//     }
// }
// console.log(miniNum);

