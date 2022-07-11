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
    Square.prototype.resize = function (percent) {
        var newSide = this._side * percent + this._side;
        var newAre = newSide * newSide;
        return "di\u1EC7n t\u00EDch h\u00ECnh vu\u00F4ng m\u1EDBi l\u00E0: ".concat(newAre);
    };
    return Square;
}());
exports.Square = Square;
