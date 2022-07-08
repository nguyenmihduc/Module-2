var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof arg === "string") {
            return console.log(arg.length);
        }
        if (typeof arg === "number") {
            return console.log(arg.toString());
        }
    };
    return A;
}());
var obj = new A();
obj.foo(15);
obj.foo("hello", 6);
