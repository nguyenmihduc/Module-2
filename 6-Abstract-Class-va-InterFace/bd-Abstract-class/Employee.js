"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.getFullName(), " make ").concat(this.getSalary(), " a month");
    };
    return Employee;
}());
exports.Employee = Employee;
