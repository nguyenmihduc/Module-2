"use strict";
exports.__esModule = true;
exports.Staff = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["OTHER"] = 3] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, birth, email, ID, phone) {
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._email = email;
        this._ID = ID;
        this._phone = phone;
    }
    Staff.prototype.getName = function () {
        return this._name;
    };
    Staff.prototype.setName = function (value) {
        this._name = value;
    };
    Staff.prototype.getGender = function () {
        return this._gender;
    };
    Staff.prototype.setGender = function (value) {
        this._gender = value;
    };
    Staff.prototype.getBirth = function () {
        return this._birth;
    };
    Staff.prototype.setBirth = function (value) {
        this._birth = value;
    };
    Staff.prototype.getEmail = function () {
        return this._email;
    };
    Staff.prototype.setEmail = function (value) {
        this._email = value;
    };
    Staff.prototype.getPhone = function () {
        return this._phone;
    };
    Staff.prototype.setPhone = function (value) {
        this._phone = value;
    };
    Staff.prototype.getID = function () {
        return this._ID;
    };
    Staff.prototype.setID = function (value) {
        this._ID = value;
    };
    return Staff;
}());
exports.Staff = Staff;
