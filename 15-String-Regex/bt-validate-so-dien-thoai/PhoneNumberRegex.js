"use strict";
exports.__esModule = true;
exports.PhoneNumberRegex = void 0;
var PhoneNumberRegex = /** @class */ (function () {
    function PhoneNumberRegex() {
        this.PHONE_NUMBER_REGEX = /^\([+0-9]{2}\)-\([0]{1}[0-9]{9}\)$/;
    }
    PhoneNumberRegex.prototype.validate = function (regex) {
        return this.PHONE_NUMBER_REGEX.test(regex);
    };
    return PhoneNumberRegex;
}());
exports.PhoneNumberRegex = PhoneNumberRegex;
