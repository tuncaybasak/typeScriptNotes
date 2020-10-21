// Type Assertion
// Type assertion allows you to set the type of a value and tell the compiler not to infer it
// There are two ways to do type assertion in TypeScript

// 1. Using the angular bracket <> syntax. So far in this section, we have used angular brackets to show type assertion.
let code: any = 123; 
let employeeCode = <number> code; 

// 2. Using as keyword
//Example: as syntax Copy
let code: any = 123; 
let employeeCode = code as number;

// while dealing with JSX in TypeScript, only the as syntax is allowed

// Type Assertion with Object
interface Employee { 
    name: string; 
    code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123; // OK

// exmp
let employeeCode = <number> myJSLib.GetEmployeeCode('Steve');
console.log(typeof(employeeCode)); // number
