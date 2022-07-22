"use strict";
exports.__esModule = true;
exports.EMAIL_REGEX = void 0;
var EMAIL_REGEX = /** @class */ (function () {
    function EMAIL_REGEX() {
        this.EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    }
    EMAIL_REGEX.prototype.validate = function (regex) {
        return this.EMAIL_REGEX.test(regex);
    };
    return EMAIL_REGEX;
}());
exports.EMAIL_REGEX = EMAIL_REGEX;
