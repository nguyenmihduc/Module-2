import {InterfaceColorable} from "./interfaceColorable";

export class Circle implements InterfaceColorable{
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }
    getArea(): string {
        let Area = this._radius * this._radius * Math.PI
        return `diện tích hình tròn ban đầu là: ${Area}`
    }
    howToColor() {
    }
}