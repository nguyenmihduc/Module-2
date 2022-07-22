import {NameGroupRegex} from "./NameGroupRegex";

let nameGroupRegex = new NameGroupRegex();

let validName = "C0318G";
let invalidName = ["M0318G", "P0323A"];

console.log(nameGroupRegex.validate(validName))

for (let item of invalidName) {
     console.log(nameGroupRegex.validate(item))
}