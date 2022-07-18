import {Shape} from "../bt-thiet-ke-trien-khai-lop-Triangle/Shape";

export class Triangle extends Shape {
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    getSide1(): number {
        return this._side1;
    }

    setSide1(value: number): void {
        this._side1 = value;
    }

    getSide2(): number {
        return this._side2;
    }

    setSide2(value: number): void {
        this._side2 = value;
    }

    getSide3(): number {
        return this._side3;
    }

    setSide3(value: number): void {
        this._side3 = value;
    }

    getPerimeter(): number {
        return this._side1 + this._side2 + this._side3;
    }
    getP(): number {
        return this.getPerimeter()/2
    }

    // getHeight(): number {
    //     if (this._side1 > this._side2 && this._side1 > this._side3) {
    //         return 2*((Math.sqrt(this.getPerimeter() * (this.getPerimeter() - this._side1) * (this.getPerimeter() - this._side2) * (this.getPerimeter() - this._side3)))/this._side1)
    //     }
    //     if (this._side2 > this._side1 && this._side2 > this._side3) {
    //         return 2*((Math.sqrt(this.getPerimeter() * (this.getPerimeter() - this._side1) * (this.getPerimeter() - this._side2) * (this.getPerimeter() - this._side3)))/this._side2)
    //     }
    //     if (this._side3 > this._side1 && this._side3 > this._side2) {
    //         return 2*((Math.sqrt(this.getPerimeter() * (this.getPerimeter() - this._side1) * (this.getPerimeter() - this._side2) * (this.getPerimeter() - this._side3)))/this._side3)
    //     }
    // }

    getArea(): number {
        return Math.sqrt(this.getP() * (this.getP() - this._side1) * (this.getP() - this._side2) * (this.getP() - this._side3))
    }
}