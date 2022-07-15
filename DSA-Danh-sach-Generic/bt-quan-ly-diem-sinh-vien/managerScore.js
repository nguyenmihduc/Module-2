"use strict";
exports.__esModule = true;
exports.ManagerStudent = void 0;
var classNode_1 = require("./classNode");
var ManagerStudent = /** @class */ (function () {
    function ManagerStudent() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ManagerStudent.prototype.insertFirst = function (name, score) {
        var node = new classNode_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    ManagerStudent.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new classNode_1.Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    ManagerStudent.prototype.showList = function () {
        var listStudents = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listStudents.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listStudents;
    };
    ManagerStudent.prototype.totalStudentsFail = function () {
        var total = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.score <= 5) {
                total++;
            }
            currentNode = currentNode.next;
        }
        return total;
    };
    ManagerStudent.prototype.listStudentMaxScore = function () {
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() == this.findMaxScore()) {
                console.log(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
    };
    ManagerStudent.prototype.findMaxScore = function () {
        var currentNode = this.head;
        var max = 0;
        while (currentNode !== null) {
            if (max < currentNode.getScore()) {
                max = currentNode.getScore();
            }
            currentNode = currentNode.next;
        }
        return max;
    };
    return ManagerStudent;
}());
exports.ManagerStudent = ManagerStudent;
