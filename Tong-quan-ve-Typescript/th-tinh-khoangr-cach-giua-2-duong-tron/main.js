"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function distance(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
function colorCombination(circleOne, circleTwo) {
    var clCombin = circleOne.color + circleTwo.color;
    return clCombin;
}
var circle1 = new Circle_1["default"](8, "blue");
var circle2 = new Circle_1["default"](12, "red");
console.log(distance(circle1, circle2, 25));
console.log(colorCombination(circle1, circle2));
