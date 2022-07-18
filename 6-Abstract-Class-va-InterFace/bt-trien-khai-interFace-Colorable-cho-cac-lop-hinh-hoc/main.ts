import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {InterfaceColorable} from "./interfaceColorable";
import {Square} from "./Square";

let Shapes = []

let circle1 = new Circle(10);
let rectangle1 = new Rectangle(15,10)
let square1 = new Square(9)
let square2 = new Square(8)

Shapes.push(circle1, rectangle1,square1, square2)
console.table(Shapes)

Shapes.forEach((item, index) => {
   if (item instanceof Square) {
       console.log(`${item.howToColor()} ${item.getArea()}`)
   }
})







