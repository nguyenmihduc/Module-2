"use strict";
exports.__esModule = true;
exports.StaffManager = exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(firstName, lastName, birth, address, position, ID) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birth = birth;
        this._address = address;
        this._position = position;
        this._ID = ID;
    }
    Staff.prototype.getFirstName = function () {
        return this._firstName;
    };
    Staff.prototype.getLastName = function () {
        return this._lastName;
    };
    Staff.prototype.getBirth = function () {
        return this._birth;
    };
    Staff.prototype.getAddress = function () {
        return this._address;
    };
    Staff.prototype.getPosition = function () {
        return this._position;
    };
    Staff.prototype.getID = function () {
        return this._ID;
    };
    Staff.prototype.setFirstName = function (value) {
        this._firstName = value;
    };
    Staff.prototype.setLastName = function (value) {
        this._lastName = value;
    };
    Staff.prototype.setBirth = function (value) {
        this._birth = value;
    };
    Staff.prototype.setAddress = function (value) {
        this._address = value;
    };
    Staff.prototype.setPosition = function (value) {
        this._position = value;
    };
    Staff.prototype.setID = function (value) {
        this._ID = value;
    };
    return Staff;
}());
exports.Staff = Staff;
var StaffManager = /** @class */ (function () {
    function StaffManager() {
    }
    StaffManager.prototype.getAll = function () {
        console.log(StaffManager.listStaff);
    };
    StaffManager.prototype.addStaff = function (staff) {
        StaffManager.listStaff.push(staff);
    };
    StaffManager.prototype.delStaff = function (firstName) {
        StaffManager.listStaff.forEach(function (staff, index) {
            if (staff.getFirstName() === firstName) {
                StaffManager.listStaff.splice(index, 1);
            }
        });
    };
    StaffManager.prototype.editInfo = function (firstName, lastName, birth, address, position, ID) {
        StaffManager.listStaff.forEach(function (staff) {
            if (staff.getID() === ID) {
                staff.setFirstName(firstName);
                staff.setLastName(lastName);
                staff.setBirth(birth);
                staff.setAddress(address);
                staff.setPosition(position);
            }
        });
    };
    StaffManager.listStaff = [];
    return StaffManager;
}());
exports.StaffManager = StaffManager;
