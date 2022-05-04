/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(let i=0; i < accounts.length; i++) {
        let s = sum(accounts[i])
        if(s > max) max = s;
    }
    return max
};
    
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}