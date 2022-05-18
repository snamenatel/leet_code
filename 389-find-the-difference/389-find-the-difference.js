/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort()
    
    for(let i = 0; i < t.length; i++) {
        if(s.indexOf(t[i]) === -1) {
            return t[i]
        } else {
            s[i] = null;
        }
    }
};