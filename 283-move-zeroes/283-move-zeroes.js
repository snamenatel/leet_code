/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(array) {
  let diff = 0;
  const temp = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && array[i] !== '0') {
      array[diff] = array[i];
      diff++;
    } else {
      temp[temp.length] = array[i];
    }
  }

  let j = 0;
  for (let i = diff; i < array.length; i++) {
    array[i] = temp[j];
    j++;
  }

  return array;
};

