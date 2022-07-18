import {Staff} from "./Staff";
import {staffManager} from "./staffManager";

let staff1 = new Staff('minh',1, '14-12-1987','minh@gmail.com',1,'0909123');
let staff2 = new Staff('hoa',2, '11-07-1982','hoa@gmail.com',2,'023391243');
let staff3 = new Staff('nam',3, '23-10-1986','namh@gmail.com',3,'0641265');

let staffManager1 = new staffManager()
staffManager1.addStaff(staff1)
staffManager1.addStaff(staff2)
staffManager1.addStaff(staff3)

staffManager1.ShowStaff()

staffManager1.deleteStaff(3)

staffManager1.ShowStaff()

staffManager1.updateStaff('van toan',3, '11-07-1982','hoa@gmail.com',2,'023391243')

staffManager1.ShowStaff()