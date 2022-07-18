
// function findFirstOccurrence(array: number[], needle: number, left: number, right: number) {
//
//     if (right < left) {
//         return console.log(`${needle} khong co trong array`);
//     }
//     let mid = Math.floor(left + (right - left)/2)
//     if (needle == array[mid]) {
//         return console.log(`${needle} co trong mang tai vi tri ${mid}`)
//     }
//     if (needle < array[mid]) {
//         right = mid -1
//         return findFirstOccurrence(array,needle,left,right)
//     } else {
//         left = mid +1
//         return findFirstOccurrence(array, needle, left, right)
//     }
// }
// function findFirstOccurrence(array: number[], needle: number) {
//      let left = 0;
//      let right = array.length -1;
//      while (left <= right) {
//          let mid = Math.floor(left + (right - left)/2);
//          if (array[mid] == needle) {
//              return console.log(`${needle} co trong mang tai vi tri ${mid}`)
//          } if (array[mid] > needle) {
//              right = mid -1;
//          } else {
//              left = mid +1;
//          }
//      }
//      return console.log(`${needle} khong co trong mang`)
// }

function findFirstOccurrence(array: number[], needle: number) {
    let left = 0;
    let right = array.length -1;
    let result = -1
    while (left <= right) {
        let mid = Math.floor(left + (right - left)/2);
        if (array[mid] == needle) {
           result = mid;
           right = mid -1;
        } if (array[mid] > needle) {
            right = mid -1;
        } else {
            left = mid +1;
        }
    }
    return result
}

let array = [3,4,4,4,7,7,13,22,24]
console.log(findFirstOccurrence(array,4))
console.log(findFirstOccurrence(array,7))
console.log(findFirstOccurrence(array,30))

