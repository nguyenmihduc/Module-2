function numAndStr<T>(item: T[]): T[] {
    return new Array().concat(item);
}

let numbers = numAndStr([1,3,5,7])
let str = numAndStr(['mih', 'duc', 'nguyen'])

numbers.push(8,9,10)
str.push('xin','chao')

console.log(numbers)
console.log(str)