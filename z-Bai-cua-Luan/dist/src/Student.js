"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age, email, group, id) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._group = group;
        this._id = id;
    }
    static IdOfStudent() {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lengthId = 4;
        let randomID = '';
        for (let i = lengthId; i > 0; i--) {
            randomID += chars[Math.floor(Math.random() * chars.length)];
        }
        return randomID;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get group() {
        return this._group;
    }
    set group(value) {
        this._group = value;
    }
    get id() {
        return this._id;
    }
    setId(value) {
        this._id = value;
    }
}
exports.Student = Student;
