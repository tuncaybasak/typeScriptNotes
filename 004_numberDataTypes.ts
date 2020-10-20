// Number
// Just like JavaScript, TypeScript supports number data type. All numbers are stored as floating point numbers

let first:number = 123; // number 
console.log(first);  // 123 

// Number Methods
toExponential()   	Returns the exponential notation in string format.
toFixed()	          Returns the fixed-point notation in string format.
toLocaleString()	  Converts the number into a local specific representation of the number.
toPrecision()	      Returns the string representation in exponential or fixed-point to the specified precision.
toString()	        Returns the string representation of the number in the specified base.
valueOf()	          Returns the primitive value of the number.

// toExponential()
// The toExponential method returns the exponential notation of a number in string format

let myNumber: number = 123456;
myNumber.toExponential(); // returns 1.23456e+5
myNumber.toExponential(1); //returns 1.2e+5
myNumber.toExponential(2); //returns 1.23e+5
myNumber.toExponential(3); //returns 1.235e+5

// toFixed()
// The toFixed method returns the fixed-point notation of a number in string format.

let myNumber: number = 10.8788;
myNumber.toFixed(); // returns 11
myNumber.toFixed(1); //returns 10.9
myNumber.toFixed(2); //returns 10.88
myNumber.toFixed(3); //returns 10.879
myNumber.toFixed(4); //returns 10.8788

// toLocaleString()
// The toLocaleString method converts the number into a local specific representation of the number.

let myNumber: number = 10667.987;
myNumber.toLocaleString(); // returns 10,667.987 - US English
myNumber.toLocaleString('de-DE'); // returns 10.667,987 - German
myNumber.toLocaleString('ar-EG'); // returns 10667.987 in Arebic

// toPrecision()
// The toPrecision method returns the string representation in exponential or fixed-point to the specified precision.

let myNumber: number = 10.5679;
myNumber.toPrecision(1); // returns 1e+1
myNumber.toPrecision(2); // returns 11
myNumber.toPrecision(3); // returns 10.6
myNumber.toPrecision(4); // returns 10.57

// toString()
// The toString method returns a string representation of the number in the specified base.

let myNumber: number = 123;
myNumber.toString(); // returns '123'

// valueOf()
// The valueOf method returns the primitive value of the number.

let myNumber = new Number(123);
console.log(myNumber) //Output: a number object with value 123
console.log(myNumber.valueOf()) //Output: 123
console.log(typeof num) //Output: object

let num2 = num.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2) //Output: number





