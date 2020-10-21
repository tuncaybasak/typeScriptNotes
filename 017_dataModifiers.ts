// Data Modifiers
// In object-oriented programming, the concept of 'Encapsulation' is used to make class members public or private i.e. 
// a class can control the visibility of its data members. This is done using access modifiers.

// There are three types of access modifiers in TypeScript: public, private and protected.

// public
// By default, all members of a class in TypeScript are public. All the public members can be accessed anywhere without any restrictions.

class Employee {
    public empCode: string;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";

// private
// The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.

class Employee {
    private empCode: number;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati";//OK

// protected
// The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.

class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
empObj.empCode; //Compiler Error
