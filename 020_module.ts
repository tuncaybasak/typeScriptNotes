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
