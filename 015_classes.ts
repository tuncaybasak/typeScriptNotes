// Classes
// The class in TypeScript is compiled to plain JavaScript functions by the TypeScript compiler to work across platforms and browsers.

//exmp1
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}

// The TypeScript compiler will convert the above class to the following JavaScript code using closure
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
        return Employee;
}());
