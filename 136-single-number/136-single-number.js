/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const store = new Set();
    for(let k of nums) {
        if(store.has(k)) {
            store.delete(k);
        } else {
            store.add(k);
        }
    }
    return Array.from(store)[0];
};