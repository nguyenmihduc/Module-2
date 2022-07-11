import {InterfaceColorable} from "./interfaceColorable";

export class Rectangle implements InterfaceColorable{
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
    howToColor() {

    }
}