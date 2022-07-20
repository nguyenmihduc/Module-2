"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, dod, identity) {
        this._name = name;
        this._dod = dod;
        this._identity = identity;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get dod() {
        return this._dod;
    }
    set dod(value) {
        this._dod = value;
    }
    get identity() {
        return this._identity;
    }
    set identity(value) {
        this._identity = value;
    }
}
exports.Person = Person;
