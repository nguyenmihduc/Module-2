import {PhoneNumberRegex} from "./PhoneNumberRegex";

let phoneNumberRegex = new PhoneNumberRegex();

let validNumber =  "(84)-(0978489648)";
let invalidNumber =  "(a8)-(22222222)";

console.log(phoneNumberRegex.validate(validNumber))
console.log(phoneNumberRegex.validate(invalidNumber))