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
