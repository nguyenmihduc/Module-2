"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this._radius = radius;
        this._color = color;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.getColor = function () {
        return this._color;
    };
    Circle.prototype.setColor = function (value) {
        this._color = value;
    };
    Circle.prototype.getArea = function () {
        return this._radius * this._radius * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
