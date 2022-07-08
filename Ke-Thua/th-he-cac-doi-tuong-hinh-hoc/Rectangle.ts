import {Shape} from "./Shape";

export class Rectangle extends Shape {
    protected width: number;
    protected length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }
    getWidth(): number {
        return this.width;
    }
    getLength(): number {
        return this.length;
    }
    setWidth(value): void {
        this.width = value;
    }
    setLength(value): void {
        this.length = value;
    }
    getArea(): number {
        return this.width * this.length;
    }
    getPerimeter(): number {
        return (this.width + this.length) * 2;
    }
    toString(): string {
        return  "A Rectangle with width: "
        + this.width
        + " and length:  "
        + this.length
        + " which is a subclass of "
        + super.toString();
    }
}