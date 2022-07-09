"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this._name = name;
        this._color = color;
    }
    Shape.prototype.getName = function () {
        return this._name;
    };
    Shape.prototype.setName = function (value) {
        this._name = value;
    };
    Shape.prototype.getColor = function () {
        return this._color;
    };
    Shape.prototype.setColor = function (value) {
        this._color = value;
    };
    return Shape;
}());
exports.Shape = Shape;
