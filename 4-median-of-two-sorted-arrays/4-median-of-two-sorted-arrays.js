/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const s = nums1.length + nums2.length;
  const medianIndex =
    s % 2 ? [Math.floor(s / 2), Math.floor(s / 2)] : [s / 2 - 1, s / 2];
  const findIdx = medianIndex[1];

  let idx = 0;
  let arr = [];
  while (idx <= findIdx) {
    arr.push((nums1[0] < nums2[0] && nums1[0] !== undefined) || nums2[0] === undefined ? nums1.shift() : nums2.shift());
    idx++;
  }
  const sum = arr
    .splice(medianIndex[0], medianIndex[1] === medianIndex[0] ? 1 : 2)
    .reduce((acc, curr) => acc + curr, 0);
  return sum / (s % 2 ? 1 : 2);
};