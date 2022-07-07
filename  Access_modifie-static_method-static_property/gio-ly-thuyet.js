var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.setWidth = function (value) {
        this.width = value;
    };
    Rectangle.prototype.setHeight = function (value) {
        this.height = value;
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.width + this.height) * 2;
    };
    Rectangle.prototype.displayRec = function () {
        var canh = '';
        for (var i = 0; i < this.height; i++) {
            console.log(canh);
        }
        for (var j = 0; j < this.width; j++) {
            canh += "*";
        }
    };
    return Rectangle;
}());
var rec1 = new Rectangle(10, 5);
rec1.displayRec();
