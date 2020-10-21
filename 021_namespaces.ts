// Namespaces

// The namespace is used for logical grouping of functionalities. 
// A namespace can include interfaces, classes, functions and variables to support a single or a group of related functionalities

// StringUtility.ts
namespace StringUtility {

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    export function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }
}

// Let's use the above StringUtility namespace in the Employee module, as shown below.
/// <reference path="StringUtility.ts" />
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}

// Namespace                                                                            	
// Must use the namespace keyword and the export keyword to expose namespace components.	
// Used for logical grouping of functionalities with local scoping.	
// To use it, it must be included using triple slash reference syntax e.g. ///<reference path="path to namespace file" />.	
// Compile using the --outFile command.	
// Must export functions and classes to be able to access it outside the namespace.	
// Namespaces cannot declare their dependencies.	
// No need of module loader. Include the .js file of a namespace using the <script> tag in the HTML page.	

// Module
// Uses the export keyword to expose module functionalities.
// Used to organize the code in separate files and not pollute the global scope.
// Must import it first in order to use it elsewhere.
// Compile using the --module command.
// All the exports in a module are accessible outside the module.
// Modules can declare their dependencies.
// Must include the module loader API which was specified at the time of compilation e.g. CommonJS, require.js etc.
