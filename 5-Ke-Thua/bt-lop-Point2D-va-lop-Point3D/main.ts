import {Point2D} from "./Point2D";
import {Point3D} from "./Point3D";

let point2D = new Point2D(32,87)
console.log(point2D)
point2D.setXY(18,45)
console.log(point2D)

let point3D = new Point3D(5,8,9)
console.log(point3D)
point3D.setXYZ(22,34,8)
console.log(point3D)