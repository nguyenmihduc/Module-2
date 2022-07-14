let arrayA: number[] = [1,3,6,2,7,8,33,66,8,2,121,46,6,8,]
let arrayB: number[] = [1,6,2,76,211,66,3,24,8,]
let newArray: number[] = []

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB.forEach((item,index) => {
//         if (item === arrayA[i]) {
//             newArray.push(item)
//         }
//     })
// }

for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
        if (arrayB[j] === arrayA[i]) {
            newArray.push(arrayB[j])
        }
    }
}

console.log(newArray)