"use strict";
exports.__esModule = true;
exports.staffManager = void 0;
var staffManager = /** @class */ (function () {
    function staffManager() {
        this._listStaff = [];
    }
    staffManager.prototype.ShowStaff = function () {
        return console.table(this._listStaff);
    };
    staffManager.prototype.addStaff = function (staff) {
        this._listStaff.push(staff);
    };
    staffManager.prototype.deleteStaff = function (ID) {
        var indexDelete = this.findIndex(ID);
        if (indexDelete != -1) {
            this._listStaff.splice(indexDelete, 1);
        }
        else {
            throw new Error('nhan vien khong ton tai');
        }
    };
    staffManager.prototype.updateStaff = function (name, gender, birth, email, ID, phone) {
        var indexUpdate = this.findIndex(ID);
        if (indexUpdate != -1) {
            this._listStaff[indexUpdate].setName(name);
            this._listStaff[indexUpdate].setGender(gender);
            this._listStaff[indexUpdate].setBirth(birth);
            this._listStaff[indexUpdate].setEmail(email);
            this._listStaff[indexUpdate].setPhone(phone);
        }
    };
    staffManager.prototype.findIndex = function (ID) {
        var i = -1;
        this._listStaff.forEach(function (staff, index) {
            if (staff.getID() === ID) {
                i = index;
            }
        });
        return i;
    };
    return staffManager;
}());
exports.staffManager = staffManager;
