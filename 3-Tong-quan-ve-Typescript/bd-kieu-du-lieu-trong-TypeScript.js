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
var Calculator = {
    subtract: function (first, second) {
        return first + second;
    }
};
console.log(Calculator.subtract("hello", 8));
function add(a, b) {
    return a + b;
}
var sum = function (a, b) {
    return a * b;
};
function identity(arr) {
    return arr;
}
var output1 = identity("my string");
var output2 = identity(100);
console.log(identity);
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray("hello"));
console.log(wrapInArray(["xin chao", "cac ban"]));
