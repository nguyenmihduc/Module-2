"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(dayOfRent, type, price, person) {
        this._dayOfRent = dayOfRent;
        this._type = type;
        this._price = price;
        this._person = person;
    }
    get dayOfRent() {
        return this._dayOfRent;
    }
    set dayOfRent(value) {
        this._dayOfRent = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get person() {
        return this._person;
    }
    set person(value) {
        this._person = value;
    }
}
exports.Hotel = Hotel;
