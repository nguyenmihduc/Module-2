"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var Product_2 = require("./Product");
var iphone = new Product_1.Product('iphone', 2000);
var laptop = new Product_1.Product('laptop', 7000);
// ProductManager.add(iphone)
// ProductManager.add(laptop)
// ProductManager.getAll()
var productManager = new Product_2.ProductManager();
productManager.add(iphone);
productManager.add(laptop);
productManager.getAll();
