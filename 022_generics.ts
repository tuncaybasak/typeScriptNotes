// Generics
// Generics provide a way to make components work with any data type and not restrict to one data type. 
// So, components can be called or used with a variety of data types.

// Let's see why we need Generics using the following example.
function getArray(items : any[] ) : any[] {
    return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK

console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

// We may want to add the numbers to number array or the strings to the string array but not numbers to the string array or vice-versa

// To solve this, TypeScript introduced generics. 
function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // Compiler Error
myStrArr.push(500); // Compiler Error

// Multiple Type Variables:
//We can specify multiple type variables with different names as shown below.

// Multiple Type Variables
function displayType<T, U>(id:T, name:U): void { 
  console.log(typeof(id) + ", " + typeof(name));  
}

displayType<number, string>(1, "Steve"); // number, string

// Generic with Non-generic Type
function displayType<T>(id:T, name:string): void { 
  console.log(typeof(id) + ", " + typeof(name));  
}

displayType<number>(1, "Steve"); // number, string

// Methods and Properties of Generic Type
// When using type variables to create generic components, TypeScript forces us to use only general methods which are available for every type.
function displayType<T, U>(id:T, name:U): void { 
    
    id.toString(); // OK
    name.toString(); // OK

    id.toFixed();  // Compiler Error: 'toFixed' does not exists on type 'T'
    name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'

    console.log(typeof(id) + ", " + typeof(name));  
}

// Generic Array Methods
function displayNames<T>(names:T[]): void { 
    console.log(names.join(", "));  
}

displayNames<string>(["Steve", "Bill"]); // Steve, Bill


// Generic Constraints
// As mentioned above, the generic type allows any data type. However, we can restrict it to certain types using constraints. Consider the following example:

class Person {
    firstName: string;
    lastName: string;

    constructor(fname:string,  lname:string) { 
        this.firstName = fname;
        this.lastName = lname;
    }
}

function display<T extends Person>(per: T): void {
    console.log(`${ per.firstName} ${per.lastName}` );
}
var per = new Person("Bill", "Gates");
display(per); //Output: Bill Gates

display("Bill Gates");//Compiler Error














