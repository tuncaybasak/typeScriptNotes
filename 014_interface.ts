// Interfaces
// It defines the syntax for classes to follow.
// The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking.

interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string; 
}

// Interface as Type
// Interface in TypeScript can be used to define a type and also to implement it in the class

interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Steve" }; // OK
let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 

// Interface as Function Type
// TypeScript interface is also used to define a type of a function. This ensures the function signature.

interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}
    
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 

// Interface for Array Type
// An interface can also define the type of an array where you can define the type of index as well as values.
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index:string]:string
}

let strArr : IStringList;
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

// Optional Property
// Sometimes, we may declare an interface with excess properties but may not expect all objects to define all the given interface properties. 
// We can have optional properties, marked with a "?". In such cases, objects of the interface may or may not define these properties.
interface IEmployee {
    empCode: number;
    empName: string;
    empDept?:string;
}

let empObj1:IEmployee = {   // OK
    empCode:1,
    empName:"Steve"
}

let empObj2:IEmployee = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}

// Read only Properties
// TypeScript provides a way to mark a property as read only. This means that once a property is assigned a value, it cannot be changed!

interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }
personObj.name = 'Steve Smith'; // OK
personObj.SSN = '333666888'; // Compiler Error

// Extending Interfaces
// Interfaces can extend one or more interfaces. This makes writing interfaces flexible and reusable.
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}

// Implementing an Interface
// Similar to languages like Java and C#, interfaces in TypeScript can be implemented with a Class. 
// The Class implementing the interface needs to strictly conform to the structure of the interface.

interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(number)=>number;
}

class Employee implements IEmployee { 
    empCode: number;
    name: string;

    constructor(code: number, name: string) { 
                this.empCode = code;
                this.name = name;
    }

    getSalary(empCode:number):number { 
        return 20000;
    }
}

let emp = new Employee(1, "Steve");


























