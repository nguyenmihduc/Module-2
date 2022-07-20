let myArray = [2,4,1,5]; // mảng gốc

function sapXepMangBeDenLon(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let temp: number;
      if (array[i] > array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
// myArray.push(1);
// sapXepMangBeDenLon(myArray);
// myArray.push(4);
// sapXepMangBeDenLon(myArray);
// myArray.push(5);
// sapXepMangBeDenLon(myArray);
// myArray.push(2);
// sapXepMangBeDenLon(myArray);

console.log(myArray);
console.log(sapXepMangBeDenLon(myArray));
// console.log(myArray); // mảng gốc bị thay đổi theo
