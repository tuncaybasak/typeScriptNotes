// Variables can be declared using: var, let, and const.

// var
// Variables in TypeScript can be declared using var keyword, same as in JavaScript. The scoping rules remains the same as in JavaScript.

// let
// To solve problems with var declarations, ES6 introduced two new types of variable declarations in JavaScript, using the keywords let and const. 
// TypeScript, being a superset of JavaScript, also supports these new types of variable declarations.

// Variable Declaration using let
let employeeName = "John";
// or 
let employeeName:string = "John";

// Advantages of using let over var

// 1 Block-scoped let variables cannot be read or written to before they are declared.
console.log(num1); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
let num1:number = 10 ;

console.log(num2); // OK, Output: undefined 
var num2:number = 10 

// 2) Let variables cannot be re-declared
var num:number = 1; // OK
let num:number = 5;// Compiler Error: Cannot redeclared block-scoped variable 'num'

//Same Variable Name in Different Blocks
let num:number = 1; 

function demo() {
    let num:number = 2;

    if(true) { 
        let num:number = 3;
        console.log(num); //Output: 3
    }

    console.log(num);//Output: 2
}
console.log(num); //Output: 1
demo();

// Const

// Variables can be declared using const similar to var or let declarations. The const makes a variable a constant where its value cannot be changed. 
// Const variables have the same scoping rules as let variables.

const num:number = 100;
num = 200; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property
