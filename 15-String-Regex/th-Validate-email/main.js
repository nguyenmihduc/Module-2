"use strict";
exports.__esModule = true;
var Email_Regex_1 = require("./Email-Regex");
var emailRegex = new Email_Regex_1.EMAIL_REGEX();
var validEmail = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
var invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var item = validEmail_1[_i];
    var result = emailRegex.validate(item);
    console.log("email: ".concat(item, " c\u00F3 h\u1EE3p l\u1EC7 hay kh\u00F4ng: ").concat(result));
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var item = invalidEmail_1[_a];
    var result = emailRegex.validate(item);
    console.log("email: ".concat(item, " c\u00F3 h\u1EE3p l\u1EC7 hay kh\u00F4ng: ").concat(result));
}
