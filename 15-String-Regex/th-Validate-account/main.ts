
import {AccountRegex} from "./AccountRegex";

let accountRegex = new AccountRegex();


let validAccount: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];

for (let item of validAccount) {
    let result = accountRegex.validate(item)
    console.log(`tai khoan: ${item} co hop le khong: ${result}`);
}
for (let item of invalidAccount) {
    let result = accountRegex.validate(item)
    console.log(`tai khoan: ${item} co hop le khong: ${result}`);
}