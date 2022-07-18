import {Product} from "./Product";
import {ProductManager} from "./Product";

let iphone = new Product('iphone', 2000)
let laptop = new Product('laptop', 7000)

// ProductManager.add(iphone)
// ProductManager.add(laptop)
// ProductManager.getAll()

let productManager =new ProductManager()
productManager.add(iphone)
productManager.add(laptop)
productManager.getAll()