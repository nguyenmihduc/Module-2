"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var Shapes = [];
var circle1 = new Circle_1.Circle(10);
var rectangle1 = new Rectangle_1.Rectangle(15, 10);
var square1 = new Square_1.Square(9);
Shapes.push(circle1, rectangle1, square1);
console.table(Shapes);
Shapes.forEach(function (item, index) {
    console.log(item.getArea());
});
var percent = ((Math.floor(Math.random() * 100) + 1) / 100);
Shapes.forEach(function (item, index) {
    console.log(item.resize(percent));
});
