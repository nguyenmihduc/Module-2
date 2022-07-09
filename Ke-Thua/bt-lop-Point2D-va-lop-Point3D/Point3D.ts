import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    getZ(): number {
        return this._z;
    }

    setZ(value: number): void {
        this._z = value;
    }

    setXYZ(x: number, y: number, z: number): void {
        this.setXY(x,y);
        this._z= z;
    }
}

