
export class QueuePriorityPatient {
    listPatients: any[] = [];
     constructor() {
     }
     enqueue(patient) {
         this.listPatients.push(patient)
     }
     findPriorityCode() {
         if (this.listPatients.length == 0) {
             return null;
         }
         let priority = this.listPatients[0]
         let priorityIndex = -1
         for (let i = 0; i < this.listPatients.length; i++) {
             if (this.listPatients[i].code <= priority.code) {
                 priority = this.listPatients[i];
                 priorityIndex = i;
             }
         }
         return priorityIndex
     }
     dequeue() {
         console.log(this.listPatients.splice(this.findPriorityCode(),1))
     }
     showList() {
         console.table(this.listPatients)
     }
}