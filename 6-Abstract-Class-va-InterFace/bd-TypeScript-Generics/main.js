function numAndStr(item) {
    return new Array().concat(item);
}
var numbers = numAndStr([1, 3, 5, 7]);
var str = numAndStr(['mih', 'duc', 'nguyen']);
numbers.push(8, 9, 10);
str.push('xin', 'chao');
console.log(numbers);
console.log(str);
