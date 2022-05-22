/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => bin(a) - bin(b) || a - b);
};

function bin(n) {
  return (n >>> 0).toString(2).replace(/[^1]/g, '').length;
}