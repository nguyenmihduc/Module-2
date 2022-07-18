import {InterfaceColorable} from "./interfaceColorable";

export class Square implements InterfaceColorable {
    private _side: number;

    constructor(side: number) {
        this._side = side;
    }

    getSide(): number {
        return this._side;
    }

    setSide(value: number) {
        this._side = value;
    }

    getArea(): string {
        let Area = this._side * this._side
        return `diện tích hình vuông ban đầu là: ${Area}`
    }
    howToColor() {
        return 'Color all four sides..'
    }
}
