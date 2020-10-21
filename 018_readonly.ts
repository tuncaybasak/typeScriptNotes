// ReadOnly
// the readonly keyword that makes a property as read-only in the class, type or interface.
// Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed.
// it can be initialized at the time of declaration or in the constructor.

//exmp1 
class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error

// An interface can also have readonly member properties.
interface IEmployee {
    readonly empCode: number;
    empName: string;
}

let empObj:IEmployee = {
    empCode:1,
    empName:"Steve"
}

empObj.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
