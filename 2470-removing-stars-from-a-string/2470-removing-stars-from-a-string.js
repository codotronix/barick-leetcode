/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stck = []  // to hold the result
    for(let c of s) {
        // if c is *, move the last character from stck
        if(c === '*') stck.pop()
        else stck.push(c)
    }
    return stck.join('')
};