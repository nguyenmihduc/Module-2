export class Product {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getName(): string {
        return this._name;
    }

    getPrice(): number {
        return this._price;
    }

    setName(value: string): void {
        this._name = value;
    }

    setPrice(value: number) {
        this._price = value;
    }
}

// export class ProductManager {
//     static products = [];
//     constructor() {
//     }
//     static getAll() {
//         return console.log(ProductManager.products)
//     }
//     static add(product) {
//         return ProductManager.products.push(product)
//     }
// }

export class ProductManager {
    private products = [];
    constructor() {
    }
    getAll() {
        return console.log(this.products)
    }
    add(product) {
        return this.products.push(product)
    }
}