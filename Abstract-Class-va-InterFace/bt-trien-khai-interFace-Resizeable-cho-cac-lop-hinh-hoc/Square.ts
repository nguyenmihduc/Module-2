import {Resizeable} from "./Resizeable";

export class Square implements Resizeable {
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

    resize(percent: number): string {
        let newSide = this._side * percent + this._side
        let newAre = newSide * newSide
        return `diện tích hình vuông mới là: ${newAre}`
    }
}
