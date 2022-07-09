"use strict";
exports.__esModule = true;
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Point2D.prototype.getX = function () {
        return this._x;
    };
    Point2D.prototype.setX = function (value) {
        this._x = value;
    };
    Point2D.prototype.getY = function () {
        return this._y;
    };
    Point2D.prototype.setY = function (value) {
        this._y = value;
    };
    Point2D.prototype.setXY = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
