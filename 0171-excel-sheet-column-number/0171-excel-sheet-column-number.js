/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // like the Decimal system goes 10^n ... 10^3 10^1 10^0
    // the Binary goes 2^n ... 2^3 2^2 2^1 2^0
    // this system wiil go 26^n ... 26^3 26^2 26^1 26^0
    let m = 1                       // the multiplier, 1, 26, 26^2 ...
    // number after which ASCII A startssince we want A to be 1
    const b4A = 'A'.charCodeAt(0) - 1   
    let s = 0;                      // result
    // let's read the letters from right to left
    for(i=columnTitle.length-1; i>=0; i--) {
        let ch = columnTitle[i].charCodeAt(0)   // the ASCII of this Char
        s += (ch - b4A) * m
        m *= 26
    }

    return s
};