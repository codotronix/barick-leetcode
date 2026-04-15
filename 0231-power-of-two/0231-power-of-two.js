/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let r = 1;
    while(r <= n) {
        if(r == n) return true;
        r *= 2;
    }
    return false;
};