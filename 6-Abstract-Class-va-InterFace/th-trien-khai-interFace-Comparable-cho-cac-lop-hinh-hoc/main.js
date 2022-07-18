"use strict";
exports.__esModule = true;
var classComparableCircle_1 = require("./classComparableCircle");
var circles = [];
circles[0] = new classComparableCircle_1.ComparableCircle(5);
circles[1] = new classComparableCircle_1.ComparableCircle(10);
circles[2] = new classComparableCircle_1.ComparableCircle(15);
var result = circles[0].comparableTo(circles[1]);
if (result == 1) {
    console.log('The current circle is larger');
}
else {
    console.log('The current circle is Smaller');
}
