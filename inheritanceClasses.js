class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + " " + this.surname + " " + this.salary;
    }
    getSalary() {
        console.log(this.salary); ;
    }
    increaseSalary() {
        this.salary += this.salary * 0.1;
        return this.salary;
    }
}

class Developer extends Employee {
    constructor(name, surname, salary, spec) {
        super(name, surname, "developer", salary);
        this.spec = spec;
    }
    getSpecialization() {
        console.log(this.spec); ;
    }
}

class Manager extends Employee {
    constructor(name, surname, salary, department) {
        super(name, surname, "manager", salary);
        this.department = department;
    }
    getDepartment() {
        console.log(this.getDepartment);;
    }
    changeDepartment(department) {
        this.department = department;
        return this.department;
    }
    
}
var x = new Manager ("Pera", "Peric", 1000, "CS");
var y = new Developer ("Dijana", "Radojevic", 2000, "Front-End");
console.log(x.increaseSalary());
console.log(x.getSalary());
console.log(y.getSpecialization());