function bblSort(arr){
   for (let i = 0; i < arr.length; i ++) {
       for (let j = 0; j < (arr.length - i - 1); j++) {
           if (arr[j] > arr[j + 1]) {
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
       }
   }
   return arr
}
let arr = [3,5,2,4,1,8,6];
console.log(bblSort(arr))