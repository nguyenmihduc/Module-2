let myArray2 = [1, 5, 6, 3, 2, 8, 9, 4, 7]; // mảng gốc

let arrayBeDenLon: number[] = []; // Tạo 1 mảng rỗng để lưu mảng sắp xếp từ bé đến lớn

function sapXepBeDenLon2(array : number[]){
    for (let i = 0; i < array.length + arrayBeDenLon.length ; i++) {
        let min = array[0];
        for (let j = 0; j < array.length; j++) {
            if (min > array[j]) {
                min = array[j];
            }
        }
        array.splice(array.indexOf(min),1);
        arrayBeDenLon.push(min);
    }
    return arrayBeDenLon;
}

console.log(sapXepBeDenLon2(myArray2));
console.log(myArray2);
