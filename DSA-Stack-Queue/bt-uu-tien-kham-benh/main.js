"use strict";
exports.__esModule = true;
var Patient_1 = require("./Patient");
var QueuePatient_1 = require("./QueuePatient");
var patient1 = new Patient_1.Patient("Smith", 5); // tạo các bệnh nhân
var patient2 = new Patient_1.Patient("Jones", 4);
var patient3 = new Patient_1.Patient("FehrenBach", 6);
var patient4 = new Patient_1.Patient("Brown", 1);
var patient5 = new Patient_1.Patient("Ingram", 1);
var queuePriorityPatient = new QueuePatient_1.QueuePriorityPatient(); // tạo hàng đợi ưu tiên
queuePriorityPatient.enqueue(patient1); // nhập các bệnh nhân vào hàng đợi
queuePriorityPatient.enqueue(patient2);
queuePriorityPatient.enqueue(patient3);
queuePriorityPatient.enqueue(patient4);
queuePriorityPatient.enqueue(patient5);
console.log('-----Danh sách bệnh nhân-----');
queuePriorityPatient.showList();
console.log('-----Bệnh nhân đã khám-----');
queuePriorityPatient.dequeue();
queuePriorityPatient.dequeue();
queuePriorityPatient.dequeue();
console.log('-----Bệnh nhân chưa khám-----');
queuePriorityPatient.showList();
