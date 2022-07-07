"use strict";
exports.__esModule = true;
exports.ProductManager = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Product.prototype.setPrice = function (value) {
        this._price = value;
    };
    return Product;
}());
exports.Product = Product;
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
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.getAll = function () {
        return console.log(this.products);
    };
    ProductManager.prototype.add = function (product) {
        return this.products.push(product);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
