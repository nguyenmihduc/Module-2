"use strict";
exports.__esModule = true;
exports.StudentScoreManagement = void 0;
var Node_1 = require("./Node");
var StudentScoreManagement = /** @class */ (function () {
    function StudentScoreManagement() {
        this.studentList = [];
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentScoreManagement.prototype.insertFirst = function (name, score) {
        var node = new Node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    StudentScoreManagement.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new Node_1.Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    StudentScoreManagement.prototype.showList = function () {
        var currentNode = this.head;
        while (currentNode !== null) {
            this.studentList.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return this.studentList;
    };
    StudentScoreManagement.prototype.getSize = function () {
        return this.size;
    };
    StudentScoreManagement.prototype.totalStudentFail = function () {
        var currentNode = this.head;
        var count = 0;
        for (var i = 0; i < this.studentList.length; i++) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    };
    StudentScoreManagement.prototype.listStudentMaxScore = function () {
        var currentNode = this.head;
        for (var i = 0; i < this.studentList.length; i++) {
            if (this.findMaxScore() === currentNode.getScore()) {
                console.log(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
    };
    StudentScoreManagement.prototype.findMaxScore = function () {
        var currentNode = this.head;
        var max = currentNode.getScore();
        for (var i = 0; i < this.studentList.length; i++) {
            if (currentNode.next.getScore() > max) {
                max = currentNode.next.getScore();
                currentNode = currentNode.next;
            }
        }
        return max;
    };
    StudentScoreManagement.prototype.findByName = function (name) {
        var currentNode = this.head;
        for (var i = 0; i < this.studentList.length; i++) {
            if (currentNode.getName() === name) {
                console.log(currentNode.getInfo());
            }
            currentNode = currentNode.next;
        }
    };
    return StudentScoreManagement;
}());
exports.StudentScoreManagement = StudentScoreManagement;
