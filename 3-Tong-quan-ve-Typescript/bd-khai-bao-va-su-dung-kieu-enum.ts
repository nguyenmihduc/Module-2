
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// function respon(recipient: string, message: Direction) {
//     return console.log(recipient + message)
//  }
//
//  let res = new respon("minh duc", Direction.Down)

enum ShapeKind {
    Circle,
    Square,
}
interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}
interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}
let c: Circle = {
    kind: ShapeKind.Circle,
    radius: ShapeKind.Square,
};