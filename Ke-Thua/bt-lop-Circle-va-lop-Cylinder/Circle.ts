export class Circle {
    private _radius: number
    private _color: string
    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    getRadius(): number {
        return this._radius;
    }
    setRadius(value: number): void {
        this._radius = value;
    }

    getColor(): string {
        return this._color;
    }
    setColor(value: string): void {
        this._color = value;
    }

    getArea(): number {
        return this._radius * this._radius * Math.PI;
    }
}
