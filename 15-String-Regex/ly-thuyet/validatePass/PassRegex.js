var PassRegex = /** @class */ (function () {
    function PassRegex() {
        // private PASS_REGEX: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/
        this.PASS_REGEX = /^[A-Za-z0-9]{6,32}$/;
    }
    PassRegex.prototype.validate = function (regex) {
        return this.PASS_REGEX.test(regex);
    };
    return PassRegex;
}());
var passRegex = new PassRegex();
console.log(passRegex.validate("YYYYYYY"));
console.log(passRegex.validate("123456"));
console.log(passRegex.validate("ababab"));
console.log(passRegex.validate("aBa8abn&%$"));
