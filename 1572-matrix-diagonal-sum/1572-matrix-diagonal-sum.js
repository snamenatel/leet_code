/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let length = mat.length;
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            if(i === j) {
                sum += mat[i][j];
                if(!(i === length - i - 1)) {
                    sum += mat[i][length - i - 1]
                }
            }
        }
     
    }
    return sum
};