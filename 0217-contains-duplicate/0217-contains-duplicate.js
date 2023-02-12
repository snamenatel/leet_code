/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const r = {};
    
    for(let i = 0; i < nums.length; i++) {
        if (r.hasOwnProperty(nums[i])) {
            return true;
        }
        
        r[nums[i]] = true;
    }
    return false;
};