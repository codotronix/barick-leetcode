/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    // go thru the string, and remove all i's
    let r = []
    for(let c of s) {
        if(c !== 'i') r.push(c)
        else r = r.reverse()
    }
    return r.join('')
};