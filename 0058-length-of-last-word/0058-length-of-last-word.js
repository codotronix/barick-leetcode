/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    l = 0
    for(let i=0; i<s.length; ++i) {
        if(s[i] === ' ') l=0
        else ++l
    }
    return l
};