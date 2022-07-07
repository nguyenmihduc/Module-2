// let isShow: boolean = true;
// console.log(typeof isShow)
//
// let a: string = null;
// let b: number = null;
// console.log(typeof a)
// console.log(typeof b)
//
// let arr1: number[] = [1,2,3,4,5]
// let arr2: Array<number> = [1,2,3,4,5]
// console.log(arr1)
// console.log(arr2)
//
// let x: [string, number];
// x = ["xin chao", 2022]
//
// enum City {HaNoi, HoChiMinh, DaNang};
// let city1: City = City.HaNoi
// console.log(city1)
//
// let city2: City = City.DaNang
// console.log(city2)

interface Calc {
    subtract(first: string, second: number);
}

let Calculator: Calc = {
    subtract(first, second) {
        return first + second;
    }
}
console.log(Calculator.subtract("hello",8))

function add(a: number, b: number): number {
    return a + b;
}

let sum = function (a: number, b: number): number  {
    return a * b
}

function identity<A>(arr: A): A {
    return arr
}
let output1 = identity<string> ("my string")
let output2 = identity<number> (100)
console.log(identity)

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray("hello"))
console.log(wrapInArray(["xin chao", "cac ban"]))
