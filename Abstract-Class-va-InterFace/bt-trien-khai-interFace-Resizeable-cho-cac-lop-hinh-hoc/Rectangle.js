"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this._width = width;
        this._height = height;
    }
    Rectangle.prototype.getWidth = function () {
        return this._width;
    };
    Rectangle.prototype.setWidth = function (value) {
        this._width = value;
    };
    Rectangle.prototype.getHeight = function () {
        return this._height;
    };
    Rectangle.prototype.setHeight = function (value) {
        this._height = value;
    };
    Rectangle.prototype.getArea = function () {
        var Area = this._width * this._height;
        return "di\u1EC7n t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt ban \u0111\u1EA7u l\u00E0: ".concat(Area);
    };
    Rectangle.prototype.resize = function (percent) {
        var newWidth = this._width * percent + this._width;
        var newHeight = this._height * percent + this._height;
        var newArea = newWidth * newHeight;
        return "di\u1EC7n t\u00EDch h\u00ECnh ch\u1EEF nh\u1EADt m\u1EDBi l\u00E0: ".concat(newArea);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
