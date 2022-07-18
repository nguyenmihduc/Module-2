import {Resizeable} from "./Resizeable";

export class Rectangle implements Resizeable{
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(value: number) {
        this._width = value;
    }

    getHeight(): number {
        return this._height;
    }

    setHeight(value: number) {
        this._height = value;
    }

    getArea(): string {
        let Area = this._width * this._height
        return `diện tích hình chữ nhật ban đầu là: ${Area}`
    }
    resize(percent: number): string {
        let newWidth = this._width * percent + this._width;
        let newHeight = this._height * percent + this._height;
        let newArea = newWidth * newHeight;
        return `diện tích hình chữ nhật mới là: ${newArea}`
    }
}