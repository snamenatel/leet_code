/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return /(\w+)\s*$/.exec(s)[1].length
};