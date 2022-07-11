"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.getArea = function () {
        var Area = this._radius * this._radius * Math.PI;
        return "di\u1EC7n t\u00EDch h\u00ECnh tr\u00F2n ban \u0111\u1EA7u l\u00E0: ".concat(Area);
    };
    Circle.prototype.howToColor = function () {
    };
    return Circle;
}());
exports.Circle = Circle;
