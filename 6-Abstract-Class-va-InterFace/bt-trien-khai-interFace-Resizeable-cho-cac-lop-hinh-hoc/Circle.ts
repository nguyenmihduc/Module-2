import {Resizeable} from "./Resizeable";

export class Circle implements Resizeable{
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
    resize(percent: number): string {
        let newRadius = this._radius * percent + this._radius
        let newArea = newRadius * newRadius * Math.PI
        return `diện tích hình tròn mới là: ${newArea}`
    }
}