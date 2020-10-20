// Arrow Functions
// Fat arrow notations are used for anonymous functions i.e for function expressions.
// They are also called lambda functions in other languages.
 
// exmp1 
let sum = (x: number, y: number): number => {
    return x + y;
}
sum(10, 20); //returns 30

// exmp2
let sum = (x: number, y: number) => x + y;
sum(3, 4); //returns 7

// Arrow Function in Class
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display();
