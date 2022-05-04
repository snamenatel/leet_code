/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(const w of accounts) {
        let s = sum(w);
        if(s > max) max = s;
    }
    return max
};
    
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}