/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sum = nums.reduce((acc, current) => acc + current, 0);
    const l = nums.length;
    
    return l * (l + 1) / 2 - sum;
};