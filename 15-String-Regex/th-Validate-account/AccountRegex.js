"use strict";
exports.__esModule = true;
exports.AccountRegex = void 0;
var AccountRegex = /** @class */ (function () {
    function AccountRegex() {
        this.ACCOUNT_REGEX = /^[_a-z0-9]{6,}$/;
    }
    AccountRegex.prototype.validate = function (regex) {
        return this.ACCOUNT_REGEX.test(regex);
    };
    return AccountRegex;
}());
exports.AccountRegex = AccountRegex;
