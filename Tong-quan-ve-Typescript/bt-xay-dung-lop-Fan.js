var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, radius, color, on) {
        if (on === void 0) { on = false; }
        this.speed = 1;
        this.radius = 5;
        this.color = 'blue';
        this.on = false;
        this.speed = speed;
        this.radius = radius;
        this.color = color;
        this.on = on;
    }
    Fan.prototype.getterSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getterRadius = function () {
        return this.radius;
    };
    Fan.prototype.getterColor = function () {
        return this.color;
    };
    Fan.prototype.getterOn = function () {
        return this.on;
    };
    Fan.prototype.setterSpeed = function (value) {
        return this.speed = value;
    };
    Fan.prototype.setterRadius = function (value) {
        return this.radius = value;
    };
    Fan.prototype.setterColor = function (value) {
        return this.color = value;
    };
    Fan.prototype.setterOn = function (value) {
        return this.on = value;
    };
    Fan.prototype.toString = function () {
        if (this.on === true) {
            return "fan is on  ".concat(this.getterSpeed(), "  ").concat(this.getterColor(), "  ").concat(this.getterRadius());
        }
        else {
            return "fan is off  ".concat(this.getterSpeed(), "  ").concat(this.getterColor(), "  ").concat(this.getterRadius());
        }
    };
    return Fan;
}());
var fan1 = new Fan(Speed.FAST, 10, "yellow", true);
console.log(fan1.toString());
var fan2 = new Fan(Speed.MEDIUM, 5, "blue", false);
console.log(fan2.toString());
fan1.setterColor("pink");
console.log(fan1.getterColor());
