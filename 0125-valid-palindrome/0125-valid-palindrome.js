/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/\s+/g, '')
    // let's remove all the non alphabets
    let t = ''
    for(let c of s) {
        if(isAlphaNum(c)) t += c
    }

    let i=0, j=t.length-1
    while(i<j) {
        if(t[i] !== t[j]) return false
        ++i;
        --j;
    }

    return true
};

function isAlphaNum (ch) {
    // a= 97, z=122
    if(!isNaN(ch)) return true
    if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) return true
    return false
}