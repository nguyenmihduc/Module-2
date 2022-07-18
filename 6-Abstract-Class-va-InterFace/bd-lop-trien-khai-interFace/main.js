var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Employee.prototype.FullName = function () {
        return this.firstName + this.lastName;
    };
    ;
    Employee.prototype.getAge = function () {
        return this.age;
    };
    ;
    return Employee;
}());
var employee1 = new Employee('minh duc', 'nguyeen', 35);
var fullName = employee1.FullName();
var age = employee1.getAge();
console.table(employee1);
console.log(fullName + age);
