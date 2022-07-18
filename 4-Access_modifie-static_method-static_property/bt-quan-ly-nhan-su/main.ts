import {Staff} from "./Staff";
import {StaffManager} from "./Staff";

let staff1 = new Staff('duc', 'nguyen minh', '14-12-1987', 'Ha Noi', 'nhan vien', 1)
let staff2 = new Staff('loan', 'tran thanh', '23-03-1994', 'HCM', 'Lead', 2)
let staff3 = new Staff('Minh', 'tran thanh', '23-03-1994', 'HCM', 'Lead', 3)


let staffManager1 = new StaffManager()
staffManager1.addStaff(staff1)
staffManager1.addStaff(staff2)
staffManager1.addStaff(staff3)
// staffManager1.getAll()

staffManager1.delStaff('duc')
staffManager1.delStaff('Minh')

staffManager1.editInfo('Hoang', 'tran thanh', '23-03-1994', 'HCM', 'Lead', 2)

staffManager1.getAll()
