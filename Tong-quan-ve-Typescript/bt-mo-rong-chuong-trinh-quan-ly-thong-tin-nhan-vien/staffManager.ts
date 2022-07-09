import {Gender, Staff} from "./Staff";

export class staffManager {
    _listStaff: Staff[] = []
    constructor() {
    }
    ShowStaff() {
        return console.table(this._listStaff)
    }
    addStaff(staff: Staff) {
        this._listStaff.push(staff)
    }
    deleteStaff(ID) {
        let indexDelete = this.findIndex(ID);
        if (indexDelete != -1) {
            this._listStaff.splice(indexDelete,1)
        } else {
            throw new Error('nhan vien khong ton tai')
        }
    }
    updateStaff(name: string, gender: Gender, birth: string, email: string, ID: number, phone?: string) {
        let indexUpdate = this.findIndex(ID);
        if (indexUpdate != -1) {
            this._listStaff[indexUpdate].setName(name);
            this._listStaff[indexUpdate].setGender(gender);
            this._listStaff[indexUpdate].setBirth(birth);
            this._listStaff[indexUpdate].setEmail(email);
            this._listStaff[indexUpdate].setPhone(phone);
        }
    }
    findIndex(ID) {
        let i = -1;
        this._listStaff.forEach((staff, index) => {
            if (staff.getID() === ID) {
                i = index;
            }
        })
        return i
    }

}