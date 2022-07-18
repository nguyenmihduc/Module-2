export class Shape {
    protected color: string;
    protected filled: boolean;
    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getColor(): string {
        return this.color;
    }
    getFilled(): boolean {
        return this.filled;
    }
    setColor(value): void {
        this.color = value;
    }
    setFilled(value): void {
        this.filled = value;
    }
    toString(): string {
        return "A Shape with color of "
        + this.getColor()
        + " and "
        + (this.getFilled()? " filled " : " not filled ")
    }
}
