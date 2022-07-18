import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private _height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    getHeight(): number {
        return this._height;
    }
    setHeight(value: number): void {
        this._height = value;
    }

    getVolume(): number {
        return this._height * super.getArea()
    }
}