// String
// let str = "MuneerRajpoot";
// let str1 = 'Muneer Rajpoot';

//String Methods
//1.length Property
//Returns the length of a string and the length of empty string is 0.

// let name="MuneerRajpoot";
// console.log(name.length);

//2.Includes
//It is used to check whether a string contains the specified string or characrters,returns True/False.

// let name='hey I am Muneer';
// console.log(name.includes('hey'));

//3.toUpperCase()
//This will reeturn the string with all of its characters converted to Uppercase.

// let str="Hello World";
// console.log(str.toUpperCase());;


//4.toLowerCase()
//This will reeturn the string with all of its characters converted to Lowercase.

// let str="Hello World";
// console.log(str.toLowerCase());

//5.startsWith()
//checks whether a string begins with a specified characters,retuns True/False;

// let str="Muneer Rajpoot";
// console.log(str.startsWith('M'));

//Output is:True

//6.endsWith()
//Returns if a string ends with a specified value and returns True/False.

// let str="Muneer Rajpoot";
// console.log(str.endsWith("ot"));

//Output is : true

//7.search()
//tests for a match in a string,It returns the index of the match,or -1 if not found.
// let str="Hello World";
// console.log(str.search(" ")); //Output is : 5
// let str="Hello World";
// console.log(str.search("or")); //Output is : 7

//8.match()
//Exxecutes a search for a match a string based on regular expresssion.It returns an array of information or null if no match is found.

// let str="Hello World";
// console.log(str.match("W"));

// let str="CodeBustler Coder";
// console.log(str.match("Code"));

//9.indexOf()
//Returns the index (Position) of the first occurence of a value in a string.

// let str="Hello World";
// console.log(str.indexOf("or"));

//Output is :7

//10.lastIndexOf()
//Returns the index position of the last occurence of a value in a string.
// let name="hello world";
// console.log(name.lastIndexOf("l"))

//Output is: 9

//11.valueOf()
//Retrns the primitive value of a string or a string object.

// let str="Muneer Rajpoot";
// console.log(str.valueOf());
//Output is:Muneer Rajpoot

//12.trim()
//This function removes the Whitespaces from both ends of a string.

// let str="       Muneer Rajpoot       ";
// console.log(str.trim());

//Output is:Muneer Rajpoot

//13.charAt()
//Returns the character at a specified index(Position).

// let str="Hello World";
// console.log(str.charAt(6));

//Output is : W

//15.concat()

// let str1="Muneer";
// let str2=" Developer";
// console.log(`Hey I am ${str1.concat(str2)}`);

//Output is:Hey I am Muneer Developer

//16.replace()
//Searches a string for a value and returns string where values are replaced.

// let str="Muneer Rajpoot";
// console.log(str.replace("eer","ir"));

//Output is : Munir Rajpoot

//17.replaceAll()
//The replaceAll() methods return a new string with all matches of a pattern replaced by replacemenet.Strings Are Immutable,The Original strings are left unchanged.


// let myStr="I Like dogs because dogs are adorable."
// let pattern="dogs";
// let replacemenet="cats";
// let newstr=myStr.replaceAll(pattern,replacemenet);
// console.log(newstr);

//18.split()
//Splits a string into an array of substrings.

// let message="Welcome to Developers";
// let word=message.split("l");
// console.log(word[0]);   //Output is:We
// console.log(word[1]);     //Output is:come to Deve
// console.log(word[2]);  //Output is:opers
// console.log(word);       //Output is: [ 'We', 'come to Deve', 'opers' ]

//19.repeat()
//This returns a new string with a speecified number of copies of an existing array.

// let str="Muneer Rajpoot Frontend Developer\n";
// console.log(str.repeat(5));

//Output is:
// Muneer Rajpoot Frontend Developer
// Muneer Rajpoot Frontend Developer
// Muneer Rajpoot Frontend Developer
// Muneer Rajpoot Frontend Developer
// Muneer Rajpoot Frontend Developer

//20.toString()
//Returns a string or a string object as a string.
// let number=100;
// console.log(typeof number);
// console.log(number.toString());
// console.log(number);

//21.slice()
//This function returns a substring of a string based on the "start" and "end" arguments.Not including the "end" index itself.

// let text="Excellent";
// console.log(text.slice(0,4));      //Output is:Exce
// console.log(text.slice(2,6));      //Output is:cell

//22.parseInt()
//The Number.parseInt() method parses a value as a string and returns the first integer.

//Number.parseInt(value)

// console.log(Number.parseInt("10"));   //:10
// console.log(Number.parseInt("10.00"));   //:10
// console.log(Number.parseInt("10.33"));   //:10
// console.log(Number.parseInt("10 30 40"));    //:10
// console.log(Number.parseInt("  30  "));       //:30
// console.log(Number.parseInt("10 years"));     //:10
// console.log(Number.parseInt("years 40"));     //:NaN

//23.parseFloat()
//The Number.parseFloat() method parses a value as a string and returns the first integer.

// console.log(Number.parseFloat("10.03"));
//Same as parseInt just return full value after point.

//JavaScript Number Methods
//24.toExponential()
//The toExponential() methods converts anumber into an exponential notation.
// let number=5.67845;
// console.log(number.toExponential(5));


//25.toFixed()
//The toFixed() method converts a number to string.And this method rounds the string to a specifiedd number of decimals.

// let num=45.5423;
// console.log(num.toFixed(6));   //:45.452300


// let num=45.3421434;
// console.log(num.toFixed(2));        //:45.34

//26.toPrecision()
//The toPrecision() methods foramts a number to a specified length.
// A decimal point and nulls are added to if needed to created to specified length.

// let number=12.3442;
// console.log(number.toPrecision(4));   //:12.34

// let number=0.000231313421;
// console.log(number.toPrecision(2));      //:0.00023
// console.log(number.toPrecision(4));         //:0.0002313
// console.log(number.toPrecision(15));         //:0.000231313421000000

//27.valueOf()
//The value of method returns the primitive value of a number.

// let num=145;
// console.log(num.valueOf());


//Number Object methods
//28.Number.isInteger()
// The Number.isInteger() method returns true or false if the argument is integer.

// console.log(Number.isInteger(7));                   //:true
// console.log(Number.isInteger(7.376));               //:false




