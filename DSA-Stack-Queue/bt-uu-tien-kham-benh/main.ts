import {Patient} from "./Patient";
import  {QueuePriorityPatient} from "./QueuePatient";

let patient1 = new Patient("Smith", 5);   // tạo các bệnh nhân
let patient2 = new Patient("Jones", 4);
let patient3 = new Patient("FehrenBach", 6);
let patient4 = new Patient("Brown", 1);
let patient5 = new Patient("Ingram", 1);

let queuePriorityPatient = new QueuePriorityPatient() // tạo hàng đợi ưu tiên

queuePriorityPatient.enqueue(patient1) // nhập các bệnh nhân vào hàng đợi
queuePriorityPatient.enqueue(patient2)
queuePriorityPatient.enqueue(patient3)
queuePriorityPatient.enqueue(patient4)
queuePriorityPatient.enqueue(patient5)
console.log('-----Danh sách bệnh nhân-----')
queuePriorityPatient.showList()
console.log('-----Bệnh nhân đã khám-----')
queuePriorityPatient.dequeue()
queuePriorityPatient.dequeue()
queuePriorityPatient.dequeue()
console.table(queuePriorityPatient.huhu)
console.log('-----Bệnh nhân chưa khám-----')
queuePriorityPatient.showList()

