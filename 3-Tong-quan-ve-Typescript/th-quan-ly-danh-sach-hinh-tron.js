var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var listCircle = [];
var circle1 = new Circle("red", 10);
var circle2 = new Circle("blue", 15);
var circle3 = new Circle("green", 20);
listCircle.push(circle1, circle2, circle3);
function displayCircle(circle) {
    return "hinh tron nay co mau ".concat(circle.color, " va ban kinh la ").concat(circle.radius);
}
listCircle.forEach(displayCircle);
