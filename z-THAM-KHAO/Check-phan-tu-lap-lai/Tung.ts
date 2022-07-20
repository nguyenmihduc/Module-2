function find(arr : number [] ){
    let arrNew = [] ;
    let prize = [...arrNew]
    for(let i = 0 ; i < arr.length ; i ++){
        let count = 0 ;
        for(let j = arr.length - 1 ; j >= 0 ; j--){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count >= 2 && arrNew.indexOf(arr[i]) == -1){
            arrNew.push(arr[i])
            console.log(`Phần tử ${arr[i]} xuất hiện : ${count}`)
        }
    }
    console.log(arrNew)
}
let arr = [1,2,3,2,1,2,3,5,6,6,6]
find(arr)
