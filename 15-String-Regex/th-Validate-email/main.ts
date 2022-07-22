
import {EMAIL_REGEX} from "./Email-Regex";

let emailRegex = new EMAIL_REGEX()

let validEmail: string[] = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for (let item of validEmail) {
    let result = emailRegex.validate(item);
    console.log(`email: ${item} có hợp lệ hay không: ${result}`)
}
for (let item of invalidEmail) {
    let result = emailRegex.validate(item);
    console.log(`email: ${item} có hợp lệ hay không: ${result}`)
}