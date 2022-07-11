import {Stack} from "./Stack";

let numbers = new Stack<number>([], 5)

function randomBetween(low: number, high: number): number {
    return Math.floor(Math.random()*(high - low + 1))+ low;
}

while (!numbers.isFull()) {
    let n = randomBetween(1,10);
    console.log(`push ${n} into the stack`)
    numbers.push(n)
}

console.log(numbers)

while (!numbers.isEmpty()) {
    let n = numbers.pop()
    console.log(`pop ${n} from the sack `)
}

console.log(numbers)