/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for(let i=0; i < accounts.length; i++) {
        if(sum(accounts[i]) > max) max = sum(accounts[i]);
    }
    return max
};
    
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}