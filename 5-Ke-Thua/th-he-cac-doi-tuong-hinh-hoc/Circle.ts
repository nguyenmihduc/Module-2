import {Shape} from "./Shape";

export class Circle extends Shape {
    protected radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(value) {
        this.radius = value;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return this.radius * 2 * Math.PI;
    }
    toString(): string {
        return "A Shape with radius of "
            + this.getRadius()
            + " and which is a subclass of "
            + super.toString()
    }
}