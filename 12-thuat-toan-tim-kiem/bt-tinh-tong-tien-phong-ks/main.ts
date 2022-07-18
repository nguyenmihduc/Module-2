
function TotalPrice(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == 0) {
                matrix[i+1][j] = 0
            }
            sum += matrix[i][j]
        }
    }
    console.table(matrix)
    console.log(sum)
}

let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
TotalPrice(matrix)


