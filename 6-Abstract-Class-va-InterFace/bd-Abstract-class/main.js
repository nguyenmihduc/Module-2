"use strict";
exports.__esModule = true;
var FullTimeEmployee_1 = require("./FullTimeEmployee");
var Contractor_1 = require("./Contractor");
var fullTimeEmployee1 = new FullTimeEmployee_1.FullTimeEmployee("minh duc", "nguyen", 2000);
var contractor1 = new Contractor_1.Contractor("vu minh", "duc", 500, 6);
console.log(fullTimeEmployee1.getSalary());
console.log(contractor1.getSalary());
