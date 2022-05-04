/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(const w of accounts) {
        if(sum(w) > max) max = sum(w);
    }
    return max
};
    
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}