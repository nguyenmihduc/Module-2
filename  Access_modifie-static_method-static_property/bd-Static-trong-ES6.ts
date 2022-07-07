// class LoiChao {
//    morning = "chao buoi sang";
//     afternoon = "chao buoi chieu";
//     evening = "chao buoi toi";
// }
// // console.log(LoiChao.morning)
// let chao = new LoiChao()
// console.log(chao.morning)

class Circle {
    static pi = 3.14;
    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }
    calculateCircumference(radius:number):number {
        return 2 * Circle.pi * radius;
    }
}
Circle.calculateArea(5); // returns 78.5
