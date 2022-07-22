"use strict";
exports.__esModule = true;
exports.NameGroupRegex = void 0;
var NameGroupRegex = /** @class */ (function () {
    function NameGroupRegex() {
        this.NAME_GROUP_REGEX = /^[CAP][+0-9]{4}[GHIKLM]$/;
    }
    NameGroupRegex.prototype.validate = function (regex) {
        return this.NAME_GROUP_REGEX.test(regex);
    };
    return NameGroupRegex;
}());
exports.NameGroupRegex = NameGroupRegex;
