//Employees and Managers

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;


    Employee.prototype.getData = function() {
        return this.name + " " + this.surname + " " + this.salary;
    }
    Employee.prototype.getSalary = function() {
        return this.salary;
        
    }
    Employee.prototype.increaseSalary = function() {
        this.salary += this.salary * 0.1;
        return this.salary;
    }


function Developer(name, surname, salary, spec) {
    Employee.call(this, name, surname, 'developer', salary);

    this.spec = spec;
}
    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;

    Developer.prototype.getSpecialization = function() {
        console.log(this.spec); ;
    }

function Manager(name, surname, salary, department) {
    Employee.call(this, name, surname, 'manager', salary);
    
    this.department = department;
}
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.getDepartment = function() {
        console.log(this.getDepartment);
    }
    Manager.prototype.changeDepartment = function(department) {
        this.department = department;
        return this.department;
    }

var x = new Manager ("Dijana", "Radojevic", 2000, "IT");

console.log(x.increaseSalary());
console.log(x.increaseSalary());
console.log(x.increaseSalary());