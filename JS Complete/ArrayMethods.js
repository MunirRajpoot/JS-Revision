//1.toString()
//Returns String with array values seperated by commas(,)
// let array=[1,2,3];
// let newArr=array.toString();
// console.log(newArr);
// console.log(array.toString());

//2.join(seperator)
//Return array as string,Any seperator can be specified,The default is comma(,)
// let array=["Hello" , "World"];
// console.log(array.join("@@"));
// console.log(array.join("-"));


//3.Sort
//Sort the slements of array Strings in alphabetically and ascending order.
// let nums=[34,21,54,52]
// console.log(nums.sort());

// let str=["b","m","a"];
// console.log(str.sort());

//4.reverse()
// Reversee the order of Element in array

// let array=[1,2,3,4,5];
// console.log(array.reverse());

// let alpha=["a","b","c"];
// console.log(alpha.reverse());

//5.isArray()
//Returns True if an object is an array

// let array=[1,2,3];
// let str="hello World";
// console.log(Array.isArray(array));
// console.log(Array.isArray(str));

//6.indexOf()
//Returns the first index of a specified value,-1 if the value is not found.
//indexOf("searchitem",start)
// let arr=["a","b","c","d","c"];
// console.log(arr.indexOf("b",0));  //Output is:1
// console.log(arr.indexOf("c",3));

// let arr=[1,2,3,2,4,1];
// console.log(arr.indexOf(1,0));
// console.log(arr.indexOf(2,2));

//7.lastIndexOf()
//Returns the last index of a specified value -1 if the value is not found.
//let arr=["a","b","c","d"];
//console.log(arr.lastIndexOf("b",2));   //Output is :1
//console.log(arr.lastIndexOf("c",1));   //Output is :-1

//8.find()
//Returns first element in the array if the provided function test passed ,else undefined.

// let array = [44, 55, "a", "b", 66, 77];
// console.log(array.find((e) =>  e > "a"));
// console.log(array.find((e) =>  e > 60));

//9.findIndexOf()
//Returns index of first element that passes that test,-1 if no match is found.

// let array = [44, 55, "a", "b", 66, 77];
// console.log(array.findIndex((e)=>e>50));

//10.every()
//Tests whether all elementsint he array pass the test,Returns Boolean True/False.
//let array=[12,23,45,9,32,53];
//console.log(array.every((e)=>e>10));  //Output is: true
//console.log(array.every((e)=>e>10));    //Output is: false

//11.some()
//Tests whether atleast one element in the array passes the test,Returns True/False

// let array=[10,12,23,34,45];
// console.log(array.some((e)=>e>40));   //Output is: true
// console.log(array.some((e)=>e>50));   //Output is: False

//12.include()
//Wheather an array includes a certain value among its entries,Returns True/False

// let array=[1,2,3,4,"Muneer"];
// console.log(array.includes(2));   //Output is true
// console.log(array.includes(5));   //Output is False
// console.log(array.includes("Muneer"));   //Output is True

//13.fill(value,start,end)
//Fills specified element in the array with a value if! specified all element will e filled 

// let array=[1,2,3,4,5,6,7];
// console.log(array.fill(100,1,6));


//14.lenght Property
//The length property returns the length(size) of an array.

// let array=[1,2,3,4,5];
// console.log(array.length);

//15.delelte Operator
//Deletes array elements and leaves undefined holes in array,use pop() or shift() instead

// let array=[1,2,3,"Muneer",5,6];
// console.log(delete array[3]);
// console.log(array);

//Output is:[ 1, 2, 3, <1 empty item>, 5, 6 ]

//16.forEach(callback,Arg)
//Executes provided function once for each element not execute for empty elements

// array.forEach(function(currentValue, index, array) {
//     // Code to be executed for each element
//   });

// let array=[1,2,3,4,5,6];
// let numbers=array.forEach((number,index)=>console.log(`Element at ${index} is ${number}`))
  

//17.map(callbackFunc,thisArg)
//Creates new array populated with results of calling a provided function on Every element.

// let arr=[14,23,32,47];
// let a=arr.map((value,index,array)=>{
//     console.log(value , index , array);
//     return value + index;
// })

// console.log(a);

//18.filter(callbackFunc,arg)
//Creates a new array filled with elements that pass a test providedd by a function,

// let arr=[12,23,43,2,1,3,0];
// let a2=arr.filter((value)=>{
//     return value<10;
// })
// console.log(a2);
// a2.sort();
// console.log(a2);


//19.reduce(callbackFunc,initValue)
//Applies a functioon to reduce a the arraay to single value (From left to right)
// let array=[2,3,4,5];
// let newArr=array.reduce((m1,m2)=>{
//     return m1+m2
// })
// console.log(newArr);


// let numberArray=[2321];
// let arrayLength=numberArray.length;
// console.log(arrayLength);