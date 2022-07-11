"use strict";
// import {Animal} from "../AbstractClass/Animal";
// import {Edible} from "../interFaceClass/Edible";
//
// export class Chicken extends Animal implements Edible{
//     makeSound(): string {
//         return 'chicken: chic chic chic'
//     }
//     howToEat(): string {
//         return "Could be fried"
//     }
// }
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
exports.__esModule = true;
exports.Chicken = void 0;
var Animal_1 = require("../AbstractClass/Animal");
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.makeSound = function () {
        return "chicken: chic chic chic";
    };
    Chicken.prototype.howToEat = function () {
        return 'can be cook';
    };
    return Chicken;
}(Animal_1.Animal));
exports.Chicken = Chicken;
