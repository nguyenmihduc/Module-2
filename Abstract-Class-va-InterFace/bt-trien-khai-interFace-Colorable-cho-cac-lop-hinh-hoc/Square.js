"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(side) {
        this._side = side;
    }
    Square.prototype.getSide = function () {
        return this._side;
    };
    Square.prototype.setSide = function (value) {
        this._side = value;
    };
    Square.prototype.getArea = function () {
        var Area = this._side * this._side;
        return "di\u1EC7n t\u00EDch h\u00ECnh vu\u00F4ng ban \u0111\u1EA7u l\u00E0: ".concat(Area);
    };
    Square.prototype.howToColor = function () {
        return 'Color all four sides..';
    };
    return Square;
}());
exports.Square = Square;
