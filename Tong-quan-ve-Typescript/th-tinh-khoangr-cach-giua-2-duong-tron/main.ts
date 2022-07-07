import Circle from "./Circle";

function distance(circleOne: Circle, circleTwo: Circle, d: number) {
    let distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d,2)
    return Math.sqrt(distance)
}

function colorCombination(circleOne: Circle, circleTwo: Circle) {
    let clCombin = circleOne.color + circleTwo.color;
    return clCombin
}

let circle1 = new Circle(8, "blue")
let circle2 = new Circle(12, "red")

console.log(distance(circle1, circle2, 25))
console.log(colorCombination(circle1,circle2))

