"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.baseArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.perimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.baseArea(radius);
        var perimeter = this.perimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
// export class Cylinder {
//     radius: number;
//     height: number;
//
//     constructor(radius: number, height: number) {
//         this.radius = radius;
//         this.height = height;
//     }
//
//     getAre(): number {
//         return this.radius * this.radius * Math.PI;
//     }
//     getPerimeter(): number {
//         return this.radius * Math.PI * 2;
//     }
//     getVolume(): number {
//         return this.getPerimeter() * this.height + 2 * this.getAre()
//     }
// }
