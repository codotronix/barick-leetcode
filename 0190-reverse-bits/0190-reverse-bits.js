/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
    let b = n.toString(2)
    let l = 32 - b.length
    for(let i=1; i < l; ++i) {
        b = '0' + b;
    }
    b = (n >= 0) ? '0' + b : '1' + b 
    // console.log(b)
    let m = 1   // to hold 2^p
    let r = 0  // to hold the result
    for (let i = 0; i < b.length; ++i) {
        r += b[i] * m
        m *= 2
    }
    return r
};