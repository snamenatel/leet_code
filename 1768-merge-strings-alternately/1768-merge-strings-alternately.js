/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let list = [];
    
    for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if(word1[i] !== undefined) {
            list.push(word1[i]);
        }
        if(word2[i] !== undefined) {
            list.push(word2[i]);
        }
    }
    
    return list.join('');
};