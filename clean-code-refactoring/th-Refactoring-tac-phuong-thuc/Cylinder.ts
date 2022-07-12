export class Cylinder {
    // constructor() {
    // }
    static baseArea(radius: number): number {
        return Math.PI * radius * radius
    }
    static perimeter(radius: number): number {
        return 2 * Math.PI * radius
    }
    public static getVolume ( radius:  number, height: number ): number {
        let baseArea: number = this.baseArea(radius)
        let perimeter: number = this.perimeter(radius)
        let volume: number = perimeter * height + 2 * baseArea
        return volume
    }
}

// export class Cylinder {
//     radius: number;
//     height: number;
//
//     constructor(radius: number, height: number) {
//         this.radius = radius;
//         this.height = height;
//     }
//
//     getAre(): number {
//         return this.radius * this.radius * Math.PI;
//     }
//     getPerimeter(): number {
//         return this.radius * Math.PI * 2;
//     }
//     getVolume(): number {
//         return this.getPerimeter() * this.height + 2 * this.getAre()
//     }
// }