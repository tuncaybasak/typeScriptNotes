// ## if else ##

let x: number = 10, y = 20;
if (x > y) 
{
    console.log('x is greater than y.');
} 
else if (x < y)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) 
{
    console.log('x is equal to y');
}


// ## Ternary operator ##
// It checks for a boolean condition and executes one of the two statements, depending on the result of the boolean condition.

let x: number = 10, y = 20;
x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')


// ## switch ##

let day : number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}


// ## TypeScript - for Loops ##

//for Loop

for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}

// for...of Loop
// TypeScript includes the for...of loop to iterate and access elements of an array, list, or tuple collection

let arr = [10, 20, 30, 40];
for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

let str = "Hello World";
for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

// for...in Loop
// This can be used with an array, list, or tuple. The for...in loop iterates through a list or collection and returns an index on each iteration.

let arr = [10, 20, 30, 40];
for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}


// ## while Loop ##
let i: number = 2;
while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}

// do while
let i: number = 2;
do {
    console.log("Block statement execution no." + i )
    i++;
} while ( i < 4)
