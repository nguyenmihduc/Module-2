"use strict";
exports.__esModule = true;
exports.IpRegex = void 0;
var IpRegex = /** @class */ (function () {
    function IpRegex() {
        this.TP_REGEX = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}$/;
    }
    IpRegex.prototype.validate = function (regex) {
        return this.TP_REGEX.test(regex);
    };
    return IpRegex;
}());
exports.IpRegex = IpRegex;
