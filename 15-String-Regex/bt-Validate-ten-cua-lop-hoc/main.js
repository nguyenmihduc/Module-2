"use strict";
exports.__esModule = true;
var NameGroupRegex_1 = require("./NameGroupRegex");
var nameGroupRegex = new NameGroupRegex_1.NameGroupRegex();
var validName = "C0318G";
var invalidName = ["M0318G", "P0323A"];
console.log(nameGroupRegex.validate(validName));
for (var _i = 0, invalidName_1 = invalidName; _i < invalidName_1.length; _i++) {
    var item = invalidName_1[_i];
    console.log(nameGroupRegex.validate(item));
}
