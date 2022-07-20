function checkAvailable(array: number[], n: number) {
    let flag = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == n) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  
  // viet lai ham indexOf
  
  function bai2(array: number[]) {
    let myArray: number[] = []; // mang chua phan tu lap lai
    let countArray: number[] = []; // mang nay chua so lan xuat hien
    for (let i = 0; i < array.length; i++) {
      let count = 1;
      let flag = false;
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          count++;
          if (checkAvailable(myArray, array[i])) {
            myArray.push(array[i]);
            flag = true;
          }
        }
      }
      if (count != 1 && flag) {
        countArray.push(count);
      }
    }
    console.log(myArray);
    console.log(countArray);
  }
  
  let numbers = [1, 2, 1, 4, 5, 2, 3, 1, 2, 3];
  
  bai2(numbers);