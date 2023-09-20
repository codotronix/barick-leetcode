/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let t=''
    for(let w of words) t += w[0]
    return t===s
};