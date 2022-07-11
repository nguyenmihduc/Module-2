import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";
import {Square} from "./Square";

let Shapes = []

let circle1 = new Circle(10);
let rectangle1 = new Rectangle(15,10)
let square1 = new Square(9)

Shapes.push(circle1, rectangle1,square1)
console.table(Shapes)

Shapes.forEach((item, index) => {
    console.log(item.getArea())
})

let percent = ((Math.floor(Math.random()*100)+1)/100)

Shapes.forEach((item, index) => {
    console.log(item.resize(percent))
})





