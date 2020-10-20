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
