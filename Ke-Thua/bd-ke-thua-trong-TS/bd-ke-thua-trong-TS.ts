class Car {
    color: string;

    constructor(color: string) {
        this.color = color;
    }
}

class Audi extends Car {
    price: number;

    constructor(color: string, price: number) {
        super(color);
        this.price = price;
    }
    display(): void {
        console.log("Color of Audi: " + this.color);
        console.log("Price of Audi: " + this.price);
    }

}

class BMW extends Audi {
    fuel: string;

    constructor(color: string, price: number, fuel: string) {
        super(color, price);
        this.fuel = fuel;
    }
}

let obj = new Audi('red', 8000)
obj.display()