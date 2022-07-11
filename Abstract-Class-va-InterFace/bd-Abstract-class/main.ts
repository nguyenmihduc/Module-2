import {FullTimeEmployee} from "./FullTimeEmployee";
import {Contractor} from "./Contractor";

let fullTimeEmployee1 = new FullTimeEmployee("minh duc", "nguyen", 2000);
let contractor1 = new Contractor("vu minh", "duc", 500, 6)

console.log(fullTimeEmployee1.getSalary())
console.log(contractor1.getSalary())