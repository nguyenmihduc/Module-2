var Fan = /** @class */ (function () {
    function Fan(speed, radius, color, on) {
        if (on === void 0) { on = false; }
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
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
        if (this.speed == 1) {
            return "SLOW";
        }
        if (this.speed == 2) {
            return "MEDIUM";
        }
        if (this.speed == 3) {
            return "FAST";
        }
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
var fan1 = new Fan(3, 10, "yellow", true);
console.log(fan1.toString());
var fan2 = new Fan(2, 5, "blue", false);
console.log(fan2.toString());
fan1.setterColor("pink");
console.log(fan1.getterColor());
