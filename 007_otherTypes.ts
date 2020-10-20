// ## Boolean ##
// Boolean values are supported by both JavaScript and TypeScript and stored as true/false values
let isPresent:boolean = true;


// ## Tuple ##
// TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.

var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

// You can declare an array of tuple also
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

// Accessing Tuple Elements
var employee: [number, string] = [1, "Steve"];
employee[0]; // returns 1
employee[1]; // returns "Steve"

// Add Elements into Tuple
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill"); 
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']


// ## Union ##
// TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.

// example 1
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

// example 2
function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number


// ## Any ##
// TypeScript has type-checking and compile-time checks. However, we do not always have prior knowledge about the type of some variables, especially 
// when there are user-entered values from third party libraries. In such cases, we need a provision that can deal with dynamic content. The Any type comes in handy here

let something: any = "Hello World!"; 
something = 23;
something = true;

// The above code will compile into the following JavaScript.
var something = "Hello World!";
something = 23;
something = true;

// Any type Array
let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 

// The above example will generate the following JavaScript code:
var arr = ["John", 212, true];
arr.push("Smith");
console.log(arr);


// ## Void ##
// Similar to languages like Java, void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.

function sayHi(): void { 
   console.log('Hi!')
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined


