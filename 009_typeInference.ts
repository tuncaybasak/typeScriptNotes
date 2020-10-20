// Type Inference in TypeScript
// TypeScript is a typed language. However, it is not mandatory to specify the type of a variable. 
// TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

// Types are inferred by TypeScript compiler when:

// Variables are initialized
// Default values are set for parameters
// Function return types are determined

// example 1
var a = "some text";
var b = 123;
a = b; // Compiler Error: Type 'number' is not assignable to type 'string'

// example 2
var arr = [0, 1, "test"]; 
arr.push("str") // OK
arr.push(true); // Compiler Error: Argument of type 'true' is not assignable to parameter of type 'string | number'

// example 3
function sum(a: number, b: number )
{
    return a + b;    
}
var total: number = sum(10,20); // OK
var str: string = sum(10,20); // Compiler Error 
