"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (value) {
        this.name = value;
    };
    Student.prototype.getScore = function () {
        return this.score;
    };
    Student.prototype.setScore = function (value) {
        this.score = value;
    };
    return Student;
}());
exports.Student = Student;
