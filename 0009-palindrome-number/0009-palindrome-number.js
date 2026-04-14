/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // -ve number cannot be a plaindrome
    if(x < 0) return false;

    const s = String(x);
    let i=0;
    let j = s.length - 1;
    while(i < j) {
        if(s[i] !== s[j]) return false;
        i++;
        j--;
    }

    return true;
};