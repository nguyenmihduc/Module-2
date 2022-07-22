"use strict";
exports.__esModule = true;
var PhoneNumberRegex_1 = require("./PhoneNumberRegex");
var phoneNumberRegex = new PhoneNumberRegex_1.PhoneNumberRegex();
var validNumber = "(84)-(0978489648)";
var invalidNumber = "(a8)-(22222222)";
console.log(phoneNumberRegex.validate(validNumber));
console.log(phoneNumberRegex.validate(invalidNumber));
