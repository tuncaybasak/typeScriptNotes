// == Named Functions ==
// A named function is one where you declare and call a function by its given name.

function display() {
  console.log("Hello TypeScript!");
}
display(); //Output: Hello TypeScript 

// Functions can also include parameter types and return type.
function Sum(x: number, y: number) : number {
   return x + y;
}
Sum(2,3); // returns 5

// == Anonymous Function ==
// An anonymous function is one which is defined as an expression. This expression is stored in a variable. So, the function itself does not have a name.
let greeting = function() {
  console.log("Hello TypeScript!");
};
greeting(); //Output: Hello TypeScript! 

// An anonymous function can also include parameter types and return type.
let Sum = function(x: number, y: number) : number
{
  return x + y;
}
Sum(2,3); // returns 5

// == Optional Parameters ==
// TypeScript has an optional parameter functionality. The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
function Greet(greeting: string, name?: string ) : string {
   return greeting + ' ' + name + '!';
}
Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

// == Default Parameters ==
// provides the option to add default values to parameters. So, if the user does not provide a value to an argument, 
// will initialize the parameter with the default value

function Greet(name: string, greeting: string = "Hello") : string {
  return greeting + ' ' + name + '!';
}
Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"

// When the default parameters precede required parameters in a function, they can be called by passing undefined.
function Greet(greeting: string = "Hello", name: string) : string {
  return greeting + ' ' + name + '!';
}
Greet(undefined, 'Steve');//returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"


// == Function Overloading ==
// TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type. 
// However, the number of parameters should be the same.

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve" 
add(10, 20); // returns 30 

// Function overloading with different number of parameters and types with same name is not supported.
function display(a:string, b:string):void //Compiler Error: Duplicate function implementation
{
    console.log(a + b);
}

function display(a:number): void //Compiler Error: Duplicate function implementation
{
    console.log(a);
}


// == Rest Parameters ==

// TypeScript introduced rest parameters to accommodate n number of parameters easily.
// When the number of parameters that a function will receive is not known or can vary, we can use rest parameters

function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello");// returns "Hello !"

// Remember, rest parameters must come last in the function defination, otherwise the TypeScript compiler will show an error. The following is not valid.
function Greet(...names: string[], greeting: string) {  // Compiler Error
    return greeting + " " + names.join(", ") + "!";
}
