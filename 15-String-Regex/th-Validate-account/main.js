"use strict";
exports.__esModule = true;
var AccountRegex_1 = require("./AccountRegex");
var accountRegex = new AccountRegex_1.AccountRegex();
var validAccount = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
var invalidAccount = [".@", "12345", "1234_", "abcde"];
for (var _i = 0, validAccount_1 = validAccount; _i < validAccount_1.length; _i++) {
    var item = validAccount_1[_i];
    var result = accountRegex.validate(item);
    console.log("tai khoan: ".concat(item, " co hop le khong: ").concat(result));
}
for (var _a = 0, invalidAccount_1 = invalidAccount; _a < invalidAccount_1.length; _a++) {
    var item = invalidAccount_1[_a];
    var result = accountRegex.validate(item);
    console.log("tai khoan: ".concat(item, " co hop le khong: ").concat(result));
}
