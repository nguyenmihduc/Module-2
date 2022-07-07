

class Rectangle {
    private width: number;
    private height: number;
    listStar: string []
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.listStar = []
    }

    setWidth(value: number) {
        this.width = value;
    }

    setHeight(value: number) {
        this.height = value
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2;
    }

    printRectangle() {
        for (let i = this.height; i > 0; i--) {
            for (let j = this.width; j > 0; j--) {
                this.listStar.push('*')
            }
        }
    }
}
let rec1 = new Rectangle(10,5)
rec1.printRectangle()
