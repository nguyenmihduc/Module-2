var Cars = /** @class */ (function () {
    function Cars(tradeMark, color) {
        this.tradeMark = tradeMark;
        this.color = color;
        Cars.count++;
    }
    Cars.count = 0;
    return Cars;
}());
var car1 = new Cars("BMW", "red");
var car2 = new Cars("MEC", "black");
console.log(Cars.count);
var car3 = new Cars("TOY", "white");
console.log(Cars.count);
// th-dem-so-luong-doi-tuong-cua-lop.ts
