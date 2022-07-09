import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }
    getSide(): number {
        return this.getWidth()
    }
    setSide(value): void {
        this.setWidth(value)
        this.setLength(value)
    }
    toString(): string {
        return "A Square with side: "
            + this.getSide()
            + " and "
            + " which is a subclass of "
    }
}