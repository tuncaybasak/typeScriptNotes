// Boolean
// Boolean values are supported by both JavaScript and TypeScript and stored as true/false values
let isPresent:boolean = true;

// Tuple
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


