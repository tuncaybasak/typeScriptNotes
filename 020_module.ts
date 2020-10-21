// Modules
// The TypeScript code we write is in the global scope by default. 
// If we have multiple files in a project, the variables, functions, etc. written in one file are accessible in all the other files.

// file1.ts
var greeting : string = "Hello World!";

// file2.ts 
// console.log(greeting); //Prints Hello World!
// greeting = "Hello TypeScript"; // allowed

// The above variable greeting, declared in file1.ts is accessible in file2.ts as well. Not only it is accessible but also it is open to modifications. 
// Anybody can easily override variables declared in the global scope without even knowing they are doing so! 
// This is a dangerous space as it can lead to conflicts/errors in the code.

// TypeScript provides modules and namespaces in order to prevent the default global scope of the code and also to organize and maintain a large code base.

// Modules are a way to create a local scope in the file. So, all variables, classes, functions, etc. that are declared in a module are not accessible outside the module. 
// A module can be created using the keyword export and a module can be used in another module using the keyword import.

// file1.ts
export var greeting : string = "Hello World!";

// file2.ts
// console.log(greeting); //Error: cannot find 'greeting'
// greeting = "Hello TypeScript"; 

// Export
// A module can be defined in a separate .ts file which can contain functions, variables, interfaces and classes. 
// Use the prefix export with all the definitions you want to include in a module and want to access from other modules.

export let age : number = 20;
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}
let companyName:string = "XYZ

// Import
// A module can be used in another module using an import statement.

// Importing a Single export from a Module:
import { Employee } from "./Employee";
let empObj = new Employee("Steve Jobs", 1);
empObj.displayEmployee(); //Output: Employee Code: 1, Employee Name: Steve Jobs  


// Importing the Entire Module into a Variable
import * as Emp from "./Employee"
console.log(Emp.age); // 20

let empObj = new Emp.Employee("Bill Gates" , 2);
empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates

// In the above example, we import all the exports in Employee module in a single variable called Emp. 
// So, we don't need to write an export statement for each individual module.

// Renaming an Export from a Module:
// You can change the name of an export as shown below.

import { Employee as Associate } from "./Employee"
let obj = new Associate("James Bond" , 3);
obj.displayEmployee();//Output: Employee Code: 3, Employee Name: James Bond








