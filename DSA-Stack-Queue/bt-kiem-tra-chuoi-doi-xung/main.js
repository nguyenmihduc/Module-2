"use strict";
exports.__esModule = true;
var Check_1 = require("./Check");
var checkSymmetry1 = new Check_1.CheckSymmetry('able was I ere I saw elba');
checkSymmetry1.check();
var checkSymmetry2 = new Check_1.CheckSymmetry('able was I ere I saw');
checkSymmetry2.check();
var checkSymmetry3 = new Check_1.CheckSymmetry('1hgf23a32fgh1');
checkSymmetry3.check();