// TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. 
// We can specify the type using :Type after the name of the variable, parameter or property. 

var age: number = 32; // number variable
var name: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable

// You cannot change the value using a different data type other than the declared data type of a variable
// If you try to do so, TypeScript compiler will show an error. This helps in catching JavaScript errors.

// Type annotations are used to enforce type checking. It is not mandatory in TypeScript to use type annotations
// It is also a good way of writing code for easier readability and maintenance by future developers working on your code

// Type Annotation of Parameters
function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}

// Type Annotation in Object
var employee : { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}
