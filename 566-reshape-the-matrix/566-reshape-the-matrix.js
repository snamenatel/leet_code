/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const flat = mat.flat();
  if(r * c !== flat.length) {
    return mat;
  }
  const res = [];
  let idx = 0;
  for(let i = 0; i < r; i++) {
    res[i] = [];
    for(let j = 0; j < c; j++) {
            res[i][j] = flat[idx];
      idx++
    }
  }
  return res;
};