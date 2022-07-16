"use strict";
exports.__esModule = true;
exports.QueuePriorityPatient = void 0;
var QueuePriorityPatient = /** @class */ (function () {
    function QueuePriorityPatient() {
        this.listPatients = [];
    }
    QueuePriorityPatient.prototype.enqueue = function (patient) {
        this.listPatients.push(patient);
    };
    QueuePriorityPatient.prototype.findPriorityCode = function () {
        if (this.listPatients.length == 0) {
            return null;
        }
        var priority = this.listPatients[0];
        var priorityIndex = -1;
        for (var i = 0; i < this.listPatients.length; i++) {
            if (this.listPatients[i].code <= priority.code) {
                priority = this.listPatients[i];
                priorityIndex = i;
            }
        }
        return priorityIndex;
    };
    QueuePriorityPatient.prototype.dequeue = function () {
        console.log(this.listPatients.splice(this.findPriorityCode(), 1));
    };
    QueuePriorityPatient.prototype.showList = function () {
        console.table(this.listPatients);
    };
    return QueuePriorityPatient;
}());
exports.QueuePriorityPatient = QueuePriorityPatient;
