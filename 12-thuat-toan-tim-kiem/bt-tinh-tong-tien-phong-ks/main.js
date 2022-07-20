"use strict";
function TotalPrice(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0 && i < matrix.length - 1) {
                matrix[i + 1][j] = 0;
            }
            sum += matrix[i][j];
        }
    }
    console.table(matrix);
    console.log(sum);
}
let matrix = [[0, 1, 1, 2], [0, 5, 2, 7], [2, 0, 3, 3]];
TotalPrice(matrix);
