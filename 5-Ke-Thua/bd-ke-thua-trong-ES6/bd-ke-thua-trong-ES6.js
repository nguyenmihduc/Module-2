var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.getAge = function () {
        return this._age;
    };
    Person.prototype.setName = function (value) {
        this._name = value;
    };
    Person.prototype.setAge = function (value) {
        this._age = value;
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, specialized) {
        var _this = _super.call(this, name, age) || this;
        _this._specialized = specialized;
        return _this;
    }
    Teacher.prototype.getSpecialized = function () {
        return this._specialized;
    };
    Teacher.prototype.setSpecialized = function (value) {
        this._specialized = value;
    };
    return Teacher;
}(Person));
var teacher1 = new Teacher('minh', 35, 'Toan');
teacher1.setAge(36);
teacher1.setSpecialized("Toan, Ly");
console.log(teacher1);
