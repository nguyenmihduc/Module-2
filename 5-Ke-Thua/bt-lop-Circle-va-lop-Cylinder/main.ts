import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";

let circle = new Circle(15,"red");
let cylinder = new Cylinder(20,"blue",50);

console.log(circle)
console.log(circle.getArea())

console.log(cylinder)
console.log(cylinder.getVolume())
console.log(cylinder.getArea())

