"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.listStudents = [];
    }
    Manager.prototype.addStudent = function (student) {
        this.listStudents.push(student);
    };
    Manager.prototype.dequeue = function () {
        if (this.listStudents.length == 0) {
            return null;
        }
        var min = this.listStudents[0];
        var minIndex = -1;
        for (var i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i].score <= min.score) {
                min = this.listStudents[i];
                minIndex = i;
            }
        }
        console.log(this.listStudents.splice(minIndex, 1));
    };
    return Manager;
}());
exports.Manager = Manager;
