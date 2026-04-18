/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let cs = '';
    for(let c of s.toLowerCase().trim()) {
        if(chars.includes(c)) cs += c;
    }

    // now do actual palidrome check on cs
    let i = 0, j = cs.length-1;
    while(i < j) {
        if(cs[i] !== cs[j]) return false;
        i++;
        j--;
    }

    return true;
};