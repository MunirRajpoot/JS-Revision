//1.ceil()
//The Math.ceil() method rounds  a number rounded up to the nearest integer.

// console.log(Math.ceil(0.6));      //:1
// console.log(Math.ceil(0.4));      //:1
// console.log(Math.ceil(5));           //:5
// console.log(Math.ceil(5.1));         //:6
// console.log(Math.ceil(-5.1));           //:-5
// console.log(Math.ceil(-5.9));              //:-5

//2.floor()
//The Math.floor() method rounds  a number rounded down to the nearest integer.


// console.log(Math.floor(0.6));      //:0
// console.log(Math.floor(0.4));      //:0
// console.log(Math.floor(5));           //:5
// console.log(Math.floor(5.1));         //:5
// console.log(Math.floor(-5.1));           //:-6
// console.log(Math.floor(-5.9));              //:-6

//3.round()
//The Math.round() method rounds a number to the nearest integer.
//Syntax
//math.round(x);

// console.log(Math.round(2.5));    //:3
// console.log(Math.round(2.45));    //:2
// console.log(Math.round(-2.45));    //:-2
// console.log(Math.round(-2.65));    //:-3


//4.trunc()
//The Math.trunc() method reeturns the integer part of the number.
// And this method removes the decimals
//Note:Does Not Round the Number.

// console.log(Math.trunc(2.5));    //:2
// console.log(Math.trunc(2.45));    //:2
// console.log(Math.trunc(-2.45));    //:-2
// console.log(Math.trunc(-2.65));    //:-2

//5.max(x,y,z,.....,n)
//The Math.max() method returns the number with the highest value.

// console.log(Math.max(0,3,2,45,564,3213,987));           //:3213\
// console.log(Math.max(-1,1));                            //:1

//6.min(x,y,z,....,n)
//The Math.min() method returns the number with the lowest value.

// console.log(Math.min(-1,-34,23,321));    //: -34
// console.log(Math.min(0,5));                   //: 0

//7.Math.PI
//Math.PI returns PI(the ratio of the circle area to the square of its radius.approximately 3.14)

// let x=Math.PI;
// console.log(x);            //: 3.141592653589793

//8.sqrt(x)
//NAN if the number is negative.

// console.log(Math.sqrt(2));          //: 1.4142135623730951
// console.log(Math.sqrt(3*3));          //: 3
// console.log(Math.sqrt(4));          //: 2

//9.cbrt(x)
//The method cbrt() method returns the cubbic root of a number.

// console.log(Math.cbrt(125));         //: 5
// console.log(Math.cbrt(27));          //: 3
// console.log(Math.cbrt(-125));             //: -5
// console.log(Math.cbrt(8));             //: 2

//10.pow(x);
//The Math.pow() method returns the value of the x to the power of y.

// console.log(Math.pow(0,1));          //: 0
// console.log(Math.pow(1,1));         //: 1
// console.log(Math.pow(1,10));           //: 1
// console.log(Math.pow(3,3));               //: 27
// console.log(Math.pow(-3,3));            //: -27
// console.log(Math.pow(-3,-3));             //: -0.037037037037037035

