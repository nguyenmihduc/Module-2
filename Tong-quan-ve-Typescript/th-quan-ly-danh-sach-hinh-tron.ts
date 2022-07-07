
class Circle {
    color: string;
    radius: number;
    constructor(color: string, radius: number ) {
        this.color = color;
        this.radius = radius;
    }
}
let listCircle: Circle[] = []
let circle1 = new Circle("red", 10)
let circle2 = new Circle("blue", 15)
let circle3 = new Circle("green", 20)

listCircle.push(circle1, circle2, circle3)

function displayCircle(circle: Circle) {
    console.log(`hinh tron nay co mau ${circle.color} va ban kinh la ${circle.radius}`)
}
listCircle.forEach(displayCircle)