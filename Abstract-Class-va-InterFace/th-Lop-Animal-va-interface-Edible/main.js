"use strict";
// import {Tiger} from "./Animals/Tiger";
// import {Chicken} from "./Animals/Chicken";
// import {Apple} from "./Fruits/Apple";
// import {Orange} from "./Fruits/Orange";
//
// let animals = [];
// animals[0] = new Tiger();
// animals[1] = new Chicken();
//
// animals.forEach((item, index) => {
//     console.log(item.makeSound());
//     if (item instanceof Chicken) {
//     console.log(item.howToEat())}
// })
//
// console.log('-----Fruits-----')
// let Fruits = []
// Fruits[0] = new Apple();
// Fruits[1] = new Orange();
//
// Fruits.forEach((item, index) => {
//     console.log(item.howToEat())
// })
exports.__esModule = true;
var Tiger_1 = require("./Animals/Tiger");
var Chicken_1 = require("./Animals/Chicken");
var Apple_1 = require("./Fruits/Apple");
var Orange_1 = require("./Fruits/Orange");
console.log('-----Animals-----');
var animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howToEat());
    }
});
console.log('----fruit-----');
var fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach(function (item, index) {
    console.log(item.howToEat());
});
